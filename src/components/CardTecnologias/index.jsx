import React from "react";

export default function CardTecnologias({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-6 shadow-lg rounded-md sm:w-full lg:h-96 h-96 lg:w-[30rem] px-4  py-4 overflow-hidden border-2 cursor-grab active:cursor-grabbing sm:ml-6">
      {icon}
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="lg:text-md md:text-sm sm:text-lg text-justify h-56 text-ellipsis overflow-hidden">
        {description}
      </p>
    </div>
  );
}
