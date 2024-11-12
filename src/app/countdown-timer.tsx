"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

type CountdownTimerProps = {
  targetDate: string;
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = React.useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card
          key={unit}
          className="bg-purple-900/30 backdrop-blur-sm border-purple-500/50"
        >
          <CardContent className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">
              {value}
            </div>
            <div className="text-purple-200 text-sm uppercase tracking-wide">
              {unit}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
