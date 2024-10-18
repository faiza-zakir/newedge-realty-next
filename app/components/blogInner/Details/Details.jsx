import Image from "next/image";
import MainImg from "../../../assets/home/blogImg.jpg";
import { Container } from "react-bootstrap";
import { PiLineVertical } from "react-icons/pi";
// css
import "./styles.scss";

const Details = ({ singleBlog }) => {
  return (
    <div className="blog_details_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{singleBlog?.title}</h2>
        <ul className="info-tabs">
          <li>{singleBlog?.posted_by}</li>
          <li>
            <PiLineVertical />
          </li>
          {/* <li>{singleBlog?.category}</li>
          <li>
            <PiLineVertical />
          </li> */}
          <li>{singleBlog?.date}</li>
        </ul>
      </Container>
      <figure>
        <Image
          src={
            singleBlog?.inner_page_img ? singleBlog?.inner_page_img : MainImg
          }
          alt="Main Image"
        />
      </figure>
      <Container>
        <div
          className="general-details"
          dangerouslySetInnerHTML={{ __html: singleBlog?.long_description }}
        />
      </Container>
    </div>
  );
};

export default Details;
