import { useEffect, useState } from "react";

export const useCountUp = (end, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const current = Math.min((progress / duration) * end, end);
      setValue(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return value;
};