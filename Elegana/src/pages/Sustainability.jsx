import React from 'react'
import { MainHeading } from '../Components/MainHeading'
import { SubHeading } from '../Components/SubHeading'
import { Heading3 } from '../Components/Heading3'
import susImg1 from '../Components/Assets/images/sus-img1.png'
import susImg2 from '../Components/Assets/images/sus-img2.png'
import susImg3 from '../Components/Assets/images/sus-img3.png'
import susImg4 from '../Components/Assets/images/sus-img4.png'

export const Sustainability = () => {
  return (
    <>
      <section className="sust-section1">
        <div className="container">
          <MainHeading>Sustainability</MainHeading>
          <p className="details mt-20">
            At Elegana, sustainability is at the heart of everything we do. Our brand identity, characterized by its simplicity and elegance, is a reflection of our commitment to a more sustainable future.
          </p>
          <SubHeading className="mt-40">Our Mission, The Modimal six:</SubHeading>
          <div className="row justify-content-between mt-30">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <Heading3>Minimalism</Heading3>
              <p className="details mt-20">
                we believe less is more. Our thoughtfully design pieces embrace minimalism ensuring that garment becomes a versatile and timeless addition to your wardrobe. by choosing quality over quantity, we encourage conscious consumption.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <Heading3>Circular</Heading3>
              <p className="details mt-20">
                Embracing the circular economy, we design with longevity in mind. Our pieces are intended to be treasured for years, encouraging a shift away from disposable fashion. When you invest in our clothing, you're investing in a more sustainable future.
              </p>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 mt-40">
              <Heading3>Ethical</Heading3>
              <p className="details mt-20">
                Every stitch tells a story. Our garments are meticulously crafted by skilled artisans who share our values of ethical and fair labor practices. This dedication to craftsmanship not only ensures exceptional quality but also supports a network of talented individuals.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mt-40">
              <Heading3>Transparency</Heading3>
              <p className="details mt-20">
                We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. we are updating all  information very six months.
              </p>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 mt-40">
              <Heading3>Eco - Freindly Materials</Heading3>
              <p className="details mt-20">
                We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mt-40">
              <Heading3>Community And Empowerment</Heading3>
              <p className="details mt-20">
                Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change.
              </p>
            </div>

          </div>
          <p className="details mt-40">
            Guided by our core missions, we intertwine sustainability into every thread of our brand, from thoughtfully sourced materials and innovative manufacturing process to nurturing product longevity and embracing eco-friendly packaging – all harmonizing to create a more meaningful and responsible approach to fashion.
          </p>
          <div className="row justify-content-between mt-50">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sus-imgbox">
                <img src={susImg1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="sus-imgbox">
                <img src={susImg2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-30">
              <div className="sus-imgbox">
                <img src={susImg3} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-30">
              <div className="sus-imgbox">
                <img src={susImg4} alt="" />
              </div>
            </div>
          </div>
          <p className="details mt-40">
            "With every step, our quest for sustainability is fortified by our trusted suppliers, united in our shared dedication to ethical craftsmanship and a more conscious future."
          </p>
        </div>
      </section>
    </>
  )
}
