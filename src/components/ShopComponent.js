import React from "react";
import RatingStars from "./RatingStarsComponent";


function RenderShopping({shopitems}) {
    if (shopitems) {
        return (
            <div className="container" id="shopping-panel">
                <div className="row row-noseparator">
                    {shopitems.map(shopitem => {
                        return (
                            <div className="col-md-3 col-sm-6 mb-4" key={shopitem.id}>
                                <div className="product-grid9">
                                    <div className="product-image9">
                                        <a href="/">
                                            <img className="pic-1" src={shopitem.image1} alt={shopitem.name}/>
                                            <img className="pic-2" src={shopitem.image2} alt={shopitem.name} />
                                        </a>
                                        <a href="/" className="fa fa-search product-full-view"></a>
                                    </div>
                                    <div className="product-content">
                                        <span className="rating">
                                        <RatingStars rating={shopitem.rating}  />
                                        </span>
                                        <h3 className="title"><a href="/">{shopitem.name}</a></h3>
                                        <div className="price">{shopitem.price}</div>
                                        <a className="add-to-cart" href="/">{shopitem.description}</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return (<div />);
}

function Shop({shopitems}) {
    if (shopitems) {
        return(
            <div className="container">
                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>Shopping</h3>
                        <p className="text-light">Take a little Bad Panda home with you!</p>
                    </div>
                </div>
                <RenderShopping shopitems={shopitems} />
            </div>
        );
    }
    return( <div /> );
}

export default Shop;