'use strict';

import { ConfigModule } from '@nestjs/config';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

// Load environment variables from the .env file
ConfigModule.forRoot();

// Configure the endpoints/paths to ignore when tracing incoming requests
const IGNORED_PATHS = ['/', '/api', '/health'];

// Initialize the SDK and register with the OpenTelemetry API
const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: process.env.JAEGER_AGENT_URL || 'http://localhost:4317', // (e.g. Jaeger -> http://localhost:4317)
  }),
  instrumentations: [
    new NestInstrumentation(),
    new HttpInstrumentation({
      ignoreIncomingRequestHook: (request) => {
        if (IGNORED_PATHS.includes(request.url ?? '')) {
          return true;
        }
        return false;
      },
    }),
    new ExpressInstrumentation(),
  ],
  serviceName: process.env.JAEGER_SERVICE_NAME || 'service-b', // (e.g. 'my-service')
});

// Enable the API to record telemetry
sdk.start();

// Gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});

export default sdk;
