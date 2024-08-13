import React from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import personImage1 from '../../assets/person (1).jpeg'
import personImage2 from '../../assets/person (2).jpeg'
import personImage3 from '../../assets/person (3).jpeg'
import personImage4 from '../../assets/person (4).jpeg'
import personImage5 from '../../assets/person (5).jpeg'
import companyLogo from '../../assets/Logo-grey.png'
import companyLogo2 from '../../assets/Logo-grey (1).png'
import companyLogo3 from '../../assets/Logo-grey (2).png'
import { useRef } from 'react';
import { useEffect } from 'react'
const Slider = () => {
    const sliderRef = useRef(null);

    const sliderData = [
        {
            id: 1,
            companyIcon: companyLogo,
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            personIcon: personImage1,
            personName: 'Ralph Edwards',
            personInfo: 'Product Designer'
        },
        {
            id: 2,
            companyIcon: companyLogo,
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            personIcon: personImage2,
            personName: 'Hellen Jummy',
            personInfo: 'Team Lead'
        },
        {
            id: 3,
            companyIcon: companyLogo2,
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            personIcon: personImage3,
            personName: 'Hellena John',
            personInfo: 'Co-founder'
        },
        {
            id: 4,
            companyIcon: companyLogo3,
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            personIcon: personImage4,
            personName: 'Davic Oshodi',
            personInfo: 'Manager'
        },
        {
            id: 5,
            companyIcon: companyLogo3,
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            personIcon: personImage5,
            personName: 'Charolette Hanlin',
            personInfo: 'CEO'
        },
    ];
    useEffect(() => {
        if (sliderRef.current) {
            const totalWidth = sliderRef.current.scrollWidth;
            const visibleWidth = sliderRef.current.clientWidth;
            sliderRef.current.scrollLeft = (totalWidth - visibleWidth) / 2;
        }
    }, []);
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -384, // kaydırılacak mesafe
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 384,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='flex flex-col relative py-[48px] px-[16px]  lg:py-0 lg:px-0'>
            <div className='lg:p-[80px] flex justify-between items-center mb-[50px]'>
                <p className='font-extrabold text-[32px] lg:text-[56px] text-[#0F172A] whitespace-nowrap text-center m-auto lg:text-start lg:m-0'>Because they love us</p>
                <div className=' items-center gap-6 hidden lg:flex '>
                    <button onClick={scrollLeft}>
                        <img className="w-[48px] h-[48px] p-2 rounded-full border-2 border-[#78350F]" src={arrowLeft} alt="Arrow Left" />
                    </button>
                    <button onClick={scrollRight}>
                        <img className="w-[48px] h-[48px] p-2 rounded-full border-2 border-[#78350F]" src={arrowRight} alt="Arrow Right" />
                    </button>
                </div>
            </div>
            <div className='w-[100%] h-[277px] lg:w-[1360px] lg:h-[421px] absolute bg-[#FDE68A]  top-[130px] lg:top-[230px] m-auto left-0 right-0'></div>

            <div ref={sliderRef} className="flex gap-[24px] overflow-x-scroll scrollbar-hide items-center scroll-smooth  no-scrollbar ">
                {
                    sliderData.map(slider => (
                        <div key={slider.id} className='z-50 flex flex-col w-[319px] lg:w-[384px] h-[296px] lg:h-[430px] bg-white p-8 rounded-[20px] justify-between'>
                            <img src={slider.companyIcon} alt="Company Icon" className='w-[133px] h-[32px] mb-4' />
                            <p className=' w-[271px] lg:w-[320px] text-[16px] lg:text-[24px] font-normal text-black'>{slider.description}</p>
                            <div className='flex gap-4 items-center'>
                                <img src={slider.personIcon} alt="Person Icon" className='w-[64px] h-[64px] rounded-full object-cover' />
                                <div className='flex flex-col'>
                                    <p className='font-normal text-lg'>{slider.personName}</p>
                                    <p className='font-normal text-[#475569] text-[16px]'>{slider.personInfo}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Slider