import React from 'react';
import { Helmet } from 'react-helmet';
import Transition from './transition';
import Styles from '../styles/content.module.css';

export default ({children, location}) => {
    console.log(Styles);
    return (
        <div>
            <Helmet>
                <title>CMU SoA Thesis</title>
                <link href="https://fonts.googleapis.com/css?family=Merriweather:900|Montserrat&display=swap" rel="stylesheet"></link>
            </Helmet>
            <div className={Styles.content}>
                <Transition location={location}>
                    { children }
                </Transition>
            </div>
        </div>
    );
}; 
