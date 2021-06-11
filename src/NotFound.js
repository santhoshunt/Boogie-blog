import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="error">
        <h1 >Error 404!</h1>
        <p>The page you requested is not found!</p>
        <Link to="/">Click here to go back to homepage</Link>
    </div> );
}
 
export default NotFound;