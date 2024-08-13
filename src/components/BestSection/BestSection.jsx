import React from 'react'

import bestOf1 from '../../assets/bestOf1.png'
import bestOf2 from '../../assets/bestOf2.png'
import bestOf3 from '../../assets/bestOf3.png'
import shoppingCardSvg from '../../assets/shopping-cart.svg'
import bestOfRectangle from '../../assets/bestOfRectangle (1).png'
import bestOfRectangle2 from '../../assets/bestOfRectangle (2).png'
import bestOfRectangle3 from '../../assets/bestOfRectangle (3).png'
import bestOfRectangle4 from '../../assets/bestOfRectangle (4).png'
import bestOfRectangle5 from '../../assets/bestOfRectangle (5).png'

const BestSection = () => {
    const bestOfCard = [
        {
          id: 1,
          image: bestOf1,
          title: 'Title',
          description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        },
        {
          id: 2,
          image: bestOf2,
          title: 'Title',
          description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        },
        {
          id: 3,
          image: bestOf3,
          title: 'Title',
          description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        }
      ]
  return (
    <div className=" bg-[#0F172A] p-[80px] h-[1839px] lg:h-[776px] flex flex-col text-white relative">
        <img src={bestOfRectangle} alt="Rectangle Icon"  className='absolute left-[0] bottom-[316px] top-[1372px] lg:left-[45px] lg:bottom-[105px] lg:top-[400px] '/>
        <img src={bestOfRectangle2} alt="Rectangle Icon" className='absolute left-[801px] bottom-[128px] top-[518px] hidden lg:block'/>
        <img src={bestOfRectangle3} alt="Rectangle Icon" className='absolute right-[60px] bottom-[287px] top-[257px] hidden lg:block'/>
        <img src={bestOfRectangle4} alt="Rectangle Icon" className='absolute left-[262px] lg:left-[502px] bottom-[764px] top-[854px] lg:bottom-[422px] lg:top-[200px] '/>
        <img src={bestOfRectangle5} alt="Rectangle Icon" className='absolute left-[36px] bottom-[1023px] top-[513px]  lg:left-[1030px] lg:bottom-[56px] lg:top-[480px]'/>
    <div className="mb-8 lg:mb-[80px] flex justify-between items-center flex-col lg:flex-row">
      <div className="font-extrabold text-[32px] lg:text-[56px] whitespace-nowrap mb-8 lg:mb-0">
        The best of the best
      </div>
      <p className='px-6 py-4 text-[24px] font-bold border-2 border-white rounded-lg w-[233px] h-[64px] flex items-center justify-center'>Sign up now</p>
    </div>
    <div className='flex gap-12 flex-col lg:flex-row items-center justify-center'>
    {
      bestOfCard.map(card => (
        <div className=' z-40 w-[361px] lg:w-[394px] h-[472px] flex flex-col border-[#0F172A] bg-[#0F172A] border-1 rounded-[10px] [box-shadow:0px_0px_15px_0px_#FFFFFF12] [box-shadow:0px_25px_50px_-12px_#FFFFFF40]'>
          <img src={card.image} alt="Card Image" className='w-[100%] rounded-tl-[4px] rounded-tr-[4px]' />
          <div className='pt-[32px] pr-[32px] pb-[0px] pl-[32px]'>
            
          <p className='font-bold text-2xl mb-4'>{card.title}</p>
          <p className='font-normal text-lg mb-8'>{card.description}</p>
          </div>
          <button className='flex w-[330px] h-[56px] items-center justify-center gap-2 font-medium text-xl border-2 rounded-lg mx-auto'>
            <img src={shoppingCardSvg} alt="Shopping card SVG" />
            Buy Now
          </button>
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default BestSection