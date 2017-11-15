# k-Means Clustering

k-Means Clustering is a method of vector quantization, originally from signal processing, that is popular for cluster analysis in data mining. k-means clustering aims to partition observations into k-clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster.

## The Problem

Here we have a dataset containing a list of points.

|  X  |  Y  | Group |
| --- | --- | ----- |
| 1   | 1   | A     |
| 1.5 | 2   | A     |
| 3   | 4   | B     |
| 5   | 7   | C     |
| 3.5 | 5   | B     |
| 4.5 | 5   | C     |
| 3.5 | 4.5 | B     |

When these points are plotted on a chart we can clearly see that there are three distinct groups.

![](https://github.com/barend-erasmus/k-means-clustering/raw/master/images/chart-annotations.png)

How can we mathematically determine the boundaries of these three groups?

By using k-Means Clustering.

## The Solution

### Step 1:

Select a k-Factor which will determine the number of clusters.

In this example, we have chosen 3 as our k-Factor.

Although there are ways to determine the optimal numbers of clusters from a given dataset, we'll not cover it in the document.

### Step 2:

Select 3, the k-Factor, data points from the given dataset and label them accordingly. These 3 data points will be called our centroids.

In this example we have selected:

|  X  |  Y  |
| --- | --- |
| 1.5 | 2   |
| 3   | 4   |
| 4.5 | 5   |

### Step 3:

Loop through each data point and find its nearest centroid, draw a line between them and move the centroid to the middle of the line.


```javascript
const centroid = getNearestCentroid(centroids, dataPoint);

centroid.x = (dataPoint.x + centroid.x) / 2;
centroid.y = (dataPoint.y + centroid.y) / 2;
```

Once this has been done for each data point, your centroids should have the following coordinates.

|  X    |  Y  |
| ----- | --- |
| 1.25  | 1.5 |
| 3.375 | 4.5 |
| 4.75  | 6   |

![](https://github.com/barend-erasmus/k-means-clustering/raw/master/images/chart-centroids.png)