"use client";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Globe,
  Play,
  Users,
} from "lucide-react";
import { useState } from "react";

export const ProgressTrackingDemo = () => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const achievements = [
    { name: "First Lesson", completed: progress > 0, icon: BookOpen },
    { name: "5 Lessons", completed: progress > 20, icon: Users },
    { name: "10 Lessons", completed: progress > 40, icon: CheckCircle },
    { name: "Monthly Goal", completed: progress > 60, icon: Calendar },
    { name: "Language Master", completed: progress > 80, icon: Globe },
  ];

  const handleAnimate = () => {
    setIsAnimating(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 50);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-slate-800">
          Progress Tracking
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAnimate}
          disabled={isAnimating}
        >
          <Play className="w-4 h-4 mr-2" />
          {isAnimating ? "Animating..." : "Animate Progress"}
        </Button>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {progress}%
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Overall Learning Progress
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  achievement.completed
                    ? "bg-green-50 border-green-200"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.completed
                        ? "bg-green-500 text-white"
                        : "bg-slate-300 text-slate-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {achievement.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
