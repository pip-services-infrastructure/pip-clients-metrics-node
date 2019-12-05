﻿import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { MetricDefinitionV1 } from '../../data/version1/MetricDefinitionV1';
import { MetricUpdateV1 } from '../../data/version1/MetricUpdateV1';
import { MetricValueSetV1 } from '../../data/version1/MetricValueSetV1';

/// The client interface of pip-services3-metrics service
export interface IMetricsClientV1 {
    /// Gets the metric definitions.
    /// correlationId The correlation identifier.
    getMetricDefinitions(correlationId: string, callback: (err: any, items: MetricDefinitionV1[]) => void): void;

    /// Gets the metric definition by name 
    /// correlationId The correlation identifier.
    /// name The name.
    getMetricDefinitionByName(correlationId: string, name: string, callback: (err: any, item: MetricDefinitionV1) => void): void;

    /// Gets the metrics by filter asynchronous
    /// correlationId The correlation identifier.
    /// filterThe filter.
    /// pagingThe paging.
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MetricValueSetV1>) => void): void;

    /// Updates the metric asynchronous
    /// correlationId The correlation identifier.
    /// updateThe update.
    /// maxTimeHorizon  The maximum time horizon.
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number, callback: (err: any) => void): void;

    /// Updates the metrics asynchronous
    /// correlationId The correlation identifier.
    /// updatesThe updates.
    /// maxTimeHorizon The maximum time horizon.
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number, callback: (err: any) => void): void;
}
