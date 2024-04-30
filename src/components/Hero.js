import React from "react";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Container from "./Container";


export default function Hero() {
  return (
   <Container>
    <div id="home" className="mx-auto max-w-3xl py-30 sm:py-48 lg:py-52">
      
      <div className="text-center">
        <h1 className="text-4xl leading-6 font-bold tracking-tight text-dark sm:text-6xl">
        CYBER AND INFORMATION SECURITY LAB (CISL)
        </h1>
        <p className="mt-6 text-lg leading-8 text-dark_sec">
          Kuch b daal de humam neend arhi mjhe. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-prim px-3.5 py-2.5 text-medium font-bold text-light shadow-sm hover:bg-dark  duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prim"
          >
            Reserve Now
          </a>
          <a href="#" className="text-medium font-bold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    </Container>
  )
}
