"use client";

import StepperForm from "@/components/stepper-form";
import { starterFormSteps } from "@/constants/starter-form-questions";
// import { formSteps } from "@/constants/form-questions";

export default function StarterPage() {
  // const formSteps: StepDef[] = [
  //   {
  //     title: "Personal Information",
  //     fields: [
  //       { name: "firstName", label: "First Name", type: "text", required: true },
  //       { name: "lastName", label: "Last Name", type: "text", required: true },
  //       { name: "email", label: "Email Address", type: "email", required: true },
  //     ],
  //   },
  //   {
  //     title: "Project Details",
  //     fields: [
  //       {
  //         name: "projectType",
  //         label: "What type of project is this?",
  //         type: "radio",
  //         required: true,
  //         options: [
  //           { label: "Web Application", value: "web" },
  //           { label: "Mobile App", value: "mobile" },
  //           { label: "Other", value: "other" },
  //         ],
  //       },
  //       {
  //         name: "description",
  //         label: "Project Description",
  //         type: "textarea",
  //         required: true,
  //       },
  //     ],
  //   },
  // ];

  const handleComplete = (data: Record<string, string>) => {
    console.log("Form submitted successfully:", data);
    // Submit to your API here
  };

  return (
    <div className="container min-h-screen py-12">
      <StepperForm steps={starterFormSteps} onSubmit={handleComplete} />
    </div>
  );
}
