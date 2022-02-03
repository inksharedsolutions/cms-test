import * as React from "react";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.jpg";
import FooterComp from "../../common/Footer/footer.component";

import libraryBG from "../../assets//images/backgrounds/library.png";

import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
import Blueberry from "../../assets/images/books/bluedreams.png";
import Amazon from "../../assets/images/logo/amazon-lib.png";

interface Props { }

const AboutUs: React.FC<Props> = () => {

    return (

        <div className="library-Component">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="temp"></div>
            <div className="bg-lib">
              <h2>STRATTON PRESS  <span>PUBLISHING</span></h2>
              <h3>Search any books of our Stratton Press Authors.</h3>
            </div>

            <div className="searchBar">
                <div className="w-100">

                    <input type="text"  placeholder="search"/>  

                    <label>Sort By:</label>

                    <select name="sort" id="sort">
                        <option value="Relevance">
                            Relevance
                        </option>
                        <option value="Date">
                            Date
                        </option>
                    </select>

                    <button> SEARCH </button>
                </div>
            </div>

        

            <div className="channels-section">
                <div className="channel-header">
                    <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
                </div>
                <div className="channels-body">
                    <div className="amazon-kindle"><Image src={AmazonKindle} alt="..." /></div>
                    <div className="barnes-noble"><Image src={barnesNoble} alt="..." /></div>
                    <div className="chapters"><Image src={Chapters} alt="..." /></div>
                    <div className="indigo"><Image src={Indigo} alt="..." /></div>
                    <div className="ingram"><Image src={Ingram} alt="..." /></div>
                    <div className="lightning-source"><Image src={LightningSource} alt="..." /></div>
                </div>
            </div>
            <FooterComp />
        </div>

    );
};

export default AboutUs;  