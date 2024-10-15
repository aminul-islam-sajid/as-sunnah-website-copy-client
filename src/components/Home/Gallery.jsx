import React, { useState } from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import CardComponent from '../reUse/CardComponent';
import { images } from '../../Images/Images';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Array of image sources
    const img = [
        images.galleryImg1,
        images.galleryImg2,
        images.galleryImg3,
        images.galleryImg4,
        images.galleryImg5,
        // Add more images if needed
    ];

    return (
        <Bg1StColor>
            <CardComponent hadeLine={'Gallery'}>
                {/* Image Grid */}
                {img.map((im, index) => (
                    <img
                        key={index}
                        className="h-60 rounded-lg w-96 cursor-pointer"
                        src={im}
                        alt={`Gallery Image ${index + 1}`}
                        onClick={() => setSelectedImage(im)} // Set full view image on click
                    />
                ))}

                {/* Full view modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Full View"
                                className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
                            />
                            <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 rounded-full p-2"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </CardComponent>
        </Bg1StColor>
    );
};

export default Gallery;
