import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
 
export default function LikeButton() {
   const [counter, setCounter] = useState(0);
    
    function increment() {
        setCounter(counter+1);
    }

    return (
         <div>
             <Button variant='primary' onClick={increment}>Like</Button>
             <p>{counter} 💔</p>
         </div>
        
     );
  
}
