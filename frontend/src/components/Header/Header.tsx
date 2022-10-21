import { HeaderContainer } from './HeaderStyles';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <HeaderContainer>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/createsection">Create Section</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header