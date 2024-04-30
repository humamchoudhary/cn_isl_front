
import React from "react";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import ResearchFellows from "@/components/ResearchFellows";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
    <Hero />
    <About />
    <Team />
    <ResearchFellows/>
    <Publications/>
    <Contact/>
    </main>
  )
}
