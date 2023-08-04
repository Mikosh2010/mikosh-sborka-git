import React, {useEffect, useState} from 'react';

const ScrollUp = () => {

    useEffect(() => {
        function showScrollUp() {
            if (window.scrollY > 350) {
                setShowScroll(true)
            } else {
                setShowScroll(false)
            }
        }

        window.addEventListener('scroll', showScrollUp);
        return () => {
            window.removeEventListener('scroll', showScrollUp);
        };
    }, []);

    const [showScroll, setShowScroll] = useState(false)

    return (
        <a href="#intro" className={showScroll ? "scrollup show-scroll" : "scrollup"} id="scroll-up">
            <i className="ri-arrow-up-line"></i>
        </a>
    );
};

export default ScrollUp;