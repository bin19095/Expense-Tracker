import React,{useContext, useState} from "react";
import {GlobalContext} from "../Context/GlobalProvider";

export const AddTransaction = () => {
    const[text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { plusTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        plusTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form  onSubmit={onSubmit} id="form">
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  placeholder="Enter text..." />
                </div>
            <div class="form-control">
                <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
        <input type="number" value={amount} placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} />
    </div>
    <button className="btn">Add transaction</button>
</form>
</div>
    )
}