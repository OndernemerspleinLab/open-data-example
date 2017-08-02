import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { articleUrl } from './main';

const ArticleWrapper = styled.div``;

const ArticleLink = styled(Link)`
	display: block;
`;

const ArticleList = props => {
	const articles = props.articles;

	if (articles.length <= 0) {
		return null;
	}

	return (
		<ArticleWrapper>
			{articles.map((article, key) => {
				return (
					<ArticleLink key={key} to={`${articleUrl}${article.identifier}`}>
						{article.headLine}
					</ArticleLink>
				);
			})}
		</ArticleWrapper>
	);
};

export default ArticleList;