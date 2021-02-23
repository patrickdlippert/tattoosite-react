import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardCarousel from './CardCarouselComponent';


function RenderGuideItem({category, highlight}) {

    // This function creates an image gallery link using react-router only if there's a photos oject 
    // within the provided highlight object
    const CreateImageLink = ({ category, highlight }) => {
        if(highlight.photos) {
            return (
                <Link to={`/${category}/${highlight.id}`}>
                    <Button color="primary" size="sm"><i className="fas fa-image"></i> more</Button>
                </Link>
            );
        }
        return <span />
    };



    return (
        <React.Fragment>

           {/* Dynamically alternate images left and right by adding "order-md-last" to odd highlight
                IDs and also place a numbered purple triangle on the side of the image that is closest
                to the text */}

            <div className={`col col-md-7 col-xl-6 px-4 ${(highlight.id % 2) ? 'order-md-last' : ''}`} >
                <div className="image-container">
                    <img className="d-flex mr-3 img-fluid" src={highlight.image} alt={highlight.name} />
                    <div className={`${(highlight.id % 2) ? 'top-left-triangle' : 'top-right-triangle'}`}></div>
                    <div className={`${(highlight.id % 2) ? 'top-left-text' : 'top-right-text'}`}>
                        {/* Stacked fontawesome icon of a number ontop of a circle */}
                        <span className="fa-stack">
                            <span className="fa fa-circle-o fa-stack-2x"></span>
                            <strong className="fa-stack-1x">
                                {highlight.id+1}
                            </strong>
                        </span>
                    </div>
                    <CreateImageLink category={category} highlight={highlight} />
                </div>
            </div>

            {/* Create a simple text column using name, date (if one exists), rating, price, type, 
            description, address and URLfrom the highlight item. Also generate a gold star icon array
            for a visual represenation of the rating. The MDBAnimation component makes the text block
            "zoom in" to its location in the column. */}
            <div className="col-md-5 col-xl-6 text-left px-4">
                    <h2>{highlight.name}</h2>
                    <p>{highlight.description}</p>
            </div>
        </React.Fragment>
    );
}


function Guide(props) {

    const guide = props.highlights.map(highlight => {
        return (
            <div key={highlight.id} className="row row-content align-items-center">
                <RenderGuideItem category={props.category} highlight={highlight} />
            </div>
        );
    });

    return (
        <>
        <div className="container">
            <div className="row">
                {guide}
            </div>
        </div>
        <CardCarousel resources={props.resources} />
        </>
    );

}

export default Guide;