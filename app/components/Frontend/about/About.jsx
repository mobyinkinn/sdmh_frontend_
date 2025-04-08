"use client";
import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Overview from "./parts/Overview";
import Inspiration from "./parts/Inspiration";
import Founder from "./parts/Founder";
import Vision from "./parts/Vision";
import Values from "./parts/Values";
import Message from "./parts/Message";
import Awards from "./parts/Awards";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useEffect, useRef } from "react";
import CustomSlider from "./parts/Animation";

export default function About() {
  const { isLoading } = useNavbar();

  const founderRef = useRef(null);
  const visionRef = useRef(null);
  const messageRef = useRef(null);
  const awardsRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;

    const hash = window.location.hash;
    let targetRef;

    switch (hash) {
      case "#founder":
        targetRef = founderRef;
        break;
      case "#vision":
        targetRef = visionRef;
        break;
      case "#message":
        targetRef = messageRef;
        break;
      case "#awards":
        targetRef = awardsRef;
        break;
      default:
        return;
    }

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);

  if (isLoading) return <Spinner />;

  return (
    <Stack>
      <Navbar />
      <Hero />
      <Stack height={"50vh"} justifyContent={"center"}>
        <CustomSlider />
      </Stack>
      <Overview />
      <Inspiration />
      <Founder ref={founderRef} />
      <Vision ref={visionRef} id="vision" />
      <Values />
      <Message ref={messageRef} id="message" />
      <Awards ref={awardsRef} id="awards" />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
