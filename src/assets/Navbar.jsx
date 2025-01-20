import './Navbar.css'



const Navbar = ({ logo, links }) => {
    return <div className="Navbar">
        <img className='Navbar-logo' src={logo} alt="" />
        <div className="Navbar-links">
            <a href="{links[0].url}">{links[0].text}</a>
            <a href="{links[1].url}">{links[1].text}</a>
        </div>

    </div>
}

export default Navbar;