import React from "react";


function HighlightInfo({highlight}) {
    if(highlight.photos) {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>{highlight.name}</h2>
                        <h5>{highlight.date}</h5>
                        <p>{highlight.description}</p>
                        <hr />
                    </div>

                </div>
            </div>
        );
    }
    return( <div /> );
}

export default HighlightInfo;