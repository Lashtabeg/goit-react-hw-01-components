import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import css from './FriendsList.module.css'


export const FriendsList = ({friends}) => { return(
<div className={css.friendsThumb}><ul className={css.friendList}>
    {friends.map(({avatar,name,isOnline,id})=> (<FriendListItem key={id}
    avatar={avatar}
    name={name}
    isOnline={isOnline}
    />))}
</ul></div>)};

FriendsList.proTotypes={
    friends:PropTypes.shape({
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
  }).isRequired}
