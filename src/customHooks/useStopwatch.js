import { useState, useEffect } from "react";

export const useStopwatch = (delay) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${interval}`);
      setTime((prev) => prev + 1);
    }, delay);
    return clearInterval(interval);
  });
};
