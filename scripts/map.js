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
            clusterMaxZoom:10,
            clusterRadius:35,
        });

  
// Map Title
    d3.select("#hed")
    .text("Arrests for Sex Work Across NYC from 2022-2024")
    .style("top", "10px")
    .style("color", "gray")
    .style("text-align", "center") 
    .style("font-size", "14px")
    
    d3.select("#map_byline")
    .text("By: David Paiz-Torres")
    .style("bottom", "20")  
    .style("font-size", "14px")
    .style("color", "gray")
    .style("text-align", "center")
        
// Filter Arrest Data by year
    fetch('../data/coords.geojson')
    .then(response => response.json())
    .then(data => {
        const years = [2024, 2023, 2022];
        const filteredFeatures = data.features.filter(feature => years.includes(feature.properties.Arrest_Year));
        const filteredData = { ...data, features: filteredFeatures };
        map.getSource('points').setData(filteredData);
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
                    150,
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
                'circle-color': 'darkred',
                'circle-radius':2.5,
                'circle-stroke-width':1,
                'circle-stroke-color': '#fff'
            }
        });
    });
});

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