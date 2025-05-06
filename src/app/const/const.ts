import { EndpointEnum } from '../enum/endpoint.enum';

export const apiUrl = (endpoint: EndpointEnum) =>
  `http://localhost:8080/api/v1/${endpoint}`;
