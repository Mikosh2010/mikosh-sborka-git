import React from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PersonalArea = ({ isLoggedIn, username }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {isLoggedIn ? (
                <>
                Hello, {username}
                </>
            ) : (
                <Navigate replace to="/"/>
            )}
        </motion.div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
});

export default connect(mapStateToProps)(PersonalArea);
