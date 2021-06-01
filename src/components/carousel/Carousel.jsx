import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Caarousel = () => {
	const contentStyle = {
		height: '400px',
		width: '1400px',
		color: '#fff',
		backgroundSize: 'cover',
		backgroundImage: `url("https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1583835342_d69c14ad90c34dff8a9876a4dbe6c4d8.jpeg")`
	};
	const contentStyle1 = {
		height: '400px',
		width: '1400px',
		color: '#fff',
		backgroundSize: 'cover',
		backgroundImage: `url("https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1596699677_aa3a1cb9a55f4997a6b7266a671c9fe9.jpeg")`
	};
	const contentStyle2 = {
		height: '400px',
		width: '1400px',
		color: '#fff',
		backgroundSize: 'cover',
		backgroundImage: `url("https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1586345846_a8b45e608cfc48ff90e420800d81d90d.jpeg")`
	};
	const contentStyle3 = {
		height: '400px',
		width: '1400px',
		color: '#fff',
		backgroundSize: 'cover',
		backgroundImage: `url("https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1596637077_37394ecc2bc74f76b7ebf8b93a33ba78.jpeg")`
	};
	const divContainer = {
		padding: '24px'
	};
	return (
		<div id='container' style={divContainer}>
			<Carousel autoplay>
				<div>
					<h3 style={contentStyle} />
				</div>
				<div>
					<h3 style={contentStyle1} />
				</div>
				<div>
					<h3 style={contentStyle2} />
				</div>
				<div>
					<h3 style={contentStyle3} />
				</div>
			</Carousel>,
		</div>
	);
};

export default Caarousel;
