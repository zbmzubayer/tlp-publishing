"use client";

import StepperForm from "@/components/stepper-form";
import { launchpadFormSteps } from "@/constants/launchpad-form-questions";

export default function LaunchPadPage() {
  const handleComplete = (data: Record<string, string>) => {
    console.log("Form submitted successfully:", data);
    // Submit to your API here
  };

  return (
    <div className="container min-h-screen py-12">
      <StepperForm steps={launchpadFormSteps} onSubmit={handleComplete} />
    </div>
  );
}
