import React from "react";
import SEO from "../common/seo";
import Subscribe from "../components/subscribe";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Subscribe"} />
      <Subscribe />
    </WrapperFour>
  );
};

export default index;
