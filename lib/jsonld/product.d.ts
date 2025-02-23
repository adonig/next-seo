import { FC } from 'react';
declare type ReviewRating = {
  bestRating?: string;
  ratingValue: string;
  worstRating?: string;
};
declare type Review = {
  author: string;
  datePublished?: string;
  reviewBody?: string;
  name?: string;
  reviewRating: ReviewRating;
};
declare type AggregateOffer = {
  lowPrice: string;
  priceCurrency: string;
  highPrice?: string;
  offerCount?: string;
};
declare type Offer = {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  itemCondition?: string;
  availability?: string;
  seller: {
    name: string;
  };
};
declare type Offers = AggregateOffer | Offer;
declare type AggregateRating = {
  ratingValue: string;
  reviewCount: string;
};
export interface ProductJsonLdProps {
  productName: string;
  images?: string[];
  description?: string;
  brand?: string;
  reviews: Review[];
  aggregateRating: AggregateRating;
  offers: Offers;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
}
declare const ProductJsonLd: FC<ProductJsonLdProps>;
export default ProductJsonLd;
