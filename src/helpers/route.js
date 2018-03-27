import React from 'react';
import { Route } from 'react-router-dom';
import { existy } from './functional';

const renderMergedProps = (component, ...args) => {
	const mergedProps = Object.assign({}, ...args);

	return React.createElement(component, mergedProps);
};

export const RouteWithProps = ({ component, ...args }) =>
	<Route
		{...args}
		render={routeProps => renderMergedProps(component, routeProps, args)}
	/>;

const sortDirectionMap = [['desc', 'aflopend'], ['asc', 'oplopend']];
const getSortDirectionForUrl = sortDirection => {
	const [, result] =
		sortDirectionMap.find(
			([sortDirectionEntry]) => sortDirectionEntry === sortDirection
		) || sortDirectionMap[0];

	return result;
};

export const getSortDirectionFromUrl = sortDirectionLabel => {
	const [result] =
		sortDirectionMap.find(
			([, sortDirectionLabelEntry]) =>
				sortDirectionLabelEntry === sortDirectionLabel
		) || sortDirectionMap[0];

	return result;
};

export const articleUrl = '/artikel';
export const articlesUrl = '/artikelen';

export const createArticlesOverviewPathname = ({
	searchTerm,
	sortDirection,
	offset,
}) => {
	const pathComponents = [
		searchTerm,
		'wijzigingsdatum',
		getSortDirectionForUrl(sortDirection),
		'vanaf',
		offset || '0',
	]
		.filter(Boolean)
		.map(encodeURIComponent);

	return `${articlesUrl}/${pathComponents.join('/')}`;
};

export const updatePath = ({ history, searchTerm, sortDirection, offset }) => {
	const pathname = createArticlesOverviewPathname({
		searchTerm,
		sortDirection,
		offset,
	});

	history.replace(pathname);
};

export const getFilterFromParams = encodedParams => {
	const params = Object.entries(encodedParams).reduce((memo, [key, val]) => {
		//eslint-disable-next-line no-param-reassign
		memo[key] = existy(val) ? decodeURIComponent(val) : val;

		return memo;
	}, {});
	const { query = '' } = params;

	const offset = Number(params.offset) || 0;

	const sortDirection = getSortDirectionFromUrl(params.order);

	return {
		searchTerm: query,
		sortField: 'modified',
		sortDirection,
		offset,
	};
};