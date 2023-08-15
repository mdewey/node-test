export interface PingResponse {
  status: string
  when: Date
}

export interface DebugPingResponse {
  status: string
  when: Date
  version?: string
  [key: string]: any
}
