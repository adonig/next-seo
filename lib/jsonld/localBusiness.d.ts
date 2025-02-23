import { FC } from 'react';
declare type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode: string;
  addressCountry: string;
};
declare type Geo = {
  latitude: string;
  longitude: string;
};
export interface LocalBusinessJsonLdProps {
  type: string;
  id: string;
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address: Address;
  geo: Geo;
  images: string[];
}
declare const LocalBusinessJsonLd: FC<LocalBusinessJsonLdProps>;
export default LocalBusinessJsonLd;
