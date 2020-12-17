import React from 'react';
import Header from './shared/header';
import 'bootswatch/dist/lux/bootstrap.css'
import logo from './logo.svg';
import './App.css'
const Layout = ({children}) => {
    return ( 
        <>
        <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
       </header>
      </div>
        <main className="container">
            {children}
        </main>
        </>
     );
}
 
export default Layout;