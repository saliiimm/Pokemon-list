/* eslint-disable react/prop-types */
import './Task.css';

const Task = ({ name, photo, type }) => {
  return (
    <li>
      {name} ({type.join(', ')})
      <img src={photo} alt={name} style={{ width: '200px' }} />
    </li>
  );
};

export default Task;
