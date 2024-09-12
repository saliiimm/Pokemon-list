/* eslint-disable react/prop-types */
import Task from '../Task/Task';
import './TaskList.css';
const TaskList = ({ list }) => {
  return (
    <ul className="myItems">
      {list.map((pokemon, index) => (
        <Task
          key={index}
          name={pokemon.name}
          photo={pokemon.photo}
          type={pokemon.type}
        />
      ))}
    </ul>
  );
};

export default TaskList;
