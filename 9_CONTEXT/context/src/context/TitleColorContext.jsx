import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export const titleColorRecucer = (state, action) => {

}

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorRecucer, {color: "purple"});

  console.log(state);

  return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>;
};
