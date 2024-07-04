import React from 'react'
import alisha from "../../assets/alisha.png"
import Footer from './Footer'



const Birthday = () => {
  return (
    <div>
            <div className='mx-2 mt-2'>
            <img src={alisha} alt="" className='w-full h-[800px]'   />
            </div>
              <div className='mt-8 mx-32 sm:mx-16'>
                  
                  <h1 className='text-center text-5xl font-bold text-fuchsia-400 mb-40 '>Enjoy Your Day</h1>
              <div className='flex '>  
              <img src="https://cdn.dribbble.com/users/722835/screenshots/2294844/iriniti.gif" className='w-[500px]' alt="" />
               <p className='text-4xl'>“Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!”</p>
              </div>
              </div>
                
              <div>
               <div className='mx-32 sm:mx-16'>
                <h1 className='text-center text-5xl font-bold text-fuchsia-400'>Here Your Favourite's</h1>
               </div>
                 <div className='mx-32 mt-16 flex gap-24 '>
                  <section>
                 <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt=""  className='w-[300px] h-[300px] rounded-full'/>
                 <img src="https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg" alt=""  className='w-[300px] h-[300px] 
                 rounded-full'/>
                
                 </section>

                 <section >
                 <img src="https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg?w=1024" alt=""  className='w-[300px] h-[300px] rounded-full'/>
                 <img src="https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg" alt=""  className='w-[300px] h-[300px] rounded-full'/>
                 </section>

                 <img src="https://www.icegif.com/wp-content/uploads/2024/06/happy-birthday-icegif-8.gif" alt="" className='w-[600px]' />

                 </div>
               
                       

              </div>

              <div className='mt-16 mx-32'>
                <h1 className='text-center text-5xl font-bold text-fuchsia-400'> Kush Rahe tu </h1>
              </div>
            <Footer />
    </div>
  )
}

export default Birthday