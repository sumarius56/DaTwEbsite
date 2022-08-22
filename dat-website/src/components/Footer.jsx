import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16  px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>

       <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>React</h1>
          <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi distinctio necessitatibus harum molestias suscipit autem laborum delectus omnis quidem, labore recusandae, hic est nisi unde ipsam fugit magnam voluptate ex?</p>
          <div className='flex justify-between cursor-pointer md:w-[75%] my-6'>
           <FaDribbbleSquare size={30}/>
           <FaFacebookSquare size={30}/>
           <FaInstagram size={30}/>
           <FaGithubSquare size={30}/>
           <FaTwitterSquare size={30}/>
          </div>
       </div>

    <div className='lg:col-span-2 flex justify-between mt-12 pt-1 '>
     <div>
      <h6 className='font-medium  text-gray-400 cursor-pointer'>Solutions</h6>
      <ul>
       <li className='py-2 text-sm cursor-pointer'>Analytics</li>
       <li className='py-2 text-sm cursor-pointer'>Marketing</li>
       <li className='py-2 text-sm cursor-pointer'>Commerce</li>
       <li className='py-2 text-sm cursor-pointer'>Insights</li>
      </ul>
     </div>
   


    
     <div>
      <h6 className='font-medium  text-gray-400 cursor-pointer'>Support</h6>
      <ul>
       <li className='py-2 text-sm cursor-pointer'>Pricing</li>
       <li className='py-2 text-sm cursor-pointer'>Documentary</li>
       <li className='py-2 text-sm cursor-pointer'>Guides</li>
       <li className='py-2 text-sm cursor-pointer'>Api Status</li>
      </ul>
     </div>
   

   
     <div>
      <h6 className='font-medium  text-gray-400 cursor-pointer'>Company</h6>
      <ul>
       <li className='py-2 text-sm cursor-pointer'>About</li>
       <li className='py-2 text-sm cursor-pointer'>Jobs</li>
       <li className='py-2 text-sm cursor-pointer'>Press</li>
       <li className='py-2 text-sm cursor-pointer'>Careers</li>
      </ul>
     </div>
    


    </div>
   </div>
  )
}

export default Footer