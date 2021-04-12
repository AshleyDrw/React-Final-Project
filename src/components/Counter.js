import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
 
export default function Counter() {
   const [counter, setCounter] = useState(0);

   function increment() {
       setCounter(counter+1);
   }

   function decrement() {
       setCounter(counter-1);
   }
    
   return (
         <div>
             <Button onClick={increment} variant='primary' size='sm'>+</Button>
             <Badge><h5>{counter}</h5></Badge>
             <Button onClick={decrement} variant='primary' size='sm'>-</Button>
         </div>
        
     );
  
}
