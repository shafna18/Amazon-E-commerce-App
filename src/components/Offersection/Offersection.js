import React from 'react';
import offerimg from './Images/OfferImg.jpeg'

const offersData = [
    {
        id: 1,
        title: "Summer Sale",
        description: "Up to 50% off on summer collections!",
    },
    {
        id: 2,
        title: "New Arrivals",
        description: "Check out the latest trends.",
      
    },
    {
        id: 3,
        title: "Clearance Sale",
        description: "Last chance to grab these deals.",
        
    }
];

const OfferSection = () => {
    return (
        <div className="container ">
            <h2 className="mb-4">Special Offers</h2>
            <div className="row">
                {offersData.map(offer => (
                    <div className="col-md-4" key={offer.id}>
                        <div className="card ">
                            <img src={offerimg} className="card-img-top" alt={offer.title} />
                            <div className="card-body">
                                <h5 className="card-title">{offer.title}</h5>
                                <p className="card-text">{offer.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferSection;