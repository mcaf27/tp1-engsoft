import { useState, useEffect } from 'react';

import { addWishList } from '../../services/bookService';

import { avaliar } from "../../services/bookService";

import { Box, Stack, Typography, Rating, IconButton, styled, alpha, useTheme } from '@mui/material';
import AddOutline from '@mui/icons-material/AddCircleOutlineRounded';
import AddFilled from '@mui/icons-material/AddCircleRounded';

const BookStyles = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    aspectRatio: '1 / 1.4',
  },
  '& div': {
    backgroundColor: alpha(theme.palette.background.paper, 0.7),
    opacity: 0,
    position: 'absolute',
    inset: 0,
    transform: 'translateY(-100%)',
    padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
    textAlign: 'center',
    transition: '0.3s ease-in-out',
  },
  '&:hover div': {
    opacity: 1,
    transform: 'translateY(-3px)',
  },
}));

export default function Book({id, score, cover, title, author, genre }) {
  const [rating, setRating] = useState(score);
  const [addedToList, setAddedToList] = useState(false);

  const theme = useTheme();

  async function addToList(){
    setAddedToList(!addedToList);
    const response = await addWishList(id);
    console.log(response);
  }

  return (
    <BookStyles>
      <img src={cover} alt={title} />
      <Stack component="div" justifyContent="space-around" alignItems="center">
        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={() => addToList()}
        >
          {addedToList ? (
            <AddFilled style={{ color: theme.palette.secondary.main }} />
          ) : (
            <AddOutline />
          )}
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography>{author}</Typography>
        <Typography variant="caption">{score?.toFixed(2)}</Typography>
        <Rating value={rating} onChange={(_, v) => {console.log(id,v);avaliar(id, v);setRating(v);document.location.reload()}}/>
      </Stack>
    </BookStyles>
  );
}
