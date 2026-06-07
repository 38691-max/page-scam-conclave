"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const salvarEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      await addDoc(collection(db, "emails"), {
        email,
        createdAt: new Date(),
      });

      setEmail("");

      router.push("/acesso");
    } catch (error) {
      console.error("Erro ao salvar email:", error);
    }
  };

  return (
    <form
      onSubmit={salvarEmail}
      className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-white"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        className="border p-2 rounded text-black"
      />

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded text-white"
      >
        Entrar
      </button>
    </form>
  );
}