
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #A5A5A5;
    color: #ffffff;
    
`;

const Container = styled(Toolbar)`
justify-content: center;
& > a {
    padding: 20px;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s; /* Adding a transition for smooth color change */
}

& > a:hover {
    color: #000000; /* Change the text color on hover */
}
    
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;