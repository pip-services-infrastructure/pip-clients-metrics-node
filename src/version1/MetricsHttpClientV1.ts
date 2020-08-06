import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricValueSetV1 } from './MetricValueSetV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { IMetricsClientV1 } from './IMetricsClientV1';

export class MetricsHttpClientV1 extends CommandableHttpClient implements IMetricsClientV1 {

    constructor() {
        super("v1/metrics");
    }

    public getMetricDefinitions(correlationId: string,
        callback: (err: any, items: MetricDefinitionV1[]) => void) {
        this.callCommand(
            "get_metric_definitions",
            correlationId,
            {}, 
            callback
        );
    }

    public getMetricDefinitionByName(correlationId: string, name: string,
        callback: (err: any, item: MetricDefinitionV1) => void) {
        this.callCommand(
            "get_metric_definition_by_name",
            correlationId,
            { 
                name: name 
            }, 
            callback
        );
    }

    public getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<MetricValueSetV1>) => void)  {
        this.callCommand(
            "get_metrics_by_filter",
            correlationId,
            {
                filter: filter || new FilterParams(),
                paging: paging || new PagingParams()
            }, 
            callback
        );
    }

    public updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number,
        callback: (err: any) => void) {
        this.callCommand(
            "update_metric",
            correlationId,
            {
                update: update,
                max_time_horizon:maxTimeHorizon
            }, 
            callback
        );              
    }

    public updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number,
        callback: (err: any) => void) {
        this.callCommand(
            "update_metrics",
            correlationId,
            {
                updates: updates,
                max_time_horizon : maxTimeHorizon
            }, 
            callback
        );              
    }

}
