import { Link } from 'react-router-dom'
import '../css/main.css'
import SimpleForm from './Form'
import User from './User'

function Login() {

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

        <SimpleForm />
          
        </section>
      </main>

    </div>
  )
}

export default Login