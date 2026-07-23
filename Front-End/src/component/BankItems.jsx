import { Link } from "react-router-dom";

function BankItems ({title, text1, text2, text3, path}) {
    return (
        <div>
            <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title"> {title} </h3>
                        <p className="account-amount"> {text1} </p>
                        <p className="account-amount-description"> {text2} </p>
                        <Link className="transaction-button" to={path} > {text3} </Link>
                    </div>
            </section>
        </div>
    )
}

export default BankItems