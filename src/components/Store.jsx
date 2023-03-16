import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

import { defaultAgent } from "../lib/canisters";
import * as FIDENZA from "../../declarations/fidenza/index";

import React, { createContext, useContext, useReducer } from "react";


const createActors = (agent) => ({
  fidenza: FIDENZA.createActor(agent,{ actorOptions: {} })
});

const initialState = {
  ...createActors(),  
  agent: defaultAgent,
  isAuthed: false,
  principal: null, 
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AGENT":
      const agent = action.agent || defaultAgent;
      return {
        ...state,
        ...createActors(agent),
        agent,
        isAuthed: !!action.isAuthed,
      };
   
    case "SET_PRINCIPAL":
      return {
        ...state,
        principal: action.principal,
      };
   
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading
      };      
    default:
      return { ...state };

  }
};

const Context = createContext({
  state: initialState,
  dispatch: (_) => null,
});

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    console.log("context is undefined")
    throw new Error("useGlobalContext must be used within a CountProvider");
  }
  return context;
};


export const useFidenza = () => {
  const context = useGlobalContext();
  return context.state.fidenza;
}
export const useSetAgent = () => {
  const { dispatch } = useGlobalContext();

  return async ({
    agent,
    isAuthed,
  }) => {
    dispatch({ type: "SET_AGENT", agent, isAuthed });

    if (isAuthed) {
      const principal = await agent.getPrincipal();
      console.log("authed", principal.toText());

      dispatch({
        type: "SET_PRINCIPAL",
        principal,
      });
    } else {
      dispatch({ type: "SET_PRINCIPAL", principal: null });
      console.log("not authed");
    }
  };
};
export const useLoading = () => {
  const { dispatch, state } = useGlobalContext();
  return {
    loading: state.loading,
    setLoading: (loading) => {
      dispatch({
        type: "SET_LOADING",
        loading
      });
    }
  };
};
export default Store;
