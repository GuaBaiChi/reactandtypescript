import { useEffect, useRef, useState } from 'react';
import Container from './UI/Container';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | NodeJS.Timeout | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current !== null) {
    if (typeof interval.current !== 'number') {
      clearInterval(interval.current);
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;
    } else if (interval.current !== null) {
      if (typeof interval.current !== 'number') {
        clearInterval(interval.current);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}