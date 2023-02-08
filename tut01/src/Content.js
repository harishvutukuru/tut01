import React from 'react'
import { useState } from 'react';
<script>
    
</script>
const Content = () => {
    
    const [name, setName]  = useState('Harish');
    var nameontheScreen='';
    
    const nameChange=()=>{
        debugger;
        const names = ['harish','parthiv','abhinav'];
        const count = Math.floor(Math.random() *3)
        nameontheScreen = names[count];
        
        alert(nameontheScreen +' ' + 'Clicked successfully')
        return (names[count]);

      }

    //   const buttonClick = () => {
    //     alert(nameontheScreen +' ' + 'Clicked successfully');
    //   }

  return (
     <main style={{paddingLeft:'45%',paddingBottom:'39%'}}>
        
       <tr>
        <td id='txt_name'>
        Hello {name}
        </td>
        </tr> 
        <div>
        <button id='btn_Click' onClick={()=> nameChange()} > Click</button>
        </div>
        
      
     </main>
  )
}

export default Content
