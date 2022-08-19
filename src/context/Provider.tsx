import React, { useState, ReactNode } from 'react';
import PreferencesContext from './Context';
import { Preferences } from '../types/index';

type Props = {
    children: ReactNode;
}

const initialState = {  
    showBaseUrl: false,
    showResource: false,
    showScheme: false,
    showHostname: true,
    showSubdomain: false,
    showDomain: false,
    showTld: false,
    showPath: true,
    showQuery: true,
    showArgs: true,
    hideKeys: false,
    plainText: false,
  }


export const PreferencesProvider = ({ children }: Props) => {

    const [preferences, setPreferences] = useState<Preferences>(initialState);

    return(
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {children}
        </PreferencesContext.Provider>
    )
}