import React, { createContext, useContext, useState } from 'react'
import Popup from './Popup';

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null);

    const handlePopup = (type, message) => {
        setPopup({ type, message });
    }
    return (
        <PopupContext.Provider value={{ handlePopup }}>
            {children}
            {popup && <Popup type={popup.type} message={popup.message} />}
        </PopupContext.Provider>
    )
}

export default PopupProvider

export const usePopup = () => {
    const context = useContext(PopupContext);

    if (!context) throw new Error("Popup context error");

    return context;
}