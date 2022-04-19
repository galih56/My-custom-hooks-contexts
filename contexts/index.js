import React from 'react';
import AuthProvider from './authContext';

const GlobalStateProvider=({children})=>{
    return(   
        <AuthProvider >
            {children}
        </AuthProvider>     
    )
}
export * from './authContext';
export default GlobalStateProvider;