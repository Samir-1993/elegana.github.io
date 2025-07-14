import React from 'react'
import "./MainBanner.css";
import bannerImage from '../Assets/images/banner-1-right.png'
import {Button} from '../Button/Button'

export const MainBanner = () => {
  return (
    <section className="banner-section">
        <div className="banner-row">
            <div className="bg_banner bg_banner-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="banner-contentbox">
                                <div className="banner-content-borderbox">
                                    <p className="banner-heading1">
                                        New Arrival
                                    </p>
                                    <h2 className="banner-heading2">
                                        Fashion
                                    </h2>
                                    <h3 className="banner-heading3">
                                        Season Collection
                                    </h3>
                                    <div className="banner-button">
                                        <Button label="Shop Now" to="/Shop" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="banner-right-imgbox">
                                <img src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}
