import "./Trending.css";
import redditlogo from '../assets/redditlogo.png'

export default function Trending() {
   
    return (
      <div class="trendingContainer">

       <h1>Trending now: </h1>
 
       <div  class="trendingItem"> cat <img src={redditlogo} className="redditLogo" alt="logo" /> </div>
       
       <div  class="trendingItem"> cat <img src={redditlogo} className="redditLogo" alt="logo" /> </div>
         
       <div  class="trendingItem"> cat <img src={redditlogo} className="redditLogo" alt="logo" /> </div>
       
       <div  class="trendingItem"> cat <img src={redditlogo} className="redditLogo" alt="logo" /> </div>

      </div>
    );
  }