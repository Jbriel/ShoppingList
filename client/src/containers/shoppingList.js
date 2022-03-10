import { connect } from 'react-redux';
import ShoppingList from '../components/shoppingList';
import * as ShoppingListActions from '../actions/ShoppingListActions';
// import {submit} from 'redux-form'

export function mapStateToProps(state) {
  const { shoppingListReducer } = state;
  return {
    shoppingListItems: shoppingListReducer.shoppingListItems,
    type: shoppingListReducer.type
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getShoppingListItems: () => dispatch(ShoppingListActions.getShoppingListItems()),
    deleteShoppingListItem: itemID => dispatch(ShoppingListActions.deleteShoppingListItem(itemID)),
    createShoppingListItem: item => dispatch(ShoppingListActions.createShoppingListItem(item)),
    updateShoppingListItem: item => dispatch(ShoppingListActions.updateShoppingListItem(item)),
  };
}

export function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ShoppingList);
