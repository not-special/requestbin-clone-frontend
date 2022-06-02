import React from "react";

const BinFull = ( { requests } ) => {
	return (
		<div>BinFull
			{requests.map(request => (
				<div key={request.bin_id}>
					<h3>{ request.content_type_header }</h3>
					<h3>{ request.content_length_header }</h3>
					<h3>{ request.received_at }</h3>
					<h3>{ request.bin_id }</h3>
				</div>
			))}
		</div>
	);
};

export default BinFull;