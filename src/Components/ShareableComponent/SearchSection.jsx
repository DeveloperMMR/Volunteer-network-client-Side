import React from 'react';

const SearchSection = ({setEvent}) => {

    const setsearchtext =(event)=>{
        event.preventDefault();
        const text = event.target.search.value;
            fetch(`https://volunteer-server-side.vercel.app/searchevent?search=${text}`).then(res=>res.json())
            .then(data=>{
                setEvent(data);
            });
    };

    return (
        <div className='w-full flex justify-center text-center flex-col items-center my-10'>
            <h1 className='text-4xl font-bold mb-5 uppercase'>I grow by helping people in need.</h1>
            <form onSubmit={setsearchtext} className=' md:w-2/5 w-4/5 flex md:flex-row flex-col md:gap-0 gap-3'>
                <input className='shadow-md px-5 py-2 rounded-s-md rounded-e-md md:rounded-e-none outline-none w-full mx-auto' placeholder='Search by name' type="text" name="search" id="search" />
                <input className='bg-primary rounded-md md:rounded-s-none md:rounded-e-md px-5 py-2  text-white font-bold hover:bg-primary-focus' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default SearchSection;