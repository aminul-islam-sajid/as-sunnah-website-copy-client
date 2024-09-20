import React from 'react';

const lodaing = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background: rgba(241, 242, 243, 0);display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><script xmlns="" />
                <clipPath id="cp">
                    <path d="M0 -40.5 A40.5 40.5 0 0 1 0 40.5 A40.5 40.5 0 0 1 0 -40.5 M23.5 -1L23.5 1L30.5 1L30.5 -1Z" />
                </clipPath>
                <g transform="translate(50,50)">
                    <circle clipPath="url(#cp)" cx="0" cy="0" fill="none" r="26" stroke="#8cc73f" strokeWidth="5" strokeDasharray="40.840704496667314 0 0 0 0 163.36281798666926">
                        <animate attributeName="stroke-dasharray" dur="1s" repeatCount="indefinite" begin="-0.1s" keyTimes="0;0.2;0.4;0.6;0.8;1" values=" 0 0 0 0 0 163.36281798666926; 0 0 0 0 0 163.36281798666926; 0 0 81.68140899333463 0 0 163.36281798666926; 0 0 163.36281798666926 0 0 163.36281798666926; 0 0 81.68140899333463 0 0 163.36281798666926; 0 0 0 0 0 163.36281798666926 " />
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" begin="-0.1s" values="0;0;0;0;180;360" />
                    </circle>

                    <circle cx="0" cy="0" fill="none" r="32" stroke="#ec932a" strokeWidth="5" strokeDasharray="100.53096491487338 0 0 201.06192982974676">
                        <animate attributeName="stroke-dasharray" dur="1s" repeatCount="indefinite" begin="0s" values=" 0 0 0 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 0 0 0 201.06192982974676 " />
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" begin="0s" values="0;0;0;180;180;360" />
                    </circle>

                    <circle cx="0" cy="0" fill="none" r="38" stroke="#2d9261" strokeWidth="5" strokeDasharray="119.38052083641213 0 0 238.76104167282426" transform="rotate(45)">
                        <animate attributeName="stroke-dasharray" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.45;0.5;0.7;0.90;1" values=" 0 0 89.5353906273091 0 0 238.76104167282426; 0 0 89.5353906273091 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 29.845130209103033 0 0 238.76104167282426; 0 0 29.845130209103033 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 89.5353906273091 0 0 238.76104167282426 " />
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.5;0.6;0.8;0.90;1" values="-60;0;0;0;180;180;180;180;300" />
                    </circle>
                </g>
            </svg>
        </div>
    );
};

export default lodaing;