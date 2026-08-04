import React from 'react';
import PropTypes from 'prop-types';
import styles from './judge-panel.css';

/**
 * MVP-33後續（方案C）：課程/題目瀏覽清單，取代BlocklyYdws的courseCode輸入代碼方式。
 * 對這個年齡層的學生（M0~M2難度標籤是基礎程度）用點選清單比打代碼直覺，
 * 且完全活在現有React SPA架構裡，不用另外維護靜態頁面。
 */
const TaskList = ({courses, onSelectTask}) => (
    <div className={styles.taskList}>
        <h3 className={styles.sectionHeading}>選擇題目</h3>
        {courses.map(course => (
            <div className={styles.courseGroup} key={course.code}>
                <div className={styles.courseTitle}>{course.code}｜{course.title}</div>
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
            </div>
        ))}
    </div>
);

TaskList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired
    })).isRequired,
    onSelectTask: PropTypes.func.isRequired
};

export default TaskList;
