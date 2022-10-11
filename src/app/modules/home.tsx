import { Box, Button } from '@mui/material';
import { useUserAuth } from './auth/userAuthContext';

const Home = () => {
    const { logOut } = useUserAuth();

    const handleLogout = async () => {
        await logOut();
    }
    return <Box><Button onClick={() => handleLogout()}>Logout</Button>Home</Box>
}

export default Home