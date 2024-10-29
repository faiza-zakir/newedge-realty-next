// import Image from "next/image";
// import { Row, Col, Container } from "react-bootstrap";
// import CountUp from "react-countup";
// // css
// import "./styles.scss";

// const CountsSection = ({ countsData, countsInfo }) => {
//   return (
//     <div className="counts_sec mt-60">
//       <Container>
//         <Row className="gy-5 gx-lg-5 align-items-center">
//           <Col lg={6} className="order-last order-lg-first">
//             <figure>
//               <Image
//                 src={countsInfo?.featured_img}
//                 alt="count"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </figure>
//           </Col>
//           <Col lg={6}>
//             <Row className="gy-4">
//               {countsData?.map((item) => (
//                 <Col xs={6} lg={4} key={item?.id}>
//                   <div className="counts_wrap">
//                     <h3 className="main_sec_heading">
//                       <CountUp
//                         enableScrollSpy={true}
//                         start={0}
//                         end={item?.value}
//                         duration={4}
//                         decimals={1} // This will ensure one decimal points
//                         decimal="." // This sets the decimal separator
//                       >
//                         {({ countUpRef }) => <span ref={countUpRef} />}
//                       </CountUp>
//                       {item?.tag}
//                       {item?.unit && <span className="unit">{item?.unit}</span>}
//                     </h3>
//                     <p className="para_comm">{item?.title}</p>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default CountsSection;

import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
// css
import "./styles.scss";

// Preprocess countsData to separate numeric value, unit, and tag
const preprocessCountsData = (data) => {
  return data?.map((item) => {
    const match = item?.value?.match(/^([\d.]+)(K\+|\+|[a-zA-Z\s.]+)?$/);
    const numericValue = match ? parseFloat(match[1]) : 0;
    const tag =
      match && (match[2] === "K+" || match[2] === "+") ? match[2] : ""; // K+ or + as tag
    const unit = match && tag === "" ? match[2] : ""; // Remaining part as unit if tag is empty

    return {
      ...item,
      numericValue,
      unit,
      tag,
    };
  });
};

const CountsSection = ({ countsData, countsInfo }) => {
  const processedData = preprocessCountsData(countsData);

  return (
    <div className="counts_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image
                src={countsInfo?.featured_img}
                alt="count"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </Col>
          <Col lg={6}>
            <Row className="gy-4">
              {processedData?.map((item) => (
                <Col xs={6} lg={4} key={item?.id}>
                  <div className="counts_wrap">
                    <h3 className="main_sec_heading">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={item?.numericValue}
                        duration={4}
                        decimals={item?.numericValue % 1 !== 0 ? 1 : 0} // Shows one decimal if value has decimal
                        decimal="."
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                      {item?.tag}
                      {item?.unit && <span className="unit">{item?.unit}</span>}
                    </h3>
                    <p className="para_comm">{item?.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountsSection;
