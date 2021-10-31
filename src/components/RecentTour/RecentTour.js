import React from 'react'

const RecentTour = ({ services }) => {
    return (
        <>
            {
                services.map(service => {
                    return (
                        <div className="img-container">
                            <img className="img-fluid" src={service.images[1]} alt={service.title} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecentTour
