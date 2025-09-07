"use client";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Users,
  Calendar,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Play,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

// Interactive Demo Components
export const BookingFlowDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "Select Language",
      description: "Choose your preferred interface language",
      icon: Globe,
    },
    {
      title: "Choose Lesson Type",
      description: "Individual, pair, or group lesson",
      icon: Users,
    },
    {
      title: "Pick Time Slot",
      description: "Select available time from calendar",
      icon: Calendar,
    },
    {
      title: "Payment",
      description: "Secure payment via Stripe",
      icon: CreditCard,
    },
    {
      title: "Confirmation",
      description: "Receive booking confirmation",
      icon: CheckCircle,
    },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);
      if (step >= steps.length) {
        clearInterval(interval);
        setIsPlaying(false);
        setCurrentStep(0);
      }
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-slate-800">
          Booking Flow Demo
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePlay}
            disabled={isPlaying}
          >
            <Play className="w-4 h-4 mr-2" />
            {isPlaying ? "Playing..." : "Play Demo"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
            }}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                isActive
                  ? "bg-blue-50 border-2 border-blue-200"
                  : isCompleted
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-slate-50 border-2 border-slate-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-slate-300 text-slate-600"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
              {isActive && (
                <div className="animate-pulse">
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
