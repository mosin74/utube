import React from 'react'
import {useState } from "react";

const SearchComponent = () => {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition= new SpeechRecognition()
  const[yes,setYes]= useState('off')
  const[result,setResult]= useState('')


  return (
   <>

    <input  className="w-10/12 mx-auto p-2 rounded-l-3xl border border-gray-600 " type="text" value={result} placeholder="Enter for search"
    />
    {
        (yes==='off')?(<button onClick={()=>{
            recognition.start()
            setYes('on')
            console.log('Started')
            recognition.onresult=(e)=>{
                console.log(e)
                const transcript =e.results[0][0]?.transcript;
                setResult(transcript)
            }
            
        }}>{yes}</button>):(<button onClick={()=>{
      recognition.stop()
      setResult('')
      setYes('off')
      console.log('Stoped')
    }}
    
    >{yes}</button>)
}

</>
  )
}

export default SearchComponent;

// function App() {
// //   const inputbox=document.getElementById('input')
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition= new SpeechRecognition();
//   const[yes,setYes]=useState('off');
//   const[result,setResult]=useState('');

//   return (
//     <div className="App">
//         <input type="text" value={result} placeholder="Enter for search"
//         />
//         {
//           (yes==='off')?(<button onClick={()=>{
//             recognition.start()
//             setYes('on')
//             console.log('Started')
//             recognition.onresult=(e)=>{
//               console.log(e)
//               const transcript =e.results[0][0]?.transcript;
//               setResult(transcript)
//             }
          
//           }}>{yes}</button>):(<button onClick={()=>{
//           recognition.stop()
//           setResult('')
//           setYes('off')
//           console.log('Stoped')
//         }}

//           >{yes}</button>)
//         }
//     </div>
//   );
// }