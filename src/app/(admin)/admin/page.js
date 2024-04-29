"use client";
import { adminAuth } from "@/functions/admin";
import { useRouter } from "next/navigation";
import React from "react";

function AdminIndex() {
  const { push } = useRouter();
  adminAuth().then((data) => {
    if (!data) {
      push("/admin/login");
      // redirect("http://localhost:3000/", RedirectType.push);
    }
  });
  return <div>AdminIndex</div>;
}

export default AdminIndex;
