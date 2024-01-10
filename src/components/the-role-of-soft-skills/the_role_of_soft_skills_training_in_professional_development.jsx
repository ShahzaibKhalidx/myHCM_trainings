import comments_data from "@/src/data/comments-data";
import Link from "next/link";
import React from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import PostComment from "../form/post-comment";

const PostboxBlogDetails3 = () => {
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
                        <i className="fi fi-rr-calendar"></i> January, 2024
                      </span>
                      <span>
                        <a href="#">
                          <i className="fi fi-rr-user"></i> Admin
                        </a>
                      </span>
                      {/* <span>
                        <a href="#">
                          <i className="fi fi-rr-comments"></i> 02 Comments
                        </a>
                      </span> */}
                    </div>
                    <h3 className="postbox__title">
                      The Role of Soft Skills Training in Professional Development
                    </h3>
                    <div className="postbox__text">
                      <p>
                        In the fast-paced and interconnected world of today's workplace, the importance of soft skills in professional development cannot be overstated. Beyond technical expertise, employers increasingly recognize the pivotal role that interpersonal abilities play in fostering a collaborative, communicative, and adaptable workforce. Let's delve into the significance of soft skills training in shaping well-rounded professionals.
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

                      <h3>Effective Communication:</h3>

                      <p>
                        Soft skills training places a spotlight on effective communication – a cornerstone of professional success. Whether through written, verbal, or non-verbal means, the ability to convey ideas clearly, listen actively, and navigate diverse communication styles enhances collaboration and minimizes misunderstandings. Professionals equipped with strong communication skills are better positioned to lead teams, influence stakeholders, and build positive workplace relationships.
                      </p>
                      <h3>Emotional Intelligence:</h3>
                      <p>
                        Understanding and managing emotions, both one's own and others', is a key component of emotional intelligence. Soft skills training hones this vital attribute, fostering empathy, self-awareness, and the ability to navigate complex social dynamics. Professionals with high emotional intelligence are better equipped to handle workplace challenges, build cohesive teams, and navigate conflicts constructively.
                      </p>
                      <h3>Adaptability and Resilience:</h3>
                      <p>
                        The modern professional landscape is marked by constant change. Soft skills training emphasizes adaptability and resilience, preparing individuals to navigate uncertainty and thrive in dynamic environments. Professionals who can embrace change, learn from setbacks, and maintain a positive outlook contribute to a workplace culture that fosters innovation and continual improvement.
                      </p>
                      <h3>Team Collaboration:</h3>
                      <p>
                        Success in many professions hinges on the ability to work effectively within a team. Soft skills training cultivates the art of collaboration – the ability to contribute ideas, support colleagues, and collectively achieve common goals. Professionals skilled in teamwork contribute to a harmonious work environment, driving collective success and reinforcing a collaborative culture.
                      </p>

                      <h3>Problem-Solving and Critical Thinking:</h3>
                      <p> Soft skills training encourages the development of problem-solving and critical thinking abilities. Professionals who can analyze situations, think creatively, and make informed decisions contribute significantly to an organization's success. Soft skills training equips individuals with the cognitive tools necessary to approach challenges with a solution-oriented mindset.
                      </p>
                    </div>

                    <div className="postbox__tag tagcloud">
                      <span>Post Tags :</span>
                      <a href="#">Soft Skills</a>
                      <a href="#">Development</a>
                      <a href="#">Growth</a>
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

export default PostboxBlogDetails3;
