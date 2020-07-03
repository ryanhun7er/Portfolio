import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';

function Card(props) {
	console.log(props);
	return (
		<>
			<div id='portfolio' className='text-center'>
				<Container className='section-title text-center center'>
					<Row xs='6' sm='3'>
						<Col>
							<img
								src={props.image}
								className='img-responsive'
								alt={props.title}
								fluid
							/>

							<div className='hover-text'>
								<h4 className='card-title'>{props.title}</h4>
								<p className='card-text overflow-auto'>{props.description}</p>
								<a
									className='btn btn-link btn-sm'
									href={props.live}
									rel='noopener'>
									view live
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Card;
