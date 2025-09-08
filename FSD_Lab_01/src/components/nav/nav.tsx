import logo from '../../assets/logo.png'

function NavSection() {
    return(
        <nav>
            <img src= {logo} alt="Pixell River Financial" />
            <ul className="page-links">
                <li>
                    <a href="#">Employees</a>
                </li>
                <li>
                    <a href="#">Organization</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavSection;