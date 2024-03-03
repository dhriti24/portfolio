import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/project-1.png";
// import project2 from "../assets/images/project-2.jpg";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Project = () => {
    const projects = [
        {
            img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Mental Health Support Web App",
            github_link:
                "https://github.com/hppanpaliya/CS-545-Mental-Health-Support",
            categories: [
                "React",
                "Firebase",
                "Framer Motion",
                "Material UI",
                "JavaScript",
            ],
        },
        {
            img: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Solar Project Management Tool",
            github_link: "https://github.com/mehtasoham214/Solar_Management",
            categories: [
                "ReactJS",
                "ExpressJS",
                "NodeJS",
                "MongoDB",
                "Material UI",
            ],
        },
        {
            img: "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Portfolio",
            github_link: "https://github.com/dhriti24/portfolio",
            categories: ["React", "Tailwindcss", "Framer Motion"],
        },
        {
            img: "https://images.pexels.com/photos/326519/pexels-photo-326519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Job Portal",
            github_link: "https://github.com/dhriti24/Job-Portal-Laravel",
            categories: ["PHP", "Laravel", "Apache", "MySQL"],
        },
        {
            img: "https://images.pexels.com/photos/162622/facebook-login-office-laptop-business-162622.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Friends of Health",
            live_link: "https://www.friendsofhealth.in/",
            categories: ["Wix"],
        },
    ];
    return (
        <section
            id="projects"
            className="py-8 md:py-10 text-primary bg-primary"
        >
            <div className="md:container mx-auto px-4">
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-5"
                >
                    <h1 className="text-secondary text-5xl md:text-5xl font-primary">
                        My Projects
                    </h1>
                    <p className="text-sm">Exploring New Technologies</p>
                </motion.div>
            </div>
            <div className="md:container mx-auto px-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {projects.map((project_info, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-fit p-4 bg-black/20 backdrop-blur-2xl rounded-xl">
                                <img
                                    src={project_info.img}
                                    alt=""
                                    className="w-full rounded-lg"
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
                                {project_info.github_link && (
                                    <button
                                        href={project_info.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm md:btn-md rounded-md mt-3"
                                    >
                                        View GitHub
                                    </button>
                                )}
                                {project_info.live_link && (
                                    <button
                                        href={project_info.live_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm md:btn-md rounded-md mt-3"
                                    >
                                        View Live
                                    </button>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Project;
