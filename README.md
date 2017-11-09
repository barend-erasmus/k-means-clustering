# k-Means Clustering

k-means clustering is a method of vector quantization, originally from signal processing, that is popular for cluster analysis in data mining. k-means clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster.

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

When these points are plotted on a chart we can cleary see that there are three distinct groups.

![](https://github.com/barend-erasmus/k-means-clustering/raw/master/images/chart-annotations.png)

How can we mathematically determine the boundaries of these three groups?

By using k-Means Clustering.