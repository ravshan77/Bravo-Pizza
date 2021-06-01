import React from 'react';
import CardItem from '../../components/card/card';

import './main.css';

const Main = ({ pizza }) => {
	return (
		<div className='mainPage'>
			
			<div className='halal'>
				<div className='halal_img'>
					<img
						src='https://islam-today.ru/files/news/part_3/31605/212964-INNERRESIZED600-600-196063-INNERRESIZED600-600-halal-food-icon.jpg'
						alt='halal-image'
					/>
				</div>
				<div className='halal_info'>
					<p className='bez_svini'>Без свинины</p>
					<h5>Мы готовим из цыпленка и говядины</h5>
				</div>
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
