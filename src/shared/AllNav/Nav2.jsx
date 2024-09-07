import React from 'react';
import ButtonCommon from '../../components/reUse/ButtonCommon';
import logo from '../../assets/assunnah.png'
import Container from '../../components/Container';

const Nav2 = () => {
    return (
        <Container>
            <div className='md:flex justify-between mb-8 mt-6 md:visible hidden'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex gap-4'>
                    <ButtonCommon text='My Account' />
                    <ButtonCommon text='Donate' />
                </div>
            </div>
        </Container>
    );
};

export default Nav2;