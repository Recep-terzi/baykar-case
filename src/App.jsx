import './App.css'
import Navbar from './components/Navbar/Navbar'
import circleSvg from './assets/play-circle.svg'
import section1Image from './assets/Pexels Photo by Ray Piedra.png'
import rectangle from './assets/Rectangle 31.png'
import icon1 from './assets/Icon.svg'
import icon2 from './assets/Icon2.svg'
import icon3 from './assets/Icon3.svg'
import cardRectangle1 from './assets/Rectangle 25.png'
import cardRectangle2 from './assets/Rectangle 26.png'
import cardRectangle3 from './assets/Rectangle 27.png'
import BestSection from './components/BestSection/BestSection'
import Section4 from './components/Section4/Section4'
import Slider from './components/Slider/Slider'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="bg-white lg:bg-[#FEFBEB] m-0 p-0">
    
      <Navbar />
      <div className="main__body relative">
        <img src={rectangle} alt="Rectangle Icon" className=' absolute w-[100%] top-[540px] lg:top-[142px]' />
        <div className="section__1 p-[16px] lg:p-[80px] lg:flex items-center gap-[80px] justify-between sm:flex ">
          <div className="section__1__left flex flex-col gap-8 items-center justify-center lg:items-start">
            <p className='text-[#0F172A] font-extrabold  lg:text-[72px] text-[56px] text-center lg:text-start'>Collectible Sneakers</p>
            <p className='text-[#0F172A] font-normal text-[18px] w-[361px] lg:w-[714px]'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div className="button__group flex items-center gap-4">
              <p className='w-[179px] h-[56px] p-4 border-2 border-[#78350F] rounded-lg text-[#78350F] flex items-center justify-center font-medium text-xl'>Sign up now</p>
              <p className='flex items-center gap-1 justify-center text-[#78350F] text-base font-medium'><img src={circleSvg} alt="Play Circle SVG" /> Watch Demo</p>
            </div>
          </div>
          <div className="section__1__right relative flex items-center justify-center z-40 bg-transparent mt-8 lg:mt-0">
            <div className=' w-[272px] h-[276px] lg:w-[367px] lg:h-[372px] rounded-[50px] bg-[#FBBF24] absolute -z-10'> </div>
            <img src={section1Image} alt="Section 1 Image" className='w-[361px] lg:w-auto' />
          </div>
        </div>
        <div className="section__2 relative z-10 flex flex-col sm:flex-row justify-center text-center lg:text-start gap-[80px] p-[80px] items-center lg:justify-between lg:bg-inherit bg-[#FEF3C7]">
          <div className="card flex justify-center items-center lg:block">
            <div className="card__top relative">
              <img src={cardRectangle1} alt="Card Rectangle" className='absolute left-[25px]' />
              <img src={icon1} alt="Card Icon" />
              <span></span>
            </div>
            <p className='cardText1'>Nibh viverra</p>
            <p className='cardText2'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
          </div>
          <div className="card flex justify-center items-center lg:block">
            <div className="card__top relative">
              <img src={cardRectangle2} alt="Card Rectangle" className='absolute left-[25px]' />
              <img src={icon3} alt="Card Icon" />
            </div>
            <p className='cardText1'>Cursus amet</p>
            <p className='cardText2'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
          </div>
          <div className="card flex justify-center items-center lg:block">
            <div className="card__top relative">
              <img src={cardRectangle3} alt="Card Rectangle" className='absolute left-[40px]' />
              <img src={icon2} alt="Card Icon" />
              <span></span>
            </div>
            <p className='cardText1'>Ipsum fermentum</p>
            <p className='cardText2'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
          </div>
        </div>
      
        <BestSection />
        <Section4 />
        <Slider className="overflow-x-scroll"/>
        <Section5/>
        <Section6/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
