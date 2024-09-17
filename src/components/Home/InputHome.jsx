import React from 'react';
import ButtonCommon from '../reUse/ButtonCommon';
import Container from '../Container';
import Bg2ndColor from '../reUse/Bg2ndColor';

const InputHome = () => {
    return (
        <div className='m-0'>
            <Bg2ndColor>
                <div className='py-8'>
                    <Container>
                        <div className='py-4 py- border-spacing-1 bg-white rounded-md'>
                            <form>
                                <div className='flex  gap-4 w-10/12 p-6'>
                                    <input
                                        type="text"
                                        placeholder="Donation Fund"
                                        className=" input input-bordered hover:border-primaryColor bg-[#f5f5f5] w-full max-w-xs text-xl" />
                                    <input
                                        type="text"
                                        placeholder="Email / Phone"
                                        className=" input input-bordered hover:border-primaryColor bg-[#f5f5f5] w-full max-w-xs text-xl" />
                                    <input
                                        type="number"
                                        defaultValue={10}
                                        className=" input  hover:border-primaryColor bg-[#f5f5f5] w-full max-w-xs text-xl" />

                                    <ButtonCommon text="Donate" style='px-12' />
                                </div>
                            </form>
                        </div>
                    </Container>
                </div>
            </Bg2ndColor>
        </div>
    );
};

export default InputHome;