import React from 'react';
import "./feed.css";
import check from '../assets/check.svg'
import question from '../assets/question.svg'
import x from '../assets/x.svg'

export default function Trending() {
   
    return (

      <div class="feedContainer">
         
         <div class="askContainer">
         Ask question nigger 
         <input placeholder="Ask a question..."></input>  
         <button>Ask</button>
         </div>

         <div class="questionDiv"> <img src={check} class="imageQestion"></img> <p>Hello bitches</p></div>
         <div class="questionDiv"> <img src={x} class="imageQuestion"></img> <p>Hello bitches</p></div>
         <div class="questionDiv"> <img src={question} class="imageQuestion"></img> <p>Hello bitches</p></div>
       
      </div>
    );
  }