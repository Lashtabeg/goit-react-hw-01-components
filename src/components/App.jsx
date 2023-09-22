import { Profile } from "components/user/Profile";
import user from './user/user.json';
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json';
import { FriendsList } from "./friendsList/FiendsList";
import friends from './friendsList/friends.json';
import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "./transactions/transactions.json"






export const App = props => {
  return (
    <div>
      <div><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} /> </div>
      
      
<Statistics title="Upload stats" stats={data} />

<FriendsList friends={friends}/>
   
<TransactionHistory items={transactions}/> 
    </div>
      );
};

