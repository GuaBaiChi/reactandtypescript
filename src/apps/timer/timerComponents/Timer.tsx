import { useEffect, useRef, useState } from 'react';

import Container from './UI/Container';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isRunning) {
      timer = setInterval(() => {
        if (remainingTime < 50 && remainingTime > 0) {
          // If between 0 - 50 just set to 0
          setRemainingTime((prevTime) => 0);
        } else if (remainingTime <= 0) {
          // Do nothing... Don't go negative
        } else {
          // Adjust timer by 5ms
          setRemainingTime((prevTime) => prevTime - 50);
        }
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current)
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