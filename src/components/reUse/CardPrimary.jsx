import React from 'react';

const CardPrimary = ({ img, title, subTitle, btn }) => {
    return (
        <div className='rounded-md w-[333px] h-[506px] text-center border-2 flex flex-col justify-between'>
            <div>
                <img className='h-3/5 w-full ' src={img} alt="image" />
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
            <div className='p-4 '>
                <button className='bg-primaryColor w-full py-2 mt-auto rounded-md text-white'>{btn}</button>

            </div>

        </div>
    );
};

export default CardPrimary;

