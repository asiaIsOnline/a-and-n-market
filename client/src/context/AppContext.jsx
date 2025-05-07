import { createContext, useContext, useState } from "react";

export const AppContext = createContext

export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(null)
    
    const value = {navigate, user, setUser, isSeller, setIsSeller}
    
    return <AppContext.Provder value={value}>
            {children}
        </AppContext.Provder>
}

export const useAppContext = () => {
    return useContext(AppContext)
}