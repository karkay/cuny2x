import { ADD, REMOVE, RESET} from "../actions";

// initialize default state
const initialState = {
  bunchOfThings: [{"name": "test"}],
  
};

// create reducer function


export default (state = initialState, action) => {
  // let newState = Object.assign({}, state,{bunchOfThings: [...state.bunchOfThings.action]});
  // console.log('bunchOfThings', state.bunchOfThings.action);
  // console.log('reducer new state', newState);
  // console.log('reducer old state', state);
  switch (action.type) {
    case ADD:
      
      let usrInput = document.getElementById("todo_input").value;
      console.log(usrInput);
      return Object.assign({}, state, {bunchOfThings: [...state.bunchOfThings,usrInput]});
    case REMOVE:
      return Object.assign({}, state, {
        bunchOfThings: [...state.bunchOfThings.slice(0,action.index),...state.bunchOfThings.slice(action.index+1)]
      });
    case RESET:
      return Object.assign({}, state, (state.bunchOfThings = []));
    default:
      return state;
  }
};