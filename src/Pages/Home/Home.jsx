import React from 'react'

const Home = () => {

    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <div className='flex flex-1' >
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
}

export default Home