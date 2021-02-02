// eslint-disable-next-line no-unused-vars
import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda';

import { successResponse } from './utils/lambda-response';

export const hello: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const response = successResponse({
    message: {
      message: 'Go Serverless v2.1! Your function executed successfully!'
    },
  });

  callback(null, response);
}