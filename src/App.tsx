import React, { useCallback, useEffect, useState } from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ScrollTopButton from './components/ScrollTopButton';
import { Outlet } from 'react-router-dom';
import { LoginFormContext, jwtContext } from './components/Context';

const App: React.FC = () => {
  const [jwtToken, setJwtToken] = useState<string>("");
  const [tickInterval, setTickInterval] = useState<NodeJS.Timeout>();
  const [status, setStatus] = useState<string>("");
  const handleClose = () => {
    setStatus("");
  }

  const toggleRefresh = useCallback((status : boolean) => {

    if (status) {
      let i = setInterval(() => {

        const requestOptions : RequestInit = {
          method: "GET",
          credentials: "include",
        }

        fetch(`http://localhost:8080/refresh`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setJwtToken(data.access_token);
          }
        })
        .catch(error => {
          console.log("user is not logged in");
        })
      }, 600000);
      setTickInterval(i);
    } else {
      clearInterval(tickInterval);
    }
  }, [tickInterval])

  useEffect(() => {
    if (jwtToken === "") {
      const requestOptions : RequestInit= {
        method: "GET",
        credentials: "include",
      }

      fetch(`http://localhost:8080/refresh`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setJwtToken(data.access_token);
            toggleRefresh(true);
          }
        })
        .catch(error => {
          console.log("user is not logged in");
        })
    }
  }, [jwtToken, toggleRefresh])
  
  return (
    <div>
      <LoginFormContext.Provider value={{status, setStatus, handleClose}}>
        <jwtContext.Provider value={{jwtToken, setJwtToken, toggleRefresh}}>
          <PrimarySearchAppBar/>
          <ScrollTopButton></ScrollTopButton>
          <Outlet/>
        </jwtContext.Provider>
      </LoginFormContext.Provider>

    </div>

  );
};

export default App;
