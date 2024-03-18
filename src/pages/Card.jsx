import React from "react";
import './Card.css';
// import { LinkedIn, Instagram } from '@material-ui/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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
            <LinkedInIcon className="linkedin-icon" />
          </a>
          {/* Instagram link */}
          <a href={props.instagramLink} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="instagram-icon" />
          </a>
        </div>
      </div> 
    </div>
  );
}

export default Card;
