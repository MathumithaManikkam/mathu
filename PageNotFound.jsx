
import image from "../assets/error.jpg"
import { Link , useNavigate } from "react-router-dom"
import Login from "./Login"


const PageNotFound = () => {
    const navigate =useNavigate()
    const handileClick = () => {
        console.log("Hnadile click function called")
        navigate("/login")
    }
    return (
        <div>
            {/*<h1>This Page is not found Error 404</h1>*/}

        <img className=" w-100 " src={image} alt="404"/>
        <button onClick={handileClick}>Login</button>

           {/*<Link to="/login">Login</Link>*/}
        </div>
    )
}

export default PageNotFound