import { FriendListItem } from "./FriendListItem";
import css from './FriendsList.module.css'

export const FriendsList = ({friends}) => { return(<ul className={css.friendList}>
    {friends.map(({avatar,name,isOnline,id})=> <FriendListItem key={id}
    avatar={avatar}
    name={name}
    isOnline={isOnline}
    />)}
</ul>)};
