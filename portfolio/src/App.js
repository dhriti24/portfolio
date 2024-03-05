import React from "react";
import {
    Header,
    Footer,
    Banner,
    About,
    Skills,
    Education,
    Navigation,
    Project,
    BackToTop,
    Contact,
    VerticalNav,
} from "./components";
import Ringloader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="bg-primary bg-no-repeat bg-cover overflow-hidden">
            {loading ? (
                <div className="h-[100vh] flex items-center align-middle">
                    <Ringloader
                        color="#ff6766"
                        loading={loading}
                        cssOverride={override}
                        size={90}
                        aria-label="Ring Spinner"
                        data-testid="ring-spinner"
                    />
                </div>
            ) : (
                <div>
                    <VerticalNav />
                    {/* <Navigation /> */}
                    <div className="">
                        <Header />
                        <Banner />
                        <About />
                        <Skills />
                        <Project />
                        <Education />
                        <Contact />
                        <Footer />
                    </div>
                    <BackToTop />
                    <ToastContainer />
                </div>
            )}
        </div>
    );
};

export default App;
