import React from 'react';
import { Chart, Tooltip, Interval, Axis } from 'bizcharts';
import { Spin } from '@arco-design/web-react';
import styles from './style/index.module.less';
import CustomTooltip from './customer-tooltip';

function MultiInterval({ data, loading }: { data: any[]; loading: boolean }) {
  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart
        height={370}
        padding="auto"
        data={data}
        autoFit
        className={styles['chart-wrapper']}
      >
        <Interval
          adjust="stack"
          color={['name', ['#81E2FF', '#00B2FF', '#246EFF']]}
          position="time*count"
          size={16}
        />
        <Tooltip crosshairs={{ type: 'x' }} showCrosshairs shared>
          {(title, items) => {
            return <CustomTooltip title={title} data={items} />;
          }}
        </Tooltip>
        <Axis
          name="count"
          label={{
            formatter(text) {
              return `${Number(text) / 1000}k`;
            },
          }}
        />
      </Chart>
    </Spin>
  );
}

export default MultiInterval;