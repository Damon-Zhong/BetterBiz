import React, { useContext, useReducer } from "react";

// default global store
const defaultGlobalStore = { email: '', isLogin:false } //, message: '', serverStatus: '', loggedIn: false, cart: []

const GlobalData = React.createContext();

const dispatcher = ( state, action ) => {

}

const GlobalStore = ( props ) => {
    const [ globalData, dispatch ]= useReducer( dispatcher, defaultGlobalStore );
    
    return (
        <GlobalData.Provider value={[ globalData, dispatch ]} {...props} />
    )
}

const useGlobalStore = () => {
    return useContext(GlobalData)
}

export { GlobalStore, useGlobalStore }