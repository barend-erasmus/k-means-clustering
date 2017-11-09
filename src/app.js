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
});
centroids.push({
    point: data[5],
    items: [],
});

for (const item of data) {

    const centroid = getNearestCentroid(centroids, item);

    centroid.point.x = (item.x + centroid.point.x) / 2;
    centroid.point.y = (item.y + centroid.point.y) / 2;

    centroid.items.push(item);
}

console.log(centroids);

function calculateDistanceFromCentriod(centroid, item) {
    return Math.sqrt(Math.pow(item.x - centroid.point.x, 2) + Math.pow(item.y - centroid.point.y, 2));
}

function getNearestCentroid(centroids, item) {
    return centroids.map((centroid) => {
        return {
            distance: calculateDistanceFromCentriod(centroid, item),
            centroid: centroid,
        };
    }).sort((a, b) => {
        return a.distance - b.distance;
    })[0].centroid;
}