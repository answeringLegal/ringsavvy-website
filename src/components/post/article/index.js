import React from 'react';
import Header from '../header';
import FeaturedImage from '../featuredImage';
import Body from '../body';

import * as Styled from './style';

const Article = ({ post }) => {
  const { title, author, publishDate, body, featuredImage } = post;

  return (
    <Styled.Article>
      <Header title={title} author={author} date={publishDate} />
      <FeaturedImage alt={title} fluid={featuredImage.fluid} />
      <Body body={body} />
    </Styled.Article>
  );
};

export default Article;
