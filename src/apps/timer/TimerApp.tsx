import AddTimer from './timerComponents/AddTimer';
import Header from './timerComponents/Header';
import Timers from './timerComponents/Timers';
import TimersContextProvider from './store/timers-context';
import './TimerApp.css'

function TimerApp() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default TimerApp;
