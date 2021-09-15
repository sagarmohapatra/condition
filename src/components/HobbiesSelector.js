import React, { useState } from "react";
let Hobbies = () => {
    let [start, setstart] = useState(
        {
            Etting: false,
            Driving: false,
            Drinking: false
        }
    )
    let upDatecheck = (e) => {
        setstart(
            {
                ...start,
                [e.target.name]: e.target.checked
            }
        )
    }
    return (
        <React.Fragment>
            <section className="container my-3">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h2>Hobbies Selector</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox" name="Etting" value="" id="flexCheckChecked" onChange={upDatecheck} />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Etting
                                        </label>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox" name="Driving" value="" id="flexCheckChecked" onChange={upDatecheck} />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Driving
                                        </label>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox" name="Drinking" value="" id="flexCheckChecked" onChange={upDatecheck} />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Drinking
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    {
                                        start.Etting &&
                                        <div className="card p-2 mt-2">
                                            <h4>Etting</h4>
                                            <p>i am quite confident own my driving skill so i want to try my best when i have driving my car from bisoi to kichakasori
                                                temple.but when drive with my brother i have get more confident rather than when i have driving alone.but one day i have
                                                going to my village alone with my mother but now i have quite confident.

                                            </p>
                                        </div>
                                    }
                                    {
                                        start.Driving &&
                                        <div className="card p-2 mt-2">
                                            <h4>Sleeping</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ratione atque
                                                ducimus harum, quod ex, aut vero quisquam quaerat earum quae officiis fuga
                                                doloribus odit sed deserunt facere perferendis! Magni?
                                            </p>
                                        </div>
                                    }
                                    {
                                        start.Drinking &&
                                        <div className="card p-2 mt-2">
                                            <h4>Sleeping</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ratione atque
                                                ducimus harum, quod ex, aut vero quisquam quaerat earum quae officiis fuga
                                                doloribus odit sed deserunt facere perferendis! Magni?
                                            </p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Hobbies;