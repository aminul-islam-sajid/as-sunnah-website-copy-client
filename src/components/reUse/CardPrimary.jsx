import React from 'react';

const CardPrimary = ({ img, title, subTitle, btn }) => {
    return (
        // <div className='rounded-lg w-[333px] h-[506px] shadow-md text-center bg-white flex flex-col justify-between'>
        //     <div className=''>
        //         <img className='h-3/5 w-full object-cover rounded-t-md' src={img} alt="image" />
        //         <h1 className='mt-4 text-2xl text-primaryColor px-4'>{title}</h1>
        //         <p className='text-sm px-4'>{subTitle}</p>
        //     </div>
        //     <div className='px-4 '>
        //         <button className='bg-primaryColor w-full py-2 rounded-md text-white'>{btn}</button>
        //     </div>
        // </div>
        <div className="card rounded-md bg-white w-[335px] h-[505px] shadow-xl text-dark">
            <figure>
                <img
                    src={img}
                    alt="image" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center  text-primaryColor">{title}</h2>
                <p className='text-sm'>{subTitle}</p>
                <div className="card-actions">
                    <button className="btn w-full bg-primaryColor text-white border-none ">{btn}</button>
                </div>
            </div>
        </div>
    );
};

export default CardPrimary;
