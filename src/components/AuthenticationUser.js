import React, { useState } from "react";
let Sagar = () => {
    let [other, setother] = useState(
        {
            islogin: false
        }
    )
    let login = () => {
        setother({
            islogin: true
        }

        )
    }
    let logout = () => {
        setother(
            {
                islogin: false
            }
        )
    }
    return (

        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-body">

                                {
                                    !other.islogin ?
                                        <button className="btn btn-success" onClick={login}>Login</button> :
                                        <button className="btn btn-warning" onClick={logout}>Logout</button>

                                }
                                {
                                    other.islogin ?
                                        <h2>welcome user</h2> :
                                        <h2>welcome gusest</h2>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Sagar;