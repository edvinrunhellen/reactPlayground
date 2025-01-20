import './Navbar.css'

const Navbar = (props) => {
    console.log(props)
    return <div className="Navbar">
        <img className='Navbar-logo' src={props.logo} alt="" />
        <div className="Navbar-links">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">{props.icon}</a>
            <a href="">{props.number}</a>
        </div>

    </div>
}

export default Navbar;