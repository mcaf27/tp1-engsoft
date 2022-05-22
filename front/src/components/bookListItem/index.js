import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

const BookListItem = ({ cover, author, title, genre }) => {
  return (
    <ListItem>
      <ListItemAvatar sx={{ mr: 2 }}>
        <Avatar src={cover} alt={title} variant="rounded" sx={{ width: '60px', height: '94px' }} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={author} />
    </ListItem>
  );
};

export default BookListItem;
