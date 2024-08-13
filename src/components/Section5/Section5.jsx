import React from 'react'
import searchIcon from '../../assets/search.svg'
import shieldIcon from '../../assets/shield-check.svg'
import rocketIcon from '../../assets/rocket.svg'
import screenIcon from '../../assets/screen.svg'
import podcastIcon from '../../assets/podcast.svg'
import settingsIcon from '../../assets/settings-alt.svg'
import nextIcon from '../../assets/arrow-right2.svg'
import desktopIcon from '../../assets/Desktop2.png'
import desktopIcon2 from '../../assets/Desktop3.png'
import picture from '../../assets/Picture (3).png'
import vectorImage from '../../assets/Vector 10.png'
import vectorImage2 from '../../assets/Vector 11.png'
import vectorImage3 from '../../assets/Vector 12.png'
import mobileIcon from '../../assets/mobile.png'
import mobileIcon2 from '../../assets/mobile2.png'
const Section5 = () => {
    return (
        <>
            <div className=' lg:mt-[80px] flex flex-col relative h-[722px] lg:h-[996px] lg:items-center text-center lg:text-start'>
                <div className='px-4 lg:px-[80px] z-40'>
                    <p className='font-extrabold text-[32px] lg:text-[56px] text-[#0F172A] mb-8'>Grow your collection</p>
                    <p className='font-normal text-[16px] lg:text-[18px] text-[#0F172A] mb-[80px] w-[361px] lg:w-full m-auto' >Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                    <div className='flex lg:items-center gap-[80px] flex-col lg:flex-row'>
                        <div className='flex flex-row lg:flex-col gap-8 lg:w-auto overflow-scroll lg:overflow-visible  '>
                            <p className='[box-shadow:0px_0px_4px_0px_#00000012] [box-shadow:0px_4px_6px_-1px_#0000001A] w-max lg:w-auto bg-white rounded-lg p-4 flex gap-4 items-center justify-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={searchIcon} alt="Search Icon" />Bibendum tellus <img src={nextIcon} alt="" className="hidden lg:block"/></p>
                            <p className='w-[100%] p-4 flex gap-4 items-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={shieldIcon} alt="Shield Icon" /> Cras eget</p>
                            <p className='w-[100%] p-4 flex gap-4 items-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={rocketIcon} alt="Rocket Icon" /> Dolor pharetra</p>
                            <p className='w-[100%] p-4 flex gap-4 items-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={screenIcon} alt="Screen Icon" /> Amet, fringilla</p>
                            <p className='w-[100%] p-4 flex gap-4 items-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={podcastIcon} alt="Podcast Icon" /> Amet nibh</p>
                            <p className='w-[100%] p-4 flex gap-4 items-center font-medium text-[20px] text-[#0F172A] whitespace-nowrap'><img src={settingsIcon} alt="Settings Icon" /> Sed velit</p>
                        </div>
                        <div className='relative hidden lg:flex'>
                            <img src={desktopIcon2} alt="Desktop Icon" className='w-[294px] lg:w-auto'/>
                            <img src={desktopIcon} alt="Desktop Icon" className='w-[295px] lg:w-auto absolute top-[57px] lg:top-[105px] left-[52px] lg:left-[94px] ' />
                            <img src={picture} alt="Picture Icon" className=' w-[94px] lg:w-auto absolute left-[278px] lg:left-[688px] top-[121px] lg:top-[202px] ' />
                        </div>
                        <div className='flex relative lg:hidden '>
                            <img src={mobileIcon} alt="Mobile Icon" className='w-[294px] lg:w-auto'/>
                            <img src={mobileIcon2} alt="Mobile Icon" className='w-[295px] lg:w-auto absolute top-[57px] lg:top-[105px] left-[52px] lg:left-[94px] ' />
                            <img src={picture} alt="Picture Icon" className=' w-[94px] lg:w-auto absolute left-[278px] lg:left-[688px] top-[121px] lg:top-[202px] ' />
                        </div>
                    </div>
                </div>
                <img src={vectorImage} alt="Vector Image" className='absolute bottom-0  w-full' />
                <img src={vectorImage2} alt="Vector Image" className='absolute bottom-0  w-full' />
                <img src={vectorImage3} alt="Vector Image" className='absolute bottom-0  w-full' />
            </div>

        </>
    )
}

export default Section5