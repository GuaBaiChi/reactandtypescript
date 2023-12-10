import CourseGoal from "./components/CourseGoal";
// import goals.jpg from '../public/goals'
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import { StringDecoder } from "string_decoder";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'learn react + TS',
        description: 'learn it in depth!'
      };
      return [...prevGoals,]
    })
  }


  return <main>
    <Header image={{ src: goalsImage, alt: "A list of goals" }}>
      <h1> Your Course Goals</h1>
    </Header>
    <button onClick={handleAddGoal}>Add Goal</button>
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            title="Learn React + TS"
          // description="Learn it from the ground up"
          >
            <p>Learn it from the ground up</p>
            {/* <p>This is children</p> */}
          </CourseGoal>
        </li>
      ))}
    </ul>
  </main >;
}
