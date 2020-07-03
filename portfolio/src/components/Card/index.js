import React from 'react';

import '../../css/style.css';

function Card(props) {
	console.log(props);
	return (
		<>
			<div id='portfolio'>
				<div className='container'>
					<div className='section-title text-center center'></div>
					<div className='clearfix'></div>
					<div className='row'>
						<div className='portfolio-items'>
							<div className='col-sm-6 col-md-3 col-lg-3 app web'>
								<div className='portfolio-item'>
									<img
										src={props.image}
										className='img-responsive'
										alt={props.title}
										fluid
									/>

									<div className='hover-text'>
										<h4 className='card-title'>{props.title}</h4>
										<p className='card-text overflow-auto'>
											{props.description}
										</p>
										<a
											className='btn btn-link btn-sm'
											href={props.live}
											rel='noopener'>
											view live
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
