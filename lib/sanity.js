import {createClient} from 'next-sanity';
import {definePreview} from 'next-sanity/preview'

const dataset = process.env.SANITY_STUDIO_API_DATASET;
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const apiVersion = process.env.SANITY_STUDIO_API_VERSION;


const config = {
  projectId: '2zck5o27',
  dataset: 'production',
  // dataset: 'staging',
  apiVersion: '2021-10-21',
  useCdn:false,
};


export const client = createClient(config);
export const usePreview = definePreview(config);
