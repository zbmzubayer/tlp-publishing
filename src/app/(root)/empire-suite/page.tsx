"use client";

import StepperForm from "@/components/stepper-form";
import { empireSuiteFormSteps } from "@/constants/empire-suite-form-questions";

export default function EmpireSuitePage() {
  const handleComplete = (data: Record<string, string>) => {
    console.log("Form submitted successfully:", data);
    // Submit to your API here
  };

  return (
    <div className="container min-h-screen py-12">
      <StepperForm steps={empireSuiteFormSteps} onSubmit={handleComplete} />
    </div>
  );
}
