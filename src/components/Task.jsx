import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Task = ({ completed, id, todo, onDelete, setIsEditing, onEditInput, onChecked }) => {
  const handleEdit = () => {
    setIsEditing(true);
    onEditInput({
      id,
      todo,
      completed,
    });
  };
  return (
    <div className="  rounded-md md:p-3">
      <ul className="shadow-xl ">
        <li className="list  w-full hover:bg-slate-700 hover:shadow-md hover:rounded-md hover:transition-all hover:ease-in-out hover:duration-300">
          <div className=" list-row flex items-center justify-between  w-full ">
            <div
              className={`sm:text-xl text-sm ${completed ? 'line-through decoration-red-600 text-neutral-400' : ''} `}
            >
              {todo}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-warning mr-2"
                checked={completed}
                onChange={() => onChecked(id)}
              />

              <button
                className="btn btn-square btn-ghost hover:text-green-500-100 text-green-300"
                onClick={handleEdit}
              >
                <FaEdit size={'1.6em'} />
              </button>
              <button
                className="btn btn-square btn-ghost hover:text-red-500 text-red-300"
                onClick={() => onDelete(id)}
              >
                <MdDeleteForever size={'1.6em'} />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Task;
