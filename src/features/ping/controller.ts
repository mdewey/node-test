/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ApiConfig } from '../../types/config';
import { type DebugPingResponse, PingResponse } from './types';
import { Get, Route } from 'tsoa';

const API_ROOT = 'ping';
const CURRENT_VERSION = 0;

const base = '/api/v' + CURRENT_VERSION + '/' + API_ROOT;
const index = `/api/v${CURRENT_VERSION}/${API_ROOT}`;
const debug = `/api/v${CURRENT_VERSION}/${API_ROOT}/debug`;
const error = `/api/v${CURRENT_VERSION}/${API_ROOT}/error`;

@Route('/api/v0/ping')
class PingController {
  config: ApiConfig;

  constructor(_config: ApiConfig) {
    this.config = _config;
  }

  @Get()
  public ping(): PingResponse {
    return {
      status: "ok cap't",
      when: new Date()
    };
  }

  @Get('/debug')
  public debugPing(): DebugPingResponse {
    return {
      status: 'On the one!',
      when: new Date(),
      ...this.config,
      ...process.env
    };
  }
}

const ROUTES = {
  base,
  index,
  debug,
  error
};

export {
  PingController,
  ROUTES
};
