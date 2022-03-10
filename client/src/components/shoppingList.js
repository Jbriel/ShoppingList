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

const ShoppingList = (props) => {
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const [checked, setChecked] = React.useState([0]);

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
    console.log("use effect");
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
        <Button variant="contained" sx={{float:'right', marginTop: '50px'}}>Add Item</Button>
        <List sx={{ width: "100%"}}>
          {shoppingListItems.map((item) => {
            const labelId = `checkbox-list-label-${item.itemID}`;

            return (
              <ListItem
                key={item.itemID}
                secondaryAction={
                  <div>
                    <IconButton aria-label="comments">
                      <CreateIcon />
                    </IconButton>
                    <IconButton aria-label="comments">
                      <DeleteOutlineIcon />
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
      {/* <h1>{shoppingListItems.length?JSON.stringify(shoppingListItems[0]):'empty'}</h1>

      <button onClick={() => props.getShoppingListItems()}>
        UPDATE LIST
      </button>
      <button onClick={() => props.deleteShoppingListItem(1)}>
        FAKE DELETE
      </button> */}
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default ShoppingList;
