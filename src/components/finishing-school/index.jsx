import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import SchoolArea from "./school-area";

const FinishSchool = () => {
  return (
    <>
      <Breadcrumb title="Finishing School"  subtitle="Finishing School"  isDbbl="Pages"/>
      <FeatureArea style_about={true} />
      <SchoolArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default FinishSchool;
