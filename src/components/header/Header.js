import Badge from 'react-bootstrap/Badge';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>
             <Badge bg="secondary">Wheather App</Badge>
            </h1>
        </div>
    )

}

export default Header;