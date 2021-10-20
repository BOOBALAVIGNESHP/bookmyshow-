/*
HOC HigherOrderComponents
Components transforms a property into a user interface
HOC transforms a component into property another property or a part of a property
Therefore HOC are used for adding additional functionalities to the existing components

*/

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import MovieLayout from "../Layouts/Movie.layout";

const MovieHOC = ({component:Component , ...rest }) =>{

//components
//props => path, exact

    return (

        <>
            <Route
            {...rest}

            component = {(props) => (

                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )
            }
            />
        </>
    )
};


export default MovieHOC;
