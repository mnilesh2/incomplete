import React from "react";
import './Card.css';
import { LinkedIn, Instagram } from '@material-ui/icons';

function Card(props){
  return (
    <div className="outer">
      <div className='box'>
        <div className="image">
          <img className="dp" src={props.image} alt="" />
        </div>
        <div className="details">
          <h3>{props.name}</h3>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
        <div className="links">
          {/* LinkedIn link */}
          <a href={props.linkedInLink} target="_blank" rel="noopener noreferrer">
            <LinkedIn className="linkedin-icon" />
          </a>
          {/* Instagram link */}
          <a href={props.instagramLink} target="_blank" rel="noopener noreferrer">
            <Instagram className="instagram-icon" />
          </a>
        </div>
      </div> 
    </div>
  );
}

export default Card;
