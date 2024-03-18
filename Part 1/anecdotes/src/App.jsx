import { useState } from 'react'

const Title = (props) => {
  return (
    <h2>{props.title}</h2>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const [points, setPoints] = useState(anecdotes.map(() => 0))

  const title1 = "Anecdote of the day";
  const title2 = "Anecdote with most votes";

  const handleVotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVoted = Math.max(...points);
  const indexMostVoted = points.indexOf(mostVoted);

  console.log("mas votado",mostVoted)
  console.log("en el indice",indexMostVoted)

  console.log(points);
  console.log(selected);

  return (
    <div>
      <Title title = {title1}/>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleRandomAnecdote}>Next Anecdote</button>
      <Title title = {title2}/>
      <div>{anecdotes[indexMostVoted]}</div>

    </div>
  )
}

export default App