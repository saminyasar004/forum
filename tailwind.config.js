/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Recursive"', "sans-serif"],
                para: ['"Work Sans"', "serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#22c55e", // green-500's hex value
                },
                // text: {
                //     50: "#f4f4f0",
                //     100: "#e9eae1",
                //     200: "#d2d5c3",
                //     300: "#bcc0a5",
                //     400: "#a5aa88",
                //     500: "#8f956a",
                //     600: "#727755",
                //     700: "#565a3f",
                //     800: "#393c2a",
                //     900: "#1d1e15",
                //     950: "#0e0f0b",
                // },
                // background: {
                //     50: "#f6f6ee",
                //     100: "#ededde",
                //     200: "#dcdcbc",
                //     300: "#caca9b",
                //     400: "#b9b979",
                //     500: "#a7a758",
                //     600: "#868646",
                //     700: "#646435",
                //     800: "#434323",
                //     900: "#212112",
                //     950: "#111109",
                // },
                // primary: {
                //     50: "#fafce9",
                //     100: "#f5f9d2",
                //     200: "#ecf2a6",
                //     300: "#e2ec79",
                //     400: "#d9e64c",
                //     500: "#cfdf20",
                //     600: "#a6b319",
                //     700: "#7c8613",
                //     800: "#53590d",
                //     900: "#292d06",
                //     950: "#151603",
                // },
                // secondary: {
                //     50: "#f7f8ed",
                //     100: "#eef0db",
                //     200: "#dee1b7",
                //     300: "#cdd392",
                //     400: "#bdc46e",
                //     500: "#acb54a",
                //     600: "#8a913b",
                //     700: "#676d2c",
                //     800: "#45481e",
                //     900: "#22240f",
                //     950: "#111207",
                // },
                // accent: {
                //     50: "#fdffe6",
                //     100: "#fafecd",
                //     200: "#f6fe9a",
                //     300: "#f1fd68",
                //     400: "#ecfd35",
                //     500: "#e8fc03",
                //     600: "#b9ca02",
                //     700: "#8b9702",
                //     800: "#5d6501",
                //     900: "#2e3201",
                //     950: "#171900",
                // },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            width: {
                100: "30rem",
                "row-sm": "calc(100% - 2rem)",
                row: "calc(100% - 8rem)",
            },
            height: {
                "0-2rem": "0.2rem",
            },
            borderWidth: {
                "2rem": "0.125rem",
                "1rem": "0.1rem",
                "1-2rem": "0.120rem",
            },
            lineHeight: {
                12: "4rem",
            },
            animation: {
                meteor: "meteor 5s linear infinite",
            },
            keyframes: {
                meteor: {
                    "0%": {
                        transform: "rotate(215deg) translateX(0)",
                        opacity: "1",
                    },
                    "70%": {
                        opacity: "1",
                    },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
