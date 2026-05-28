import { AlertTriangle } from "lucide-react";
import LogoRDS from "@/public/rds.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-amber-50 gap-10">
      <AlertTriangle size={100} color="red" />
      <h1 className="text-3xl text-blue-600 w-96"><strong>Atenção</strong>, Você acaba de cair num golpe de estelionato do grupo Conclave!!</h1>
      <Image src={LogoRDS} alt="RDS" />
    </div>
  );
}
