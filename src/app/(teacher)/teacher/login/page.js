"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { teacherAuth, teacherLogin } from "@/functions/teacher";

function TeacherLogin() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    console.log(event);
    setLoading(true);
    try {
      const res = await teacherLogin({ id: username, password });
      if (res) {
        if (res.status == 200) {
          push("/teacher/dashboard");
        } else {
          setError(res.data.error);
        }
      }
    } catch (error) {
      console.log("Error:", error.response.data.error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center px-20 py-16 rounded-lg bg-primary  dark:bg-dark_sec gap-4"
      >
        <h1 className=" font-medium text-2xl">CISL Teacher Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <Input
          type="name"
          placeholder="Id"
          value={username}
          onChange={(event) => [setUsername(event.target.value)]}
        />
        <Input
          placeholder="Password"
          type={"password"}
          value={password}
          onChange={(event) => [setPassword(event.target.value)]}
        />
        <Button
          type="submit"
          variant="default"
          // onClick={}
          disabled={loading}
          className="w-full px-4 flex items-center justify-center"
        >
          {!loading ? (
            <p>Login</p>
          ) : (
            <ReloadIcon className="h-4 w-4 animate-spin" />
          )}
        </Button>
      </form>
    </div>
  );
}

export default TeacherLogin;
