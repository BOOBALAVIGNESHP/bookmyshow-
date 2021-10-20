/*
HOC HigherOrderComponents
Components transforms a property into a user interface
HOC transforms a component into property another property or a part of a property
Therefore HOC are used for adding additional functionalities to the existing components

*/

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({component:Component , ...rest }) =>{

//components
//props => path, exact

    return (

        <>
            <Route
            {...rest}

            component = {(props) => (

                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )
            }
            />
        </>
    )
};


export default DefaultHOC;
