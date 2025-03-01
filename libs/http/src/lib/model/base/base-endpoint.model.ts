export interface BaseEndpointModel<TEndpoint, TRequest> {
  endpoint: TEndpoint;
  request: TRequest;
}
