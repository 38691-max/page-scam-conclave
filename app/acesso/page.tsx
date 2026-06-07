"use client";

import { AlertTriangle } from "lucide-react";
import LogoRDS from "@/public/rds.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Auth } from "firebase/auth";

interface EmailData {
  email: string;
}

export default function AcessoPage() {
  const [emails, setEmails] = useState<EmailData[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "emails"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => doc.data() as EmailData);

      setEmails(lista);
    });

    return () => unsub();
  }, []);

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

        {emails.length > 0 && (
          <div className="w-72 bg-red-500 p-4 rounded text-white">
            <h1 className="font-bold mb-2">
              Emails dos usuários:
            </h1>

            <ul className="space-y-1">
              {emails.map((item, index) => (
                <li key={index}>
                  {item.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}