import comments_data from "@/src/data/comments-data";
import Link from "next/link";
import React from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import PostComment from "../form/post-comment";

const Blog_1 = () => {
  return (
    <>
      <div
        className="postbox__area pt-120 pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">


                <article className="postbox__item format-image mb-60 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog-in-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <i className="fi fi-rr-calendar"></i> December, 2023
                      </span>
                      <span>
                        <a href="#">
                          <i className="fi fi-rr-user"></i> ADMIN
                        </a>
                      </span>
                      {/* <span>
                        <a href="#">
                          <i className="fi fi-rr-comments"></i> 02 Comments
                        </a>
                      </span> */}
                    </div>
                    <h3 className="postbox__title">
                      The Future of Work: Adapting Training Services to Changing Trends
                    </h3>
                    <div className="postbox__text">
                      <p>
                        As we step into a dynamic era of work, driven by technological advancements
                        and evolving market landscapes, the demand for adaptable and skilled professionals
                        is greater than ever. Organizations are faced with the challenge of preparing
                        their workforce for the future, making the role of training services pivotal
                        in navigating this transformative journey.
                      </p>

                      {/* <blockquote>
                        <p>
                          Tosser argy-bargy mush loo at public school Elizabeth
                          up the duff buggered chinwag on your bike mate don't
                          get shirty with me super, Jeffrey bobby Richard
                          cheesed off spend a penny a load of old tosh blag
                          horse.
                        </p>
                        <cite>Jon Barsito</cite>
                      </blockquote> */}

                      <p>
                        <img src="/assets/img/blog/blog-in-4.jpg" alt="" />
                      </p>

                      <h3>Agility in Learning:</h3>
                      <p>
                        The pace of change in industries is accelerating, necessitating
                        a shift in how employees acquire new skills. Training services
                        must embrace agility, offering flexible and on-demand learning
                        solutions that allow individuals to upskill or reskill at their
                        own pace. Microlearning modules, virtual classrooms, and interactive
                        e-learning platforms are becoming integral components in this paradigm shift.
                      </p>

                      <h3>Embracing Technology:</h3>
                      <p>
                        The integration of cutting-edge technologies like artificial intelligence,
                        virtual reality, and augmented reality is reshaping the training landscape.
                        Simulations and immersive experiences provide hands-on learning, fostering
                        a deeper understanding of complex concepts. Training services that leverage
                        these technological tools not only enhance engagement but also prepare
                        employees for real-world scenarios.
                      </p>

                      <h3>Personalization and Customization:</h3>
                      <p>
                        One size does not fit all in the future of work. Training services must adopt
                        a personalized approach, tailoring programs to individual learning styles,
                        preferences, and career paths. Adaptive learning algorithms can assess strengths
                        and weaknesses, ensuring that employees receive targeted training interventions
                        that align with their specific needs.
                      </p>

                      <h3>Collaborative Learning Environments:</h3>
                      <p>
                        The traditional classroom model is evolving into collaborative digital ecosystems.
                        Training services should facilitate peer-to-peer learning, knowledge sharing,
                        and collaborative projects, fostering a culture of continuous improvement. Virtual
                        team environments enhance communication skills and prepare employees for the
                        collaborative nature of future workplaces.
                      </p>

                      <h3>Soft Skills in Focus:</h3>
                      <p>
                        While technical skills remain crucial, the future of work emphasizes the significance
                        of soft skills. Effective communication, emotional intelligence, and adaptability are
                        essential for navigating a rapidly changing work landscape. Training services need to
                        incorporate modules that develop these interpersonal skills, ensuring a well-rounded
                        and resilient workforce.
                      </p>
                    </div>

                    <div className="postbox__tag tagcloud">
                      <span>Post Tags :</span>
                      <a href="#">Learning</a>
                      <a href="#">Tech</a>
                      <a href="#">Soft Skills</a>
                    </div>
                  </div>
                </article>


                {/* <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">3 Comments</h3>
                  <ul>

                    {comments_data.map((item, i) =>
                      <li key={i} className={item?.children}>
                        <div className="postbox__comment-box grey-bg">
                          <div className="postbox__comment-info d-flex">
                            <div className="postbox__comment-avater mr-20">
                              <img
                                src={item.img}
                                alt=""
                              />
                            </div>
                            <div className="postbox__comment-name">
                              <h5>{item.name}</h5>
                              <span className="post-meta">{item.date}</span>
                            </div>
                          </div>
                          <div className="postbox__comment-text ml-65">
                            <p>
                              {item.comment}
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                    }
                  </ul>
                </div> */}

                <PostComment />


              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper">
                <BlogSearch />
                <RecentPost />
                <Category />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_1;
