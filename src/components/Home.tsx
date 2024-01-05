import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { ThreadProps } from '../models/ThreadProps';
import { Container } from '@mui/material';
import Thread from './Threads';
import { CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateThread from './CreateThread';

const Home: React.FC = () => {
  const [threads, SetThreads] = useState<ThreadProps[]>([]);

  useEffect(() => {
    let threadData: ThreadProps[] = [
      {
        id: 1,
        title: 'React Thread 1',
        author: 'John Doe',
        message: 'This is the first thread.',
        updatedAt: '2023-01-01 12:00 PM',
      },
      {
        id: 2,
        title: 'React Thread 2',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      { 
        id: 3,
        title: 'React Thread 3',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 4,
        title: 'React Thread 4',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 5,
        title: 'React Thread 5',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 6,
        title: 'React Thread 6',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 7,
        title: 'React Thread 7',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 8,
        title: 'React Thread 8',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 9,
        title: 'React Thread 9',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 10,
        title: 'React Thread 10',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      {
        id: 11,
        title: 'React Thread 11',
        author: 'Jane Smith',
        message: 'This is the second thread.',
        updatedAt: '2023-01-02 3:30 PM',
      },
      // Add more threads as needed
    ];
    SetThreads(threadData);
  }, [])


  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <CreateThread></CreateThread>
          <div>
            {threads.map((thread) => (
              <Link to={`/thread/${thread.id}`} style={{ textDecoration: 'none' }}>
                <Thread key={thread.id} {...thread} />
              </Link>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;


