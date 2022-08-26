import React from 'react';
import { Scene } from '@antv/l7';
import { CountyLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';

function Map() {

  React.useEffect(() => {
    const scene = new Scene({
      id: 'county',
      map: new Mapbox({
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank',
        zoom: 3,
        minZoom: 0,
        maxZoom: 10,
      }),
      logoVisible: false,
    });

    scene.on('loaded', () => {
      new CountyLayer(scene, {
        adcode: ['330424', '330401', '330402', '330411', '330421', '330481', '330482', '330483'], // 区县行政编码，可以加多个区县行政编码，展示多个区县
        fill: {
          color: {
            field: 'NAME_CHN',
            values: [
              '#f17e7e',
              '#0ca0e0',
              '#6be7fd',
              '#fd8d3c',
              '#e0960e',
              '#43e704',
              '#5382f6'
            ],
          },
        },
        stroke: '#0DCCFF',
        strokeOpacity: 0.4,
        label: {
          enable: true,
          textAllowOverlap: false,
          field: 'NAME_CHN',
        },
        popup: {
          enable: true,
          Html: props => {
            return `<div>
<span>名称：${props.NAME_CHN}</span>
<br/>
<span>所属：浙江-嘉兴</span>
</div>`;
          },
        },
      });
    });
  }, []);

  return <div>
    <div
        style={{ height: 510, position: 'relative' }}
        id='county'
    >
    </div>
    <br/>
    <p style={{ textAlign: 'center', color: '#fff' }}>地图</p>
  </div>;
}

export default Map;