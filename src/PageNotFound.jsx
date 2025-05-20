
import image from "../assets/error.jpg"
import { Link } from "react-router-dom"
import Login from "./Login"

const PageNotFound = () => {
    return (
        <div>
            <h1>This Page is not found Error 404</h1>

        <img className=" w-100 " src={image} alt="404"/>

            <Link to="/login">Login</Link>
        </div>
    )
}

export default PageNotFound