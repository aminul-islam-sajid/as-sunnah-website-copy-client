import { Button } from '@nextui-org/react';
import React from 'react';

const ButtonCommon = ({ text }) => {
    return (
        <div>
            <Button className='bg-primaryColor text-white' radius="sm">{text}</Button>
        </div>
    );
};

export default ButtonCommon;