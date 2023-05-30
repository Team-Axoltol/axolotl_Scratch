import React, { useState } from 'react';

const ChatBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <div
        className="ClickBar"
        style={{
            position: 'fixed',
            bottom: '5px',
            right: '5px',
            backgroundColor: 'rgba(150, 220, 255, 0.5)',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '10px',
            zIndex: '2999999',
            width: '330px',
            height: expanded ? '300px' : '30px',
            transition: 'height 0.3s ease',

        }}
        onClick={handleClick}
        >
        <span style = {{      
            marginTop: '3px',  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgba(60, 130, 180, 1)'}}>Real-time Chat Room</span>   
        </div>
        
        <div
            className="ChatPop"
            style={{
            height: expanded ? '280px' : '0px',
            backgroundColor: 'rgba(120, 200, 200, 0.25)',
            zIndex: '3999999',
            position: 'fixed',
            bottom: '5px',
            borderRadius: '10px',
            right: '5px',
            padding: '0px',
            transition: 'height 0.3s ease',
            width: '350px',
            }} 
        ><iframe style = {{borderRadius: '10px', 
                           border: '0px',
                           transition: 'height 0.3s ease',
                           width: '350px',
                           height: expanded ? '280px' : '0px',
                           }} src="http://localhost:8082" title="Chat Window" /></div>

    </div>
  );
};

export default ChatBar;