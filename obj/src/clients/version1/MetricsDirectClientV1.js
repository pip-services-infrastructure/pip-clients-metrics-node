"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class MetricsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put("controller", new pip_services3_commons_node_1.Descriptor("pip-services-metrics", "controller", "*", "*", "*"));
    }
    getMetricDefinitions(correlationId, callback) {
        let timing = this.instrument(correlationId, 'metrics.get_metric_definitions');
        this._controller.getMetricDefinitions(correlationId, (err, items) => {
            timing.endTiming();
            callback(err, items);
        });
    }
    getMetricDefinitionByName(correlationId, name, callback) {
        let timing = this.instrument(correlationId, 'metrics.get_metric_definition_by_name');
        this._controller.getMetricDefinitionByName(correlationId, name, (err, item) => {
            timing.endTiming();
            callback(err, item);
        });
    }
    getMetricsByFilter(correlationId, filter, paging, callback) {
        filter = filter || new pip_services3_commons_node_2.FilterParams();
        paging = paging || new pip_services3_commons_node_3.PagingParams();
        let timing = this.instrument(correlationId, 'metrics.get_metrics_by_filter');
        this._controller.getMetricsByFilter(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    updateMetric(correlationId, update, maxTimeHorizon, callback) {
        let timing = this.instrument(correlationId, 'metrics.update_metric');
        this._controller.updateMetric(correlationId, update, maxTimeHorizon, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    updateMetrics(correlationId, updates, maxTimeHorizon, callback) {
        let timing = this.instrument(correlationId, 'metrics.update_metrics');
        this._controller.updateMetrics(correlationId, updates, maxTimeHorizon, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.MetricsDirectClientV1 = MetricsDirectClientV1;
//# sourceMappingURL=MetricsDirectClientV1.js.map