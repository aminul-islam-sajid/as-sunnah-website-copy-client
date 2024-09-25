import React from 'react';
import Container from '../Container';

const CardComponent = ({ hadeLine, children }) => {
    return (
        <Container>
            <div className='pb-8'>
                <h1 className='text-xl text-center py-8 text-black'>{hadeLine}</h1>
                <div className='grid grid-cols-3 gap-8'>
                    {children}
                </div>
            </div>
        </Container>
    );
};

export default CardComponent;