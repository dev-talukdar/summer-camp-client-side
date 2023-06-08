import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import { MdFacebook } from 'react-icons/md';
import { BsInstagram, BsTwitter } from 'react-icons/bs';





const Footer = () => {
    return (


        <footer className="w-full text-gray-700 bg-purple-300 body-font">
            <div
                className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <Link className="flex items-center justify-center font-medium  title-font md:justify-start">

                    </Link>


                    <Link className="flex flex-col justify-center items-center">
                        <img className="w-2/3" src={logo} alt="" />
                    </Link>
                    <p className="mt-2 text-sm text-black text-center">6305 Hauptstraße 17-19</p>
                    <p className="mt-2 text-sm text-black text-center">Hauptstraße 17 - 19/Gebäude 6301</p>
                    <p className="mt-2 text-sm text-black text-center">55120 Mainz, Germany</p>
                    <div className="flex gap-6 justify-center mt-4">
                        <p className="text-2xl hover:text-white"><Link to='https://www.facebook.com/'><MdFacebook></MdFacebook></Link></p>
                        <p className="text-2xl hover:text-white"><Link to='https://www.instagram.com/'><BsInstagram></BsInstagram></Link></p>
                        <p className="text-2xl hover:text-white"><Link to='https://www.twitter.com/'><BsTwitter></BsTwitter></Link></p>

                    </div>




                </div>
                <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Discover</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Student Projects</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Reviews</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Our Vision</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Our Campus</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Partnerships</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Press</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Fashion Camp Blog</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Info</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Refund Policy</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Privacy Policy</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Terms of Service</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact Us</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Careers</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Our Campuses</Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-black cursor-pointer hover:text-white">Release Updates</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-purple-300">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;