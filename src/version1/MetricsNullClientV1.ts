import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IMetricsClientV1 } from './IMetricsClientV1';
import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { MetricValueSetV1 } from './MetricValueSetV1';

export class MetricsNullClientV1 implements IMetricsClientV1 {

    public getMetricDefinitions(correlationId: string,
        callback: (err: any, items: MetricDefinitionV1[]) => void) {
        callback(null, []);
    }

    public getMetricDefinitionByName(correlationId: string, name: string,
        callback: (err: any, item: MetricDefinitionV1) => void) {
        callback(null, null);
    }

    public getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<MetricValueSetV1>) => void) {
        callback(null, new DataPage<MetricValueSetV1>());
    }

    public updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number,
        callback: (err: any) => void) {
        if (callback) callback(null);
    }

    public updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number,
        callback: (err: any) => void) {
        if (callback) callback(null);
    }
}

