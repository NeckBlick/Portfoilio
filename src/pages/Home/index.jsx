import React, { useEffect } from "react";
import Header from "../../components/Header";
import Typed from "react-typed";
import {
  BsLinkedin,
  BsGithub,
  BsFillArrowUpCircleFill,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "../../assets/Gaming-rafiki.png";
import CardProjetos from "../../components/CardProjetos";
import SliderTecnologias from "../../components/SliderTecnologias";
import HydeDesk from "../../assets/hydeDesk.jpg";
import Financas from "../../assets/financas.jpg";
import Calculadora from "../../assets/carnes.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <BsFillArrowUpCircleFill
        size={50}
        color="#1d4ed8"
        className="fixed right-10 bottom-10 cursor-pointer hover:scale-110 z-50 "
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
      />
      <main>
        <section className="w-full lg:h-[50rem] sm:mt-8">
          <div className="px-8 w-full h-full lg:flex lg:flex-row sm:flex-col">
            <div className="h-full p-2 lg:w-2/4 sm:w-full flex flex-col gap-8 justify-center items-center">
              <Typed
                className="text-4xl font-medium w-2/3"
                strings={[
                  "Bem-vindo ao meu portfólio",
                  "Eu sou desenvolvedor Front-End",
                  "Eu sou apaixonado por programação desde pequeno",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
              <p className="text-justify text-lg w-2/3">
                Sou estudante de Desenvolvimento de Sistemas no SENAI e de
                Análise e Desenvolvimento de Sistemas na Universidade Anhembi
                Morumbi, apaixonado por tecnologia e programação. Estou em busca
                de uma oportunidade para ingressar no mercado de trabalho como
                Desenvolvedor(a), seja em estágio ou posição júnior.
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Entre em contato:</h1>
                <div className="flex gap-2 m-auto">
                  <a
                    href="https://www.linkedin.com/in/dev-nicolas-gomes-/"
                    target="blank"
                  >
                    <BsLinkedin size={35} color="#1d4ed8" />
                  </a>
                  <a href="https://github.com/NeckBlick" target="blank">
                    <BsGithub size={35} />
                  </a>
                  <a href="mailto:nicolasgomesleal@hotmail.com" target="blank">
                    <MdEmail size={35} />
                  </a>
                  <a href="https://wa.me/5511962610356" target="blank">
                    <BsWhatsapp size={35} color="#25D366" />
                  </a>
                </div>
              </div>
            </div>
            <div className="h-full lg:w-2/4 sm:w-full flex justify-center items-center">
              <img src={Image} alt="" width={600} height={600} />
            </div>
          </div>
        </section>{" "}
        {/* Capa da pagina */}
        <section className="w-full mt-14 flex flex-col " id="skills">
          <div className="flex flex-col justify-center  mx-auto">
            <h1 className="text-4xl font-semibold ">Tecnologias</h1>
            <div className="w-[8rem] h-1 bg-blue-700 -mt-0.5"></div>
            <div className="w-[6rem] h-1 bg-blue-500 mt-0.5"></div>
          </div>
          <div className="mt-6 p-4">
            <SliderTecnologias />
          </div>
        </section>{" "}
        {/* Tecnologias */}
        <section className="w-full mt-14 py-6 flex flex-col items-center" id="principais">
          <div className="flex flex-col justify-center mx-auto w-96">
            <h1 className="text-4xl font-semibold ">Principais Projetos</h1>
            <div className="w-[6rem] h-1 bg-blue-700 -mt-0.5"></div>
            <div className="w-[4rem] h-1 bg-blue-500 mt-0.5"></div>
          </div>
          <div className="mt-6 p-4 mx-auto flex lg:flex-row sm:flex-col md:flex-wrap items-center justify-center gap-4 ">
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
          </div>{" "}
          <Link to="/projetos" className="text-blue-800 border-blue-900 border-2 hover:bg-white/70 text-center px-6 py-4 font-bold text-xl rounded-lg">Ver mais</Link>
          {/* Principais projetos */}
        </section>
      </main>
     <Footer/>
    </>
  );
}

{
  /*  */
}
