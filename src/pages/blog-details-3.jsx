import React from 'react';
import SEO from '../common/seo';
import BlogDetails3 from '../components/the-role-of-soft-skills';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Blog Details"} />
            <BlogDetails3 />
        </WrapperFour>
    );
};

export default index;