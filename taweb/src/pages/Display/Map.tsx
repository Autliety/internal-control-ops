import React from 'react';
import { PointLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

function Map() {

  React.useEffect(() => {

    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        zoom: 4,
        style: 'dark',
        center: [120.9457, 30.51547],
        pitch: 15,
      }),
      logoVisible: false,
    });

    const layer = new PointLayer()
        .source(
            [
              {
                lng: 120.9457,
                lat: 30.52547
              }
            ],
            {
              parser: {
                type: 'json',
                x: 'lng',
                y: 'lat'
              }
            }
        )
        .shape('radar')
        .size(80)
        .color('#13c0d3')
        .style({
          speed: 5
        })
        .animate(true);

    scene.on('loaded', () => {
      scene.addLayer(layer);
    });
  }, [])

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