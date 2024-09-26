import React from 'react';

const CardPrimary = ({ img, title, subTitle, btn }) => {
    return (
        <div className={`cursor-pointer card rounded-md bg-white ${btn ? 'h-[505px]  w-[335px]' : 'h-[450px]  w-[335px]'} shadow-xl`}>
            <figure>
                <img
                    src={img}
                    alt="image" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center  text-primaryColor">{title}</h2>
                <p className='text-sm py-4 text-black'>{subTitle}</p>
                {btn && (
                    <div className="card-actions">
                        <button className="btn rounded-md w-full bg-primaryColor text-white border-none">
                            {btn}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardPrimary;
