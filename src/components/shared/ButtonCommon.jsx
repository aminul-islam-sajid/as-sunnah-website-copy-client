import { Button } from '@nextui-org/react';
import React from 'react';

const ButtonCommon = ({ text }) => {
    return (
        <div>
            <Button className='bg-primaryColor text-text font-button text-lg rounded' size="lg">{text}</Button>
        </div>
    );
};

export default ButtonCommon;