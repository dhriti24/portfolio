import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
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
    SiTailwindcss,
    SiFramer,
    SiApache,
    SiMicrosoftpowerpoint,
    SiPostman,
    SiSublimetext,
    SiPython,
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
                                        data-tooltip-content="HTML5"
                                        data-tooltip-id="html5Tooltip"
                                    >
                                        {/* Overlay */}
                                        <DiHtml5 size={60} color="#FF5722" />
                                    </div>
                                    <Tooltip
                                        id="html5Tooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        HTML5
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="CSS3"
                                        data-tooltip-id="css3Tooltip"
                                    >
                                        {/* Overlay */}
                                        <DiCss3 size={60} color="#167DBE" />
                                    </div>
                                    <Tooltip
                                        id="css3Tooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        CSS 3
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="Bootstrap"
                                        data-tooltip-id="bootstrapTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiBootstrap
                                            size={60}
                                            color="#8712FB"
                                        />
                                    </div>
                                    <Tooltip
                                        id="bootstrapTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Bootstrap
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="JavaScript"
                                        data-tooltip-id="javascriptTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiJsBadge size={50} color="#8712FB" />
                                    </div>
                                    <Tooltip
                                        id="javascriptTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        JavaScript
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="React"
                                        data-tooltip-id="reactTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiReact size={60} color="#61DBFB" />
                                    </div>
                                    <Tooltip
                                        id="reactTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        React
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Redis"
                                        data-tooltip-id="redisTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiRedis size={60} color="#D82C20" />
                                    </div>
                                    <Tooltip
                                        id="redisTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Redis
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Node.js"
                                        data-tooltip-id="nodejsTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiNodejs size={60} color="#529F41" />
                                    </div>
                                    <Tooltip
                                        id="nodejsTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Node.js
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="PHP"
                                        data-tooltip-id="phpTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiPhp size={60} color="#8993C0" />
                                    </div>
                                    <Tooltip
                                        id="phpTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        PHP
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Laravel"
                                        data-tooltip-id="laravelTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiLaravel size={60} color="#FF291A" />
                                    </div>
                                    <Tooltip
                                        id="laravelTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Laravel
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="Framer Motion"
                                        data-tooltip-id="framermotionTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiFramer size={45} color="#1E1E1E" />
                                    </div>
                                    <Tooltip
                                        id="framermotionTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Framer Motion
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="Tailwind Css"
                                        data-tooltip-id="tailwindcssTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiTailwindcss
                                            size={45}
                                            color="#38BDF8"
                                        />
                                    </div>
                                    <Tooltip
                                        id="tailwindcssTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Tailwind Css
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="Apache"
                                        data-tooltip-id="apacheTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiApache size={45} color="#C4203A" />
                                    </div>
                                    <Tooltip
                                        id="apacheTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Apache
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[10vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-white"
                                        data-tooltip-content="Postman"
                                        data-tooltip-id="postmanTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiPostman size={45} color="#F56933" />
                                    </div>
                                    <Tooltip
                                        id="postmanTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Postman
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="WordPress"
                                        data-tooltip-id="wordpressTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiWordpress
                                            size={60}
                                            color="#00769D"
                                        />
                                    </div>
                                    <Tooltip
                                        id="wordpressTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        WordPress
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Wix"
                                        data-tooltip-id="wixTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiWix size={60} color="#000000" />
                                    </div>
                                    <Tooltip
                                        id="wixTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Wix
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Python"
                                        data-tooltip-id="pythonTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiPython size={45} color="#F7CF45" />
                                    </div>
                                    <Tooltip
                                        id="pythonTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Python
                                    </Tooltip>
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
                                        data-tooltip-content="MySQL"
                                        data-tooltip-id="mysqlTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiMysql size={60} color="#01618A" />
                                    </div>
                                    <Tooltip
                                        id="mysqlTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        MySQL
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="MongoDB"
                                        data-tooltip-id="mongodbTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiMongodb size={60} color="#13AA52" />
                                    </div>
                                    <Tooltip
                                        id="mongodbTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        MongoDB
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="PostgreSQL"
                                        data-tooltip-id="postgresqlTooltip"
                                    >
                                        {/* Overlay */}
                                        <DiPostgresql
                                            size={60}
                                            color="#336791"
                                        />
                                    </div>
                                    <Tooltip
                                        id="postgresqlTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        PostgreSQL
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Firebase"
                                        data-tooltip-id="firebaseTooltip"
                                    >
                                        {/* Overlay */}
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                                            alt="Firebase"
                                        />
                                    </div>
                                    <Tooltip
                                        id="firebaseTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Firebase
                                    </Tooltip>
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
                                            className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                            data-tooltip-content="Figma"
                                            data-tooltip-id="figmaTooltip"
                                        >
                                            {/* Overlay */}
                                            <SiFigma
                                                size={45}
                                                color="#000000"
                                            />
                                        </div>
                                        <Tooltip
                                            id="figmaTooltip"
                                            place="bottom"
                                            effect="solid"
                                        >
                                            Figma
                                        </Tooltip>
                                        <div
                                            className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                            data-tooltip-content="Canva"
                                            data-tooltip-id="canvaTooltip"
                                        >
                                            {/* Overlay */}
                                            <SiCanva
                                                size={45}
                                                color="#4A4CF0"
                                            />
                                        </div>
                                        <Tooltip
                                            id="canvaTooltip"
                                            place="bottom"
                                            effect="solid"
                                        >
                                            Canva
                                        </Tooltip>
                                        <div
                                            className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                            data-tooltip-content="Blender"
                                            data-tooltip-id="blenderTooltip"
                                        >
                                            {/* Overlay */}
                                            <SiBlender
                                                size={45}
                                                color="#E98E43"
                                            />
                                        </div>
                                        <Tooltip
                                            id="blenderTooltip"
                                            place="bottom"
                                            effect="solid"
                                        >
                                            Blender
                                        </Tooltip>
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
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Git"
                                        data-tooltip-id="gitTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiGit size={45} color="#F05033" />
                                    </div>
                                    <Tooltip
                                        id="gitTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Git
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="Sublime Text"
                                        data-tooltip-id="sublimetextTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiSublimetext
                                            size={45}
                                            color="#F79202"
                                        />
                                    </div>
                                    <Tooltip
                                        id="sublimetextTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        Sublime Text
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="GitHub"
                                        data-tooltip-id="githubTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiGithub size={45} color="#000000" />
                                    </div>
                                    <Tooltip
                                        id="githubTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        GitHub
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="VS Code"
                                        data-tooltip-id="vscodeTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiVisualstudio
                                            size={45}
                                            color="#6E64C3"
                                        />
                                    </div>
                                    <Tooltip
                                        id="vscodeTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        VS Code
                                    </Tooltip>
                                </div>
                            </div>

                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">
                                    Microsoft Office Suit
                                </h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="MS Word"
                                        data-tooltip-id="mswordTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftword
                                            size={45}
                                            color="#1B65C3"
                                        />
                                    </div>
                                    <Tooltip
                                        id="mswordTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        MS Word
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="MS PowerPoint"
                                        data-tooltip-id="mspowerpointTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftpowerpoint
                                            size={45}
                                            color="#CA4A22"
                                        />
                                    </div>
                                    <Tooltip
                                        id="mspowerpointTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        MS PowerPoint
                                    </Tooltip>
                                    <div
                                        className="group relative overflow-hidden h-[8vh] w-[8vh] mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent"
                                        data-tooltip-content="MS Excel"
                                        data-tooltip-id="msexcelTooltip"
                                    >
                                        {/* Overlay */}
                                        <SiMicrosoftexcel
                                            size={45}
                                            color="#0D8549"
                                        />
                                    </div>
                                    <Tooltip
                                        id="msexcelTooltip"
                                        place="bottom"
                                        effect="solid"
                                    >
                                        MS Excel
                                    </Tooltip>
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
