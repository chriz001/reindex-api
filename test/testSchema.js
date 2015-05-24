import {fromJS} from 'immutable';
import getBaseTypes from '../schema/getBaseTypes';
import dbToSchema from '../schema/dbToSchema';

const testSchema = dbToSchema(
  getBaseTypes().updateIn(['types'], (types) => {
    return types.concat(fromJS([
      {
        name: 'User',
        isNode: true,
        fields: [
          {
            name: 'handle',
            type: 'string',
          }, {
            name: 'microposts',
            type: 'connection',
            target: 'Micropost',
            reverseName: 'author',
          },
        ],
        parameters: [],
      }, {
        name: 'Micropost',
        isNode: true,
        fields: [
          {
            name: 'text',
            type: 'string',
          }, {
            name: 'createdAt',
            type: 'datetime',
          }, {
            name: 'author',
            type: 'User',
            reverseName: 'microposts',
          },
        ],
        parameters: [],
      },
    ]));
  })
);

export default testSchema;