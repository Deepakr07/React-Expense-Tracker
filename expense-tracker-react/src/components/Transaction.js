export default function Transaction({ transaction}){
    const sign = transaction.amount>0 ? '+':'-'
    const className = transaction.amount > 0 ? "minus" : "plus"
    return(
        <li className = {className}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
            </li> 
    )
}