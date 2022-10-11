import React from "react"
// import { useState } from "react"

import data from '../data.json'

function Allproduct() {
    // const [alldata, setalldata] = useState(data.products)

    return (
            <div className="flex-between flex-wrap  common-padding ">
            {
                data.products.map((prod) => {
                    return (
                        <div className="width20 item">
                            <figure>
                                <img src={prod.productImage} alt={prod.productName}  />
                            </figure>
                            {
                                prod.tag === "NEW" ?
                                <h4 className="new">{prod.tag}</h4>
                                :""
                            }
                         
                            <h3>{prod.productName}</h3>
                            <span className="price">{prod.price}</span>
                        </div>
                    )
                })
            }
            </div>

    )
}

export default Allproduct