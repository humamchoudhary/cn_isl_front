"use client";
import { adminAuth } from "@/functions/admin";
import { useRouter } from "next/navigation";
import React from "react";

function AdminIndex() {
  const { push } = useRouter();
  adminAuth().then((data) => {
    if (!data) {
      push("/teacher/login");
      // redirect("http://localhost:3000/", RedirectType.push);
    } else {
      push("/teacher/dashboard");
    }
  });
  return <div></div>;
}

export default AdminIndex;
