/**
 * @fileoverview gRPC-Web generated client stub for ran.trafficsim
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as github_com_onosproject_ran$simulator_api_types_types_pb from '../../../../../github.com/onosproject/ran-simulator/api/types/types_pb';

import {
  ListCellsRequest,
  ListCellsResponse,
  ListRoutesRequest,
  ListRoutesResponse,
  ListUesRequest,
  ListUesResponse,
  MapLayoutRequest,
  ResetMetricsMsg,
  SetNumberUEsRequest,
  SetNumberUEsResponse} from './trafficsim_pb';

export class TrafficClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetMapLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_onosproject_ran$simulator_api_types_types_pb.MapLayout,
    (request: MapLayoutRequest) => {
      return request.serializeBinary();
    },
    github_com_onosproject_ran$simulator_api_types_types_pb.MapLayout.deserializeBinary
  );

  getMapLayout(
    request: MapLayoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_onosproject_ran$simulator_api_types_types_pb.MapLayout) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ran.trafficsim.Traffic/GetMapLayout',
      request,
      metadata || {},
      this.methodInfoGetMapLayout,
      callback);
  }

  methodInfoListCells = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCellsResponse,
    (request: ListCellsRequest) => {
      return request.serializeBinary();
    },
    ListCellsResponse.deserializeBinary
  );

  listCells(
    request: ListCellsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ran.trafficsim.Traffic/ListCells',
      request,
      metadata || {},
      this.methodInfoListCells);
  }

  methodInfoListRoutes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListRoutesResponse,
    (request: ListRoutesRequest) => {
      return request.serializeBinary();
    },
    ListRoutesResponse.deserializeBinary
  );

  listRoutes(
    request: ListRoutesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ran.trafficsim.Traffic/ListRoutes',
      request,
      metadata || {},
      this.methodInfoListRoutes);
  }

  methodInfoListUes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUesResponse,
    (request: ListUesRequest) => {
      return request.serializeBinary();
    },
    ListUesResponse.deserializeBinary
  );

  listUes(
    request: ListUesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ran.trafficsim.Traffic/ListUes',
      request,
      metadata || {},
      this.methodInfoListUes);
  }

  methodInfoSetNumberUEs = new grpcWeb.AbstractClientBase.MethodInfo(
    SetNumberUEsResponse,
    (request: SetNumberUEsRequest) => {
      return request.serializeBinary();
    },
    SetNumberUEsResponse.deserializeBinary
  );

  setNumberUEs(
    request: SetNumberUEsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SetNumberUEsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ran.trafficsim.Traffic/SetNumberUEs',
      request,
      metadata || {},
      this.methodInfoSetNumberUEs,
      callback);
  }

  methodInfoResetMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    ResetMetricsMsg,
    (request: ResetMetricsMsg) => {
      return request.serializeBinary();
    },
    ResetMetricsMsg.deserializeBinary
  );

  resetMetrics(
    request: ResetMetricsMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResetMetricsMsg) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ran.trafficsim.Traffic/ResetMetrics',
      request,
      metadata || {},
      this.methodInfoResetMetrics,
      callback);
  }

}

