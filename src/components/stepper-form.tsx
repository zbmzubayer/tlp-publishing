"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

// --- Types ---
type BaseField = {
  name: string;
  label: string;
  required?: boolean;
};

type InputField = BaseField & { type: "text" | "email" | "number" | "password" };
type TextareaField = BaseField & { type: "textarea" };
type RadioField = BaseField & {
  type: "radio";
  options: { label: string; value: string }[];
};

export type FormFieldDef = InputField | TextareaField | RadioField;

export interface StepDef {
  title: string;
  fields: FormFieldDef[];
}

interface StepperFormProps {
  steps: StepDef[];
  onSubmit: (data: Record<string, string>) => void;
}

// --- Component ---
export default function StepperForm({ steps, onSubmit }: StepperFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const activeStep = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    activeStep.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `Required`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      onSubmit(formData);
    }
  };

  const renderField = (field: FormFieldDef) => {
    const value = formData[field.name] || "";
    const error = errors[field.name];

    return (
      <div key={field.name} className="flex flex-col space-y-2">
        <Label htmlFor={field.name} className={error ? "text-destructive" : ""}>
          {field.label} {field.required && <span className="text-destructive">*</span>}
        </Label>

        {field.type === "textarea" ? (
          <Textarea
            aria-invalid={!!error}
            id={field.name}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        ) : field.type === "radio" ? (
          <RadioGroup
            value={value}
            onValueChange={(val) => handleInputChange(field.name, val)}
            className="mt-2 flex flex-col space-y-1"
          >
            {field.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${field.name}-${option.value}`} />
                <Label
                  htmlFor={`${field.name}-${option.value}`}
                  className="cursor-pointer font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <Input
            aria-invalid={!!error}
            id={field.name}
            type={field.type}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        )}

        {error && <span className="text-destructive text-xs">{error}</span>}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border bg-card p-6 shadow-sm">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-semibold text-xl">{activeStep.title}</h2>
          <span className="text-muted-foreground text-sm">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">{activeStep.fields.map(renderField)}</div>

        {/* Navigation Actions */}
        <div className="flex justify-between border-t pt-4">
          <Button type="button" variant="outline" onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>

          {isLastStep ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
