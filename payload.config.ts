import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';
import { Products } from './collections/Products';
import Categories from './collections/Categories/Categories';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Products,
    Categories,


  ],
});
