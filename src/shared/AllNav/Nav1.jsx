import { Icon } from '@iconify-icon/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav1 = () => {
    return (
        <div>
            <div className='flex gap-2 py-4 justify-end'>
                <Link>
                    <Icon className='text-[#0865fe]' icon="bxl:facebook-square" width="24" height="24" />
                </Link>
                <Link>
                    <Icon icon="logos:youtube-icon" width="24" height="24" />
                </Link>
                <Link>
                    <Icon className='text-primaryColor' icon="line-md:email-alt-filled" width="24" height="24" />
                </Link>
                <Link>
                    <Icon className='text-primaryColor' icon="ph:phone-fill" width="24" height="24" />
                </Link>
                <h1>1st nav</h1>
            </div>
        </div>
    );
};

export default Nav1;