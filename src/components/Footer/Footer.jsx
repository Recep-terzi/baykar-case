import React from 'react'
import googlePlay from '../../assets/Google Play.png'
import appleStore from '../../assets/App Store - Filled.png'
import youtubeIcon from '../../assets/youtube.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import worldIcon from '../../assets/world.svg'


const Footer = () => {
  return (
    <div className='flex px-4 py-[48px] lg:p-[80px] pb-0 bg-[#0F172A] text-[#E2E8F0] text-[16px] font-normal flex-col'>
        <div className='flex gap-12 justify-between border-b-[1px] border-[#334155] border-solid pb-[52px] lg:flex-row flex-col items-center text-center lg:items-start lg:text-start'>
            <div className='flex flex-col '>
                <p className='text-white font-medium py-3'>Product</p>
                <p className='py-3'>Pricing</p>
                <p className='py-3'>Overview</p>
                <p className='py-3'>Browse</p>
                <p className='py-3'>Accessibility</p>
                <p className='py-3'>Five</p>
            </div>
            <div className='flex flex-col '> 
                <p className='text-white font-medium py-3'>Solutions</p>
                <p className='py-3'>Brainstorming</p>
                <p className='py-3'>Ideation</p>
                <p className='py-3'>Wireframing</p>
                <p className='py-3'>Research</p>
                <p className='py-3'>Design</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-white font-medium py-3'>Support</p>
                <p className='py-3'>Contact Us</p>
                <p className='py-3'>Developers</p>
                <p className='py-3'>Documentation</p>
                <p className='py-3'>Integrations</p>
                <p className='py-3'>Reports</p>
            </div>
            <div className='flex flex-col  items-center lg:items-start'>
                <p className='text-white font-medium py-3'>Get the App</p>
                <img src={appleStore} alt="Apple Store Icon" className='mb-[11px] w-[120px] h-[40px]'/>
                <img src={googlePlay} alt="Play Store Icon" className='w-[135px] h-[40px]'/>
                <p className='mt-[56px] text-white font-medium mb-[20px]'>Follow Us</p>
                <div className='flex gap-4 items-center'>
                    <img src={youtubeIcon} alt="Youtube Icon" />
                    <img src={facebookIcon} alt="Facebook Icon" />
                    <img src={twitterIcon} alt="Twitter Icon" />
                    <img src={instagramIcon} alt="Instagram Icon" />
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </div>
            </div>
        </div>
        <div className='flex justify-between  py-[37px] flex-col lg:flex-row items-center lg:items-start'>
            <div className='text-[16px] text-[#E2E8F0] font-normal mb-4 lg:mb-0'>
            Collers @ 2023. All rights reserved.
            </div>
            <div className='flex gap-8'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Contact</p>
                <p className='flex gap-2'><img src={worldIcon} alt="World Icon" /> EN</p>
            </div>
        </div>
    </div>
  )
}

export default Footer