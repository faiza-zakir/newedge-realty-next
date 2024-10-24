// about
import aboutImg from "../assets/about/aboutImg.jpg";
// counts
import countsImg from "../assets/about/countsImg.jpg";
// mission
import missionImg from "../assets/about/missionImg.jpg";
// vision
import visionImg from "../assets/about/visionImg.jpg";
// founder
import founderImg from "../assets/about/founderImg.webp";
// team
import memberImg2 from "../assets/about/teamImg2.jpg";
import memberImg3 from "../assets/about/teamImg3.jpg";
import memberImg4 from "../assets/about/teamImg4.jpg";
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

export const aboutData = {
  about: {
    tagLine: "Your Winning Edge in Real Estate",
    title:
      "Trusted Solutions for Businesses, Projects, & Homeowners Since 1997",
    detail: `Newedge Realty is one of the most longstanding real estate and property consultancy firms, whose desire is to assist its clients in realizing their real estate dreams. Our most valued customers have been a great source of inspiration for us in building Newedge into a reputable name for over 25 years. The latest information available alongside market insights obtained through our process-driven professional approach renders buying-selling more transparent and risk-free for our clients. We are proud of having an exceptional workforce that is knowledgeable, proactive, analytical, and client-service oriented, offering personalized solutions that meet the specific needs of every client.`,
    featured_img: aboutImg,
  },
  topCounts: {
    featured_img: countsImg,
    counts: [
      {
        id: 1,
        title: 2.5,
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
      {
        id: 4,
        title: 1.1,
        tag: "+",
        unit: "Mn Sq.Ft",
        details: "Commercial Office Space Transacted",
      },
      {
        id: 5,
        title: 0.5,
        tag: "+",
        unit: "Mn Sq.Ft",
        details: "Retail Spaces Leased",
      },
      {
        id: 6,
        title: 2.5,
        tag: "+",
        unit: "Mn Sq.Ft",
        details: "Land Area Transacted",
      },
    ],
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
  mission: {
    title: "Our mission",
    detail: `<p>At Newedge Realty, our mission is built on the core values of Integrity, Excellence, and Accountability:</p>
    <ul>
    <li><strong>Integrity:</strong> In all our transactions with clients, partners, and stakeholders we uphold honesty, transparency, and ethical conduct.</li>
      <li><strong>Excellence:</strong> We are dedicated to going beyond what is expected through continuous improvement, openness to feedback, and commitment to positive transformation.</li>
        <li><strong>Accountability:</strong> We take full responsibility for our actions, decisions, and outcomes, fostering a strong trust with our clients and stakeholders at all times.</li>
    </ul>
    <p>By strictly adhering to these tenets we aim to deliver the best possible service in the real estate industry while also fostering long-term relationships founded on trustworthiness and dependability</p>
    `,
    featured_img: missionImg,
  },
  vision: {
    title: "Our vision",
    detail: `To be the most trusted and leading real estate service provider in the region, renowned for our excellence and innovation. We aim to be the preferred employer for real estate professionals, offering a dynamic and supportive environment where talent thrives and careers flourish.`,
    featured_img: visionImg,
  },
  founder: {
    title: "Meet Our Founder",
    detail: `Chetan Savaliya (Founder and Director) Chetan is a leader with a passion for the expansion of the real estate market. His expertise and in-depth knowledge of the local real estate market, together with a sharp eye for new and developing trends, have enabled Newedge Realty to thrive in the always changing real estate industry. To help his team reach various milestones, he has instilled his vision and ideals in them. His approach to leadership is based on respect, empowerment, and trust, ensuring that each team member has the chance to develop and achieve success inside the company. He recognises the critical advantages of investing in his team's professional growth, offering continual training and mentoring to create the upcoming generation of real estate leaders. He enjoys reading, watching sports, and being anchored in culture. He strongly believes in giving back to the community and participates in many humanitarian and charitable activities.`,
    featured_img: founderImg,
  },
  team: {
    tagLine: "Meet",
    title: "OUR TEAM",
    team_list: [
      {
        id: 1,
        name: "Chetan Savaliya",
        designation: "Founder and Director",
        featured_img: memberImg2,
      },
      {
        id: 2,
        name: "Mukesh Ahir",
        designation: "Manager (Commercial)",
        featured_img: memberImg3,
      },
      {
        id: 3,
        name: "Arpit Desai",
        designation: "Manager (Retail)",
        featured_img: memberImg4,
      },
    ],
  },
};
