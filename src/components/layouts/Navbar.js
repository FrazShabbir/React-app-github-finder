import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab -fab-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    render() {
        return (

            <nav className='navbar navbar-dark bg-danger'>
                <a class="navbar-brand" href="/">
                    
                        <i className={this.props.icon} ></i>&nbsp;&nbsp;{this.props.title}
                    
                </a>
            </nav>
        )
    }
}

export default Navbar
