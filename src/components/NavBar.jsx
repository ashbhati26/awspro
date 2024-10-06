import React from 'react';

function NavBar() {
    return (
        <div className='mx-[4vw] py-[1vw] flex flex-col md:flex-row items-center justify-between bg-[#34323b] text-[#f8f9fa] shadow-xl rounded-full'>
            <div className='flex items-center gap-8 md:gap-14 px-5'>
                <h2 className='font-["Playfair_Display"] text-2xl md:text-3xl font-bold tracking-wider'>
                    ColorNest
                </h2>
            </div>
        </div>
    );
}

export default NavBar;
