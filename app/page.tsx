"use client";

import Image from "next/image";
import LogoRDS from "@/public/rds.png";
import { AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col bg-amber-50">
      <div className="w-full min-h-max flex flex-col md:flex-row items-center justify-center gap-10 p-4">

        <AlertTriangle size={100} color="red" />

        <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-600 text-center md:text-left max-w-md">
          <strong>Atenção</strong>, Você acaba de cair num golpe de estelionato do grupo Conclave!!
        </h1>

        <Image
          src={LogoRDS}
          alt="RDS"
          className="w-40 md:w-56 h-auto"
        />
      </div>
    </div>
  );
}