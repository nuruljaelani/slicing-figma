import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row max-w-5xl mx-auto py-4 items-center justify-between px-4 md:px-8 lg:px-0">
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-orange-500">
          Toko Ikan
        </p>
        <div className="flex space-x-2 md:space-x-4 lg:space-x-10 text-sm md:text-base">
          <p className="text-orange-500 font-medium">Beranda</p>
          <p>Keunggulan</p>
          <p>Fitur Aplikasi</p>
          <p>Testimonial</p>
        </div>
        <button
          type="button"
          className="text-white font-medium bg-red-600 rounded-lg py-2 px-4 hidden md:block"
        >
          Download
        </button>
      </nav>
    </>
  )
}

export default Nav