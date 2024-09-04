import React from 'react';
import ButtonCommon from '../../components/shared/ButtonCommon';
import logo from '../../assets/assunnah.png'

const Nav2 = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-4'>
                <ButtonCommon text='My Account' />
                <ButtonCommon text='Donate' />
            </div>

        </div>
    );
};

export default Nav2;