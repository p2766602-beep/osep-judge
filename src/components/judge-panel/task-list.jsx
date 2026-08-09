import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './judge-panel.css';

/**
 * MVP-33後續（方案C）：課程/題目瀏覽清單，取代BlocklyYdws的courseCode輸入代碼方式。
 * 對這個年齡層的學生（M0~M2難度標籤是基礎程度）用點選清單比打代碼直覺，
 * 且完全活在現有React SPA架構裡，不用另外維護靜態頁面。
 *
 * 2026-08-04：課程組標題可點選折疊/展開（題目多了以後清單會越來越長）。
 * 預設全部展開，折疊狀態只存在這個元件的state，不記憶跨session。
 *
 * 2026-08-04（版權保護）：每個課程組改回需要輸入代碼才能解鎖（course.unlockCode，
 * 見scripts/judge-dev-tools/course-unlock-codes.js），解鎖狀態存在localStorage，
 * 同一台電腦同一個瀏覽器下次開不用重打。**這只是降低隨手瀏覽到的機率，不是真正的
 * 存取控制**——純靜態網站，代碼本身還是打包在公開JS檔案裡，用開發者工具找得到，
 * 詳見course-unlock-codes.js的說明。
 */

const UNLOCK_STORAGE_KEY = 'osepJudgeUnlockedCourses';

const loadUnlockedCodes = () => {
    try {
        const raw = window.localStorage.getItem(UNLOCK_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
};

const saveUnlockedCodes = codes => {
    try {
        window.localStorage.setItem(UNLOCK_STORAGE_KEY, JSON.stringify(codes));
    } catch (e) {
        // localStorage不可用，忽略——這次session還是解鎖著，只是下次要重打代碼
    }
};

const LockedCourseGroup = ({course, onUnlock}) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (input.trim().toLowerCase() === course.unlockCode.toLowerCase()) {
            setError(false);
            onUnlock(course.code);
        } else {
            setError(true);
        }
    };

    return (
        <div className={styles.courseGroup}>
            <div className={styles.courseTitleLocked}>
                🔒 {course.code}｜{course.title}
            </div>
            <div className={styles.unlockRow}>
                <input
                    className={styles.unlockInput}
                    placeholder="輸入課程代碼"
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                        setError(false);
                    }}
                    onKeyPress={e => {
                        if (e.key === 'Enter') handleSubmit();
                    }}
                />
                <button
                    className={styles.unlockButton}
                    onClick={handleSubmit}
                >
                    解鎖
                </button>
            </div>
            {error ? <div className={styles.unlockError}>代碼不正確，請跟老師確認。</div> : null}
        </div>
    );
};
LockedCourseGroup.propTypes = {
    course: PropTypes.shape({
        code: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        unlockCode: PropTypes.string.isRequired
    }).isRequired,
    onUnlock: PropTypes.func.isRequired
};

const TaskList = ({courses, onSelectTask}) => {
    const [collapsed, setCollapsed] = useState({});
    const [unlockedCodes, setUnlockedCodes] = useState(() => loadUnlockedCodes());

    useEffect(() => {
        saveUnlockedCodes(unlockedCodes);
    }, [unlockedCodes]);

    const toggleCourse = code => setCollapsed(prev => ({...prev, [code]: !prev[code]}));
    const handleUnlock = code => setUnlockedCodes(prev => (prev.includes(code) ? prev : [...prev, code]));

    return (
        <div className={styles.taskList}>
            <h3 className={styles.sectionHeading}>選擇題目</h3>
            {courses.map(course => {
                const isUnlocked = unlockedCodes.includes(course.code);
                if (!isUnlocked) {
                    return (
                        <LockedCourseGroup
                            course={course}
                            key={course.code}
                            onUnlock={handleUnlock}
                        />
                    );
                }

                const isCollapsed = !!collapsed[course.code];
                return (
                    <div className={styles.courseGroup} key={course.code}>
                        <button
                            className={styles.courseTitleButton}
                            onClick={() => toggleCourse(course.code)}
                        >
                            <span className={isCollapsed ? styles.courseCollapseIconCollapsed : styles.courseCollapseIcon}>▶</span>
                            <span>{course.code}｜{course.title}</span>
                        </button>
                        {!isCollapsed && (
                            <ul className={styles.taskItems}>
                                {course.tasks.map(task => (
                                    <li key={task.code}>
                                        <button
                                            className={styles.taskItemButton}
                                            onClick={() => onSelectTask(task.code)}
                                        >
                                            <span>{task.title}</span>
                                            <span className={styles.taskDifficulty}>{task.difficultyLabel}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

TaskList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        unlockCode: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired
    })).isRequired,
    onSelectTask: PropTypes.func.isRequired
};

export default TaskList;
