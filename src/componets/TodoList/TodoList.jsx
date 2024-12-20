import TodoCard from './TodoCard';
import NoRecords from './NoRecords';



function TodoList({ tasks, onToggleComplete, onDeleteTask, onEditTask, onReorderTasks }) {
    console.log(tasks.length);

    return (
        <div className='h-[calc(100vh-200px)] -mt-[27px] flex justify-center bg-[#1A1A1A]'>
            {tasks.length > 0 ?
                <TodoCard tasks={tasks} onToggleComplete={onToggleComplete} onDeleteTask={onDeleteTask} onEditTask={onEditTask} onReorderTasks={onReorderTasks} />
                : <NoRecords />}
        </div>
    )
}

export default TodoList;