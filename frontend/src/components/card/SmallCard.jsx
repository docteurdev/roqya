import React from 'react'

function SmallCard({title}) {
    return (
        <div>
            <div className="card w-48 bg-base-100 shadow-xl">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">{title} </h2>
                    <div className="card-actions justify-start">
                        <button className="btn ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard
