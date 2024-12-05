import { useState } from 'react';
// const addTask = (taskText) => {
//     setTasks([...tasks, {
//       id: Date.now(),
//       text: taskText,
//       completed: false
//     }]);
//   };

function Input({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue('');
        }
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
        </form>
    );
}

export default Input;