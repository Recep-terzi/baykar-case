import React from 'react'
import map from '../../assets/map.png'
import col from '../../assets/col.png'
import chart from '../../assets/chart.png'
const Section6 = () => {
  return (
    <div className="bg-[#78350F] lg:p-[80px] flex items-center justify-center relative flex-col lg:flex-row  ">
        <img src={map} alt="Map Image" className='opacity-[50%] hidden lg:block'/>
        <img src={chart} alt="Map Image" className='opacity-[50%] w-[100%] block lg:hidden'/>
        <p className='flex flex-col  absolute left-0 right-0 bottom-0 top-0 m-auto lg:w-[1280px] lg:h-[176px] items-center justify-center text-center font-extrabold text-[48px] lg:text-[96px] text-[#FFFBEB]'>11,658,467<span className='text-[32px] lg:text-[56px]'>Shoes Collected</span></p>
        <img src={col} alt="Cool Shoes Image" className='absolute top-[10px] left-0 right-0 m-auto lg:top-[20px] lg:-left-[700px]' />
        <div className='w-4 h-4 border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[630px] top-[140px] hidden lg:block'></div>
        <div className='w-[30px] h-[30px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[356px] top-[199px] lg:left-[544px] lg:top-[250px] '></div>
        <div className='w-[24px] h-[24px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[230px] top-[330px] lg:left-[406px] lg:top-[380px] '></div>
        <div className='w-[16px] h-[16px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[587px] top-[550px] hidden lg:block'></div>
        <div className='w-[24px] h-[24px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[356px] top-[550px] lg:left-[540px] lg:top-[580px] '></div>
        <div className='w-[24px] h-[24px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[1126px] top-[570px] hidden lg:block'></div>
        <div className='w-[24px] h-[24px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[1001px] top-[421px] hidden lg:block'></div>
        <div className='w-[25px] h-[25px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[790px] top-[530px] hidden lg:block'></div>
        <div className='w-[16px] h-[16px] border-[3px] border-[#A3E635] z-30 rounded-full border-solid absolute left-[1112px] top-[401px] hidden lg:block'></div>
    </div>
  )
}

export default Section6