"use client";
import React from "react";
import { Input } from "@/components/ui/input";
function AdminLogin() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center px-20 py-16 rounded-lg  bg-dark_sec gap-4">
        <h1 className=" font-medium text-2xl">CISL Admin Login</h1>
        <Input type="email" placeholder="Id" />
        <input  />
        <Input hidden={true} type="email" placeholder="Password" />
      </div>
    </div>
  );
}

export default AdminLogin;
