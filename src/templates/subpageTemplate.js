import React from "react"
import { graphql } from "gatsby"

import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/subpage.module.scss';

import Subpage from '../components/Subpage';

export default function SubpageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Subpage>
      <div className={s.subpageWrap}>
        <div
          className={`${s.subpage} subpage`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Subpage>
  );
}

export const subpageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
