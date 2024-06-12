import { FaFacebook, FaRedditAlien } from 'react-icons/fa';
import logo from '../../assets/img/image 43.png'
import { AiFillInstagram } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#0E1E32]  text-white">
                <aside>
                    <img src={logo} alt="" />
                </aside>
                <nav>
                    Privacy Policy <br />
                    Do not sell my personal info <br />
                    Terms of Service <br />
                    nbcnews.com Site Map
                </nav>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <h3 className='text-xl'><FaFacebook /></h3>

                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <h3 className='text-xl'><HiPhone /></h3>

                </nav>
                <nav>
                    <h6 className="footer-title">Careers</h6>
                    <h3 className='text-xl'><AiFillInstagram /></h3>

                </nav>
                <nav>
                    <h6 className="footer-title">Coupons</h6>
                    <h3 className='text-xl'><FaRedditAlien /></h3>
                </nav>
            </footer>
            <footer className="footer footer-center text-white p-4 bg-[#0E1E32]">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;