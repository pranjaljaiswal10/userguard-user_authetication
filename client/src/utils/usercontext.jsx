import { createContext, useReducer } from "react";

const UserContext = createContext();

const intialState = null

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
return {...state,userData:payload};
  case "REMOVE_USER":
    return state.userData=null
    default:
      return state;
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext }
