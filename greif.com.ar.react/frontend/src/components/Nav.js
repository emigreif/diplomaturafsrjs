import { Link } from "react-router-dom"

const Nav= (props)=>{
    return(
        <nav>
        <div className="holder">

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mision">Misión</Link></li>
                <li><Link to="/servicios">Nuestros servicios</Link></li>
                <li><Link to="/capacitaciones">Capacitaciones Ofrecidas</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;