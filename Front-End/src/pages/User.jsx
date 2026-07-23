import { Link } from "react-router-dom"
import UserName from "../component/UserName"
import BankItems from "../component/BankItems"
import '../css/main.css'

function User() {

  const Bank = [
    { id : "0", title :"Argent Bank Checking (x8349)", text1 : "$2,082.79", text2 : "Available Balance" , path :'/editUserName', text3 : 'View transactions'},
    { id : "1", title :"Argent Bank Savings (x6712)", text1 : "$10,928.42", text2 : "Available Balance" , path : '/editUserName', text3 : 'View transactions'},
    { id : "2", title :"Argent Bank Credit Card (x8349)", text1 : "$184.30", text2 : "Current Balance" ,  path : '/editUserName', text3 : 'View transactions'},
  ]
  return (
    <div>
      <main className="main bg-dark footer-bg">
        <div className="header">
          <h1>
            Welcome back
            <br />
            <UserName />
          </h1>
          <Link className="edit-button" rel="stylesheet" to="/editUserName" >
          Edit Name
          </Link>
        </div>

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          {Bank.map((items) => (
            <BankItems 
            key={items.id}
            title= {items.title}
            text1= {items.text1}
            text2= {items.text2}
            text3= {items.text3}
            path= {items.path}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default User