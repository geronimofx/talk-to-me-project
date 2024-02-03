import Container from "@/components/Container";
import Header from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-[580px] mx-auto w-full h-full flex flex-1 items-center justify-center">
        <Container>
          <div>
            <span>Ingressar</span>
            <span>Nova reunião</span>
          </div>
          <div>
            <Input placeholder="Digite o código da reuniao" type="text" />
            <button>Entrar</button>
          </div>
        </Container>
      </div>
    </main>
  );
}
