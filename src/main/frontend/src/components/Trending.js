import "./Trending.css";
import userlogo from '../assets/user.svg'
import redditlogo from '../assets/redditlogo.png'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.jpg'
import avatar5 from '../assets/avatar5.png'

export default function Trending() {
   
    return (
      <div class="trendingContainer">

       <h1>Frequently Asked </h1>
 
       <div  class="trendingItem"><img class="avatarImg" src={avatar1}></img><p class="answerP"> &nbsp;  &nbsp; Why ducks have feather? <h2>Answered 23 minutes ago</h2></p> </div>
              
       <div  class="trendingItem"><img class="avatarImg" src={avatar2}></img><p class="answerP"> &nbsp;  &nbsp; Where is the moon?  <h2>Answered 1 day ago</h2></p> </div>
         
       <div  class="trendingItem"><img class="avatarImg" src={avatar3}></img><p class="answerP">  &nbsp; &nbsp; Is it monday? <h2> Answered 1 hour ago</h2></p> </div>
       
       <div  class="trendingItem"><img class="avatarImg" src={avatar4}></img><p class="answerP">  &nbsp; &nbsp; Can I microwave my smartphone? <h2>Answered 56 minutes ago</h2></p> </div>

       <div  class="trendingItem"><img class="avatarImg" src={avatar5}></img><p class="answerP">  &nbsp; &nbsp; Can I microwave stare at the sun?<h2> Answered 10 minutes ago</h2></p></div>
      </div>
    );
  }