import { FC } from 'react';
export interface ArticleJsonLdProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  description: string;
  publisherName: string;
  publisherLogo: string;
}
declare const ArticleJsonLd: FC<ArticleJsonLdProps>;
export default ArticleJsonLd;
