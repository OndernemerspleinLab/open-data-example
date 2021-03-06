// @flow

import React from 'react';
import styled from 'styled-components';
import { themeVariable } from '../helpers/styled-component-helpers';
import { LinkList } from './link-list';
import { existy, isEmptyArray, unexisty } from '../helpers/functional';

const AsideBlock = styled.div`
	border-top: 3px solid ${themeVariable('primaryColor')};
	padding: 0.5rem 0 1.5rem;
`;

const AsideHeader = styled.h3`
	margin-top: 0;
	font-size: 1.1rem;
	line-height: 1.2;
	color: #333;
	fill: #333;
`;

export const AsideLinkLists = (props: { linkLists: {}, icon?: string }) => {
	if (unexisty(props.linkLists)) {
		return null;
	}

	const listKeys = Object.keys(props.linkLists);

	return (
		<div>
			{listKeys.map((item, key) => {
				const linkList = props.linkLists[item];

				if (isEmptyArray(linkList.links)) {
					return null;
				}

				return (
					<AsideBlock key={key}>
						<AsideHeader>
							{linkList.text}
						</AsideHeader>
						<LinkList
							links={linkList.links}
							defaultIcon={existy(props.icon) ? props.icon : 'chevron-right'}
						/>
					</AsideBlock>
				);
			})}
		</div>
	);
};
