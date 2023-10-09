import React, { createContext, useState } from 'react'
const MyContext = createContext()

const DataContext = ({ children }) => {
    const [login, setLoginStatus] = useState("hii")
    const updateLoginStatus = (data) => {
        setLoginStatus(data)
    }
    return (
        <>
            <MyContext.Provider value={{ login, updateLoginStatus }}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export { DataContext, MyContext }