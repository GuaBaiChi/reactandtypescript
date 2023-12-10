import { ReactNode } from "react"

export type CourseGoalProps = {
  id: number;
  title: string,
  description?: string,
  children?: ReactNode
  onDelete: (id: number) => void
}

export default function CourseGoal({ title, id, description, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}
