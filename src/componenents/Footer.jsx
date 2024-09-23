import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer-content ">
                <div className="footer-logo md:mx-auto ml-40">
                    <div className='w-[200px]'>
                        <img src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-2048x1152.png' className='w-full' alt="Not present" />
                    </div>
                    <div className='mr-32 text-xl mt-2'>
                        <div>
                            © 2024 Bundl
                        </div>
                        <div className='mr-2'>
                            Technologies Pvt. Ltd
                        </div>
                    </div>
                </div>
                <nav className="footer-nav mx-auto">
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div className="social-links">
                    <a href="#">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram" />
                    </a>
                </div>
            </div>
            <div className="copyright mx-auto">
                <p>© 2024 Swiggy. All Rights Reserved.</p>
            </div>
        </footer>

    )
}
