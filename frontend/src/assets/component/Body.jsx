import React from 'react'
import { HiCake } from "react-icons/hi";
import Alisha1 from '../../assets/Alisha1.jpg'
import Alisha2 from '../../assets/Alisha2.jpg'
import Alisha3 from '../../assets/Alisha3.jpg'
import Alisha4 from '../../assets/Alisha4.jpg'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Body = () => {
  return (
     
  
       

<div className='m-8'>

    <Header />
         <div className='bg-yellow-200'  >

         <div className='mx-32 sm:mx-16'> 
           <img src="https://wallpaperset.com/w/full/e/7/f/16452.jpg" className='w-[2000px] h-[600px] brightness-75' alt="" />

           <HiCake  className='translate-x-[790px] translate-y-[-400px] text-8xl font-bold  text-white' />

             <p className=' translate-x-0 translate-y-[-350px] text-2xl text-white'>Happy Birthday to the most amazing friend in the world! From the moment we met, I knew you were someone special. You've always been there to share in my joys and pick me up when I'm down. Your kindness, humor, and unwavering support mean more to me than words can express. On this special day, I want you to know how much I appreciate you and how grateful I am to have you in my life. May your birthday be filled with all the love and happiness you deserve, and may the year ahead bring you even more joy and success. Cheers to many more adventures and memories together! Happy Birthday!</p>
          </div>
            
          <div className='mt-8 bg-yellow-200 ' >
                <h1 className='text-center text-5xl font-bold text-fuchsia-400 mb-8 underline'>My bestie you born on 6th July</h1>
             <div className='bg-yellow-200 flex justify-center items-center gap-36  ' >
             <img src={Alisha1} alt="" className='w-[300px] h-[300px] rounded-full' />
             <img src={Alisha2} alt="" className='w-[300px] h-[300px] rounded-full' />
             <img src={Alisha3} alt="" className='w-[300px] h-[300px] rounded-full' />
             <img src={Alisha4} alt="" className='w-[300px] h-[300px] rounded-full' />
             </div>
              <iframe className='translate-x-0 translate-y-[-50%]' src="https://lottie.host/embed/f37ce32e-67d7-4694-ac06-78bd7eeb6080/NPRbkUCasg.json" frameborder="0"></iframe>
    
              <div>

               <Link to='/birthday'
               > <button className='bg-purple-600 text-xl rounded-sm text-white ml-[45%] hover:bg-red-900 cursor-pointer'>See More About You
                  
                </button>
                </Link>
              </div>
              </div>
              </div>

             <Footer />

</div>


  )
}

export default Body