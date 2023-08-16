import React from 'react';
import './UI/PageLoader.css'

const PageLoader = ({show}) => {
    return (
        <div>
            {show ? (
                <div>
                    <div className={show ? "page-loader" : "page-loader closed"}>
                        <span className="load"></span>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default PageLoader;
