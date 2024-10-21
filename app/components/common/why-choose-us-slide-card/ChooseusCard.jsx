import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ChooseusCard(props) {
  const { useItemAnimation, itemVariant, i, item, key } = props;
  const { ref, controls } = useItemAnimation();

  return (
    <motion.div
      ref={ref}
      key={key}
      className="process_item_wrap"
      variants={itemVariant}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1, // Optional: Add a small delay for each item
      }}
    >
      {item?.icon ? (
        <div className="process_item">
          <Image src={item?.icon} alt="process" className="icon" />
          <div className="content_sec">
            <h3 className="sub_heading">{item?.title}</h3>
            <h4 className="slide_number">{i + 1 < 10 ? `0${i + 1}` : i + 1}</h4>
          </div>
        </div>
      ) : (
        <div className="process_item2">
          <figure>
            <Image src={item?.img} alt="process" className="image" />
          </figure>
          <div className="content_sec">
            <h3 className="sub_heading">{item?.title}</h3>
            <h4 className="slide_number">{i + 1 < 10 ? `0${i + 1}` : i + 1}</h4>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ChooseusCard;
