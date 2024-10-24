import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
// css
import "./styles.scss";
import { fatchDeveloperList } from "@/app/apis/commonApi";

// const DevelopersList = ({ developerList }) => {
const DevelopersList = () => {
  const router = useRouter();
  const [visibleList, setVisibleList] = useState(12);
  const [developerList, setdeveloperList] = useState([]);
  console.log("🚀 ~ DevelopersList ~ developerList:", developerList);
  const [isLoading, setIsLoading] = useState(false);
  const totalList = developerList?.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchDeveloperList();
        setdeveloperList(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    // Increase the number of visible item
    setVisibleList((prevVisibleServices) => prevVisibleServices + 4);
  };

  return (
    <div className="developer_list_area mt-5">
      <Container>
        <Row className="gy-4 gx-lg-3">
          {isLoading ? (
            <p className="para_comm text-center">loading...</p>
          ) : (
            <>
              {developerList?.slice(0, visibleList)?.map((developer) => (
                <Col md={6} lg={3} key={developer?.id}>
                  <div
                    className="developer_item"
                    onClick={() =>
                      router.push(`/developer/${developer?.route}`)
                    }
                  >
                    <figure>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${developer?.featured_img}`}
                        // src={developer?.featured_img }
                        alt="developer"
                        height={"100"}
                        width={"100"}
                      />
                    </figure>
                    <div className="content_sec">
                      {/* <p className="location">{developer?.location}</p> */}
                      <h3 className="sub_heading">{developer?.name}</h3>
                    </div>
                  </div>
                </Col>
              ))}
            </>
          )}
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
