import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import CardTecnologias from '../CardTecnologias';
import {  AiFillGithub,AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiReact,
  SiMicrosoft,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import {
    BsFillDatabaseFill,
  } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import {FaCss3Alt} from 'react-icons/fa'


export default function SliderTecnologias() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <Slider {...settings} className=" flex justify-center items-center ml-2 cursor-grab active:cursor-grabbing">
        <CardTecnologias
                title="HTML"
                icon={<AiFillHtml5 size={80} />}
                description="HTML é a linguagem de marcação padrão utilizada para criar páginas na internet. 
                Com o HTML, os desenvolvedores podem definir a estrutura e o conteúdo de uma página web, usando uma 
                série de elementos e tags que permitem inserir texto, imagens, vídeos, links, formulários e outros elementos 
                interativos. "
              />
        <CardTecnologias
                title="CSS" 
                icon={<FaCss3Alt size={80} />}
                description="CSS é uma linguagem de estilo utilizada para definir a aparência visual de uma página web criada 
                com HTML. Com o CSS, os desenvolvedores podem definir o layout, as cores, as fontes, os tamanhos e outras 
                propriedades visuais de elementos HTML, permitindo criar páginas web mais estilizadas e atraentes. "
              />
        <CardTecnologias
                title="JavaScript"
                icon={<SiJavascript size={80} />}
                description="JavaScript é uma linguagem de programação de alto nível, dinâmica e interpretada, 
              que é amplamente utilizada para criar páginas da web interativas e dinâmicas. 
              Ela é uma das tecnologias mais populares no desenvolvimento web atual e é suportada por todos os principais navegadores."
              />
              <CardTecnologias
                title="ReactJs"
                icon={<SiReact size={80} />}
                description="React é uma biblioteca de JavaScript de código aberto utilizada para construir interfaces de usuário (UI) para aplicativos da web. 
              Ela foi criada pelo Facebook e é amplamente utilizada em projetos de desenvolvimento web de todos os tamanhos e complexidades."
              />
              <CardTecnologias
                title="NodeJs"
                icon={<GrNode size={80} />}
                description="Node.js é uma plataforma de desenvolvimento de software de código aberto que permite que os desenvolvedores criem aplicativos 
              de servidor usando JavaScript. Ele é construído sobre o motor V8 JavaScript do Google Chrome e permite que os desenvolvedores usem JavaScript 
              tanto no lado do servidor quanto no lado do cliente."
              />
              <CardTecnologias
                title="Banco de dados"
                icon={<BsFillDatabaseFill size={80} />}
                description="Banco de dados é um sistema que permite armazenar, gerenciar e recuperar informações de forma estruturada e organizada. 
              Ele é utilizado em diversas aplicações, desde pequenas soluções de gerenciamento de dados até sistemas complexos de processamento de informações"
              />
              <CardTecnologias
                title="Git"
                icon={<BiGitBranch size={80} />}
                description="Git é um sistema de controle de versão distribuído que permite que desenvolvedores rastreiem alterações em seu código fonte ao 
              longo do tempo. Ele foi criado por Linus Torvalds em 2005 e é usado por milhões de desenvolvedores em todo o mundo para gerenciar projetos de 
              software."
              />
              <CardTecnologias
                title="GitHub"
                icon={<AiFillGithub size={80} />}
                description="GitHub é uma plataforma de hospedagem de código fonte baseada em nuvem que permite que os desenvolvedores compartilhem e colaborem 
              em projetos de software em equipe. Ele fornece um repositório centralizado para armazenar o código fonte de um projeto e fornece recursos de 
              gerenciamento de versão, rastreamento de problemas e gerenciamento de projetos."
              />
              <CardTecnologias
                title="Figma"
                icon={<FiFigma size={80} />}
                description="Figma é uma ferramenta de design de interface do usuário baseada em nuvem que permite que os designers criem e compartilhem 
              interfaces de usuário para aplicativos da web e móveis. Ele oferece recursos de design colaborativo em tempo real, o que significa que várias 
              pessoas podem trabalhar no mesmo projeto simultaneamente, independentemente da localização."
              />
              <CardTecnologias
                title="Azure"
                icon={<SiMicrosoft size={80} />}
                description="Azure é uma plataforma de computação em nuvem criada pela Microsoft que oferece serviços de infraestrutura como serviço (IaaS), 
              plataforma como serviço (PaaS) e software como serviço (SaaS). Ela permite que empresas e desenvolvedores criem, implantem e gerenciem 
              aplicativos e serviços em uma rede global de data centers da Microsoft."
              />
    </Slider>
  )
}