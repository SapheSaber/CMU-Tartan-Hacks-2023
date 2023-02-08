import './Home.css';
import React, {useState} from 'react';

import islandPic from '../img/island1.png'
import islandPic2 from '../img/island1.png'
import islandPic3 from '../img/island1.png'
import islandPic4 from '../img/island1.png'
import Map from '../img/homeMap.png'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Home() {
  const [popUp, setPopUp] = useState(false)
  const popUpHandler = () => {
    setPopUp(true)
  }

  return (
    <div className="Home">
      <div className='islandContainer'>

        <div className="islandImg x1 wobble">
          <Link to='/localPage' >
            <h3 className='headComm'>Community Issues</h3>
            <img className="island1" src={islandPic} />
          </Link>
        </div>

        <div className="islandImg x2 wobble">
          <Link to='/eventPage' >
            <h3 className='headEvent'>Events</h3>
            <img className="island2" src={islandPic2} />

          </Link>

        </div>

        <div className="islandImg x3 wobble">
          <Link to='/ideaPage'>
            <h3 className='headIdea'>Ideas</h3>
            <img className="island3" src={islandPic3} />
          </Link>

        </div>


        <div className="islandImg x4 wobble">
          <img className="island4" src={islandPic4} />
          <h3 className='headVoting'>Voting</h3>
        </div>

      </div>

      <div className = "mapImg">
        <div className="map">
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Pittsburgh+(Carnegie%20Mellon%20University)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <p>Look up upcoming Events!</p>

        </div>
      </div>

      <div className='buttonContainer'>
        <div className="button" onClick={popUpHandler}> <FaPlus color='#ffffff' /> </div>
      </div>

      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>


    </div>
  );
}


export default Home;
