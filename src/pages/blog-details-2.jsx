import React from 'react';
import SEO from '../common/seo';
import BlogDetails2 from '../components/customized-training-programs';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Blog Details"} />
            <BlogDetails2 />
        </WrapperFour>
    );
};

export default index;