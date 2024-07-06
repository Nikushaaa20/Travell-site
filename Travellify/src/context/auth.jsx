import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [globalEmail, setGlobalEmail] = useState('')
    const [check, setCheck] = useState(false)
   

    useEffect(() => {
        const checkUser = localStorage.getItem("useremail");
        const check = localStorage.getItem("check")
        if (checkUser && check) {
            setGlobalEmail(JSON.parse(checkUser))
            setCheck(JSON.parse(check))
        } 
    }, [])

    

    useEffect(() => {
        localStorage.setItem("useremail", JSON.stringify(globalEmail))
        localStorage.setItem("check", JSON.stringify(check))
    }, [globalEmail, check])


    console.log(globalEmail);

    const Login = (para) => {
        setGlobalEmail(para)
        setCheck(true)
    }

    const LogOut = () => {
        
    }

    return (
        <AuthContext.Provider value={{globalEmail, check, setCheck, Login, LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}