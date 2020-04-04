import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	// // to check if erroboundry is working or not
	// if (true){
	// 	throw new Error('oh nooooo')
	// }
	return (
	    <div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={user.id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>    	
					);
				})
			}
		</div>
	);
}

export default CardList