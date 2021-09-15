
import React, { useState } from "react";
let Sipu = () => {
    let [worker, setworker] = useState(
        {
            employees: [
                {
                    sno: 'qwe110',
                    name: 'sagar kumar mohapatra',
                    age: 22,
                    designation: 'S/W developer',
                    location: 'Odisha'

                },
                {
                    sno: 'qwe100',
                    name: 'suman kumar mohapatra',
                    age: 29,
                    designation: 'S/W developer',
                    location: 'Odisha'

                },
                {
                    sno: 'qwe410',
                    name: 'ashis kumar dey',
                    age: 23,
                    designation: 'S/W developer',
                    location: 'Odisha'

                },
                {
                    sno: 'qwe410',
                    name: 'susmita dutta',
                    age: 23,
                    designation: 'S/W developer',
                    location: 'Odisha'

                }

            ]
        }
    )
    return (
        <React.Fragment>
            <section className="container  dusty-grass-gradient">
                <div className="row mt-5">
                    <div className="col">
                        {
                            worker.employees.map((employee) => {
                                return (
                                    <div className="card my-2" key={employee.sno}>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    ID-:{employee.sno}
                                                </li>
                                                <li className="list-group-item">
                                                    Name-:{employee.name}
                                                </li>
                                                <li className="list-group-item">
                                                    AGE-:{employee.age}
                                                </li>
                                                <li className="list-group-item">
                                                    Designation-:{employee.designation}
                                                </li>
                                                <li className="list-group-item">
                                                    Location-:{employee.location}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}
export default Sipu;