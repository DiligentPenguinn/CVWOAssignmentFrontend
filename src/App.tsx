import React, { useCallback, useEffect, useState } from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ScrollTopButton from './components/ScrollTopButton';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { createContext } from 'react';
import { jwtContext } from './components/Context';


type ContextType = { 
  jwtToken : String,
  setJwtToken : React.Dispatch<React.SetStateAction<String>>,
  toggleRefresh : (status: boolean) => void
};

const App: React.FC = () => {
  const [jwtToken, setJwtToken] = useState<String>("");
  const [alertMessage, setAlertMessage] = useState<String>("");
  const [alertClassName, setAlertClassName] = useState<String>("d-none");

  const [tickInterval, setTickInterval] = useState<NodeJS.Timeout>();

  const navigate = useNavigate();
  const logOut = () => {
    const requestOptions = {
      method: "GET",
      credentials: "include" as RequestCredentials,
    }

    fetch(`http://localhost:8080/logout`, requestOptions)
    .catch(error => {
      console.log("error logging out", error);
    })
    .finally(() => {
      setJwtToken("");
      toggleRefresh(false);
    })

    navigate("/login");
  }

  const toggleRefresh = useCallback((status : Boolean) => {
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
      const requestOptions = {
        method: "GET",
        credentials: "include" as RequestCredentials,
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
      <jwtContext.Provider value={jwtToken}>
        <PrimarySearchAppBar/>
      </jwtContext.Provider>
      <ScrollTopButton></ScrollTopButton>
      <Outlet             
        context={{
          jwtToken,
          setJwtToken,
          toggleRefresh
            } satisfies ContextType}/>

    </div>

  );
};

export default App;

export function useCustomContext() {
  return useOutletContext<ContextType>();
}
