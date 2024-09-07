import { Button } from '@nextui-org/react';
import React from 'react';

const ButtonCommon = ({ text, style }) => {
    return (
        <div>
            <Button className={`bg-primaryColor text-text font-button text-lg rounded ${style}`} size="lg">
                {text}
            </Button>
        </div>
    );
};

export default ButtonCommon;