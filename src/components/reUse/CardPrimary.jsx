import React from 'react';
// Aminul islam sajid card Components setup
const CardPrimary = ({ img, title, subTitle, btn, date, pragraph, video, littleBtn, className }) => {
    // Check if title and btn are not provided
    const cardHeight = video ? 'h-[188px]' : (!title && !btn) ? 'h-[400px]' : (btn ? 'h-[505px]' : 'h-[450px]');
    const imgPadding = (!title && !btn) ? 'mx-4 mt-4' : '';
    return (
        <div
            className={`
                cursor-pointer card rounded-md bg-white ${cardHeight} w-[335px] shadow-xl ${className} 
                transform transition-transform duration-300 ease-in-out hover:scale-[1.01]
            `}>
            {/* Image rendering if img prop is provided */}
            {img && (
                <figure className={imgPadding}>
                    <img src={img} alt="image" />
                </figure>
            )}
            {/* Video  */}
            {video && (
                <div className="w-full">
                    <iframe
                        src={video}
                        width="100%"
                        height="188px"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded Video"
                    />
                </div>
            )}
            {/*card content */}
            <div className="card-body p-8">
                {date && <p className="text-sm text-gray-500">{date}</p>}
                {title && <h2 className="card-title justify-center text-center text-primaryColor">{title}</h2>}
                {subTitle && <p className='text-sm text-black text-center'>{subTitle}</p>}
                {pragraph && <p className="text-xl text-gray-700">{pragraph}</p>}
                {btn && (
                    <div className="card-actions">
                        <button className="btn rounded-md w-full bg-primaryColor text-white border-none">
                            {btn}
                        </button>
                    </div>
                )}
                {littleBtn && <p className='border border-primaryColor pt-2 rounded-3xl text-center'>{littleBtn}</p>}
            </div>
        </div>
    );
};

export default CardPrimary;
