import { useState } from "react";

import Header from "./goalComponents/Header";
import CourseGoalList from './goalComponents/CourseGoalList'
import CourseGoal from "./goalComponents/CourseGoal";
import NewGoal from "./goalComponents/NewGoal";

import './GoalApp.css';
import goalsImage from "./goalAssets/goals.jpg";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function GoalApp() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }


  return <main>
    <Header image={{ src: goalsImage, alt: "A list of goals" }}>
      <h1> Your Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal} />
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
  </main >;
}
