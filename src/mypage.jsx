import { useState } from "react"
import "./mypage.css"

export default function Mypage(){
    const [amount,GetAmount]=useState(0)
    const [inp,GetValue]=useState(0)
    return(
        <>
        <div id="container">
        <div className="div">
        <h1>Hi</h1>
        <label>Enter Amount:</label><br/><br/>
        <input type="text" onInput={(e)=>{
            GetValue(Number(e.target.value))
        }} placeholder="Enter amount"/><br/><br/>
        <button onClick={()=>{
            if (inp===0){
                alert('Enter amount')
             }
            else{
                GetAmount(amount+inp)
            }
        }
        }>Deposit</button>
        <button onClick={()=>
        {
            if (inp===0){
                alert("Enter withdraw amount")
                }else{
            if (amount>=inp){
            GetAmount(amount-inp)}
            else{
                alert("insufficent balance")
            }}}}>Withdrawal</button><br/><br />
        <h3>Available Balance:<span>&#8377;{amount}</span></h3>
        </div>
        </div>
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button> */}

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        ...
    </div>
  </div>
</div>
        </>
    
    )
}