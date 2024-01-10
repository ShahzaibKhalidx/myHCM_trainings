import BrandArea from "@/src/common/brand-area";
import CounterArea from "@/src/common/counter-area";
// import InstructorArea from "@/src/common/instructor-area";
import SuitableArea from "@/src/common/suitable-area";
import React, { useEffect } from "react";
// import AboutArea from "./about-area";
import BlogArea from "./blog-area";
// import CategoryArea from "./category-area";
import ChooseArea from "../../../common/choose-area";
// import CourseArea from "./course-area";
import ChooseAreaThree from "../home-3/choose-area";
import HeroSlider from "./hero-slider";
import TestimonialAreaTwo from "./testimonial-area-2";
// import VideoArea from "../../../common/video-area";
import FeatureArea from "../home/feature-area";
import AboutArea from "../home/about-area";

const HomeTwo = () => {

  return (
    <>
      <HeroSlider />
      <FeatureArea />
      <AboutArea />
      <ChooseAreaThree />
      {/* <CategoryArea /> */}
      {/* <CourseArea /> */}
      {/* <VideoArea /> */}
      <TestimonialAreaTwo />
      <CounterArea style_counter={true} />
      <ChooseArea style_2={true} />
      {/* <InstructorArea style_2={true} /> */}
      <SuitableArea style_2={true} />
      <BlogArea />
      <BrandArea style_1={true} />
    </>
  );
};

export default HomeTwo;
