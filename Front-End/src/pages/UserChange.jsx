import { Link } from "react-router-dom"
import EditUsername from "./EditUsername"
import UserName from "../component/UserName"
import AccountFeature from "../component/AccountFeature"
import ButtonLogout from "../component/ButtonLogout"
import '../css/UserChange.css'
import '../css/main.css'

function UserChange () {
    
   const account = [
      {id : "0", title : "Argent Bank Checking (x3448)", text1 : "$48,098.43", text2 : "Available Balance", icone : <i className="fa-solid fa-angle-right icon2"></i>, path : "/detailContent"},
      {id : "1", title : "Argent Bank Checking (x3448)", text1 : "$48,098.43", text2 : "Available Balance", icone : <i className="fa-solid fa-angle-right icon2"></i>, path : "/detailContent"},
      {id : "2", title : "Argent Bank Checking (x3448)", text1 : "$48,098.43", text2 : "Available Balance", icone : <i className="fa-solid fa-angle-right icon2"></i>, path : "/detailContent"},
    ]

    return(
        <div>
        <main className="mainUserChange">
            <div className="formEdit">
                <h1>Edit user info</h1>
                <EditUsername /> 
            </div>
        <div className="accountFeatureMaxWidth">
            {account.map((items) => (
              <AccountFeature  
                key={items.id}
                title= {items.title}
                text1= {items.text1}
                text2= {items.text2}
                icone= {items.icone}
                path= {items.path}
              />
            ))}
        </div>
        </main>
        </div>
    )
}
export default UserChange