import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
// css
import "./styles.scss";

const ProjectsList = ({ projectsData, route }) => {
  const router = useRouter();
  const [visibleList, setVisibleList] = useState(12);
  const totalList = projectsData?.length;

  const handleLoadMore = () => {
    // Increase the number of visible item
    setVisibleList((prevVisibleServices) => prevVisibleServices + 4);
  };

  return (
    <div className="project_list_area mt-5">
      <Container>
        {projectsData?.length > 0 ? (
          <Row className="gy-4 gx-lg-3">
            {projectsData?.slice(0, visibleList)?.map((project) => (
              <Col md={6} lg={3} key={project?.id}>
                <div
                  className="project_item"
                  onClick={() => router.push(`/${route}/${project?.route}`)}
                >
                  <figure>
                    <Image src={project?.featured_img} alt="residential" />
                  </figure>
                  <div className="content_sec">
                    <p className="location">
                      <span>Starting from</span> ₹{project?.price}
                    </p>
                    <h3 className="sub_heading">{project?.title}</h3>
                    <p className="para_comm">
                      {project?.location?.title},{" "}
                      {project?.location?.zone?.title}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="para_comm text-center">
            Sorry, there are no properties matching your criteria. Please try
            something else.
          </p>
        )}
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

export default ProjectsList;
