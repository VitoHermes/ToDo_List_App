import TodoCard from './TodoCard';
import NoRecords from './NoRecords';



function TodoList({ tasks, onToggleComplete, onDeleteTask, onEditTask, onReorderTasks, onFilterTasks }) {
    console.log(tasks.length);

    return (
        <div className='h-[calc(100vh-200px)] -mt-[27px] flex justify-center bg-[#1A1A1A]'>
            {tasks.length > 0 ?
                <TodoCard
                    tasks={tasks}
                    onToggleComplete={onToggleComplete}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    onReorderTasks={onReorderTasks}
                    onFilterTasks={onFilterTasks}
                />
                : <NoRecords />}
        </div>
    )
}

export default TodoList;