import React, { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handelSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    event.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSummary)
  }

  return <form onSubmit={handelSubmit}>
    <p>
      <label>Your goal</label>
      <input id="goal" type="text" ref={goal}></input>
    </p>
    <p>
      <label htmlFor="summary"> Short summary</label>
      <input id="summary" type="text" ref={summary}></input>
    </p>
    <p>
      <button>Add Goal</button>
    </p>
  </form>
}