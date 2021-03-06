import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageName = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Sports Zone</title>
            </Helmet>
        </div>
    );
};

export default PageName;