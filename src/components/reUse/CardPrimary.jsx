import React from 'react';

const CardPrimary = ({ img, title, subTitle, btn }) => {
    return (
        <div className='rounded-md w-[333px] h-[506px]'>
            <img src={img} alt="iamge" />
            <div className='h-4/6'>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <button>{btn}</button>
            </div>
        </div>
    );
};

export default CardPrimary;