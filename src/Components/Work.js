import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "As of your appetite, you can choose the propotion of the meal that you wanna enjoy.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Variety of meals around the country available here, so that customers can choose according to their their appetite. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get superfast Deliveries of your tasty food when ordered with restuarant partner apps.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We are a team of passionate food lovers who are always looking for
          new and exciting ways to make your life easier.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
