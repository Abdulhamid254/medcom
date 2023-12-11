import Image from 'next/image'
import Link from 'next/link'
import { Bars4Icon } from '@heroicons/react/24/solid'



function Header() {
  return (
    <header className='flex  flex-col '>
      <div className='flex items-center bg-medics_blue justify-between p-1 py-2 flex-grow'>
      <Link href="/" className='flex items-center space-x-2'>
        <div className='bg-[#4f4f50] w-fit cursor-pointer'>
          <Image src="/logo.png" alt='logo' className='invert' height={50} width={50}/>

        </div>
        <h1 className='font-bold text-xl text-white'>Saida Medical Supplies</h1>
      </Link>

      <div className='text-white flex items-center text-xs space-x-2 mx-6 whitespace-nowrap'>
        <div className='link'>
          <p className='font-extarbold md:text-sm'>Home</p>
        </div>

        <div className='link'>
          <p className='font-extarbold md:text-sm'>About Us</p>
        </div>

        <div className='link'>
          <p className='font-extarbold md:text-sm'>Our Products</p>
        </div>

        <div className='link'>
          <p className='font-extarbold md:text-sm'>News</p>
        </div>

        <div className='link'>
          <p className='font-extarbold md:text-sm'>Contact Us</p>
        </div>  
      </div>
      </div>


      {/* Bottom nav */}
      <div className='flex items-center space-x-3 pl-6 p-2 bg-medics_blue-light text-white text-sm' >
        <p className='link flex items-center'>
          <Bars4Icon className='h-6 mr-1'/>
          All Categories
        </p>
        <p className='link hidden lg:inline-flex'>Radiology Equipment</p>
        <p className='link hidden lg:inline-flex'>Theatre Equipment</p>
        <p className='link hidden lg:inline-flex'>Lab Equipment</p>
        <p className='link hidden lg:inline-flex'>Dental Equipment</p>
        <p className='link hidden lg:inline-flex'>Opthamology Equipment</p>
        <p className='link hidden lg:inline-flex'>Hospital Furniture</p>
        <p className='link hidden lg:inline-flex'>Theatre Furniture</p>
      </div>
    </header>  
  )
}

export default Header