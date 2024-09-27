import React from 'react';

const CardPrimary = ({ img, title, subTitle, btn, date, pragraph, className }) => {
    // Check if title and btn are not provided
    const cardHeight = (!title && !btn) ? 'h-[400px]' : (btn ? 'h-[505px]' : 'h-[450px]');
    const imgPadding = (!title && !btn) ? 'mx-4 mt-4' : '';

    return (
        <div className={`cursor-pointer card rounded-md bg-white ${cardHeight} w-[335px] shadow-xl ${className}`}>
            <figure className={imgPadding}>
                <img
                    src={img}
                    alt="image" />
            </figure>
            <div className="card-body">
                {date && <p className="text-sm text-gray-500">{date}</p>}
                {title && <h2 className="card-title justify-center text-center text-primaryColor">{title}</h2>}
                <p className='text-sm text-black text-center'>{subTitle}</p>
                {pragraph && <p className="text-xl text-gray-700">{pragraph}</p>} {/* Pragraph section */}
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
