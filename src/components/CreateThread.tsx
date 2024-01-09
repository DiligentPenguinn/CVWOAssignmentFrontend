import React from 'react';
import UserInput from './input/UserInput';
import { useNavigate } from 'react-router-dom';

const CreateThread: React.FC = () => {
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked!');
    navigate('/create');
  };
  return (
    <>
      <UserInput 
        placeholder='Create a new thread ...'
        onClick={handleClick}
        onChange={handleChange}/>
    </>
  );
};

export default CreateThread;
