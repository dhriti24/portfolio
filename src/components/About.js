import React from "react";
import Countup from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Image } from "react-bootstrap";
import assets from "../assets";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section
            className="min-h-[80vh] pt-10 lg:min-h-[85vh] flex sm:justify-center bg-primary"
            ref={ref}
            id="about"
        >
            <div className="container mx-[10vw] md:mx-auto md:flex md:justify-center">
                <div
                    className="flex flex-col items-center justify-center align-middle sm:pt-20 md:pt-0 gap-y-6 lg:flex-row lg:items-center
        lg:align-middle lg:gap-x-[100px] overflow-hidden"
                >
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex items-center justify-center sm:flex-1 sm:bg-about sm:bg-contain sm:bg-no-repeat md:h-[90vh] md:w-[40vw] sm:bg-center sm:visible w-[50vw]"
                    >
                        <Image src={assets.Dhriti} alt="avatar" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 xl:leading-9"
                    >
                        <h2 className="h2 mb-4 text-secondary text-5xl lg:text-[5vh] font-tertiary">
                            Meet The Developer
                        </h2>

                        <p className="text-primary font-light xl:text-[2vh] xl:leading-9 xl:w-[700px] text-justify">
                            Having completed my{" "}
                            <span className="text-tertiary font-semibold">
                                Master's in Computer Science at Stevens
                                Institute of Technology.
                            </span>{" "}
                            Proficient in{" "}
                            <span className="text-tertiary font-semibold">
                                ReactJS, PHP, and Python,
                            </span>{" "}
                            I bring a professional yet friendly approach to
                            coding. Beyond tech, I find inspiration in{" "}
                            <span className="text-tertiary font-semibold">
                                art, dance, craft, and music,
                            </span>{" "}
                            adding a creative touch to my work.
                            <br />
                            With a passion for problem-solving and a commitment
                            to making digital experiences both smart and
                            enjoyable, I'm excited to leverage my skills in
                            various web projects. Ready to blend technical
                            expertise with a touch of personality, I look
                            forward to contributing to innovative solutions and
                            collaborative endeavors in the dynamic field of web
                            development.
                        </p>
                        <br />

                        <div className="flex gap-x-2 lg:gap-x-10 mb-12">
                            <div>
                                <div className="md:text-[30px] font-semibold text-tertiary mb-2">
                                    {inView ? (
                                        <Countup
                                            start={0}
                                            end={12}
                                            duration={5}
                                        />
                                    ) : (
                                        12
                                    )}
                                    +
                                </div>
                                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                                    Months of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className="md:text-[30px] font-semibold text-tertiary mb-2">
                                    {inView ? (
                                        <Countup
                                            start={0}
                                            end={6}
                                            duration={5}
                                        />
                                    ) : (
                                        6
                                    )}
                                    +
                                </div>
                                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                                    Projects <br />
                                    Worked on
                                </div>
                            </div>
                            <div>
                                <div className="md:text-[30px] font-semibold text-tertiary mb-2">
                                    {inView ? (
                                        <Countup
                                            start={0}
                                            end={15}
                                            duration={5}
                                        />
                                    ) : (
                                        15
                                    )}
                                    +
                                </div>
                                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                                    Technologies <br />
                                    Mastered and Still Learning
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
