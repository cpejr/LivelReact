import moment from 'moment'
import './Clock.css'
import Timer, { Hours, Minutes, Seconds } from 'react-compound-timer'

export default function Clock({ startTime, onFinish }) {
  const initialTime = moment(startTime, 'h:mm:ss')
  initialTime.subtract(moment().valueOf(), 'millisecond')
  return (
    <Timer
      initialTime={initialTime.valueOf()}
      direction="backward"
      checkpoints={[
        {
          time: 2000,
          callback: () => {
            const time = moment(startTime, 'h:mm:ss')
            time.subtract(moment().valueOf(), 'millisecond')
            if (time.valueOf() > 0) onFinish()
          },
        },
      ]}
    >
      <div className="clockCountdownTraining">
        <Timer.Hours />:
        <Timer.Minutes />:
        <Timer.Seconds />
      </div>
    </Timer>
  )
}
