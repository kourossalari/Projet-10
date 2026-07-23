import { Link } from "react-router-dom"

function AccountFeature ({title, text1, text2, icone, path}) {
    
    return (
        <section className="account3">
          <div className="account-content-wrapper3">
            <h3 className="account-title3"> {title} </h3>
            <p className="account-amount3"> {text1} </p>
            <p className="account-amount-description3"> {text2} </p>
          </div>
          <Link to={path} className="cta">
            {icone}
          </Link>
        </section>
    )
}
export default AccountFeature