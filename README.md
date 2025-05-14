# Jaeger POC

This project is a Proof of Concept (POC) for integrating and testing [Jaeger](https://www.jaegertracing.io/), a distributed tracing system.

## Overview

Jaeger is used for monitoring and troubleshooting microservices-based distributed systems. This POC demonstrates how to set up and use Jaeger for tracing requests across services.

## Features

- Distributed tracing with Jaeger
- Integration with microservices
- Example traces for debugging and performance analysis

## Prerequisites

- Docker and Docker Compose installed
- Basic understanding of microservices architecture

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd jeager-demo
    ```

2. Start the Jaeger and services using Docker Compose:
    ```bash
    docker-compose up
    ```

3. Access the Jaeger UI at [http://localhost:16686](http://localhost:16686).

## Usage

- Send requests to the services to generate traces.
- View the traces in the Jaeger UI to analyze request flows and performance.

## Resources

- [Jaeger Documentation](https://www.jaegertracing.io/docs/)
- [Docker Compose](https://docs.docker.com/compose/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.