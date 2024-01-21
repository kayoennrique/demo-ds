"use client";
import { Button, Input, Link, Typograph } from "designsystem-alfabit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center text-gray-950 bg-gray-800">
        <Typograph element="h3" size="title3" className="font-black text-white">
          Login
        </Typograph>
        <Input label="Email" className="outline-none w-96" />
        <Input label="Senha" className="outline-none w-96" />
        <Button variant="primary">Clique aqui</Button>
        <Link href="#">Esqueceu sua senha? Clique aqui!</Link>
      </div>
    </main>
  );
}