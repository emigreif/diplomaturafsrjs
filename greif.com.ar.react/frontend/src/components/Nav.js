const Nav= (props)=>{
    return(
        <nav>
        <div className="holder">

            <ul>
                <li><a class="activo" href="/index.html">Home</a></li>
                <li><a href="/mision.html">Misión</a></li>
                <li><a href="/servicios.html">Nuestros servicios</a></li>
                <li><a href="/capacitaciones.html">Capacitaciones Ofrecidas</a></li>
                <li><a href="/contacto.html">Contacto</a></li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;