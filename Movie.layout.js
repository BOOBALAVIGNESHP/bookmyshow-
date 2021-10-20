import React from 'react';
import CastCarousal from '../Components/HeroCarousal/CastCarousal.component';

//components
import MovieNavbar from '../Components/Navbar/movieNavbar.component';

const MovieLayout = (props) => {
    return (
        <>
        <MovieNavbar />
        
        {props.children}
        
        </>
    );
};



export default MovieLayout;