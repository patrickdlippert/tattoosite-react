import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

function RenderGalleryThumbnail({category, galleryimage}) {
    return (

        <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a href={galleryimage.image_full}>
                <img className="img-fluid" src={galleryimage.image_thumb} alt={galleryimage.name} />
            </a>
        </div>

    );
}

function RenderGalleryPanel({category, galleryimages}) {
    if (galleryimages) {
        return (
            <div className="row photos">
                {galleryimages.map(galleryimage => {
                    return (
                        <RenderGalleryThumbnail key={galleryimage.id} galleryimage={galleryimage} />
                    );
                })}
            </div>
        );
    }
    return (<div />);
}

function RenderGalleryTabs({galleries, galleryimages}) {
    const options = {
        caption: {
            showCaption: false
        },
        buttons: {
          showDownloadButton: false
        }
    };

    const galleryTabs = galleries.map(gallery => {
        return (
            <TabPane key={gallery.id} tabId={`${gallery.id}`}>
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">{gallery.name}</h2>
                        <p className="text-center font-weight-normal">{gallery.description}</p>
                    </div>
                    <SimpleReactLightbox>
                        <SRLWrapper options={options}>
                            <RenderGalleryPanel galleryimages={galleryimages.filter(gimages => gimages.typecode === gallery.id)} />
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
            </TabPane>
        );
    });


    if (galleries) {
        return (
            <>
            {galleryTabs}
            </>
        );
    }
    return (<div />);
}


function Galleries(props) {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="container">
            {/* This row has a description area above the galleries */}
            <div className="row row-noseparator align-items-center">
                <div className="col">
                    <h3>Tattoo Style Galleries</h3>
                    <p className="text-light">Explore the most common styles of modern tattooing!
                    </p>
                </div>
            </div>


            <div className="row row-content">
                <div className="photo-gallery">
                    <Nav tabs>

                        <NavItem>
                            <NavLink
                                className={activeTab === '1' ? 'active' : ''}
                                onClick={() => { toggle('1'); }}
                            >
                                Neo Traditional
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '2' ? 'active' : ''}
                                onClick={() => { toggle('2'); }}
                            >
                                New School
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '3' ? 'active' : ''}
                                onClick={() => { toggle('3'); }}
                            >
                                American Traditional
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '4' ? 'active' : ''}
                                onClick={() => { toggle('4'); }}
                            >
                                Japanese
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '5' ? 'active' : ''}
                                onClick={() => { toggle('5'); }}
                            >
                                Watercolor
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '6' ? 'active' : ''}
                                onClick={() => { toggle('6'); }}
                            >
                                Tribal
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '7' ? 'active' : ''}
                                onClick={() => { toggle('7'); }}
                            >
                                Biomechanical
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={activeTab === '8' ? 'active' : ''}
                                onClick={() => { toggle('8'); }}
                            >
                                Realism
                            </NavLink>
                        </NavItem>


                        <TabContent id="tab-content" activeTab={activeTab}>
                            <RenderGalleryTabs galleries={props.galleries} galleryimages={props.galleryimages} />
                        </TabContent>

    
                    </Nav>
                </div>
            </div>
        </div>

    );

}

export default Galleries;