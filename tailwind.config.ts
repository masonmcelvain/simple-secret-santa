import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         backgroundColor: {
            "chakra-active-dark": "rgb(237,242,247,.16)",
            "chakra-hover-dark": "rgb(237,242,247,.1)",
         },
         ringColor: {
            "chakra-focus": "rgba(66,153,225,0.6)",
         },
      },
   },
};
export default config;
