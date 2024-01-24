import React, { useCallback, useEffect, useState } from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ScrollTopButton from './components/ScrollTopButton';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { createContext } from 'react';
import { jwtContext } from './components/Context';

const App: React.FC = () => {
  const [jwtToken, setJwtToken] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertClassName, setAlertClassName] = useState<string>("d-none");

  const [tickInterval, setTickInterval] = useState<NodeJS.Timeout>();

  const navigate = useNavigate();

  const toggleRefresh = useCallback((status : boolean) => {
    console.log("clicked");

    if (status) {
      console.log("turning on ticking");
      let i = setInterval(() => {

        const requestOptions = {
          method: "GET",
          credentials: "include" as RequestCredentials,
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
      console.log("setting tick interval to", i);
    } else {
      console.log("turning off ticking");
      console.log("turning off tickInterval", tickInterval);
      // setTickInterval(null);
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
          console.log("user is not logged in", error);
        })
    }
  }, [jwtToken, toggleRefresh])
  
  return (
    <div>
      <jwtContext.Provider value={{jwtToken, setJwtToken, toggleRefresh}}>
        <PrimarySearchAppBar/>
        <ScrollTopButton></ScrollTopButton>
        <Outlet/>
      </jwtContext.Provider>

    </div>

  );
};

export default App;
