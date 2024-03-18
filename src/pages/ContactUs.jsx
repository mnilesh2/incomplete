import React from "react";
import Contacts from "./contact";
import Card from "./Card";
import './Card.css';

function ContactUs(){
    return (
        <div>
        <div className="cont1">
          <Card
             key="Indranil Saha"
             name="Indranil Saha"
             phone="Instructor"
             image="images/indrnil.jpg"
             email="isaha@cse.iitk.ac.in"
             linkedInLink="https://linkedin.com/in/indranil-saha-8859135"
             instagramLink="khwdbc"
          />
          <Card
             key="Abhilash"
             image="images/abhilash.jpeg"
             name="Yemike Abhilash Chandra"
             phone="Technical Assistant"
             email="yemikeac22@iitk.ac.in"
             linkedInLink="https://www.linkedin.com/in/abhilash-chandra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             instagramLink="jeghcb"
          />
        </div>
        <div className='cont'>
          { Contacts.map((item) => {
            return (
              <Card 
              key ={item.name}
              name = {item.name}
              phone ={item.phone}
              email ={item.email}
              image ={item.image}
              linkedInLink={item.linkedInLink}
              instagramLink={item.instagramLink}
              />
              );
           })}
           
        </div>
        </div>
      );
}

export default ContactUs;