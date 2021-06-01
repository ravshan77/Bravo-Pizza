import React, { useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/Logo/photo_2021-05-26_02-30-21.jpg";
import "./goToStore.css";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useForm, Controller } from "react-hook-form";
// FIRST STEPPERONE COMPONENT
import { useDispatch, useSelector } from "react-redux";
import {
  addFood,
  decreaseFood,
  removeFood,
} from "../../store/item/item-action";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// TWU STEPPERTWO COMPONENT
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
// THREE STEPPERTHREE COMPONENT
import payme from "../../assets/Bank_Card_Imgs/download 1.png";
import mir from "../../assets/Bank_Card_Imgs/image 9.png";
import visa from "../../assets/Bank_Card_Imgs/image 10.png";
import masterCard from "../../assets/Bank_Card_Imgs/image 11.png";
import Popover from "@material-ui/core/Popover";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import Cake from "../../pages/cake/cake";
// import StepperOne from "../../components/Steppers/Stepper1/Stepper1";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
  },
  headerSlide: {
    width: "102%",
  },
  headerSlideTwoMedia: {
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
    [theme.breakpoints.only("lg")]: {
      display: "none",
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor: "#e0e0e0",
    color: "rgb(92, 99, 112)",
    margin: "20px auto",
    width: "13%",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#e0e0e0",
      color: "black",
      cursor: "pointer",
    },
    [theme.breakpoints.only("xs")]: {
      width: "35%",
      height: "32px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "25%",
      height: "32px",
    },
    [theme.breakpoints.only("md")]: {
      width: "17%",
      height: "32px",
    },
  },
  finishedBtn: {
    fontSize: "12px",
    margin: "20px auto",
    height: "31px",
    borderRadius: "20px",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "white",
      color: "orange",
      border: "1px solid orange",
      cursor: "pointer",
    },
    width: "13%",
    height: "35px",
    [theme.breakpoints.only("xs")]: {
      width: "35%",
      height: "32px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "25%",
      height: "32px",
    },
    [theme.breakpoints.only("md")]: {
      width: "17%",
      height: "32px",
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  DeleteIcon: {
    color: "orange",
    width: "100%",
  },
  textArea: {
    marginTop: "3%",
    maxWidth: "100%",
    minWidth: "100%",
    margin: "0 auto",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "90%",
      minWidth: "90%",
    },
  },
  namaAndPhone: {
    width: "45%",
    marginTop: "1%",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    border: "none",
  },
  TelNumber: {
    width: "45%",
    marginTop: "3.6%",
    marginBottom: "0",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    border: "none",
    // backgroundColor:"red"
  },
  FlatUntilFlor: {
    width: "45%",
    marginTop: "3%",
    [theme.breakpoints.only("xs")]: {
      width: "45%",
    },
  },
  cardCode: {
    width: "100%",
    maxLines: "6",
  },
  MMYY: {
    width: "45%",
  },
  typography: {
    padding: theme.spacing(2),
  },
  BankCard: {
    boxShadow: "1px 2px 3px 1px rgb(126, 120, 120)",
  },
  WhereCard: {
    boxShadow: "1px 2px 3px 1px rgb(126, 120, 120)",
    padding: "3%",
  },
  cardCode: {
    width: "100%",
    marginTop: "1%",
    marginBottom: "3%",
  },
}));

function getSteps() {
  return ["Store", "Where ?", "Payment"];
}

const GoToStore = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  function GetStepContent(stepIndex) {
    const classes = useStyles();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log("start ishladi");
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log("back ishladi");
    };

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      alert(JSON.stringify(data));
    };

    const dispatch = useDispatch();

    const { food } = useSelector((state) => state.cardData);

    const orderCost = food.map((item) => {
      return item.cost;
    });
    const toOrder = orderCost.reduce((a, b) => a + b, 0);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    switch (stepIndex) {
      case 0:
        return (
          <div className="first_Store">
            <div className="all_Store_data">
              <p className="store_korzenkaText">Store</p>
              <div className="topShadov_store"></div>
              {/* <div className="store_scroling"> */}
              {food.length &&
                food.map((data) => {
                  return (
                    <div className="store_cards">
                      <div className="store_cards_items">
                        <div className="cards_imge_item">
                          <img
                            className="cards_imge_item_img"
                            src={data.image}
                          />
                        </div>
                        <div className="cards_label_item">
                          <p className="cards_label_item_label">{data.label}</p>
                        </div>
                        <div className="cards_buttons_item">
                          <div className="cards_buttons_item_button">
                            <button
                              className="store_Btns"
                              onClick={() =>
                                dispatch(decreaseFood({ ...data }))
                              }
                            >
                              -
                            </button>
                            <span className="store_Btns">{data.count}</span>
                            <button
                              className="store_Btns"
                              onClick={() => dispatch(addFood({ ...data }))}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="cards_cost_item">
                          <p className="cards_cost_item_text">
                            {new Intl.NumberFormat("en-US", {
                              style: "decimal",
                            }).format(data.cost.toFixed(2) / 10)}{" "}
                            so'm
                          </p>
                        </div>
                        <div className="cards_delete_item">
                          <div style={{ width: "100%" }}>
                            <IconButton
                              aria-label="delete"
                              className={classes.margin}
                              onClick={() => dispatch(removeFood({ ...data }))}
                            >
                              <DeleteIcon className={classes.DeleteIcon} />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "2%" }} />
                    </div>
                  );
                })}
              {/* </div> */}
              <div className="topShadov_store"></div>
              <div className="store_bottom_data">
                <p className="store_total_Cost">
                  Total price:{" "}
                  {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                    toOrder.toFixed(2) / 10
                  )}
                  so'm
                </p>
              </div>
            </div>
            <div>
              {activeStep === 0 ? (
                <Link to="/">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    <HomeIcon color="action" />
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
              )}
              {activeStep === 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.finishedBtn}
                >
                  next
                </Button>
              )}
            </div>
          </div>
        );
      // <StepperOne activeStep={activeStep} HomeIcon={HomeIcon()} handleNext={handleNext()} handleBack={handleBack()}  />;
      case 1:
        return (
          <div>
            <p className="store_korzenkaText">Where to deliver?</p>
            <form className="Two_store_form" onSubmit={handleSubmit(onSubmit)}>
              <Card className={classes.WhereCard}>
                <div className="Two_store_TopItem">
                  <Controller
                    render={({ field }) => (
                      <TextField
                        className={classes.namaAndPhone}
                        type="text"
                        required={true}
                        {...field}
                        label="Name"
                      />
                    )}
                    name="Name"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => (
                      <NumberFormat
                        required={true}
                        {...field}
                        format="+998 (##) ###-####"
                        allowEmptyFormatting
                        mask="_"
                        customInput={TextField}
                        className={classes.TelNumber}
                      />
                    )}
                    name="Tel nomer"
                    control={control}
                  />
                </div>
                <div className="Two_store_TopItem">
                  <Controller
                    render={({ field }) => (
                      <TextField
                        className={classes.namaAndPhone}
                        type="text"
                        required={true}
                        {...field}
                        label="Stred"
                      />
                    )}
                    name="Stred"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => (
                      <TextField
                        className={classes.namaAndPhone}
                        type="text"
                        required={true}
                        {...field}
                        label="Home Number"
                      />
                    )}
                    name="Home Number"
                    control={control}
                  />
                </div>
                <div className="Two_store_TopItem">
                  <div className="Two_store_HomeCodes">
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.FlatUntilFlor}
                          type="number"
                          required={true}
                          {...field}
                          label="Flat"
                        />
                      )}
                      name="Flat"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.FlatUntilFlor}
                          type="number"
                          required={true}
                          {...field}
                          label="Entrance"
                        />
                      )}
                      name="Entrance"
                      control={control}
                    />
                  </div>
                  <div className="Two_store_HomeCodes">
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.FlatUntilFlor}
                          type="number"
                          toUpperCase
                          required={true}
                          {...field}
                          label="Door code"
                        />
                      )}
                      name="Door code"
                      control={control}
                    />
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.FlatUntilFlor}
                          type="number"
                          required={true}
                          {...field}
                          label="Floor"
                        />
                      )}
                      name="Floor"
                      control={control}
                    />
                  </div>
                </div>
                <div className="Two_store_TopItem">
                  <Controller
                    render={({ field }) => (
                      <TextField
                        className={classes.textArea}
                        type="text"
                        {...field}
                        label="Comment to address*"
                      />
                    )}
                    name="Comment to address"
                    control={control}
                  />
                </div>
              </Card>
              <div>
                {activeStep === 0 ? (
                  <Link to="/">
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      <HomeIcon color="action" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.finishedBtn}
                  type="submit"
                >
                  continue
                </Button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <p className="store_korzenkaText"> payment</p>
            <form
              className="Three_store_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Card className={classes.BankCard}>
                <div className="bank_card_img_blok">
                  <div className="bank_card_imges ">
                    <img style={{ width: "100%", height: "60%" }} src={payme} />
                  </div>
                  <div className="bank_card_imges">
                    <img style={{ width: "100%", height: "60%" }} src={visa} />
                  </div>
                  <div className="bank_card_imges">
                    <img style={{ width: "100%", height: "60%" }} src={mir} />
                  </div>
                  <div className="bank_card_imges">
                    <img
                      style={{ width: "100%", height: "60%" }}
                      src={masterCard}
                    />
                  </div>
                </div>
                <div className="bank_card_coders_zero_item">
                  <Controller
                    render={({ field }) => (
                      <NumberFormat
                        required={true}
                        {...field}
                        format="#### #### #### ####"
                        allowEmptyFormatting
                        mask="_"
                        customInput={TextField}
                        className={classes.cardCode}
                      />
                      // <TextField
                      //   className={classes.cardCode}
                      //   type="number"
                      //   required={true}
                      //   {...field}
                      //   label="Card Code"
                      // />
                    )}
                    name="card code"
                    control={control}
                  />
                </div>
                <div className="bank_card_codes_blok">
                  <div className="bank_card_codes_one_item">
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.MMYY}
                          type="number"
                          required={true}
                          {...field}
                          label="MM"
                        />
                      )}
                      name="MM Code"
                      control={control}
                    />
                    <div className="card_slesh">
                      <h3>/</h3>
                    </div>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.MMYY}
                          type="number"
                          required={true}
                          {...field}
                          label="YY"
                        />
                      )}
                      name="YY Code"
                      control={control}
                    />
                  </div>
                  <div className="bank_card_codes_two_item">
                    <Controller
                      render={({ field }) => (
                        <TextField
                          className={classes.CVC}
                          type="password"
                          required={true}
                          {...field}
                          label="CVC"
                        />
                      )}
                      name="CVC Code"
                      control={control}
                    />

                    <InfoOutlinedIcon onClick={handleClick} />
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Typography className={classes.typography}>
                        CVV is indicated on the back
                      </Typography>
                    </Popover>
                  </div>
                </div>
                <div className="bank_card_codes_three_item">
                  <Controller
                    render={({ field }) => (
                      <TextField
                        className={classes.cardCode}
                        type="text"
                        required={true}
                        {...field}
                        label="Card Holder"
                      />
                    )}
                    name="Card holder"
                    control={control}
                  />
                </div>
              </Card>
              <div style={{marginTop:"5%"}}>
                <p className="store_bankCard_Cost">
                Do you agree to withdraw  
                {"  "} <span className="store_bankCard_Cost_red">  {new Intl.NumberFormat("en-US", { style: "decimal" }).format(toOrder.toFixed(2) / 10)} so'm</span> from your bank card? Click
                the agree button to agree
                </p>
              </div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {/* <Link to="/"> */}
              <Button type="submit" className={classes.finishedBtn}>
                consent
              </Button>
              {/* </Link> */}
            </form>
          </div>
        );
      default:
        return <Link to="/">Back</Link>;
    }
  }

  return (
    <div className={classes.root}>
      <div className="store_header">
        <div className="store_header_logos">
          <div style={{ width: "20%", marginRight: "5%" }}>
            <img style={{ width: "100%", height: "100%" }} src={logo} />
          </div>
          <div className="Logo-item">
            <p className="BravoPizza">Bravo Pizza</p>
            <p className="thankYou">thank you for using our service</p>
          </div>
        </div>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.headerSlide}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <hr />
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.headerSlideTwoMedia}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Typography className={classes.instructions}>
              {GetStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoToStore;
