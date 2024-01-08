import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ThreadProps } from '../models/ThreadProps';
import { Container } from '@mui/material';
import Thread from './Thread';
import { Link } from 'react-router-dom';
import CreateThread from './CreateThread';
import { ThemeProvider } from '@emotion/react';
import theme from '../models/Utils';
import './Home.css';

const Home: React.FC = () => {
  const [threads, SetThreads] = useState<ThreadProps[]>([]);

  useEffect(() => {
    let threadData: ThreadProps[] = [
      {
        id: 1,
        title: 'React Thread 1',
        author: 'John Doe',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim aspernatur at sunt eos iure et dolorem, numquam ducimus soluta veniam rerum possimus aliquam recusandae vel. Iusto accusantium laboriosam odit officiis rerum? Eaque, autem! Iusto quis debitis quos eos voluptatem iure aspernatur pariatur. Porro, quae numquam laboriosam quidem autem harum at libero nam dolorum distinctio laudantium quasi dolor incidunt similique maiores eveniet labore veritatis! Rem ullam tempore tempora! Vel doloribus alias nihil tempore quisquam? Quam fugit fuga amet suscipit sint, dolorum maiores, corrupti omnis a illum eveniet molestiae magnam ullam error nisi temporibus possimus laudantium. Reiciendis qui consequatur officia eius.',
        updatedAt: '2023-01-01 12:00 PM',
      },
      {
        id: 2,
        title: 'React Thread 2',
        author: 'Jane Smith',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, labore, iure earum, ipsa veniam maiores dolore et quibusdam fuga quo tempora est aliquid nesciunt recusandae repudiandae quod culpa. Saepe nulla sapiente, voluptatem iusto ducimus ea fuga autem aut ab neque atque explicabo nam blanditiis alias nisi consequuntur optio maxime? Iure nam excepturi odio quidem nulla alias odit nihil repellat temporibus, aperiam voluptates iusto non incidunt aut velit? Minima suscipit molestiae non eius quo explicabo veritatis sit dicta! Error voluptate, amet accusamus esse debitis non laboriosam numquam commodi corporis suscipit vitae reiciendis corrupti omnis molestias libero? Ipsum, quos ullam asperiores magni illo amet deleniti, explicabo nemo similique harum, ut molestias repellendus doloremque repellat iusto tempore quae in accusamus soluta? Deleniti, dolor quia? Possimus eaque deserunt quaerat doloribus temporibus itaque beatae veniam, ullam magnam, laudantium ipsam officia praesentium necessitatibus nemo quos, autem nobis fugit adipisci reprehenderit minus! Repellendus necessitatibus sapiente, odio incidunt doloribus tempore pariatur esse minus voluptatibus eos accusantium, nobis explicabo cum illo quasi, voluptate omnis. Voluptatibus temporibus, esse repellat dicta alias error consectetur hic ullam officia quisquam neque. Numquam labore omnis, consequuntur architecto excepturi doloremque reiciendis animi rem autem harum minima nostrum, natus, dolorem suscipit modi placeat qui exercitationem tempora.',
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
    ];
    SetThreads(threadData);
  }, [])


  return (
    <>
        <Container component="main" maxWidth="md">
            <CreateThread/>
            <div>
              {threads.map((thread) => (
                <Link to={`/thread/${thread.id}`} style={{ textDecoration: 'none' }}>
                    <Thread key={thread.id} {...thread}/>
                </Link>
              ))}
          </div>
        </Container>
    </>
  );
};

export default Home;


