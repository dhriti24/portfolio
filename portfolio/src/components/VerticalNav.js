import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import "../index.css";
import { Link } from "react-scroll";

const VerticalNav = () => {
    return (
        <nav className="fixed top-[30%] right-0 flex flex-col items-center justify-center p-4 space-y-4 bg-black/20 backdrop-blur-2xl rounded-full z-100 hidden md:flex">
            <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <BiHomeAlt size={25} />
            </Link>

            <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <BiUser size={25} />
            </Link>

            <Link
                to="skills"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <FiSettings size={25} />
            </Link>

            <Link
                to="projects"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <LiaLaptopCodeSolid size={35} />
            </Link>

            <Link
                to="education"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <FaUserGraduate size={25} />
            </Link>

            <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer text-2xl text-black/70 hover:text-secondary hover:scale-150 transition-all duration-300"
            >
                <BsChatSquare size={25} />
            </Link>
        </nav>
    );
};

export default VerticalNav;
