import React from "react";
import { motion } from "framer-motion";
import "../../styles/OurTeam/Our_Team.css";

const CustomImageDiv = ({ curElem, outerIndex, innerIndex }) => {
  return (
    <motion.div
      key={`${outerIndex}-${curElem.id}-${innerIndex}`}
      className={`${
        innerIndex === 2 ? "w-100" : "outer-person"
      }  col-lg-5 col-md-5 col-sm-5 col-xs-12  text-center mb-3`}
      initial={{
        opacity: 0,
        scale: 0,
        x: innerIndex % 2 === 0 ? 50 : -50,
      }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="person">
        <img className="img-fluid" src={curElem.imageUrl} alt={curElem.name} />
        <p className="name">{curElem.name}</p>
        <p className="post">{curElem.post}</p>
      </div>
    </motion.div>
  );
};

export default CustomImageDiv;
