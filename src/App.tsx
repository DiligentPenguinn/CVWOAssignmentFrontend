import React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ScrollTopButton from './components/ScrollTopButton';
import { Outlet } from 'react-router-dom';
import CreateThread from './components/CreateThread';

const App: React.FC = () => {

  return (
    <div>
      <PrimarySearchAppBar/>
      <ScrollTopButton></ScrollTopButton>
      <Outlet />

    </div>

  );
};

export default App;
