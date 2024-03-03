import React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BiSolidCalendar } from "react-icons/bi";

const Education = () => {
    return (
        <section id="education" className="education bg-primary">
            <div className="container mx-auto">
                <div className="gap-x-40 gap-y-40 lg:p-5">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="education-row flex flex-wrap gap-[5rem] m-10">
                            {/* Education */}
                            <div className="column-row flex-1 lg:mr-10">
                                <h2 className="h2 text-secondary font-primary text-5xl title-[2.5rem] m-[1rem] mb-[2vh]">
                                    Education
                                </h2>
                                <div className="education-box border-l-2 border-opacity-40 border-l-[#ff6766]">
                                    {/* Education 1 */}
                                    <motion.div
                                        variants={fadeIn("left", 0.2)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        className="education-content relative pl-[2rem] my-[1vh]"
                                    >
                                        <div className="content relative p-[1rem] bg-white shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-md text-secondary font-tertiary">
                                                <BiSolidCalendar
                                                    size={50}
                                                    color="#2ADBCD"
                                                    className="pr-[1rem]"
                                                />
                                                2022 - 2023
                                            </div>
                                            <h4 className="h3 mb-0 text-xl font-semibold">
                                                MS in Computer Science
                                            </h4>
                                            <p>
                                                Stevens Institute of Technology
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Education 2 */}
                                    <motion.div
                                        variants={fadeIn("left", 0.4)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        className="education-content relative pl-[2rem] my-[1vh]"
                                    >
                                        <div className="content relative p-[1rem] bg-white shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-md text-secondary font-tertiary">
                                                <BiSolidCalendar
                                                    size={50}
                                                    color="#2ADBCD"
                                                    className="pr-[1rem]"
                                                />
                                                2019 - 2022
                                            </div>
                                            <h4 className="h3 mb-0 text-xl font-semibold">
                                                BE in Computer Engineering
                                            </h4>
                                            <p>
                                                Thakur College of Engineering
                                                and Technology
                                            </p>
                                        </div>
                                    </motion.div>
                                    {/* Education 3 */}
                                    <motion.div
                                        variants={fadeIn("left", 0.6)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        className="education-content relative pl-[2rem] my-[1vh]"
                                    >
                                        <div className="content relative p-[1rem] bg-white shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-md text-secondary font-tertiary">
                                                <BiSolidCalendar
                                                    size={50}
                                                    color="#2ADBCD"
                                                    className="pr-[1rem]"
                                                />
                                                2016 - 2019
                                            </div>
                                            <h4 className="h3 mb-0 text-xl font-semibold">
                                                Diploma in Computer Engineering
                                            </h4>
                                            <p>
                                                SVKM's Shri Bhagubhai Mafatlal
                                                Polytechnic
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Exprience */}
                            <div className="column-row flex-1 lg:ml-10">
                                <h2 className="h2 text-secondary font-primary text-5xl title-[2.5rem] m-[1rem] mb-[2vh]">
                                    Experience
                                </h2>
                                <div className="education-box border-l-2 border-opacity-40 border-l-[#ff6766]">
                                    {/* Education 1 */}
                                    <motion.div
                                        variants={fadeIn("right", 0.3)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        className="education-content relative pl-[2rem] my-[1vh]"
                                    >
                                        <div className="content relative p-[1rem] bg-white shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-md text-secondary font-tertiary">
                                                <BiSolidCalendar
                                                    size={50}
                                                    color="#2ADBCD"
                                                    className="pr-[1rem]"
                                                />
                                                November 2021 - Febraury 2022
                                            </div>
                                            <h4 className="h3 mb-0 text-xl font-semibold">
                                                Developer
                                            </h4>
                                            <p>(Wix)</p>
                                            <h4>
                                                Friends of Health Homeopathy
                                            </h4>
                                        </div>
                                    </motion.div>

                                    {/* Education 2 */}
                                    <motion.div
                                        variants={fadeIn("right", 0.5)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        className="education-content relative pl-[2rem] my-[1vh]"
                                    >
                                        <div className="content relative p-[1rem] bg-white shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-md text-secondary font-tertiary">
                                                <BiSolidCalendar
                                                    size={50}
                                                    color="#2ADBCD"
                                                    className="pr-[1rem]"
                                                />
                                                March 2021 - November 2021
                                            </div>
                                            <h4 className="h3 mb-0 text-xl font-semibold">
                                                Web Developer Intern
                                            </h4>
                                            <p>
                                                (React, PHP, MySQL, Apache,
                                                WordPress)
                                            </p>
                                            <h4>i2e Consulting Pvt. Ltd.</h4>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex align-middle text-center justify-center">
                        <a href="" target="_blank" rel="noreferrer">
                            <button className="btn btn-sm md:btn-lg xl:btn-lg hover:btn-hover">
                                View Certificates
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
