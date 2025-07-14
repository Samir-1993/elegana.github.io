import React from 'react'
import { MainHeading } from '../Components/MainHeading'
import { Heading3 } from '../Components/Heading3'
import { SubHeading } from '../Components/SubHeading'
import { ContactForm } from '../Components/ContactForm/ContactForm'
import { ContactInfoBorderBox } from '../Components/ContactInfoBorderBox/ContactInfoBorderBox'

import chatIcon from "../Components/Assets/images/chat.svg"
import phoneIcon from "../Components/Assets/images/contact_phone.svg"
import emailIcon from "../Components/Assets/images/email.svg"

export const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <MainHeading>Contact Us</MainHeading>
          <p className="details mt-3">
            We always love hearing from our customers! Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.
            <br /><br />
            Contact our Customer Care team through the contact form below, email us at hello@modimal.com or live chat with us via our chat widget on the bottom right hand corner of this page.
            <br /><br />
            We will aim to respond to you within 1-2 business days.
          </p>

          <ContactForm className="mt-30" />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ContactInfoBorderBox
                img={chatIcon}
                heading="Chat with us"
                details="We are here and ready to chat"
                label="Start chat"
                to="https://wa.me/919876543210?text=Hi%20there,%20I%20need%20assistance"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 sm-mt-30 mb-mt-30">
              <ContactInfoBorderBox
                img={phoneIcon}
                heading="Call us"
                details="We're here to Talk to You"
                label="+1(929)460-3208"
                to="tel:+1(929)460-3208"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 sm-mt-30 mb-mt-30">
              <ContactInfoBorderBox
                img={chatIcon}
                heading="Email Us"
                details="You are welcome to send us an email"
                label="Send Email"
                to="mailto:elegana@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
