// import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/custom.scss";
import "./globals.scss";

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

export const metadata = {
  title: "NewEdge Realty",
  description:
    "Your trusted real estate partner for buying and selling properties.",
  keywords: "real estate, NewEdge Realty, homes, apartments, real estate agent",
  author: "NewEdge Realty",
  openGraph: {
    title: "NewEdge Realty",
    description:
      "Your trusted real estate partner for buying and selling properties.",
    url: "https://www.newedgerealty.com",
    type: "website",
    site_name: "NewEdge Realty",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add any other meta tags like OG tags here */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
      </head>
      <body
      // className={`${geistPoppinsRegular.variable} ${geistPoppinsSemiBold.variable} ${geistPoppinsMedium.variable} ${geistPoppinsBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
