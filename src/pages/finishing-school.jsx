import React from "react";
import SEO from "../common/seo";
import FinishSchool from "../components/finishing-school";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Finishing School"} />
      <FinishSchool />
    </WrapperFour>
  );
};

export default index;
