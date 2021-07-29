import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small unique-color-dark pt-4 bg-danger">

                    <div className="container">

                        <ul className="list-unstyled list-inline text-center py-2">
                            <li className="list-inline-item">
                                <h5 className="mb-1">Register for free</h5>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/login" className="btn btn-outline-white btn-rounded">Sign up!</a>
                            </li>
                        </ul>

                    </div>

                    <div className="footer-copyright text-center py-3 ">© 2020 Copyright:&nbsp;&nbsp;
                        <a href="https://frazshabbir.com/" className='text-dark'>FrazShabbir.com</a>
                    </div>


                </footer>

            </div>
        )
    }
}

export default Footer
