import React from 'react'
import checkSVG from '../../assets/check.svg'
import desktopImage from '../../assets/Desktop.png'
import rectangle30 from '../../assets/Rectangle 30.png'
import rectangle from '../../assets/Section4Rectangle (2).png'
import rectangle2 from '../../assets/Section4Rectangle (1).png'
import rectangle3 from '../../assets/Section4Rectangle (3).png'
import rectangle4 from '../../assets/Section4Rectangle (4).png'
import rectangle5 from '../../assets/Section4Rectangle (5).png'
const Section4 = () => {
  return (
    <div className="section__4 lg:px-[80px] py-[160px] flex justify-center items-center lg:block overflow-hidden ">
    <div className='lg:p-[80px] flex items-center w-[393px] h-[689px] lg:w-[1280px] lg:h-[470px] flex-col lg:flex-row justify-center lg:justify-between gap-[80px] rounded-[30px] bg-white [box-shadow:0px_0px_10px_0px_#00000012] [box-shadow:0px_20px_25px_-5px_#0000001A]'>
      <div className='flex flex-col gap-6 items-center lg:items-start'>
        <p className='text-[#0F172A] text-[32px] lg:text-[52px] font-extrabold'>Why join us</p>
        <div className='flex flex-col gap-1'>
          <p className='flex gap-2 lg:items-center'><img src={checkSVG} alt="Check SVG" />Est et in pharetra magna adipiscing ornare aliquam.</p>
          <p className='flex gap-2 lg:items-center'><img src={checkSVG} alt="Check SVG" />Tellus arcu sed consequat ac velit ut eu blandit.</p>
          <p className='flex gap-2 lg:items-center'><img src={checkSVG} alt="Check SVG" />Ullamcorper ornare in et egestas dolor orci.</p>
        </div>
        <button className='w-[179px] h-[56px] border-2 border-[#78350F] rounded-lg text-[#78350F] font-medium text-xl'>Sign up now</button>
      </div>
      <div className='flex relative'>
        <img src={desktopImage} alt="Desktop Image" className='w-[520px] h-[350px] z-40 object-contain' />
        <img src={rectangle30} alt="Rectangle Icon"  className='absolute -top-[90px] '/>
        <img src={rectangle} alt="Rectangle Icon"  className='absolute -top-[70px] right-[20px] lg:-top-[90px] lg:right-[60px]'/>
        <img src={rectangle2} alt="Rectangle Icon"  className='absolute top-[230px] -right-[10px] lg:top-[250px] lg:-right-[120px] w-[134px] h-[134px] lg:w-[218px] lg:h-[218px]'/>
        <img src={rectangle3} alt="Rectangle Icon"  className='absolute top-[230px] right-[70px] lg:top-[260px] lg:right-[60px] rounded-full lg:rounded-none'/>
        <img src={rectangle4} alt="Rectangle Icon"  className='absolute top-[60px] lg:top-[20px] lg:right-[430px] rounded-full lg:rounded-none w-[55px] h-[55px] lg:w-[90px] lg:h-[90px] '/>
        <img src={rectangle5} alt="Rectangle Icon"  className='absolute top-[240px] right-[250px] lg:top-[270px] lg:right-[330px] z-50 w-[50px] h-[50px] lg:w-[85px] lg:h-[85px]'/>
      </div>
      
    </div>
  </div>
  )
}

export default Section4