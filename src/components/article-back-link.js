import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleBackLinkBase = ({ children, backLink, className }) =>
	<Link to={backLink} className={className}>
		{children}
	</Link>;

const ArticleBackLink = styled(ArticleBackLinkBase)`
	margin-top: 20px;
	display: block;
`;

export default ArticleBackLink;