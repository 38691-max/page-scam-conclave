"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [email, setEmail] = useState("");

  // 💾 salvar email
  const salvarEmail = async () => {
    if (!email) return;

    await addDoc(collection(db, "emails"), {
      email,
      createdAt: new Date(),
    });

    setEmail("");
  };

  return (
    <form action="/acesso" className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        className="border p-2 rounded text-black"
      />

      <button
        onClick={salvarEmail}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Entrar
      </button>
    </form>
  );
}