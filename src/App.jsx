import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  const [updatedTask, setUpdatedTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const filteredTasks = tasks.filter((task) =>
    task.todo.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // todo from dummy json
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (tasks.length === 0) {
          setTasks(data.todos);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      todo: task,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // edit task
  const updateInputForEdit = (todo) => {
    setUpdatedTask(todo);
  };
  const handleChecked = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };
  const handleEdit = (text) => {
    console.log(text);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? { ...task, todo: text } : task)),
    );
    setIsEditing(false);
  };

  // delete todos
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className="min-h-screen bg-slate-800 relative text-white">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className=" md:p-8 p-4 md:max-w-2xl rounded-md mt-10 md:mt-20 shadow-md xl container mx-auto bg-neutral-600">
        <Form
          onAddTask={handleAddTask}
          onEdit={handleEdit}
          isEditing={isEditing}
          updatedTask={updatedTask}
        />
        <div className="mt-10 overflow-y-auto md:max-h-[400px] h-[40vh]">
          <Tasks
            tasks={filteredTasks}
            onDelete={deleteTask}
            onEditInput={updateInputForEdit}
            setIsEditing={setIsEditing}
            onChecked={handleChecked}
          />
        </div>
      </div>
      <div className=" absolute bottom-0 w-full ">
        <Footer />
      </div>
    </div>
  );
};
export default App;
