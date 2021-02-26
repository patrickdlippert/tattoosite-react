import React, { Component } from 'react';
import Guide from './GuideComponent';
import Artists from './ArtistsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Galleries from './GalleriesComponent';
import Shop from './ShopComponent';
import News from './NewsComponent';
import Faq from './FaqComponent';
import Contact from './ContactComponent';
import HighlightInfo from './HighlightInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ARTISTS } from '../shared/artists';
import { GALLERIES } from '../shared/galleries';
import { GALLERYIMAGES } from '../shared/galleryimages';
import { PROMOTIONS } from '../shared/promotions';
import { BILLBOARDS } from '../shared/billboards';
import { SHOPPING } from '../shared/shopping';
import { NEWS } from '../shared/news';
import { REVIEWS } from '../shared/reviews';
import { FAQ } from '../shared/faq';


import ScrollToTop from './ScrollToTop';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: ARTISTS,
      galleries: GALLERIES,
      galleryimages: GALLERYIMAGES,
      promotions: PROMOTIONS,
      billboards: BILLBOARDS,
      shopping: SHOPPING,
      news: NEWS,
      reviews: REVIEWS,
      faq: FAQ
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home 
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          billboards={this.state.billboards}
        />
      );
    }

    const AttractionWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.attractions.filter(attraction => attraction.id === +match.params.attractionId)[0]} />
      );
    };

    const RestaurantWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.restaurants.filter(restaurant => restaurant.id === +match.params.restaurantId)[0]} />
      );
    };
    
    const EventWithId = ({ match }) => {
      return (
        <HighlightInfo highlight={this.state.events.filter(event => event.id === +match.params.eventId)[0]} />
      );
    };

    return (
      <div>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/artists' render={() => <Artists category={"gallery"} artists={this.state.artists}  />} />

          <Route exact path='/gallery' render={() => <Galleries category={"styles"} galleries={this.state.galleries} galleryimages={this.state.galleryimages} />} />

          <Route exact path='/artistgallery' render={() => <Galleries category={"artists"} galleries={this.state.artists} galleryimages={this.state.galleryimages} />} />

          <Route path='/attractions/:attractionId' component={AttractionWithId} />
          <Route exact path='/restaurants' render={() => <Guide category={"restaurants"} highlights={this.state.restaurants} resources={this.state.sponsors} />} />
          <Route path='/restaurants/:restaurantId' component={RestaurantWithId} />
          <Route exact path='/events' render={() => <Guide category={"events"} highlights={this.state.events} resources={this.state.sponsors} />} />
          <Route path='/events/:eventId' component={EventWithId} />

          <Route exact path='/news' render={() => <News newsitems={this.state.news}  reviews={this.state.reviews} />} />
          <Route exact path='/shop' render={() => <Shop shopitems={this.state.shopping}  />} />
          <Route exact path='/FAQ' render={() => <Faq faqitems={this.state.faq}  />} />
          <Route exact path='/contact' render={() => <Contact />} />

          <Redirect to='/' /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;