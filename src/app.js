const stats = require("stats-lite");

const data = [
    {
        x: 1,
        y: 1,
    },
    {
        x: 1.5,
        y: 2,
    },
    {
        x: 3,
        y: 4,
    },
    {
        x: 5,
        y: 7,
    },
    {
        x: 3.5,
        y: 5,
    },
    {
        x: 4.5,
        y: 5,
    },
    {
        x: 3.5,
        y: 4.5,
    },
];

const kFactor = 2;

const centroids = [];

centroids.push({
    point: data[1],
    items: [],
    name: 'A',
});
centroids.push({
    point: data[2],
    items: [],
    name: 'B',
});
centroids.push({
    point: data[5],
    items: [],
    name: 'C',
});


for (const dataPoint of data) {

    const centroid = getNearestCentroid(centroids, dataPoint);

    centroid.point.x = (dataPoint.x + centroid.point.x) / 2;
    centroid.point.y = (dataPoint.y + centroid.point.y) / 2;

    centroid.items.push(dataPoint);
}

for (const centroid of centroids) {
    console.log(`${centroid.name} -> (${centroid.point.x},${centroid.point.y})`);
}

function calculateDistanceFromCentriod(centroid, dataPoint) {
    return Math.sqrt(Math.pow(dataPoint.x - centroid.point.x, 2) + Math.pow(dataPoint.y - centroid.point.y, 2));
}

function getNearestCentroid(centroids, dataPoint) {
    return centroids.map((centroid) => {
        return {
            distance: calculateDistanceFromCentriod(centroid, dataPoint),
            centroid: centroid,
        };
    }).sort((a, b) => {
        return a.distance - b.distance;
    })[0].centroid;
}
