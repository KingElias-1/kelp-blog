const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>
                <a href="/notifications">🔔</a>
                <a href="/account">👤</a>
            </div>
        </nav>
     );
}
 
export default Navbar ;