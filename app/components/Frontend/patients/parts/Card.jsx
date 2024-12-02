"use client";
import Image from "next/image";
import "./card.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Stack } from "@mui/material";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const Card = ({
  i,
  title,
  data,
  img,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          opacity: 1,
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 1}px)`,
        }}
        className="card"
      >
        <Stack width={"70%"} gap={"20px"}>
          <Head3 color="black" textAlign="left">
            {title}
          </Head3>
          <Stack gap={"10px"}>
            {data.map((ele, i) => {
              return <ParaNormal key={i}>{ele}</ParaNormal>;
            })}
          </Stack>
        </Stack>
        
        <Stack
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "80vh",
            width: "30%",
            borderRadius: "10px",
          }}
        ></Stack>
       
        {/* <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <span>
              <a href={url} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="imageContainer">
            <motion.div
              className="inner"
              style={{ scale: imageScale, opacity: 1 }}
            >
              <Image fill src={img} alt="image" />
            </motion.div>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Card;
