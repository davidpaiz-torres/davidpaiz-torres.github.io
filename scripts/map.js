const key = 'Mg7VoPbeXwKcbPfM9nJ5'

// Sets the map boundaries
const bounds = [
    [-74.2557, 40.3960], 
    [-73.6895, 40.9255]
    // [-73.867081, 40.749497], 
    // [-73.91058699000139, 40.87764500765852] 
];

const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/hybrid/style.json?key=${key}`,
    center: [-73.867081, 40.749497],
    zoom: 0,
    maxBounds: bounds, // restricts the map from being zoomed out past the "bounds" 
    trackResize:true,
}); 
// Loads the map, then adds all the layers after it has loaded
map.on('load', () => {
    map.loadImage('media/Icons/87952_handcuffs_icon.ico', function (error, image) {
        if (error) throw error;
        map.addImage('icon', image);
        map.addSource('points', {
            type: 'geojson',
            data: `../data/coords.geojson`,
            cluster:true,
            clusterMaxZoom:14,
            clusterRadius:50
        });
        map.addLayer({
            id: 'Points',
            type: 'symbol',
            source: 'points',
            layout: {
                'icon-image': 'icon',
                'icon-size': 0.005,
            }
        });
        map.addLayer({
            id:'clusters',
            type:'circle',
            source:'points',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    'orange',
                    5,
                    'orangered',
                    350,
                    'darkred'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        });
        map.addLayer({
            id:'cluster-count',
            type:'symbol',
            source:'points',
            filter:['has','point_count'],
            layout:{
                'text-field': '{point_count_abbreviated}',
                'text-size': 12
            }
        });
        map.addLayer({
            id:'unclustered-point',
            type:'circle',
            source: 'points',
            filter:['!',['has','point_count']],
            paint:{
                'circle-color': '#11b4da',
                'circle-radius':3,
                'circle-stroke-width':1,
                'circle-stroke-color': '#fff'
            }
        });
    });
});

// map.on('click','clusters', async (e) => {
//     const features = map.queryRenderedFeatures(e.point, {
//         layers:['clusters']
//     });
//     console.log(features[0].properties);

//     const clusterId = features[0].properties.cluster_id;
//     const zoom = await map.getSource('points').getClusterExpansionZoom(clusterId);
//     map.easeTo({
//         center:features[0].geometry.coordinates,
//         zoom: zoom,
//         duration: 100
//     });
// });

// map.on('click', 'unclustered-point', (e) => {
//     const coordinates = e.features[0].geometry.coordinates.slice();
//     const mag = e.features[0].properties.mag;
//     let OFNS_DESC;

//     if (e.features[0].properties.arrest === 3) {
//         OFNS_DESC = 'yes';
//     } else {
//         OFNS_DESC = 'no';
//     }
//     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//     }

//     new maplibregl.Popup()
//         .setLngLat(coordinates)
//         .setHTML(
//             `magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`
//         )
//         .addTo(map);
// });

map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'clusters', () => {
    map.getCanvas().style.cursor = '';
});

map.on('mouseenter', 'unclustered-point', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'unclustered-point', () => {
    map.getCanvas().style.cursor = '';
});

// Add zoom and rotation controls to the map.
map.addControl(new maplibregl.NavigationControl());
