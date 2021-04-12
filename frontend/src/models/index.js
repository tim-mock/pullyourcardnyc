// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { dataTableNew } = initSchema(schema);

export {
  dataTableNew
};