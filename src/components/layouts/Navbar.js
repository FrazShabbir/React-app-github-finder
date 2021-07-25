import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({icon,title}) => {


    return (

        <nav className='navbar navbar-dark bg-danger'>
            <a class="navbar-brand" href="/">
                <i className={icon} ></i>&nbsp;&nbsp;{title}
            </a>
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
