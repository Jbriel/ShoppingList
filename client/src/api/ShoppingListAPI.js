
const apiURL = 'http://localhost:3001/api'
const moduleURL = '/shoppingList'

const makeRequest = async (url, method = 'GET', body = {}) => {
    let options =  {
        method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
          },
      }
    if(method != 'GET'){
        options.body = JSON.stringify(body)
    }
    const response = await fetch(`${apiURL}${moduleURL}${url}`, options);
    return await response.json(); // parses JSON response into native JavaScript objects
}


export const getShoppingListItems = async () => {
    return await makeRequest('/')
}

export const deleteShoppingListItem = async (itemID) => {
    return await makeRequest('/', 'DELETE', {itemID})
}