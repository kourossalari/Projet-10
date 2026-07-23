import '../css/DetailContent.css'
import '../css/main.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserName from '../component/UserName'
import EditNote from './EditNote'
import AccountFeature from '../component/AccountFeature'

function DetailContent () {
    const accountFeature = 
    [
        {id : "0", title : "Argent Bank Checking (x3448)", text1 : "$48,098.43", text2 : "Available Balance", icone : <i className="fa-solid fa-xmark iconeClose"></i> , path : "/editUserName"} 
    ]
    return(
    <div className='detailContent'>
        <main className='mainDetail'>
            {accountFeature.map((items) =>(
                <AccountFeature
                    key={items.id}
                    title={items.title}
                    text1={items.text1}
                    text2={items.text2}
                    icone={items.icone}
                    path={items.path}
                />
            ))}
            <div className='row'> 
                <p>Date</p> 
                <p>Description</p>
                <p>Amount</p> 
                <p>Balance</p> 
            </div>

            <EditNote />
             
            </main>
        </div>
    )
} export default DetailContent