import { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = null

function reducer(state, action) {
  const { type, payload } = action;
 
  switch (type) {
    case "LOGIN":
    return  state,  payload ;
     case "LOGOUT":
      return state=null;
    default:
    throw new Error("no Data")
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
