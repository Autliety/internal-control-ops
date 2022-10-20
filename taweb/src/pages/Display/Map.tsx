import React from 'react';
import { PointLayer, Popup, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

function Map() {

  const data = [
    {
      id: 1,
      name: "百步镇",
      longitude: 120.78855,
      latitude: 30.54499,
      count: 2
    },
    {
      id: 2,
      name: "超同村",
      longitude: 120.81102,
      latitude: 30.54671,
      count: 4
    },
    {
      id: 3,
      name: "百步社区",
      longitude: 120.78305,
      latitude: 30.54386,
      count: 2
    },
    {
      id: 4,
      name: "百联村",
      longitude: 120.78292,
      latitude: 30.54154,
      count: 3
    },

    {
      id: 5,
      name: "逍恬村",
      longitude: 120.79002,
      latitude: 30.52325,
      count: 2
    },
    {
      id: 6,
      name: "农丰村",
      longitude: 120.76531,
      latitude: 30.54010,
      count: 4
    },
    {
      id: 7,
      name: "胜利村",
      longitude: 120.76026,
      latitude: 30.60466,
      count: 1
    },
    {
      id: 8,
      name: "横港村",
      longitude: 120.77491,
      latitude: 30.58575,
      count: 2
    },

    {
      id: 9,
      name: "桃北村",
      longitude: 120.75068,
      latitude: 30.58519,
      count: 5
    },
    {
      id: 10,
      name: "得胜村",
      longitude: 120.77487,
      latitude: 30.56950,
      count: 2
    },
    {
      id: 11,
      name: "五丰村",
      longitude: 120.77557,
      latitude: 30.60487,
      count: 2
    },
    {
      id: 12,
      name: "新升村",
      longitude: 120.79184,
      latitude: 30.54450,
      count: 2
    },
  ];

  const scene = new Scene({
    id: 'map',
    map: new GaodeMap({
      pitch: 64,
      style: 'dark',
      center: [120.78855, 30.54499],
      zoom: 13,
      rotation: 30,
    }),
    logoVisible: false,
  });

  scene.on('loaded', () => {
    const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'longitude',
            y: 'latitude'
          }
        })
        .animate(true)
        .active(true)
        .shape('name', [
          'cylinder',
        ])
        .size('count', h => {
          return [6, 6, h * 30];
        })
        .style({
          opacity: 0.8,
          sourceColor: '#92ecf6',
          targetColor: '#267c86',
          lightEnable: false
        })

    pointLayer.on('mousemove', e => {
      const popup = new Popup({
        offsets: [0, 0],
        closeButton: false
      })
          .setLnglat(e.lngLat)
          .setHTML(`<span>${e.feature.name}: ${e.feature.count}个</span>`);
      scene.addPopup(popup);
    });

    scene.addLayer(pointLayer);
  });

  return <div>
    <div
        style={{ height: 510, position: 'relative' }}
        id='map'
    >
    </div>
    <br />
  </div>
}

export default Map;