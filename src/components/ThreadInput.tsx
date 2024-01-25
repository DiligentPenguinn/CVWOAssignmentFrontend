import React, { useState, useEffect, MouseEvent } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { useJwtContext } from './Context';

const ThreadInput: React.FC = () => {
  const {jwtToken} = useJwtContext();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [clickedTags, setClickedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    navigate('/');
  };

  const handleChipClick = (tag: string) => {
    if (clickedTags.includes(tag)) {
      setClickedTags(clickedTags.filter(clickedTag => clickedTag !== tag));
    } else {
      setClickedTags([...clickedTags, tag]);
    }
  }

  const isClicked = (tag: string) => {
    return clickedTags.includes(tag);
  }

  

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/");
      return;
    }
  }, [navigate, jwtToken]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs if needed
    // let errors = [];
    // let required = [
    //   { field: thread.title, name: "title" },
    //   { field: thread.body, name: "body" },
    // ];

    // required.forEach(function (obj) {
    //   if (obj.field === "") {
    //     errors.push(obj.name);
    //   }
    // });

    // if (thread.tag === 0) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: "You must choose at least one genre!",
    //     icon: "error",
    //     confirmButtonText: "OK",
    //   });
    //   errors.push("genres");
    // }

    // setErrors(errors);

    // if (errors.length > 0) {
    //   return false;
    // }

    // passed validation, so save changes
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + jwtToken);

    let payload = {
      title: title,
      body: body,
    }

    // requestBody.release_date = new Date(thread.release_date);
    // requestBody.runtime = parseInt(thread.runtime, 10);

    let requestOptions : RequestInit = {
      body: JSON.stringify(payload),
      method: "PUT",
      headers: headers,
      credentials: "include",
    };

    fetch(`http://localhost:8080/create/thread`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.message);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Clear the form after submission
    setTitle('');
    setBody('');
    console.log("submitted succesfully!")
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', margin: 4}}>
    <Card variant='outlined' sx={{width:'80%'}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create a New Thread
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
            <TextField
              fullWidth
              required
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              multiline
              minRows={1}
            />
            <TextField
              fullWidth
              required
              id="body"
              label="Body"
              variant="outlined"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              multiline
              minRows={4}
            />
          </Box>
          <Stack direction="row" spacing={1} sx={{marginBottom : 2}}>
            {tags && tags.map(tag => {
              return <Chip 
                      label={tag} 
                      onClick={() => handleChipClick(tag)} 
                      variant={isClicked(tag) ? 'filled' : 'outlined'}/>
            })}
         </Stack>
          <Box >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="contained" color="secondary" sx={{marginLeft: 2}} onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  </Box>
  );
};

export default ThreadInput;
