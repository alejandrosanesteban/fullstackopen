const Header = ({course}) => {
  
  return (
      <h1>{course}</h1>
  );
}

const Content = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  );
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>Number of Exercises: {totalExercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course= {course.name}/>
      <Content part = {course.parts[0]}/> 
      <Content part = {course.parts[1]}/> 
      <Content part = {course.parts[2]}/> 
      <Total parts = {course.parts}/>
    </div>
  );
}

export default App