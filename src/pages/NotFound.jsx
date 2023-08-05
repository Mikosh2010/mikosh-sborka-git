import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';
import './UI/Notfound.css';

const NotFound = () => {

    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.content, .content h1, .desc', {
            duration: 1500,
            distance: '30px',
            delay: 200,
            opacity: 0,
            origin: 'top',
            interval: 150,
        });
        sr.reveal('.link', {
            duration: 1500,
            distance: '30px',
            delay: 500,
            opacity: 0,
            origin: 'bottom',
            interval: 150,
        });
        sr.reveal('.content h1', {
            duration: 1500,
            delay: 500,
            opacity: 0,
            scale: 1.5,
        });
      }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
        <div className='content'>
            <h1>4<span><i class="fas fa-ghost"></i></span>4</h1>
            <h2 className='desc__title'>Ошибка 404: Страница не была найдена</h2>
            <p className='desc__subtitle'>Извините, но кажется вы заблудились.</p>
            <a href="/" className='home__link'>На главную</a>
        </div>
        </motion.div>
    );
}

export {NotFound};
