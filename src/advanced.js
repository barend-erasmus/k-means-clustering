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

for (let i = 1; i < 5; i++) {
    const centroids = kMeans(i, data, 10);
    console.log(calculateVarianceSum(centroids));
}


function kMeans(kFactor, data, n) {
    let previousVarianceSum = Number.MAX_SAFE_INTEGER;
    let result = [];

    for (let i = 0; i < n; i++) {
        const centroids = [];

        for (let j = 0; j < kFactor; j++) {
            centroids.push({
                point: data[Math.floor(Math.random() * data.length)],
                items: [],
            });
        }

        for (const item of data) {

            const centroid = getNearestCentroid(centroids, item);

            centroid.point.x = (item.x + centroid.point.x) / 2;
            centroid.point.y = (item.y + centroid.point.y) / 2;

            centroid.items.push(item);
        }

        const varianceSum = calculateVarianceSum(centroids);
        
        if (varianceSum < previousVarianceSum) {
            previousVarianceSum = varianceSum;
            result = centroids;
        }
    }

    return result;
}


function calculateVarianceSum(centroids) {
    let varianceSum = 0;
    for (const centroid of centroids) {
        const variance = stats.variance(centroid.items.map((x) => calculateDistanceFromCentriod(centroid, x)));
        varianceSum = varianceSum + variance;
    }

    return varianceSum;
}
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