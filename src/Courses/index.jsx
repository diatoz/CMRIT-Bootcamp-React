import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  function getCourses() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        setCourses(res.data);
      });
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="courses-list container">
      <div className="courses row">
        {courses?.map((course) => (
          <div className="course card col-3">
            <div>
              <h4>{course.title}</h4>
              <p>{course.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
