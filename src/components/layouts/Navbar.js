import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = ({ icon, title }) => {


    return (

        <nav className='navbar navbar-dark bg-danger'>
            <a className="navbar-brand" href="/">
                <i className={icon} ></i>&nbsp;&nbsp;{title}
            </a>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/about'>Contact us</Link>
                </li>
                <li>
                    <Link to='/about'>Users</Link>
                </li>

            </ul>
        </nav>
    )
}


Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab -fab-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
