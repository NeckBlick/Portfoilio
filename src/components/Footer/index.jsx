import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 flex flex-col">
      <div className="flex gap-2 m-auto py-6">
        <a href="https://www.linkedin.com/in/dev-nicolas-gomes-/" className="" target="blank">
          <BsLinkedin size={35} />
        </a>
        <a href="https://github.com/NeckBlick" className="" target="blank">
          <BsGithub size={35} />
        </a>
        <a href="mailto:nicolasgomesleal@hotmail.com" className="" target="blank">
          <MdEmail size={35} />
        </a>
        <a href="https://wa.me/5511962610356" className="" target="blank">
          <BsWhatsapp size={35}  />
        </a>
      </div>
      <div className="p-2 text-center text-white/80 border-t-[1px] border-t-blue-900/20">
        © 2023 Copyright: Desenvolvedor Nicolas Gomes
      </div>
    </footer>
  );
}
