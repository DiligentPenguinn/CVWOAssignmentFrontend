import React, { useEffect, useState } from 'react';

import { ThreadProps } from '../models/ThreadProps';
import { Container } from '@mui/material';
import Thread from './Thread';
import { Link } from 'react-router-dom';
import CreateThread from './CreateThread';
const Home: React.FC = () => {
  const [threads, setThreads] = useState<ThreadProps[]>([]);

  useEffect(() => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
        method: "GET",
        headers: headers,
    }

    fetch(`http://localhost:8080/threads`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            setThreads(data);
        })
        .catch(err => {
            console.log(err);
        })
  }, [])


  return (
    <>
        <Container component="main" maxWidth="md">
            <div style={{margin: 16}}>
              <CreateThread/>
            </div>
              {threads.map((thread) => (
                <Link to={`/thread/${thread.id}`} style={{ textDecoration: 'none' }}>
                    <Thread {...thread}/>
                </Link>
              ))}
        </Container>
    </>
  );
};

export default Home;


