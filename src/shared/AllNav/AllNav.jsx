import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import Bg1StColor from '../../components/reUse/Bg1StColor';

const AllNav = () => {
    return (
        <div className='border-0'>
            <Bg1StColor>
                <Nav1 />
                <Nav2 />
                <Nav3 />
            </Bg1StColor>
        </div>
    );
};

export default AllNav;