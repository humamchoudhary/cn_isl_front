import { adminAuth } from "@/functions/admin";
import React from "react";

function AdminIndex() {
  console.log(adminAuth());
  return <div>AdminIndex</div>;
}

export default AdminIndex;
