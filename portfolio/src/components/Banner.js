import React from "react";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { HiArrowNarrowDown } from "react-icons/hi";
import { Image } from "react-bootstrap";
import assets from "../assets";

const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = assets.Resume;
        link.download = "Dhriti_Shah_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section
            className="min-h-[80vh] lg:min-h-[85vh] flex sm:justify-center bg-primary"
            id="home"
        >
            <div className="mx-[10vw] md:mx-auto md:mt-[10vh]">
                <div
                    className="flex flex-col sm:pt-20 md:pt-0 gap-y-6 lg:flex-row lg:items-center
        lg:align-middle lg:gap-x-[100px] overflow-hidden "
                >
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1 text-center align-middle font-secondary xl:ml-[5vw] lg:mr-[5vw] lg:text-left sm:w-full text-2xl"
                    >
                        <p className="text-secondary mb-3 lg:mb-8">
                            <span className="text-[2rem]">
                                Hello. Hola. Bonjour.
                            </span>
                            <span
                                className="wave ml-3 text-4xl"
                                role="img"
                                aria-labelledby="wave"
                            >
                                👋🏻
                            </span>
                        </p>

                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[6vh] leading-[0.8] lg:text-[6vh] font-semibold pb-2"
                        >
                            <span className="text-tertiary">I'M</span> DHRITI{" "}
                            <span>SHAH</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-0 text-[3vh] lg:text-[3vh] font-secondary uppercase leading-[1] pt-1
              flex flex-row lg:justify-start justify-center py-6 xl:space-y-11"
                        >
                            <TypeAnimation
                                sequence={[
                                    "Full-Stack Developer",
                                    2000,
                                    "Web Developer",
                                    2000,
                                    "UI/UX Developer",
                                    2000,
                                    "React Developer",
                                    2000,
                                    "PHP Developer",
                                    2000,
                                ]}
                                speed={50}
                                className="text-secondary pt-2 font-extrabold text-2xl"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="xl:mt-0 mb-4 mx-auto text-[4vh] lg:text-[3vh] lg:mx-0 sm:justify-content"
                        >
                            Enchanté! Know more about me & my work.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-5 mx-auto lg:mx-0 text-sm"
                        >
                            <div>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={1000}
                                >
                                    <button className="btn btn-sm md:btn-lg xl:btn-lg hover:btn-hover">
                                        My Projects
                                    </button>
                                </Link>
                            </div>
                            <button onClick={handleDownload}>
                                <div
                                    className="px-4 py-3 border-b-4 border-tertiary text-tertiary hover:text-white hover:bg-primary hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#2ADBCD]
                  transition-all duration-200 w-[150px] xl:w-[200px] flex justify-center flex-row items-center text-base xl:text-xl"
                                >
                                    See my Resume
                                    <HiArrowNarrowDown className="ml-3" />
                                </div>
                            </button>
                        </motion.div>
                        <div className="xl:space-y-5">
                            <a href="/" className="text-gradient btn-link">
                                FIND ME ON
                            </a>
                            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                                <a
                                    href="https://github.com/dhriti24"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dhriti-shah-9ab0a41ab/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex justify-center items-center align-middle mx-auto md:mb-8 lg:mb-0">
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            className="img-holder md:flex flex-1 max-w-[40vw]
          md:mx-auto justify-center brightness-150 md:ml-[10vw] lg:ml-[15vw] xl:ml-[3vw]"
                        >
                            <Image
                                src={assets.Myimage}
                                alt="Dhriti Shah"
                                className="profile-img max-w-[40vw]"
                                fluid
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
