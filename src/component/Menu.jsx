import React, { useState } from 'react';

const Menu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='flex justify-center gap-10 mt-5 bg-gray-900 text-white h-[160px]'>
            <div >
                <div className=' text-center mt-3'>
                    <img
                        className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 '
                        src="/images/slider10.webp"
                        alt=""
                    />
                    <div className=' flex justify-center' onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                        <h1 className=' text-center  text-xl font-bold mt-2'>Rava Laddu </h1>
                        <i className="fa-solid fa-caret-down mt-5 ml-2"></i>
                        {isDropdownOpen && (
                            <div className="subcategories relative ">
                                {/* Add your subcategories here */}
                                <div className="absolute mt-9  bg-white p-2 text-black rounded shadow-md">
                                <p>Subcategory </p>
                                <p>Subcategory </p>
                                <p>Subcategory </p>

                                </div>
                               
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=' mt-3'>
                <img className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider1.jpg" alt="" />
                <h1 className='text-center text-xl font-bold mt-2'>Kurdai</h1>

            </div>
            <div className=' mt-3'>
                <img  className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider3.jpg" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Chakli</h1>

            </div>
            <div className=' mt-3'>
                <img  className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider4.jpg" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Urad Dal Papad</h1>
            </div>
            <div className=' mt-3'>
                <img className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider6.jpg" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Shankarpali</h1>

       
            </div>
            <div className=' mt-3'>
                <img  className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider8.jpeg" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Rice Papad</h1>

            </div>
            <div className=' mt-3'>
                <img  className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/slider9.webp" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Mysore Pak</h1>

            </div>
            <div className=' mt-3'>
                <img  className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 ' src="/images/kharudi.webp" alt="" />
                <h1 className='text-center  text-xl font-bold mt-2'>Mysore Pak</h1>

            </div>
        </div>
    );
};

export default Menu;



