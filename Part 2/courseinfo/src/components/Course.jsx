const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {

  const totalExercises = parts.reduce( (sum,part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
  )

}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) => 
  {
  return (
    parts.map(part => <Part part={part} key={part.id} />)
  )
  }
  

const Course = ({course}) => {
  // console.log(props);
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}

export default Course