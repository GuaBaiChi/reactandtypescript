import React from 'react';
import CourseGoal from './CourseGoal'
import { CourseGoal as CGoal } from '../App'

type CourseGoalListProps = {
  goals: CGoal[],
  onDeleteGoal: (id: number) => void
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))
      }
    </ul>
  )
}

// export default function CourseGoalList(props: CourseGoalListProps) {
//   return (
//     <ul>
//       {props.goals.map((goal) => (
//         <li key={goal.id}>
//           <CourseGoal id={goal.id} title={goal.title} onDelete={props.onDeleteGoal}>
//             <p>{goal.description}</p>
//           </CourseGoal>
//         </li>
//       ))
//       }
//     </ul>
//   )
// }