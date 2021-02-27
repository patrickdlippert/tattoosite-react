import React from "react";
import { Fade, Stagger } from 'react-animation-components';
import CardCarousel from './CardCarouselComponent';

function RenderNewsItems({newsitems}) {
    if (newsitems) {
        return (
            <div className="col m-1">
                <Stagger in>
                    {newsitems.map(newsitem => {
                        return (
                            <Fade in key={newsitem.id}>
                                
                                <h4 className="text-light">{newsitem.title}</h4>
                                <a href={newsitem.image}><img src={newsitem.image} alt={newsitem.name} className="img-fluid" /></a>
                                <p className="text-light">{newsitem.description}</p>
                                <div>
                                    <span className="badge bg-light">Posted: {' '}
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(newsitem.date)))}</span>
                                </div>
                                <hr />
                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
    return (<div />);
}

function News({newsitems, reviews}) {
    if (newsitems) {
        return(
            <div className="container">
                 <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>News and Events</h3>
                        <p className="text-light">If there is anything going on with us or the shop, you will find it here. Please check back frequently as we will update regularly. Also, be sure to click the links to our social media pages where you can be kept in the loop on upcoming events.
                        </p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-sm-8 photo-news">
                        <h3 className="pb-4">Latest News</h3>

                        <RenderNewsItems newsitems={newsitems} />
                    </div>
                </div>

                <h3>Reviews</h3>
             <CardCarousel resources={reviews} />

            </div >
        );
    }
    return( <div /> );
}

export default News;