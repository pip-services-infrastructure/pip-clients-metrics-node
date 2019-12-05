# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Metrics Microservice client SDK for Node.js

<a name="links"></a> Quick Links:

* [Download Links](doc/Downloads.md)
* [Development Guide](doc/Development.md)
* [Client API version 1](doc/NodeClientApiV1.md)
* Service
  - [Metrics service](https://github.com/pip-services-infrastructure/pip-service-metrics-node)

This is a Node.js client SDK for [pip-services-metrics](https://github.com/pip-services-infrastructure/pip-services-metrics-node) microservice.

 It provides an easy to use abstraction over communication protocols:

- Direct client for monolythic deployments
- Http client
- Null client to be used in testing

## Install

Add dependency to the client SDK into **package.json** file of your project
```typescript
{
    ...
    "dependencies": {
        ....
        "pip-clients-metrics-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```
## Use

Inside your code get the reference to the client SDK
```typescript
 import { MetricsHttpClientV1 } from 'pip-clients-metrics-node';
```

Define client configuration parameters.

```typescript
// Client configuration
let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );
client.configure(httpConfig);
```

Instantiate the client and open connection to the microservice
```typescript
// Create the client instance
client = new MetricssHttpClientV1();

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    });
    // Work with the microservice
    ...

```
Now the client is ready to perform operations:

Update if exist metric or create otherwise:
```typescript 
    client.updateMetric(
                    null,
                    <MetricUpdateV1> {
                        name: "metric1",
                        dimension1: "A",
                        dimension2: "B",
                        dimension3: null,
                        year: 2018,
                        month: 8,
                        day: 26,
                        hour: 12,
                        value: 123
                    },
                    TimeHorizonV1.Hour,
                    (err: any)=>{
                        if (err != null) {
                            console.error('Update/create metric are failed');
                            console.error(err);
                        }
                    }
                );

```

Update if exist metrics or create otherwise::
```typescript 
    client.updateMetrics(
                    null,
                    [
                        <MetricUpdateV1> {
                            name: "metric1",
                            dimension1: "A",
                            dimension2: "B",
                            dimension3: null,
                            year: 2018,
                            month: 8,
                            day: 26,
                            hour: 13,
                            value: 321
                        },
                        <MetricUpdateV1> {
                            name: "metric2",
                            dimension1: "A",
                            dimension2: null,
                            dimension3: "C",
                            year: 2018,
                            month: 8,
                            day: 26,
                            hour: 13,
                            value: 321
                        }        
                    ],
                    TimeHorizonV1.Hour, 
                    (err: any)=>{
                        if (err != null) {
                            console.error('Update/create metric are failed');
                            console.error(err);
                        }
                    }    
                );

```

Get metrics by filter:
```typescript    
client.getMetricsByFilter(null,
                    FilterParams.fromTuples("name", "metric1"),
                    new PagingParams(),
                    (err, page) => {
                        if (err != null) {
                            console.error("Can\'t get metrics by filter");
                            console.error(err);
                            return;
                        }

                        console.log("Metrics:");
                        console.log(page.data);

                    }
);
    
```

Get all metrics definitions:
```typescript    
client.getMetricDefinitions(
                     null,
                     (err, definitions) => {
                     if (err != null) {
                            console.error("Can\'t get metrics definitions");
                            console.error(err);
                            return;
                        }

                        console.log("All metrics definition:");
                        console.log(definitions);
                    }
);
    
```

Get metric definition by name:
```typescript    
client.getMetricDefinitionByName(
                    null, 
                    "metric2", 
                    (err, definition) => {
                        if (err != null) {
                            console.error("Can\'t get metrics definition by name");
                            console.error(err);
                            return;
                        }

                        console.log("Metric definition name %s:", definition.name);
                        console.log(definition);
                });                
    
```

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov* and *Levichev Dmitry*.
