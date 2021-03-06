import { css } from 'styled-components';
import { mq } from './utils';

export const space = '2rem';
const halfSpace = '1rem';

export const calcColumnWidth = (ratio: number) => {
	const percentage = ratio * 100;

	return `calc(${percentage}% - ${space})`;
};

export const layoutContainer = css`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	max-width: ${props => props.theme.maxWidth};
	padding: 0;
	
	${mq('extraSmall')`padding: 0 3% 0 0`}
	${mq('small')`padding: 0 1.6rem`}
	${mq('mediumLarge')`padding: 0 1rem`}
	${mq('extraLarge')`padding: 0 3.2rem`}
	${mq('extraExtraExtraLarge')`padding: 0 4.2rem`}
`;

export const gridContainer = css`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const gridItem = css`
	display: block;
	margin-left: ${halfSpace};
	margin-right: ${halfSpace};
`;
