// import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/custom.scss";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";

// const geistPoppinsRegular = localFont({
//   src: "./fonts/Poppins-Regular.ttf",
//   variable: "--font-poppins-regular",
//   weight: "400",
// });

// const geistPoppinsMedium = localFont({
//   src: "./fonts/Poppins-Medium.ttf",
//   variable: "--font-poppins-medium",
//   weight: "500",
// });

// const geistPoppinsSemiBold = localFont({
//   src: "./fonts/Poppins-SemiBold.ttf",
//   variable: "--font-poppins-semibold",
//   weight: "600",
// });

// const geistPoppinsBold = localFont({
//   src: "./fonts/Poppins-Bold.ttf",
//   variable: "--font-poppins-bold",
//   weight: "700",
// });

export async function generateMetadata() {
  // Logic to set title and description based on route or props
  return {
    title: "NewEdge Realty",
    description:
      "Your trusted real estate partner for buying and selling properties.",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
      // className={`${geistPoppinsRegular.variable} ${geistPoppinsSemiBold.variable} ${geistPoppinsMedium.variable} ${geistPoppinsBold.variable}`}
      >
        <NextTopLoader color="#fff" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
