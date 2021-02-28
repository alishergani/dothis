const defaultState = {
    todoList: []
}


const reducer = (state = defaultState, action) => {
    switch(action.type) {
      case "": {
        return { 
          ...state, 
          todoList: state.count + action.payload
        }
      }
      default: {
        return state
      }
    }
}


export default reducer