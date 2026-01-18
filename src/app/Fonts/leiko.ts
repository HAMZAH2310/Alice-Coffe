import localFont from "next/font/local"


export const leiko = localFont({
  src:[
    {
      path: "../../../public/Fonts/leiko/Leiko-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/Fonts/leiko/Leiko-Regular.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-leiko",
  display: "swap",
})