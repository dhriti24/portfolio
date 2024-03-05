import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Dhriti Shah</h3>
                    <span className="footer-span">
                        <h3>© {year} Dhriti Shah</h3>
                    </span>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons space-x-8">
                        <li className="social-icons">
                            <a
                                href="https://github.com/dhriti24"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/dhriti-shah-9ab0a41ab/"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:shah.dhriti@gmail.com"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGmail />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
