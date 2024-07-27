import React from 'react'
import {Link} from 'react-router-dom'
import playButtonimg from '../../assets/play-button.png';
import playimg from '../../assets/play.png';

const Homecard = ({item:{id,cover,name,rating,time,desc,starring,genres,tags,videos}}) => {
  return (
    <>
    <div className="box">
        <div className="coverImage">
            <img src={cover} alt=''/>
        </div>
        <div className="content flex">
           <div className="details row">
           <div className="rating flex">
            <div className="rate">
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star-half'></i>
            </div>
           <label>{rating}(IMDB)</label>
           <span>GP</span>
           <label>{time}</label> 
           </div>
          <p>{desc}</p>  
          <div className="cast">
            <h4>
              <span>Starring</span>
              {starring}
            </h4>
            <h4>
              <span>Genres</span>
              {genres}
            </h4>
            <h4>
              <span>Tags</span>
              {tags}
            </h4>
            </div>
            <button className='primary-btn'>
              <i className='fa fa-play'></i>
              Play Now
            </button>
            </div>
            
            <div className="playButton row">
              <Link to={`/singlePage/${id}`}>
              <button>
                <div className="img">
                  <img src={playButtonimg}></img>
                  <img src={playimg} className='change'></img>
                </div>
                Watch Trailer
              </button>
              </Link>
            </div>
          </div>
          </div>
    </>
  )
}

export default Homecard
