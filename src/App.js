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
    console.log('all tasks', tasks);
    console.log('completed tasks', tasks.filter(task => task.completed));
    console.log('incomplete tasks', tasks.filter(task => !task.completed));

  }, [tasks]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

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

  // 根据filter过滤task
  // all
  // completed
  // incomplete

  const onFilterTasks = (filter) => {
    if (filter === 'all') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => {
        return filter === 'completed' ? task.completed : !task.completed;
      }));
    }
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <>
      <Header />
      <Input
        onAddTask={addTask}
        onFilterTasks={onFilterTasks}
      />
      <TodoList
        tasks={filteredTasks}
        onToggleComplete={onToggleComplete}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onReorderTasks={setTasks}
      />
    </>
  );
}

export default App;
