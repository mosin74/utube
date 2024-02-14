import React from 'react'
import {useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchComponent = () => {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition= new SpeechRecognition()
  const[yes,setYes]= useState('off')
  const[result,setResult]= useState('')


  return (
   <>
<div className='flex items-center '>

    <input  className="w-10/12 p-2 rounded-l-3xl border border-gray-600 flex-none " type="text" value={result} placeholder="Enter for search"

    />
    <IoIosSearch className="w-16 h-10 p-1 px-0 mx-0 rounded-r-3xl flex-initial border  border-gray-600  "/>

    {/* {
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
} */}

    </div>
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