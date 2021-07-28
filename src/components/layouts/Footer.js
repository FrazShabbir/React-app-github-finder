import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <footer className="page-footer font-small blue pt-4 bg-danger">

                    <div className="container text-center text-md-left">

                        <div className="row">

                            <div className="col-md-6 mt-md-0 mt-3">

                                <h5 className="text-uppercase">Footer Content</h5>
                                <p>Here you can use rows and columns to organize your footer content.</p>

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3" />

                            <div className="col-md-3 mb-md-0 mb-3">

                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled text-dark">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">


                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                        </div>


                    </div>

                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>

                </footer> */}
<footer className="page-footer font-small unique-color-dark pt-4 bg-danger">

  <div className="container">

    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="btn btn-outline-white btn-rounded">Sign up!</a>
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
