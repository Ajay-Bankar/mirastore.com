import React from 'react';

const ImageMenu = () => {
    const imageInfo = [
        { src: '/images/slider9.webp', title: 'Mysore Pak ' },
        { src: '/images/slider2.jpg', title: 'Kurdai' },
        { src: '/images/slider3.jpg', title: 'Chakli' },
        { src: '/images/slider4.jpg', title: 'Urad Dal Papad' },
        { src: '/images/kharudi.webp', title: 'Kharudi' },
        { src: '/images/slider6.jpg', title: 'Shankarpali' },
        { src: '/images/slider8.jpeg', title: 'Rice Papad' },


        // Add more image sources and titles as needed
    ];

    return (
        <div className='flex justify-center gap-10 mt-5 bg-black text-white h-[160px]'>
            {imageInfo.map((info, index) => (
                <div className='' key={index}>
                    <img className='w-[110px] h-[110px] object-cover rounded-full hover:scale-110 duration-700 mt-3' src={info.src} alt={info.title} />
                    <p className='text-center mt-2 text-xl font-bold '>{info.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ImageMenu;
