import React from 'react';

const Footer = () => {
    return (
       <div className='container'>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
            </footer>
       </div>
    );
};

export default Footer;