import { ReactNode } from "react"

export type CourseGoalProps = {
  title: string,
  description?: string,
  children?: ReactNode
}

export default function CourseGoal({ title, description, children }: CourseGoalProps) {
  // export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        {/* <h2>{props.title}</h2>
        <p>{props.description}</p> */}
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>Delete</button>
    </article>
  )
}
