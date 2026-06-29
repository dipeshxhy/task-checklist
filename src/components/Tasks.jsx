import Task from './Task';

const Tasks = ({ tasks, onDelete, onEditInput, setIsEditing, onChecked }) => {
  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onDelete={onDelete}
            onEditInput={onEditInput}
            setIsEditing={setIsEditing}
            onChecked={onChecked}
          />
        ))}
      {tasks.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl text-neutral-400">No tasks found, start adding some!</h1>
        </div>
      )}
    </div>
  );
};

export default Tasks;
