import React from 'react';
import Typical from 'react-typical';
import '../Pages/Css/Home.css';

const Home = () => {
    return (
        <div className='profile-container bg-third'>
            <div className='profile-parent'>
                <div className="profile-details">
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