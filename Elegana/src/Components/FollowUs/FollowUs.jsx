import React from 'react'
import "./FollowUs.css";
import { Link } from 'react-router-dom';
import { MainHeading } from "../MainHeading";
import galleryImg1 from "../Assets/images/gallery-img1.png"
import galleryImg2 from "../Assets/images/gallery-img2.png"
import galleryImg3 from "../Assets/images/gallery-img3.png"
import galleryImg4 from "../Assets/images/gallery-img4.png"
import galleryImg5 from "../Assets/images/gallery-img5.png"
import instagramIcon from "../Assets/images/instagram.png"

export const FollowUs = () => {
  return (
    <section className="followus-section">
        <div className="container">
            <MainHeading>Follow us @Elegana</MainHeading>
            <div className="row mx-0 justify-content-between mt-20">
                <div className="col-lg-6 col-md-12 col-sm-12 px-0">
                    <div className="sec5-imagebox1">
                        <img src={galleryImg1} className="img-fluid" alt="Gallery image" />
                        <div className="hover-iconbox">
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <img src={instagramIcon} className="img-fluid" alt="Gallery image" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-mt-30 sm-mt-30 px-0">
                    <div className="sec5-imagebox2">
                        <img src={galleryImg2} className="img-fluid" alt="Gallery image" />
                        <div className="hover-iconbox">
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <img src={instagramIcon} className="img-fluid" alt="Gallery image" />
                            </Link>
                        </div>
                    </div>
                    <div className="sec5-imagebox3 mb-mt-30 sm-mt-30">
                        <img src={galleryImg3} className="img-fluid" alt="Gallery image" />
                        <div className="hover-iconbox">
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <img src={instagramIcon} className="img-fluid" alt="Gallery image" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-mt-30 sm-mt-30 px-0">
                    <div className="sec5-imagebox4">
                        <img src={galleryImg4} className="img-fluid" alt="Gallery image" />
                        <div className="hover-iconbox">
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <img src={instagramIcon} className="img-fluid" alt="Gallery image" />
                            </Link>
                        </div>
                    </div>
                    <div className="sec5-imagebox5 mb-mt-30 sm-mt-30">
                        <img src={galleryImg5} className="img-fluid" alt="Gallery image" />
                        <div className="hover-iconbox">
                            <Link to="https://www.instagram.com/" target='_blank'>
                                <img src={instagramIcon} className="img-fluid" alt="Gallery image" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}
