import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Data = [
    { title: "Home", linkTo: "/" },
    { title: "Products", linkTo: "products", subMenu: ["Product 1", "Product 2", "Product 3"] },
    { title: "Contact", linkTo: "contact" },
    { title: "Gallery", linkTo: "gallery" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full'>
            
            <div className='flex flex-col md:flex-row justify-between bg-slate-300 h-[100px] text-center'>

                <div className='mt-5 md:self-center ml-5'>
                    <h1 className='text-4xl md:text-4xl'>
                        <span className='text-red-700 sm:font-bold font-bold'>MiraStore</span>.com
                    </h1>
                </div>
                <div className=''>
                <input className='sm:w-full w-[200px] md:w-[400px] h-[50px] mt-5 hover:shadow-2xl rounded-xl' type="text" placeholder='Search your products ' />

                </div>

               
                <div className='flex md:gap-10 text-xl mt-5 md:self-center pr-5'>
                    {Data.map((item, i) => (
                        <div key={i} onMouseEnter={() => setOpen(item.title === "Products")} onMouseLeave={() => setOpen(false)}>
                            {item.linkTo ? (
                                <Link to={item.linkTo}>
                                    {item.title}
                                </Link>
                            ) : (
                                <div>{item.title}</div>
                            )}
                            {open && item.title === "Products" && (
                                <div className="absolute mt-2 bg-white p-2 rounded shadow-md">
                                    {item.subMenu.map((subItem, j) => (
                                        <div key={j}>{subItem}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
