"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const MetricsNullClientV1_1 = require("../clients/version1/MetricsNullClientV1");
const MetricsDirectClientV1_1 = require("../clients/version1/MetricsDirectClientV1");
const MetricsHttpClientV1_1 = require("../clients/version1/MetricsHttpClientV1");
class MetricsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services-metrics", "factory", "client", "default", "1.0");
        this.ClientNullDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-metrics", "client", "null", "*", "1.0");
        this.ClientDirectDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-metrics", "client", "direct", "*", "1.0");
        this.ClientHttpDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-metrics", "client", "http", "*", "1.0");
        this.registerAsType(this.ClientNullDescriptor, MetricsNullClientV1_1.MetricsNullClientV1);
        this.registerAsType(this.ClientDirectDescriptor, MetricsDirectClientV1_1.MetricsDirectClientV1);
        this.registerAsType(this.ClientHttpDescriptor, MetricsHttpClientV1_1.MetricsHttpClientV1);
    }
}
exports.MetricsClientFactory = MetricsClientFactory;
//# sourceMappingURL=MetricsClientFactory.js.map