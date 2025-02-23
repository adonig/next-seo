import Head from 'next/head';
import React, { Component } from 'react';
import buildTags from './buildTags';

import { DefaultSeoProps } from '../types';

export default class extends Component<DefaultSeoProps, {}> {
  render() {
    const {
      title,
      titleTemplate,
      dangerouslySetAllPagesToNoIndex = false,
      description,
      canonical,
      facebook,
      openGraph,
      additionalMetaTags,
      twitter,
      defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight,
    } = this.props;

    return (
      <Head>
        {buildTags({
          title,
          titleTemplate,
          dangerouslySetAllPagesToNoIndex,
          description,
          canonical,
          facebook,
          openGraph,
          additionalMetaTags,
          twitter,
          defaultOpenGraphImageWidth,
          defaultOpenGraphImageHeight,
          defaultOpenGraphVideoWidth,
          defaultOpenGraphVideoHeight,
        })}
      </Head>
    );
  }
}
