import React from 'react';
import logomark from '../assets/icons/global/logomark.svg';
import chevronDown from '../assets/icons/global/ChevronDown.svg';
import shopping from '../assets/icons/global/Cart.svg';
import profile from '../assets/icons/global/Profile.svg';
import search from '../assets/icons/global/Search.svg';
import right from '../assets/icons/global/ArrowRight.svg';
import delivery from '../assets/icons/global/Delivery.svg';
import heroImg from '../assets/images/HeroImg.svg';

const HomePage = () => {
  return (
    <div className=" min-h-screen bg-neutralWhite-900">

      <div className="bg-neutralBlack-900 text-neutralWhite-100 text-center py-2 text-sm">
        Get 25% OFF on your first order. 
        <span className="text-neutralBlack-200 cursor-pointer">Order Now</span>
      </div>

      <header className=" border bg-neutralWhite-900 py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <div className="text-2xl font-bold text-neutralBlack-800 flex gap-4">
            <img src={logomark} alt="" className="logomark h-8 w-8 " />
            Ecommerce</div>
          <nav className="hidden md:flex space-x-6 text-neutralBlack-500">
            <a href="" className="hover:text-neutralBlack-900">Home</a>
            <a href="" className="hover:text-neutralBlack-900 flex gap-2">Categories
            <img src={chevronDown} alt=""  className='h-6 w-6'/>
            </a>
            <a href="" className="hover:text-neutralBlack-900">About</a>
            <a href="" className="hover:text-neutralBlack-900">Contact</a>
          </nav>

          <div className="flex space-x-4 items-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search products"
                className="w-full border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neutralBlack-100"/>
              <img
                src={search}
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 "/>
            </div>
            
            <img src={shopping} alt=""  className='cursor-pointer'/>
            <img src={profile} alt=""  className='cursor-pointer'/>
          </div>

        </div>
      </header>

      <section className=" bg-neutralBlack-100">
        <div className='container my-10 '>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-neutralBlack-800 mb-4">Fresh Arrivals Online</h1>
            <p className="text-neutralBlack-600 mb-7">
              Discover Our Newest Collection Today.
            </p>
            <button className="bg-neutralBlack-900 text-neutralWhite-900 px-8 py-5 mt-10 rounded hover:bg-neutralBlack-700 flex items-center gap-3">
              View Collection 
              <img src={right} alt="" className=' text-neutralWhite-900' />
            </button>
          </div>
          <div>
            <img
              src={heroImg} 
              alt="New Collection"
              className="p-20 "
            />
          </div>
        </div>
        </div>
      </section>



      <section className=" bg-neutralWhite-900 container py-12 mt-40 flex justify-around text-start">
        <div>
          <img src={delivery} alt="" className='w-10 py-7'/>
          <h3 className="font-semibold text-lg text-neutralBlack-800">Free Shipping</h3>
          <p className="text-neutralBlack-500 mt-2 w-80">
            Upgrade your style today and get FREE shipping on all orders! Don't miss out.
          </p>
        </div>

        <div>
          <img src={delivery} alt=""  className='w-10 py-7'/>
          <h3 className="font-semibold text-lg text-neutralBlack-800">Satisfaction Guarantee</h3>
          <p className="text-neutralBlack-500 mt-2 w-80">
            Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
          </p>
        </div>

        <div>
          <img src={delivery} alt="" className='w-10 py-7'/>
          <h3 className="font-semibold text-lg text-neutralBlack-800">Secure Payment</h3>
          <p className="text-neutralBlack-500 mt-2 w-80">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </section>


        
      <section  className='container text-center py-40'>
        <p className=''>Shop Now</p>
        <h2 className="text-3xl font-bold text-neutralBlack-800 text-center">
          Best Selling
        </h2>
      </section>

      



      
    </div>
  );
};

export default HomePage;
