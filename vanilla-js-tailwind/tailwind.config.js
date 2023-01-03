/** @type {import('tailwindcss').Config} */
const toPurge = process.env.NODE_ENV === "production";
module.exports = {
    purge: { enabled: toPurge, content: ["./build/**/*.html"] },
    content: [],
    darkMode: false,
    theme: {
        extend: {},
    },
    plugins: [],
};
