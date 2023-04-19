import React from 'react'

export default function CardProjetos({title, description, Image, link}) {
  return (
    <div className='flex flex-col justify-between gap-4 p-2 lg:w-[22rem]  lg:h-[28rem] md:w-[20rem] shadow-lg rounded-md sm:w-2/4'>
      <img src={Image} alt="Imagem do projeto" className='w-full h-48 bg-cover' />
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p className='text-justify'>{description}</p>
      <a href={link} target='blank' className='bg-blue-700 hover:bg-blue-900 text-center px-2 py-1 font-bold text-lg rounded-lg text-white'>Vizualizar projeto</a>
    </div>
  )
}
