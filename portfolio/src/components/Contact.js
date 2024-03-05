import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { toast } from "react-toastify";
const Contact = () => {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.user_email || !formData.message) {
            toast.error("Please fill in all the required fields. ✍🏻", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
        const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
        const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`;
        if (!serviceId || !templateId || !publicKey) {
            console.error(
                "EmailJS configuration missing. Check your environment variables."
            );
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    toast.success(
                        `Thank you for reaching out.
      We will be in touch shortly. 🌟`,
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        }
                    );
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error(
                        `Oops! Something went wrong. Please try again.☹️`,
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                }
            );
    };
    return (
        <section className="py-10 pt-20 lg:section bg-primary" id="contact">
            <div className="container mx-auto">
                <div className="md:container items-center justify-center mx-auto px-4 hidden md:flex">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-5"
                    >
                        <h1 className="text-secondary text-5xl md:text-5xl font-primary">
                            Connect with Me
                        </h1>
                        <p className="text-sm">Networking and building</p>
                    </motion.div>
                </div>
                <div className="flex flex-col lg:flex-row align-middle items-center">
                    {/* text */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex justify-start items-center align-middle"
                    >
                        <div>
                            <h4 className="text-xl uppercase text-secondary font-primary mb-2 tracking-wide">
                                Get in touch
                            </h4>
                            <h2 className="text-[45px] text-primary lg:text-[90px] leading-none mb-12">
                                Let's work
                                <br />
                                together!
                            </h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        className="flex-1 border rounded-2xl w-[80%] border-primary/30 flex flex-col gap-y-6
                  pb-24 p-6 items-start lg:w-[40vw]"
                        ref={form}
                        variants={fadeIn("left", 0.3)}
                        whileInView={"show"}
                        initial="hidden"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <input
                            className="bg-transparent border-b border-primary/30 py-3 outline-none w-full
                    placeholder:text-primary focus:border-accent transition-all"
                            value={formData.user_name}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your Full-Name"
                            name="user_name"
                        />
                        <input
                            className="bg-transparent border-b border-primary/30 py-3 outline-none w-full
                    placeholder:text-primary focus:border-accent transition-all"
                            value={formData.user_email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Your Email Address"
                            name="user_email"
                        />
                        <textarea
                            className="bg-transparent border-b border-primary/30 py-12 outline-none w-full
                    placeholder:text-primary focus:border-accent transition-all resize-none mb-12"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            name="message"
                        />

                        <button
                            className="btn btn-sm md:btn-md xl:btn-lg hover:btn-hover"
                            onClick={sendEmail}
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
