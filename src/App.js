import { useState, useEffect } from 'react';

import './App.css';
import Header from './componets/Header/Header';
import Input from './componets/Input/Input';
import TodoList from './componets/TodoList/TodoList';

function App() {

  // 从localStorage中获取task
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // task发生变化的时候，将task保存到localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // task 的增删改
  const addTask = (taskText) => {
    setTasks([...tasks, {
      id: Date.now(),
      text: taskText,
      completed: false
    }]);
  };

  const onToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const onDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const onEditTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, text: newText }
        : task
    ));
  };

  return (
    <>
      <Header />
      <Input onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </>
  );
}

export default App;
