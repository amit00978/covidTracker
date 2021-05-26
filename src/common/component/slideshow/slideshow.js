import React,{useState } from "react";
// import { Zoom, Fade } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";
import Button from "@material-ui/core/Button";
import {
  godWorker,
  mastGirl,
  maskMan,
  donation,
  donationWhite,
} from "../../../images/corona/index";

import "./slideshow.css";
// const images = [

//   godWorker,
//   maskMan,
//   mastGirl
// ];

const images = [
  { url: godWorker },
  { url: maskMan },
  { url: mastGirl }
];
function Slideshow() {
const [imageColor, setImageColor] = useState(false)
  return (
    // <div className="slide-container" style={{display:'flex',justifyContent:'center',marginTop:20}}>
    //   {/* <Fade scale={0.4}>
    //     {images.map((each, index) => (
    //       <img key={index} style={{ width: "100%" }} src={each} />
    //     ))}
    //   </Fade> */}
    //   <SimpleImageSlider
    //     style={{ margin: "0 auto"}}
    //     width={300}
    //     height={170}
    //     images={images}
    //     bgColor="#f65d4e"
    //     showBullets={true}
    //     showNavs={true}
    //     slideDuration={0.5}
    //     navStyle={2}
    //     useGPURender={true}
    //     style={{ borderRadius: 20 }}
    //   />
    // </div>
    <div
      style={{
        display: "flex",
        backgroundColor: imageColor ? "#f65d4e" : "#fff",
        height: 180,
        cursor: "pointer",
        marginTop: 20,
        borderRadius: 20,
      }}
      className="slide_image_donation"
      onMouseEnter={() => {
        setImageColor(true);
      }}
      onMouseLeave={() => {
        setImageColor(false);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginLeft: 20,
        }}
      >
        <div style={{ flex: 0.3, marginTop: 20 }}>
          <h5 className={imageColor ? "text-enable" : "text-disabled"}>
            Make your Self Proud
          </h5>
        </div>
        <div style={{ flex: 0.33, marginBottom: 10 }}>
          <p className={`donateText ${imageColor ? "text-enable" : "text-disabled"}`}>
            {imageColor
              ? "Fills the color in someone Life"
              : "Donate for covid-19 Relief"}
          </p>
        </div>
        <div style={{ flex: 0.33 }}>
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            className={
              imageColor
                ? "yes-donate-button-enable"
                : "yes-donate-button-disable"
            }
          >
            yes! I Donate
          </Button>
        </div>
      </div>

      <img
        style={{
          width: 150,
          height: 150,
          alignSelf: "flex-end",
        }}
        src={imageColor ? donation : donationWhite}
      />
    </div>
  );
};

export default Slideshow
