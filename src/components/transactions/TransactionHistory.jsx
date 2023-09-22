import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory =({items})=> {return(
<table className={css.transactioHistory}>
<thead>
  <tr className={css.tableHead}>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody className={css.tableBody}>
{items.map(({id,type,amount,currency})=>(
<tr key={id} className={css.tableItem}>
    <td className={css.type}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>))}
  
</tbody>
</table>);
};

TransactionHistory.propTypes ={
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}