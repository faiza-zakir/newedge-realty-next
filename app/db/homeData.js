// banner
import bannerImg1 from "../assets/banner/homebanner1.jpg";
// about
import aboutImg1 from "../assets/home/aboutImg1.jpg";
import aboutImg2 from "../assets/home/aboutImg2.jpg";
//process
import processImg1 from "../assets/home/process1.jpg";
import processIcon2 from "../assets/home/process2.png";
import processImg3 from "../assets/home/process3.jpg";
import processIcon4 from "../assets/home/process4.png";
import processImg5 from "../assets/home/process5.jpg";
import processIcon6 from "../assets/home/process6.png";
import processImg7 from "../assets/home/process7.jpg";
import processIcon8 from "../assets/home/process8.png";
import processImg9 from "../assets/home/process9.jpg";
import processIcon10 from "../assets/home/process10.png";
import processImg11 from "../assets/home/process11.jpg";
//testimonials
import userImg from "../assets/home/userImg.jpg";
import testimonial1 from "../assets/home/testimonial1.jpg";
import testimonial2 from "../assets/home/testimonial2.jpg";
import testimonial3 from "../assets/home/testimonial3.jpg";
import testimonial4 from "../assets/home/testimonial4.jpg";
import testimonial5 from "../assets/home/testimonial5.jpg";
import testimonial6 from "../assets/home/testimonial6.jpg";

export const homeData = {
  bannerData: {
    id: 1,
    bg: bannerImg1,
    tagLine: "Your One-Stop Real Estate & Property Consultancy",
    title:
      "Trusted Solutions for Businesses, Projects, and Homeowners Since 1997",
    link: "/residential",
  },
  about: {
    tagLine: "Your Winning Edge",
    title:
      "Trusted Solutions for Businesses, Projects, & Homeowners Since 1997",
    detail: `At Newedge Realty, we are leaders in premium property consultancy services. We guide our clients through the entire process by using our global network from identifying the right property, negotiating favorable terms, managing documentation to completing transactions. With over 25 years of experience, we make buying and selling of real estate transparent and secure. Our team of experts is proactive, analytical, and committed to providing tailor-made solutions for your unique real estate needs. Thank you for choosing us as your trusted and respected brand.`,
    featured_img1: aboutImg1,
    featured_img2: aboutImg2,
  },
  counts: [
    {
      id: 1,
      title: 2,
      tag: "K+",
      unit: "",
      details: "Total Transaction Closed",
    },
    {
      id: 2,
      title: 12,
      tag: "+",
      unit: "",
      details: "Served In Towns & Cities",
    },
    {
      id: 3,
      title: 5.1,
      tag: "+",
      unit: "Mn Sq.Ft",
      details: "Total Space Transacted",
    },
  ],
  appointment: {
    title: "Contact Us Today",
    detail: "Need assistance or have questions? We're just a Call Away!",
  },
  whyChoose: {
    tagLine: "Our Process",
    title: "Why Choose Us?",
    detail:
      "At Newedge Realty, we excel in delivering a satisfying home buying and selling experience through proactive service and clear communication. Our expertise, resources, and commitment to exceptional service ensure that we exceed client expectations. Our skilled team, with its integrity and extensive knowledge, provides unmatched excellence in home marketing and transaction management.",
    processData: [
      {
        id: 1,
        title: "Client Consultation",
        img: processImg1,
      },
      {
        id: 2,
        title: "Market Research & Analysis",
        icon: processIcon2,
      },
      {
        id: 3,
        title: "Property Selection",
        img: processImg3,
      },
      {
        id: 4,
        title: "Financial Analysis & Development",
        icon: processIcon4,
      },
      {
        id: 5,
        title: "Property Management",
        img: processImg5,
      },
      {
        id: 6,
        title: "Closing",
        icon: processIcon6,
      },
      {
        id: 7,
        title: "Due Diligences",
        img: processImg7,
      },
      {
        id: 8,
        title: "Negotiation & Acquisition",
        icon: processIcon8,
      },
      {
        id: 9,
        title: "Portfolio Review",
        img: processImg9,
      },
      {
        id: 10,
        title: "Exit Strategy & Disposition",
        icon: processIcon10,
      },
      {
        id: 11,
        title: "Portfolio Expansion",
        img: processImg11,
      },
    ],
  },
  testimonials: [
    {
      id: 1,
      name: "Dr. Yogesh Gupta",
      designation: "Senior Specialist Physician at Sterling Hospita",
      user_img: userImg,
      review:
        "<p>“I am a Doctor by profession. We were fortunate to have Mr. Chetan Savaliya as a realty doctor. His team is so professional. I recommend Newedge Realty to everyone if they are searching for property. They deal in all aspects of property.”</p>",
    },
    {
      id: 2,
      name: "Mr. Prosenjit Ghosh",
      designation: "National Head, PlayStation Division, Sony India",
      user_img: userImg,
      review:
        "<p>“I have been dealing with Newedgeforty for the last 16 years and I know countless people who have the same opinion about this firm: Honesty, commitment, and Professionalism. Even if I have to buy a property on the moon, I will ask Newedge to conduct the deal for me.”</p>",
    },
    {
      id: 3,
      name: "Mr. Selwyn Castellino",
      designation: "GM at Cashify",
      user_img: userImg,
      review:
        "<p>“Detailed organized and professional in their approach. Newedge Realty delivers an awesome and bespoke exploration of your real estate needs.”</p>",
    },
    {
      id: 4,
      name: "Mr. Chitrak Shah",
      designation: "founder at the Shivalik Group",
      user_img: userImg,
      review:
        "<p>“We have been associated for more than 15 years and the experience has been fabulous. I feel the services, communication, and management by Mr. Chetan Savaliya and the team are always superlative. As a business concern, he supports us in many projects for largescale of space to sale.”</p>",
    },
    {
      id: 5,
      name: "Mr. Sharvil Shridhar",
      designation: "MD at A.Shridhar Group",
      user_img: userImg,
      review:
        "<p>“Newedge is A.Shridhar group's one of the most trusted real estate channel partners. We admire their dedicated efforts and professional services. Their urge for a win-win and transparent deal is what we love the most! Keep it up Newedge team!”</p>",
    },
    {
      id: 6,
      name: "Mr. Swagat Vyas",
      designation: "MD at Vishwanath Builders",
      user_img: userImg,
      review:
        "<p>“I needed 12,000 sq. ft. space for our corporate-office in Mondeal Retail Park, SG Highway, Ahmedabad. But the transaction of such huge size requires a trustworthy mediator between two parties. I approached Mr. Chetan Savaliya from Newedge Realty and proposed to represent my interest to the client. With his wit, negotiation skills combined with indomitable market knowledge we concluded the deal at a best price.”</p>",
    },
  ],
  testimonialsVideo: [
    {
      id: 1,
      name: "Dr. Saman Gupta",
      designation: "Senior Specialist Physician at Sterling Hospita",
      user_img: testimonial1,
      url: "1020498549",
    },
    {
      id: 2,
      name: "Mr. Prosenjit Ghosh",
      designation: "National Head, PlayStation Division, Sony India",
      user_img: testimonial4,
      url: "1020498933",
    },
    {
      id: 3,
      name: "Ms. Selwyn Castellino",
      designation: "GM at Cashify",
      user_img: testimonial3,
      url: "1020498957",
    },
    {
      id: 4,
      name: "Mr. Chitrak Shah",
      designation: "founder at the Shivalik Group",
      user_img: testimonial4,
      url: "1020496459",
    },
    {
      id: 5,
      name: "Ms. Sharvil Shridhar",
      designation: "MD at A.Shridhar Group",
      user_img: testimonial2,
      url: "1020496459",
    },
    {
      id: 6,
      name: "Mr. Swagat Vyas",
      designation: "MD at Vishwanath Builders",
      user_img: testimonial6,
      url: "9119881",
    },
  ],
};
