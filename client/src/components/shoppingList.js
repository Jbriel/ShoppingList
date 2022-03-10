import React, { useState, useEffect } from "react";
import { RECEIVE_SHOPPING_LIST_ITEMS } from "../actions/ShoppingListActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ShoppingList = (props) => {
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const [checked, setChecked] = React.useState([0]);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [deleteID, setDeleteID] = React.useState(0)
  const [editAddFormOpen, setEditAddFormOpen] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editItemName, setEditItemName] = React.useState('')
  const [editItemDescription, setEditItemDescription] = React.useState('')
  const [editItemCount, setEditItemCount] = React.useState(1)
  const [editItemID, setEditItemID] = React.useState(0)

  const setEditItem = (item) => {
    setEditAddFormOpen(true)
    setIsEditing(true)
    setEditItemName(item.itemName)
    setEditItemDescription(item.itemDescription)
    setEditItemCount(1)
    setEditItemID(item.itemID)
  }

  const setAddItem = () => {
    setEditAddFormOpen(true)
    setIsEditing(false)
    setEditItemName('')
    setEditItemDescription('')
    setEditItemCount(1)
  }

  const handleDontDelete = () => {
    setDeleteModalOpen(false)
  }

  const handleDelete = () => {
    setDeleteModalOpen(false)
    props.deleteShoppingListItem(deleteID)
  }

  const handleDontEditAdd = () => {
    setEditAddFormOpen(false)
  }

  const handleEditAdd = () => {
    setEditAddFormOpen(false)
    if(isEditing){
      props.updateShoppingListItem({
        itemName: editItemName,
        itemDescription: editItemDescription,
        itemID: editItemID
      })
    }
    else{
      for(let i = 0; i < editItemCount; i++){
        props.createShoppingListItem({
          itemName: editItemName,
          itemDescription: editItemDescription
        })
      }
    }
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    if (shoppingListItems.length == 0) {
      props.getShoppingListItems();
    }
    if (props.type == RECEIVE_SHOPPING_LIST_ITEMS) {
      setShoppingListItems(props.shoppingListItems);
    } else {
      props.getShoppingListItems();
    }
  }, [props.type]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h6" style={{paddingTop: '50px', display:'inline-block'}}>Your Items</Typography>
        <Button variant="contained" sx={{float:'right', marginTop: '50px'}} onClick={() => setAddItem()}>Add Item</Button>
        <List sx={{ width: "100%"}}>
          {shoppingListItems.map((item) => {
            const labelId = `checkbox-list-label-${item.itemID}`;

            return (
              <ListItem
                key={item.itemID}
                secondaryAction={
                  <div>
                    <IconButton aria-label="comments" onClick={() => {setEditItem(item)}}>
                      <CreateIcon />
                    </IconButton>
                    <IconButton onClick={() => {setDeleteModalOpen(true); setDeleteID(item.itemID)}} aria-label="comments">
                      <DeleteOutlineIcon/>
                    </IconButton>
                  </div>
                }
                sx={{boxShadow:1, borderRadius: 2, marginBottom: 2}}
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(item.itemID)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(item.itemID) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    style={{
                      textDecoration:
                        checked.indexOf(item.itemID) !== -1
                          ? "line-through"
                          : "none",
                    }}
                    primary={item.itemName}
                    secondary={item.itemDescription}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={2}></Grid>
      {/* Below is the delete dialog. These should be abstracted to their own component */}
      <Dialog 
        open={deleteModalOpen}
        onClose={handleDontDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">
          {"Delete Item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This can not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDontDelete}>Cancel</Button>
          <Button variant="contained" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* Below is the add item dialog */}
      <Dialog open={editAddFormOpen} onClose={handleDontEditAdd}>
        <DialogTitle>{isEditing?'Edit an Item':'Add an Item'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing?'Edit your item below': 'Add your new item below'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            value={editItemName}
            onChange={(field) => {setEditItemName(field.target.value)}}
          />
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="Description"
            type="textbox"
            fullWidth
            variant="standard"
            value={editItemDescription}
            onChange={(field) => {setEditItemDescription(field.target.value)}}
          />
            {!isEditing && <FormControl  margin="normal" fullWidth>
              <InputLabel id="demo-simple-select-label">How Many?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={editItemCount}
                label="How Many?"
                onChange={(field) => {setEditItemCount(field.target.value)}}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDontEditAdd}>Cancel</Button>
          <Button variant="contained" onClick={handleEditAdd}>{isEditing?'Save Task':'Add Task'}</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ShoppingList;
