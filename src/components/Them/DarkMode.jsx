import React, { useState, useEffect } from 'react';

function DarkMode() {
    const [theme, setTheme] = useState('light'); // ডিফল্ট থিম

    useEffect(() => {
        // Local storage থেকে থিম পেতে হবে
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme); // Local storage-এ থিম সংরক্ষণ করা
    };

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-dark text-white'}`}>
            <div className="flex items-center justify-center h-screen">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-primaryColor text-white"
                >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>
        </div>
    );
}

export default DarkMode;
