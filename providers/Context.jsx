"use client"
import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    return (
        <Context.Provider value={{ contacts, setContacts, isLoading, setLoading }}>
            {children}
        </Context.Provider>
    );
};

export const useContacts = () => useContext(Context);