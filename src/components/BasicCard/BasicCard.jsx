import React, { useMemo } from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';

import BasicCardInfo from './BasicCardInfo';

const BasicCard = ({ control }) => {
	const formState = useWatch({
		control,
		name: 'passenger',
	});

	const isRender = useMemo(
		() => typeof formState !== 'undefined',
		[formState]
	);

	return (
		<Card sx={{ width: 275, minHeight: '250px', height: 'fit-content' }}>
			<CardContent>
				<Typography variant="h6">Информация о пассажирах</Typography>
				{isRender &&
					formState.map((item, i) => (
						<React.Fragment key={i}>
							<BasicCardInfo index={i + 1} passanger={item} />
							{formState.length > 2 && <Divider />}
						</React.Fragment>
					))}
			</CardContent>
		</Card>
	);
};

BasicCard.propTypes = {
	control: PropTypes.object.isRequired,
};

export default React.memo(BasicCard);
