

import Featured from "../Featured";
import FeaturedProperties from "../featuredProperties";
import Footer from "../footer";
import Header from "../Headers";
import MailList from "../MailList";
import Navbar from "../Navbar";
import PropertyList from "../Propertylist";
import "./index.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;