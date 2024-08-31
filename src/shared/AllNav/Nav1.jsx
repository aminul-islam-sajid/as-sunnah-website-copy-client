import { Icon } from '@iconify-icon/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav1 = () => {
    return (
        <div>
            <div>
                <Link>
                    <Icon icon="logos:youtube-icon" width="64" height="64" />
                </Link>
            </div>
            <h1>1st nav</h1>
        </div>
    );
};

export default Nav1;