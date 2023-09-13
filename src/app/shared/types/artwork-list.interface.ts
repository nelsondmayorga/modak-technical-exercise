import { IArtWork } from './artwork.interface';

export interface IArtWorkList {
  pagination: IPagination;
  data: IArtWork[];
  info: IInfo;
  config: IConfig;
}

export interface IArtWorkResponse {
  data: IArtWork;
  info: IInfo;
  config: IConfig;
}

export interface IPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface IInfo {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface IConfig {
  iiif_url: string;
  website_url: string;
}
