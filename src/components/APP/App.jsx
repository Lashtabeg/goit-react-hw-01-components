import { Profile } from 'components/User/Profile';
import user from '../User/user.json';
import { Statistics } from "components/Statistics/Statistics";
import data from '../Statistics/data.json';
import { FriendsList } from "components/FriendsList/FiendsList";
import friends from '../FriendsList/friends.json';
import { TransactionHistory } from "components/Transactions/TransactionHistory";
import transactions from "../Transactions/transactions.json"




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

