/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        container: {
            padding: {
                default: "8px",
                sm: "16px",
                lg: "24px",
                xl: "48px",
            },
        },
        fontFamily: {
            primary: "Orbitron",
            secondary: "Rajdhani",
            tertiary: "Aldrich",
        },
        extend: {
            backgroundColor: {
                primary: "#FEF2F2",
                secondary: "#ff6766",
                tertiary: "#2ADBCD",
            },
            textColor: {
                primary: "#13131A",
                secondary: "#ff6766",
                tertiary: "#2ADBCD",
                white: "#F5F5FA",
            },
            borderColor: {
                primary: "#13131A",
                secondary: "ff6766",
                tertiary: "#2ADBCD",
            },
            extend: {
                fontFamily: {
                    sans: ["Montserrat", "sans-serif"],
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
