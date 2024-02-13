// pages/course/[slug].js
import { useRouter } from 'next/router';
import CourseDetailsArea from '../../components/course-details/course-details-area';
import workshopDetails from "@/src/data/workshop-details";
import WrapperFour from '@/src/layout/wrapper-4';
import SEO from '@/src/common/seo';
import Breadcrumb from '@/src/components/bredcrumb/breadcrumb';
// Import your dynamic content file

const WorkshopPage = () => {

  const router = useRouter();
  const { slug } = router.query;
  console.log("Slug",slug)
  const pageContent = workshopDetails[slug] || {};
  console.log('Content', pageContent)
  
  return (
    <>
      <WrapperFour>
      <SEO pageTitle={pageContent.aboutCourse.title}/>
      <Breadcrumb title={pageContent.aboutCourse.title} subtitle={pageContent.aboutCourse.title} isDbbl="Workshops" />
      <CourseDetailsArea workContent={pageContent} />
      </WrapperFour>
    </>
  );
};

export default WorkshopPage;

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on workshopDetails
  const paths = Object.keys(workshopDetails).map((slug) => ({
    params: { slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the course using params.slug
  const workContent = workshopDetails[params.slug] || {};

  // Pass data to the page via props
  return { props: { workContent } };
}
