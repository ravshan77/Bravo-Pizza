import { Button } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/card/card";
import "./filteredPageCard.css"


const FilteredByCost = ( {props,data}) => {
  const { match, history } = props;

const filteredByCost=data && data.filter((d)  =>  d.totalWeight.toFixed(3)*100 <= match.params.id )


  return (
    <div className="filteredPageCard">  
        <Button
          variant="outlined"
          color="default"
          onClick={() => history.goBack()}
        >
          {" "}
          Go back{" "}
        </Button>
        <h1 className="pizzasText">ᖴIᒪTEᖇ ᑭᖇOᗪᑌᑕT</h1>
      <div className="cards">

          {filteredByCost.length  > 5 ? (
            filteredByCost.map((item) => {
              return <CardItem key={item.id} {...item} />
            })
          ) : (
              <h3 className="filterNotFind"> Bunday narxda chiqarilgan mahsulotlarimizimiz mavjud emas ❗❗❗</h3>
          )}

      </div>
    </div>  
  );
};

export default FilteredByCost;


// created by Ravshan