import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import Upcoming from "../upcoming/Upcoming";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState(recommended);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedItem = homeData.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      setItem(selectedItem);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>No item found</div>;
  }

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <section className="singlePage">
        <div className="singleHeading">
          <h1>{item.name}</h1>
          <span> | {item.time} | </span>
          <span> HD </span>
        </div>
        <div className="container">
          <iframe
            width="100%"
            height="500"
            src={getYouTubeEmbedUrl(item.video)}
            title={item.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="para">
            <h3>Date: {item.date}</h3>
            <p>{item.desc}</p>
            <p>
              Get access to the direct Project Overview with this report. Just
              by a quick glance, you’ll have an idea of the total tasks allotted
              to the team, number of milestones given & completed, total Links
              created for the project, and the total time taken by all the
              users. Each section would elaborate the data further, if chosen.
            </p>
          </div>
          <div className="social">
            <h3>Share: </h3>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"
              alt="Twitter"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
              alt="LinkedIn"
            />
          </div>
        </div>
      </section>
      {rec.length > 0 && <Upcoming items={rec} title="Recommended Movies" />}
    </>
  );
};

export default SinglePage;
