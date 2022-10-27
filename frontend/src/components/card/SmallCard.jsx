import React from 'react'

function SmallCard() {
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Hommes</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard
