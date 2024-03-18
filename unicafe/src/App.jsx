import { useState } from 'react'


const Title = (props) => (
  <h2>{props.text}</h2>
);

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='Total' value={total} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive + "%"} />
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title1 = "give feedback"
  const title2 = "statistics"

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Title text = {title1}/>
      <Button handleClick={handleGood} text = 'Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <Title text = {title2} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App