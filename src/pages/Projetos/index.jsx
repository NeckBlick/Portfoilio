import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardProjetos from "../../components/CardProjetos";
import HydeDesk from "../../assets/hydeDesk.png";
import Financas from "../../assets/financas.png";
import Bot from "../../assets/bot.jpeg";
import Calculadora from "../../assets/carnes.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Projetos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
       <BsFillArrowUpCircleFill
        size={50}
        color="#1d4ed8"
        className="fixed right-10 bottom-10 cursor-pointer hover:scale-110 z-50 "
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
      />
      <Header />
      <main className="w-full min-h-screen">
        <div className="mx-auto p-8 flex flex-col ">
          <div className="flex flex-col justify-center lg:ml-14 sm:mx-auto">
            <h1 className="text-4xl font-semibold ">Projetos</h1>
            <div className="w-[6rem] h-1 bg-blue-700 mt-1"></div>
            <div className="w-[4rem] h-1 bg-blue-500 mt-0.5"></div>
          </div>
          <div className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center mt-8">
            <CardProjetos
              title="HydeDesk"
              description="O HydeDesk é um sistema de help desk que facilita o funcionário chamar um técnico, caso haja algum problema."
              Image={HydeDesk}
            />
            <CardProjetos
              title="Controle de Finanças"
              description="O Controle de Finanças é um aplicativo que ajuda o usuário a controlar suas finanças pessoais, podendo adicionar, vizualizar o total de entradas e saídas."
              Image={Financas}
              link="https://aplicativo-de-financas.vercel.app/"
            />
            <CardProjetos
              title="Calculadora de churrasco"
              description="O Carneats calcula a quantidade de carne e bebida necessária para um churrasco a partir da quantidade de pessoas que serão convidadas pelo usuario."
              Image={Calculadora}
              link="https://github.com/NeckBlick/Calculadora-de-churrasco"
            />
            <CardProjetos
              title="ClerkBot"
              description="O ClerkBot é um robo feito para automatizar o envio da mesma mensagem para diversos contatos, no WhatsApp, sem precisar estar no computador para isso."
              Image={Bot}
              link="https://github.com/NeckBlick/ClerkBot"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
