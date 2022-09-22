import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/aboutUs/about">About Us</a></li>
                    <li><a href="/contactUs/contact">Contact Us</a></li>
                </ul>
            </div>
            
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Connect</h5>
                <ul className="list-unstyled">
                    <li><a href="/faq">info@farmtogether.com</a></li>
                    <li><a href="/aboutUs/about">Mumbai, Maharashtra</a></li>
                    <li><a href="/contactUs/contact">Here we have to include social icons</a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> SFIT_TEXB</a>
    </div>

</footer>

export default Footer