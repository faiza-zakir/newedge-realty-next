import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Maps = ({ mapsData }) => {
  return (
    <div className="maps_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{mapsData?.title}</h2>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <div className="map_item">
              <figure>
                <Image
                  src={mapsData?.map1?.featured_img}
                  layout="fill"
                  objectFit="cover"
                  alt={mapsData?.map1?.img_alt}
                  title={mapsData?.map1?.img_title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">{mapsData?.map1?.title}</h3>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="map_item">
              <figure>
                <Image
                  src={mapsData?.map2?.featured_img}
                  layout="fill"
                  objectFit="cover"
                  alt={mapsData?.map2?.img_alt}
                  title={mapsData?.map2?.img_title}
                />
              </figure>
              <div className="content_sec">
                <h3 className="sub_heading">{mapsData?.map2?.title}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Maps;
