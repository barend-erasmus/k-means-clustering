# k-Means Clustering

k-means clustering is a method of vector quantization, originally from signal processing, that is popular for cluster analysis in data mining. k-means clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster.

## Example

Here we have a dataset containing a list of points.

|  X  |  Y  |
| --- | --- |
| 1   | 1   |
| 1.5 | 2   |
| 3   | 4   |
| 5   | 7   |
| 3.5 | 5   |
| 4.5 | 5   |
| 3.5 | 4.5 |

When these point are plotted on a chart we can cleary see that there are three distinct groups.

![](https://github.com/barend-erasmus/k-means-clustering/raw/master/images/chart-annotations.png)

|  X  |  Y  | Group |
| --- | --- | ----- |
| 1   | 1   | A     |
| 1.5 | 2   | A     |
| 3   | 4   | B     |
| 5   | 7   | C     |
| 3.5 | 5   | B     |
| 4.5 | 5   | C     |
| 3.5 | 4.5 | B     |



