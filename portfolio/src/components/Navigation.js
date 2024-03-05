import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import "../index.css";
import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div
                    className="sm:space-x-2 w-full bg-black/20 h-[10vh] backdrop-blur-2xl rounded-full max-w-[500px] lg:max-w-[40vw] mx-auto
        px-[3vw] flex justify-between items-center text-2xl text-black/70"
                    id="scrollspy1"
                >
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <BiHomeAlt size={25} />
                    </Link>

                    <Link
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <BiUser size={25} />
                    </Link>

                    <Link
                        to="skills"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <FiSettings size={25} />
                    </Link>

                    <Link
                        to="projects"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <LiaLaptopCodeSolid size={35} />
                    </Link>

                    <Link
                        to="education"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <FaUserGraduate size={25} />
                    </Link>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-secondary hover:scale-150 transition-all duration-300"
                    >
                        <BsChatSquare size={25} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
