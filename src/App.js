import "./App.css";
import { Route, Switch } from "react-router-dom";
import FilteredByCost from "./pages/filtered/filteredByCost";
import React, { lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pizza from "./pages/pizza/pizza";
import Drink from "./pages/drink/drink";
import Food from "./pages/food/food";
import Cake from "./pages/cake/cake";
import { useSelector } from "react-redux";
import NewHeader from "./components/newHeader/NewHeader";
import BottomHeader from "./components/Bottom-Header/bottomHeader";
import ProductModal from "./components/productModal/ProductModal";
// import Caarousel from "./components/carousel/Carousel";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import GoToStore from "./pages/goToStore/goToStore";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function App() {
  const { foods } = useSelector((state) => state.cardData);

  const classes = useStyles();

  return (
    <div className="App">
      {/* <Container maxWidth="lg"> */}
        <Route render={(props) => <NewHeader props={props} />} />
        <Route render={(props) => <BottomHeader props={props} />} />
        {/* <Caarousel /> */}
        <ProductModal />
        <Switch>
          <Route path="/" exact render={(props) => <Pizza props={props} />} />

          <Route
            path="/drink"
            exact
            render={(props) => <Drink props={props} />}
          />

          <Route
            path="/food"
            exact
            render={(props) => <Food props={props} />}
          />

          <Route
            path="/cake"
            exact
            render={(props) => <Cake props={props} />}
          />

          <Route
            path="/contact"
            exact
            render={(props) => <Contact props={props} />}
          />
          <Route
            path="/about"
            exact
            render={(props) => <About props={props} />}
          />
          <Route
            path="/goToStore"
            exact
            render={(props) => <GoToStore props={props} />}
          />

          <Route
            path="/contact"
            exact
            render={(props) => <Contact props={props} />}
          />
          <Route
            path="/about"
            exact
            render={(props) => <About props={props} />}
          />

          <Route
            path="/filteredByCost/:id"
            render={(props) => {
              return <FilteredByCost props={props} data={foods} />;
            }}
          />
        </Switch>
        <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
