import React from 'react';
import {Sidebar} from './components/Sidebar'; 
import styles from "./style.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  );
};
