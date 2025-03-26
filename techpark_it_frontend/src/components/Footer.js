import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white text-center py-4 mt-5">
                <div className="container">
                    <p className="mb-1">&copy; {new Date().getFullYear()} Techpark IT. All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#privacy" className="text-white text-decoration-none">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#terms" className="text-white text-decoration-none">Terms of Service</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#contact" className="text-white text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;