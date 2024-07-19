import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import assets from "../assets";

const Project = () => {
    const projects = [
        {
            img: assets.Project1,
            name: "Mental Health Support Web App",
            categories: [
                "React",
                "Firebase",
                "Framer Motion",
                "Material UI",
                "JavaScript",
            ],
        },
        {
            img: assets.Project2,
            name: "Solar Project Management Tool",
            categories: [
                "ReactJS",
                "ExpressJS",
                "NodeJS",
                "MongoDB",
                "Material UI",
            ],
        },
        {
            img: assets.Project3,
            name: "Portfolio",
            categories: ["React", "Tailwindcss", "Framer Motion"],
        },
        {
            img: assets.Project4,
            name: "Job Portal",
            categories: ["PHP", "Laravel", "Apache", "MySQL"],
        },
        {
            img: assets.Project5,
            name: "Friends of Health",
            categories: ["React", "Firebase", "Redis", "Material UI"],
        },
        {
            img: assets.Project6,
            name: "Roommate Connect Forum",
            categories: ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB"],
        },
    ];
    return (
        <section className="text-primary bg-primary pt-[7rem]" id="projects">
            <div className="md:container mx-auto px-4">
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-5"
                >
                    <h1 className="text-secondary text-5xl md:text-5xl font-primary">
                        My Projects & Experiences
                    </h1>
                    <p className="text-sm">Exploring New Technologies</p>
                </motion.div>
            </div>
            <div className="mx-auto px-4">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                    loop={true}
                    className="mySwiper w-[90%] mx-auto"
                >
                    {projects.map((project_info, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-contain p-4 bg-[#e6e6e67a] rounded-xl">
                                <img
                                    src={project_info.img}
                                    alt=""
                                    className="w-auto h-80 rounded-lg "
                                />
                                <h3 className="text-lg md:text-xl my-3">
                                    {project_info.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project_info.categories.map(
                                        (category, index) => (
                                            <span
                                                key={index}
                                                className="bg-tertiary text-primary px-1 rounded-md mb-1"
                                            >
                                                {category}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Project;
