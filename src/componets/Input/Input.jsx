import { useState } from 'react';

function Input({ onAddTask, onFilterTasks }) {
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue('');
        }
    };

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
        onFilterTasks(selectedFilter);
    };

    return (
        <form className="flex justify-center items-center gap-4 -mt-[27px]" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Please enter a new task here"
                className='w-[50%] h-[54px] border-1 border-gray-300 rounded-md p-2'
            />
            <button
                type="submit"
                className="h-[54px] w-[90px] px-4 py-2 text-white rounded-md bg-[#1E6F9F] hover:bg-[#1D8FCC] hover:shadow-lg transition-all duration-200"
            >
                Add
            </button>
            <select
                className='w-[100px] h-[54px] border-1 border-gray-300 rounded-md p-2'
                value={filter}
                onChange={(e) => handleFilterChange(e)}
            >
                <option value="all">全部</option>
                <option value="completed">已完成</option>
                <option value="incomplete">未完成</option>
            </select>
        </form>
    );
}

export default Input;