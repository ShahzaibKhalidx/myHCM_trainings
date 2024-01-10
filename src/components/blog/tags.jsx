import Link from "next/link";
import React from "react";

//  tags data
const tags = [
  { name: "Trainings" },
  { name: "Consultant" },
  { name: "Communication" },
  { name: "Technology" },
  { name: "Learning" },
  { name: "Corporate" },
];

const Tags = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-30">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((item, i) => (
              <Link key={i} href="#">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
