import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "../index.css";
import {
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiJsBadge,
    DiReact,
    DiRedis,
    DiNodejs,
    DiPhp,
    DiLaravel,
    DiWordpress,
    DiMysql,
    DiMongodb,
    DiPostgresql,
} from "react-icons/di";

import {
    SiCanva,
    SiFigma,
    SiBlender,
    SiGit,
    SiGithub,
    SiVisualstudio,
    SiWix,
    SiMicrosoftword,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
} from "react-icons/si";

const Skills = () => {
    return (
        <section
            className="section min-h-fit top-0 pt-20 mb-0 pb-10 bg-primary"
            id="skills"
        >
            <div className="container mx-auto align-middle">
                <div className="md:gap-x-5 gap-y-6 md:gap-y-2 align-middle">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="container main-title flex text-center justify-center flex-col mb-5"
                    >
                        <h1 className="h1 text-secondary text-5xl font-primary">
                            My Skills
                        </h1>
                        <p>Learning And Progressing Step by Step</p>
                    </motion.div>

                    <div className="main-container flex justify-center flex-col lg:flex-row md:flex-col top-0">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top"
                        >
                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">Web Development</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                    >
                                        {/* Overlay */}
                                        <DiHtml5 size={60} color="#FF5722" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                    >
                                        {/* Overlay */}
                                        <DiCss3 size={60} color="#167DBE" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                    >
                                        {/* Overlay */}
                                        <DiBootstrap
                                            size={60}
                                            color="#8712FB"
                                        />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiJsBadge size={60} color="#8712FB" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiReact size={60} color="#61DBFB" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiRedis size={60} color="#D82C20" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiNodejs size={60} color="#529F41" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiPhp size={60} color="#8993C0" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiLaravel size={60} color="#FF291A" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiWordpress
                                            size={60}
                                            color="#00769D"
                                        />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiWix size={60} color="#000000" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="sm:mx-auto flex justify-center flex-col align-middle">
                            <motion.div
                                variants={fadeIn("up", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="lg:max-w-[25vw] lg:min-w-[20vw] mx-2"
                            >
                                <h1 className="title-text">Database</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiMysql size={60} color="#01618A" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiMongodb size={60} color="#13AA52" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <DiPostgresql
                                            size={60}
                                            color="#336791"
                                        />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                                            alt="Firebase"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="lg:max-w-[25vw] lg:min-w-[20vw] mx-2"
                            >
                                <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-2">
                                    <h1 className="title-text">
                                        Creative Tools
                                    </h1>

                                    <div className="flex flex-row flex-wrap justify-center">
                                        <div
                                            className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        >
                                            {/* Overlay */}
                                            <SiFigma
                                                size={60}
                                                color="#000000"
                                            />
                                        </div>
                                        <div
                                            className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        >
                                            {/* Overlay */}
                                            <SiCanva
                                                size={60}
                                                color="#4A4CF0"
                                            />
                                        </div>
                                        <div
                                            className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        >
                                            {/* Overlay */}
                                            <SiBlender
                                                size={60}
                                                color="#E98E43"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top"
                        >
                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">Developer Tools</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiGit size={60} color="#F05033" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiGithub size={60} color="#000000" />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiVisualstudio
                                            size={60}
                                            color="#6E64C3"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">
                                    Microsoft Office Suit
                                </h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftword
                                            size={60}
                                            color="#1B65C3"
                                        />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftpowerpoint
                                            size={60}
                                            color="#CA4A22"
                                        />
                                    </div>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftexcel
                                            size={60}
                                            color="#0D8549"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
