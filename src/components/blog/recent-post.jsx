import Link from "next/link";
import React from "react";

// recent_post data
const recent_post = [
  {
    id: 1,
    img: "/assets/img/blog/sidebar/blog-sm-1.jpg",
    date: "December. 2023",
    title: "The Future of Work: Adapting Training Services to Changing Trends.",
    src: "/blog-details"
  },
  {
    id: 2,
    img: "/assets/img/blog/sidebar/blog-sm-2.jpg",
    date: "January. 2024",
    title: "How Customized Training Programs Boost Employee Engagement",
    src: "/blog-details-2"
  },
  {
    id: 3,
    img: "/assets/img/blog/sidebar/blog-sm-3.jpg",
    date: "January. 2024",
    title: "The Role of Soft Skills Training in Professional Development",
    src: "/blog-details-3"
  },
];

const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-20 d-flex align-items-center"
              >
                <div className="rc__post-thumb">
                  <Link href={item.src}>
                    <img src={item.img} alt="blog-sidebar" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href={item.src}>{item.title}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
