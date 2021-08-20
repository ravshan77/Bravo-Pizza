import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import img1 from "../../assets/Slider/g_1583835342_d69c14ad90c34dff8a9876a4dbe6c4d8.jpeg"
import img2 from "../../assets/Slider/g_1586345846_a8b45e608cfc48ff90e420800d81d90d.jpeg"
import img3 from "../../assets/Slider/g_1596637077_37394ecc2bc74f76b7ebf8b93a33ba78.jpeg"
import img4 from "../../assets/Slider/g_1596699677_aa3a1cb9a55f4997a6b7266a671c9fe9.jpeg"
import img5 from "../../assets/Slider/g_1597127499_12836e76cb824d508bb84ac6d728d0fd.jpeg"
const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:img1,
  },
  {
    label: 'Bird',
    imgPath:img2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:img3,
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:img4,
  },
  {
    label: 'Goč, Serbia',
    imgPath:img5,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    Width: "100%",
    flexGrow: 1,
    position: "relative"
  },
  img: {
    height: 255,
    Width: "100%",
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    objectFit:"cover",
    borderRadius:"25px"
  },
  next:{
      position: "absolute",
      top: 0,
      borderRadius:"15px",
      left: "-10%",
      outline: "none",
    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)",
    color: "black",
    height: "100%",
    opacity: 0.5,
    '&:hover': {
      opacity:1,
    },

  },
  back:{
    position: "absolute",
    borderRadius:"15px",
    color: "black",
    outline: "none",
    backgroundColor: "",
    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)",
    opacity: 0.2,
    top: 0,
    right: "-10%",
    height: "100%",
    '&:hover': {
      opacity:1,
    },

  }
}));

const CoruselUi = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
          <Button size="small" className={classes.back} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            <ArrowForwardIosIcon />
          </Button>
          <Button size="small" className={classes.next} onClick={handleBack} disabled={activeStep === 0}>
              <ArrowBackIosIcon/>
            
          </Button>
    </div>
  );
}

export default  CoruselUi;