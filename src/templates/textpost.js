import React from 'react';
import { graphql } from 'gatsby';
import Style from '../styles/post.module.css'

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1 className={Style.postheader}>{post.frontmatter.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } } ) {
            html
            frontmatter {
                name
            }
        }
    }
`;