import { useEffect, useState } from 'react';
import Input from './Input';

const Form = ({ onAddTask, updatedTask, onEdit, isEditing }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (isEditing) {
      setValue(updatedTask.todo);
    }
  }, [isEditing, updatedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onEdit(value);
    } else {
      onAddTask(value);
    }
    setValue('');
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex gap-10 items-center ">
        <div className="flex-1">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <button
          type="submit"
          className={`btn  py-6 outline-0 border-0 ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
    </div>
  );
};
export default Form;
