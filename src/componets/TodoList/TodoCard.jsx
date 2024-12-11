import './cardstyles.css';
import { useState } from 'react';


function TodoCard({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditTaskId, setCurrentEditTaskId] = useState(null);
    const [newText, setNewText] = useState('');

    const handleEditClick = (taskId) => {
        setIsModalOpen(true);
        setCurrentEditTaskId(taskId);
    }



    const handleSaveEdit = () => {
        if (newText.trim() === '') {
            return;
        }

        onEditTask(currentEditTaskId, newText);
        setIsModalOpen(false);
        setNewText('');
    }

    const cancleEdit = () => {
        setIsModalOpen(false);
        setNewText('');
    }

    return (
        <div className="todo-container">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`task-item ${task.completed ? 'task-item-completed' : ''}`}
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
                            className="edit-btn"
                            onClick={() => handleEditClick(task.id)}
                        >
                            编辑
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
            {
                isModalOpen && (
                    <div className="modal">
                        <h2>编辑任务</h2>
                        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
                        <button onClick={handleSaveEdit}>保存</button>
                        <button id="cancle-btn" onClick={cancleEdit}>取消</button>
                    </div>
                )
            }
        </div>
    )
}

export default TodoCard;