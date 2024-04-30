"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddReservationPage() {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    recursive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");
      } else {
        console.error("Error submitting form data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <Input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          placeholder="Start Time"
        />
        <Input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          placeholder="End Time"
        />
        <Checkbox
          name="recursive"
          checked={formData.recursive}
          onCheckedChange={(checked) => {
            console.log(checked);
            setFormData((prevFormData) => ({
              ...prevFormData,
              recursive: checked,
            }));
          }}
        >
          Recursive
        </Checkbox>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
