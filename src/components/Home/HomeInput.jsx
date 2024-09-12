import React from 'react';
import Bg2ndColor from '../reUse/Bg2ndColor';
import Container from '../Container';

const HomeInput = () => {
    return (
        <Container>
            <Bg2ndColor>
                <form>
                    <div className='flex  gap-8 bg-white py-8'>
                        <input type="text" placeholder="Type here" className="input input-bordered bg-[#f5f5f5] w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered bg-[#f5f5f5] w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered bg-[#f5f5f5] w-full max-w-xs" />

                    </div>
                </form>
            </Bg2ndColor>
        </Container>

    );
};

export default HomeInput;