import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
// css
import "./styles.scss";

const DevelopersList = ({ developerList }) => {
  const router = useRouter();
  const [visibleList, setVisibleList] = useState(12);
  const totalList = developerList?.length;

  const handleLoadMore = () => {
    // Increase the number of visible item
    setVisibleList((prevVisibleServices) => prevVisibleServices + 4);
  };

  return (
    <div className="developer_list_area mt-5">
      <Container>
        <Row className="gy-4 gx-lg-3">
          {developerList?.slice(0, visibleList)?.map((developer) => (
            <Col md={6} lg={3} key={developer?.id}>
              <div
                className="developer_item"
                onClick={() => router.push(`/developer/${developer?.route}`)}
              >
                <figure>
                  <Image src={developer?.featured_img} alt="developer" />
                </figure>
                <div className="content_sec">
                  <p className="location">{developer?.location}</p>
                  <h3 className="sub_heading">{developer?.title}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {visibleList < totalList && (
          <div className="text-center mt-5">
            <button className="theme_btn2" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default DevelopersList;
