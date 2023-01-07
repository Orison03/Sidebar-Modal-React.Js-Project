import React, { useState, useContext } from 'react'

// creating the context API
const AppContext = React.createContext()

// creating the appProvider -- the appProvider is used to wrap the entire app 
const AppProvider = ({children}) => {
    // useState hooks
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return <AppContext.Provider value={{openModal,closeModal,openSidebar,closeSidebar,isModalOpen,isSidebarOpen}}>
             {children}
        </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}