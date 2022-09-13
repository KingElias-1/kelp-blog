import { Link } from "react-router-dom";
import err from "./err.png";//importing resource

const NotFound = () => {
    return ( 
        <div className="not-found">
            <img src={err} alt="error"/>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Go Home?</Link>
        </div>
     );
}
 
export default NotFound;