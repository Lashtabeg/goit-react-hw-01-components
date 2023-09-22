import PropTypes from 'prop-types';
import css from './FriendsList.module.css'

export const FriendListItem = ({avatar,name,isOnline,id})=>{
      return(
        <li className={css.item} key={id}>
  <span className={isOnline ? css.online : css.offline}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
)
};

FriendListItem.proTotypes={
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired,
}