import React from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.tag;
  //   console.log(category);

  function getAllCourse() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((element) => {
        element.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  console.log(category);
  return (
    <div>
      {getAllCourse().map((card) => (
        <Card oneCard={card} />
      ))}
    </div>
  );
};

export default Cards;
