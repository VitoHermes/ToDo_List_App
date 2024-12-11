import './cardstyles.css';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TodoCard({ tasks, onToggleComplete, onDeleteTask, onEditTask, onReorderTasks }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditTaskId, setCurrentEditTaskId] = useState(null);
    const [newText, setNewText] = useState('');

    const handleEditClick = (taskId, currentText) => {
        setIsModalOpen(true);
        setCurrentEditTaskId(taskId);
        setNewText(currentText);
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

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, movedTask);
        onReorderTasks(reorderedTasks);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable-tasks">
                {(provided) => (
                    <div
                        className="todo-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
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
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            {isModalOpen && (
                <div className="modal">
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="编辑任务"
                    />
                    <button onClick={handleSaveEdit}>保存</button>
                    <button id="cancle-btn" onClick={cancleEdit}>取消</button>
                </div>
            )}
        </DragDropContext>
    )
}

export default TodoCard;