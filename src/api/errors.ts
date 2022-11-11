// eslint-disable-next-line max-classes-per-file

import { CustomError } from '../utils';

export class ApiError extends CustomError {
  constructor(message: string, status = 400, code = 'BAD_REQUEST') {
    super(message, status, code);
  }
}

export class BadRequest extends ApiError {
  constructor(message: string) {
    super(message, 400, 'BAD_REQUEST');
  }
}

export class UnprocessableEntity extends ApiError {
  constructor(message: string) {
    super(message, 422, 'UNPROCESSABLE_ENTITY');
  }
}

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super(message, 401, 'UNAUTHORIZED');
  }
}

export class Forbidden extends ApiError {
  constructor(message: string) {
    super(message, 403, 'FORBIDDEN');
  }
}
