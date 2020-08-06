"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class MetricsNullClientV1 {
    getMetricDefinitions(correlationId, callback) {
        callback(null, []);
    }
    getMetricDefinitionByName(correlationId, name, callback) {
        callback(null, null);
    }
    getMetricsByFilter(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage());
    }
    updateMetric(correlationId, update, maxTimeHorizon, callback) {
        if (callback)
            callback(null);
    }
    updateMetrics(correlationId, updates, maxTimeHorizon, callback) {
        if (callback)
            callback(null);
    }
}
exports.MetricsNullClientV1 = MetricsNullClientV1;
//# sourceMappingURL=MetricsNullClientV1.js.map