module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./content/**/*.md",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {
            fontFamily: {
                heading: "Satoshi",
                body: "Cabinet Grotesk",
                sans: "Boska",
            },
            colors: {
                brand: {
                    950: "#0F68FF",
                    900: "#2777FF",
                    800: "#3F86FF",
                    700: "#5795FF",
                    600: "#6FA4FF",
                    500: "#87B4FF",
                    400: "#9FC3FF",
                    300: "#B7D2FF",
                    200: "#CFE1FF",
                    100: "#E7F0FF",
                },
                dark: {
                    950: "#00163A",
                    900: "#1A2D4E",
                    800: "#334561",
                    700: "#4C5C75",
                    600: "#667389",
                    500: "#808A9D",
                    400: "#99A2B0",
                    300: "#B3B9C4",
                    200: "#CCD0D8",
                    100: "#E5E8EB",
                    90: "#F6F9FF",
                },
                orange: {
                    950: "#FFA500",
                },
            },
            boxShadow: {
                card: "0px 4px 36px 0px rgba(207, 225, 255, 0.20)",
            },
        },
    },
    corePlugins: {
        container: true,
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),

        // eslint-disable-next-line no-undef
        require("tailwindcss-debug-screens"),
    ],
};
