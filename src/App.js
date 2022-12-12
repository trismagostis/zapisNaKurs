import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [courseIndex, setCourseIndex] = useState("");

  const courses = ["Kurs A", "Kurs B", "Kurs C", "Kurs D"];

  const listOfCourses = courses.map((course, index) => (
    <li key={index}>{course}</li>
  ));

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCourseIndexChange = (event) => {
    setCourseIndex(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(courses[courseIndex - 1]);
    setName("");
    setCourseIndex("");
  };

  return (
    <div className="App">
      <h2>Liczba kursów {courses.length}</h2>
      <ol id="listOfCourses">{listOfCourses}</ol>

      <form onSubmit={handleFormSubmit}>
        <label>
          {" "}
          Imię i nazwisko
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={handleNameChange}
          />
        </label>
        <label >Numer kursu<input
          className="form-control"
          type="number"
          name="courseIndex"
          value={courseIndex}
          min={1}
          max={courses.length}
          onChange={handleCourseIndexChange}
        /></label>

        <input
          type="submit"
          className="btn btn-primary"
          value="Zapisz do kursu"
        />
      </form>
      {/* <Button>ooo</Button>
      <button className ='btn btn-primary'>ooo</button> */}
    </div>
  );
}

export default App;
