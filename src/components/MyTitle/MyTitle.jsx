/* eslint-disable react/prop-types */
import './MyTitle.css';
import { SiPokemon } from 'react-icons/si';

const MyTitle = ({ titre }) => {
  return (
    <div className="header">
      <SiPokemon size={150} color="white" />
    </div>
  );
};

export default MyTitle;
