import { useUserAuth } from 'app/modules/auth/userAuthContext'
import { Navigate } from 'react-router-dom'



export const RequireAuth = ({ children } : any) => {
    const auth = useUserAuth()

    if(!auth.user) {
        return <Navigate to='/'/>
    }

    return children 
}