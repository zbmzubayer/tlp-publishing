"use client";

import StepperForm from "@/components/stepper-form";
import { spotlightFormSteps } from "@/constants/spotlight-form-questions";

export default function SpotlightPage() {
  const handleComplete = (data: Record<string, string>) => {
    console.log("Form submitted successfully:", data);
    // Submit to your API here
  };

  return (
    <div className="container min-h-screen py-12">
      <StepperForm steps={spotlightFormSteps} onSubmit={handleComplete} />
    </div>
  );
}
