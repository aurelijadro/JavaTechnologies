import React from "react";
import { useEffect, useReducer, useState } from "react";

// class SelfDestructTimer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       seconds: 10
//     };
//   }

//   componentDidMount() {
//     this.myInterval = setInterval(() => {
//       const { seconds } = this.state;

//       if (seconds > 0) {
//         this.setState(({ seconds }) => ({
//           seconds: seconds - 1
//         }));
//       }
//       //   if (seconds === 0) {
//       //     clearInterval(this.myInterval);
//       //   }
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }

//   tick() {
//     this.setState(state => ({ seconds: state.seconds - 1 }));
//   }

//   render() {
//     const { seconds } = this.state;
//     // const seconds = 1;

//     return (
//       <div>
//         {seconds > 0 ? (
//           <div>
//             <h1>{seconds} </h1>
//           </div>
//         ) : (
//           <div className="red">
//             <h1>{seconds} </h1>
//           </div>
//         )}

//         {/*
//         <div className={seconds < 0 ? "red" : ""}>
//           <h1>{seconds} </h1>
//         </div>
//         */}
//       </div>
//     );
//   }
// }

const random = n => Math.floor(Math.random() * n) + 1;

// function useSecondsGoingDown(initial) {
//   const [seconds, setSeconds] = useState(initial);
//   useEffect(function() {
//     const interval = setInterval(() => {
//       setSeconds(prev => (prev > 0 ? prev - 1 : prev));
//     }, 1000);
//     return () => clearInterval(interval);
//   });
//   return seconds;
// }

function useRerenderEvery(ms) {
  const [, rerender] = useReducer(i => i + 1, 0);
  useEffect(() => {
    const t = setInterval(rerender, ms);
    return () => clearInterval(t);
  });
}

function useSecondsGoingDownWithDates(countdownLength) {
  const [endMs] = useState(Date.now() + countdownLength * 1000);
  const nowMs = Date.now();
  useRerenderEvery(500);
  return Math.round(Math.max(0, (endMs - nowMs) / 1000));
}

export default function SelfDestructTimerSeparateHook() {
  const seconds = useSecondsGoingDownWithDates(5 + random(5));
  return (
    <div>
      <div className={seconds <= 0 ? "red" : ""}>
        <h1>{seconds}</h1>
      </div>
    </div>
  );
}

// function SelfDestructTimerModern() {
//   const [seconds, setSeconds] = useState(5 + random(5));
//   useEffect(function() {
//     const interval = setInterval(() => {
//       setSeconds(prev => (prev > 0 ? prev - 1 : prev));
//     }, 1000);
//     return () => clearInterval(interval);
//   });

//   return (
//     <div>
//       <div className={seconds <= 0 ? "red" : ""}>
//         <h1>{seconds}</h1>
//       </div>
//     </div>
//   );
// }

// function SelfDestructTimerControlled(props) {
//   const { seconds } = props;

//   return (
//     <div>
//       <div className={seconds <= 0 ? "red" : ""}>
//         <h1>{seconds}</h1>
//       </div>
//     </div>
//   );
// }
