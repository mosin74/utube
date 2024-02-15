import React, { useContext } from 'react'
import {useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { VideoContext } from '../context/Video';
import { Filterdata } from '../config/Helper';
// import useFilterdata from '../Hooks/Filterdata';
import { FaMicrophone ,FaMicrophoneSlash } from "react-icons/fa";


const SearchComponent = () => {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition= new SpeechRecognition()
  console.log(recognition)
  const[turnOn,setTurnOn]= useState(false)
  const[result,setResult]= useState('')

  const VideoListState=useContext(VideoContext);
  const TotalVideo=VideoListState?.videolist;  
  // console.log(TotalVideo)




  return (
   <>
<div className='flex items-center '>

    <input  className="w-9/12 p-2 rounded-l-3xl border border-gray-600 flex-none " type="text" value={result} placeholder="Enter for search"
onChange={(e)=>{setResult(e.target.value)}}
    />
    <IoIosSearch className="w-16 h-10 p-1 px-0 mx-0 rounded-r-3xl flex-initial border  border-gray-600  " onClick={()=>{const data=Filterdata(result,VideoListState?.videolist);
    (result==null)?(VideoListState?.setVideolist(TotalVideo)):(VideoListState?.setVideolist(data))
    }}/>

    {
      (turnOn )?(<button onClick={()=>{
        recognition.stop()
        console.log('Stoped')
        recognition.onresult=(e)=>{
          console.log(e)
          const transcript =e.results[0][0]?.transcript;
          setResult(null)
        }
        setTurnOn(false)
        
      }}><FaMicrophoneSlash className='w-14 h-8 p-1 mx-4 rounded-3xl flex-initial bg-gray-200'/>
      </button>):(<button onClick={()=>{
      recognition.start()
      recognition.onresult=(e)=>{
            // onsole.log(e)
            const transcript =e.results[0][0]?.transcript;
            setResult(transcript)
            }
      setTurnOn(true)
      console.log('Started')
    }}
    
    ><FaMicrophone className='w-14 h-8 p-1 mx-4 rounded-3xl flex-initial bg-gray-200'/></button>)
}

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