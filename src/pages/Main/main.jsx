import React from 'react';
import CardItem from '../../components/card/card';
import CoruselUi from "../../components/corusel-ui/coruselUi";
import ProductModal from "../../components/productModal/ProductModal"
import './main.css';

const Main = ({ pizza }) => {
	console.log(pizza)
	return (
		<div className='mainPage'>
			      <ProductModal />
			<div className='halal'>
				<div className='halal_img'>
					<img
						src='https://islam-today.ru/files/news/part_3/31605/212964-INNERRESIZED600-600-196063-INNERRESIZED600-600-halal-food-icon.jpg'
						alt='halal-image'
					/>
				</div>
				<div className='halal_info'>
					<p className='bez_svini'>Pork is not added</p>
					<p className='bez_svini'>We cook with chicken and beef</p>
				</div>
			</div>
			<div className="coruselUi">
			<CoruselUi/>
			</div>
			<div className='cards'>
				{pizza &&
					pizza.map((c, i) => {
						return <CardItem key={i} {...c} />;
					})}
			</div>
		</div>
	);
};

export default Main;
