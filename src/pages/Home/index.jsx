import React from "react";
import Header from "../../components/Header";
import Typed from "react-typed";
import {
  BsLinkedin,
  BsGithub,
  BsFillArrowUpCircleFill,
  BsFillDatabaseFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiMicrosoft,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Header />
      <BsFillArrowUpCircleFill
        size={50}
        color="#7e22ce"
        className="fixed right-10 bottom-10 cursor-pointer hover:scale-110"
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
      />
      <main>
        <section className="w-full h-[50rem]">
          <div className="px-8 w-full h-full lg:flex lg:flex-row sm:flex-col">
            <div className="h-full p-2 lg:w-2/4 sm:w-full flex flex-col gap-8 justify-center items-center">
              <Typed
                className="text-3xl font-medium"
                strings={[
                  "Seja bem vindo ao meu portfólio",
                  "Eu sou desenvolvedor Full Stack",
                  "Eu sou apaixonado por programação desde pequeno",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
              <p className="text-justify w-2/3">
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
                </div>
              </div>
            </div>
            <div className="h-full lg:w-2/4 sm:w-full flex justify-center items-center">
              Imagem
            </div>
          </div>
        </section>
        <section className="w-full h-[50rem] "  id="sobre">
          {" "}
          {/* Sobre mim*/}
          <div className="px-8 w-full h-full lg:flex lg:flex-row sm:flex-col" >
            <h1 className="text-2xl font-bold mx-auto">Sobre mim</h1>
            <div></div>
          </div>
        </section>
        <section className="w-full bg-yellow-400 p-8" id="skills">
          {" "}
          {/* Skills*/}
          <div className="px-8 w-3/4 mx-auto h-full lg:flex lg:flex-col sm:flex-col gap-2">
            <h1 className="text-3xl font-bold mx-auto mb-10 text-center">
              Skills
            </h1>
            <div className="flex gap-11 lg:gap-6hh justify-center lg:flex-row flex-col ">
              <div className="lg:w-2/4 sm:w-full h-full flex flex-col">
                <h1 className="text-2xl font-semibold mx-auto">Hard skills</h1>
                <ul>
                  <li>
                    <h3 className="text-lg flex gap-2">
                      {" "}
                      <AiFillHtml5 size={30} color="#FC6E51" /> HTML5
                    </h3>
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-3/4"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      {" "}
                      <SiCss3 size={25} color="#0E76A8" /> CSS3
                    </h3>
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[70%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <SiJavascript size={25}  /> JavaScript
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-3/4"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      {" "}
                      <SiReact size={25} /> ReactJs
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-2/3"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      {" "}
                      <GrNode size={25} /> NodeJs
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[60%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <BsFillDatabaseFill size={25} /> Banco de dados
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-2/4"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <SiPython size={25} /> Python
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-3/6"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <SiMicrosoft size={25} /> Microsoft Azure
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-1/3"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <BiGitBranch size={25} /> Git
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[60%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    <h3 className="flex gap-2">
                      <AiFillGithub size={25} />
                      GitHub
                    </h3>{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[60%]"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-2/4 sm:w-full h-full flex flex-col ">
                <h1 className="text-2xl font-semibold mx-auto">Soft skills</h1>
                <ul>
                  <li className="text-lg">
                    Trabalho em equipe{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[90%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    Comunicação eficaz{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[80%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    Flexibilidade{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[80%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    Resiliência{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[85%]"></div>
                    </div>
                  </li>
                  <li className="text-lg">
                    Organização e planejamento{" "}
                    <div className="mb-6 h-[0.6rem] w-full bg-neutral-200">
                      <div className="h-full bg-purple-700 w-[70%]"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

{
  /*  */
}
