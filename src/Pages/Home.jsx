import React from 'react';
import Typical from 'react-typical';
import '../Pages/Css/Home.css';

const Home = () => {
    return (
        <div className='profile-container bg-third'>
            <div className='profile-parent'>
                <div className="profile-details">
                    {/* <div className="colz">
                        <div className="colz-icon">

                            <a href="https://www.facebook.com/rashedulhaque.ador">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href="https://www.instagram.com/i_am_rashed/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>

                    </div> */}

                    <div className="profile-details-name">
                        <span className="">
                            {" "}
                            Hello, I'M <span className="">Ador</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="">
                            {" "}
                            <h1 className='text-black'>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Junior Web Developer",
                                        3000,
                                        "Full Stack Developer",
                                        3000,
                                        "MERN Stack Developer",
                                        3000,
                                        "ReactJs Developer",
                                        3000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Hello! I am Junior Web Developer and Wordpress Developer
                            </span>
                        </span>
                    </div>
                    <div className="">
                        <a href="https://www.linkedin.com/in/rashedul-haque-ador/">   <button className='btn btn-info m-2'>
                            {" "}
                            Hire Me{" "}
                        </button></a>
                        <a href="Md. Rashedul Haque Ador Resume.pdf" download='Md. Rashedul Haque Ador Resume.pdf'>
                            <button className='btn btn-active btn-secondary m-2'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;