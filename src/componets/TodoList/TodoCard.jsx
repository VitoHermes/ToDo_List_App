import './cardstyles.css';

function TodoCard({ tasks, onToggleComplete, onDeleteTask }) {
    return (
        <div className="todo-container">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="task-item"
                >
                    <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                        {task.text}
                    </span>
                    <div className="button-group">
                        <button
                            className="toggle-btn"
                            onClick={() => onToggleComplete(task.id)}
                        >
                            {task.completed ? '标记为未完成' : '完成任务'}
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => onDeleteTask(task.id)}
                        >
                            删除
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoCard;