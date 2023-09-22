import { Profile } from "components/user/Profile";
import user from './user/user.json';
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json';


// import friends from './friendsList/friends.json';
// import { FriendsList } from "components/friendsList/FiendsList";



export const App = props => {
  return (
    <div>
      <div><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} /> </div>
       <section>
<Statistics title="Upload stats" stats={data} /></section>
{/* <div><FriendsList friends={friends }/></div> */}
   
    </div>
    

  );
};

