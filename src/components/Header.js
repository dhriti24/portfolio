import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import assets from "../assets";
import Resume from "../assets/files/Dhriti_Kalpesh_Shah_Resume.pdf";

const Header = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Dhriti_Kalpesh_Shah_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <header
            className="bg-primary px-4 flex justify-between md:items-center"
            id="header"
        >
            <div className="flex items-center cursor-pointer">
                <Link to="home" activeClass="active">
                    <Image
                        src={assets.Logo}
                        alt="Logo"
                        className="h-20 w-20 rounded-full object-cover"
                    />
                </Link>
                <span className="text-primary ml-2 text-2xl font-semibold font-primary ">
                    Dhriti Shah
                </span>
            </div>

            <div className="flex items-center justify-end">
                <button
                    className="btn btn-sm md:btn-lg xl:btn-lg"
                    onClick={handleDownload}
                >
                    My Resume
                </button>
            </div>
        </header>
    );
};

export default Header;
