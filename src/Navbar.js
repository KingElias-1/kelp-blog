import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Kelp Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
                <Link to="/notifications">🔔</Link>
                <Link to="/account">👤</Link>
            </div>
        </nav>
     );
}
 
export default Navbar ;