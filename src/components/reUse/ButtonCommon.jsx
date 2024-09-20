import { Button } from '@nextui-org/react';
import React from 'react';

const ButtonCommon = ({ text, style }) => {
    return (
        <div>
            <p className={`bg-primaryColor py-2 px-4 cursor-pointer text-white font-button text-lg rounded ${style}`} size="lg">
                {text}
            </p>
        </div>

    );
};

export default ButtonCommon;