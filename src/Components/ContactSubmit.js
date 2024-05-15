import React from 'react';

function SubmitConfirmation() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        
    };

    const messageStyle = {
        marginBottom: '10px',
        fontSize: '28px'
    };

    return (
        <div style={containerStyle}>
            <div style={messageStyle}>Thank you for registering your email with us</div>
            <div style={messageStyle}>And don't forget to enjoy the meal</div>
        </div>
    );
}

export default SubmitConfirmation;
