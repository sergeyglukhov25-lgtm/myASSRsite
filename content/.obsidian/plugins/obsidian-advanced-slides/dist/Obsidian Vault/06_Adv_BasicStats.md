
Video Linkler:  
https://www.rudisbakery.com/organic/product/white-hamburger-buns/  
https://www.youtube.com/watch?v=9fTdOlqjAcg

Ref. Dosyalar:  
Ekmek_Agirliklari  
Bstatshapes  
Dolapgen
---

---

# Module Objectives

* Measures of central tendency
  * Mode\, Median & Mean
* Measures of variation
  * Range\, Variance\, Standard Deviation
* Measures of “shape”
  * Basic graphical tools: Dot Plots\, Histograms\, Box Plots
* Probability distributions and probability calculations
  * The Normal Distribution
    * Anderson Darling
    * Skewness\, Kurtosis
  * Exponential and Gamma distributions for time measurements
  * Binomial and Poisson distributions

---

---

# Lean Six Sigma Guide

Screen Critical Inputs \(DOE\)

ID Variation:ExploratoryAnalysis

Optimize the Outputs

Lean Six Sigma

Overview

Refine the

Project

Search forInteractions\(DOE\)

ID Variation:StatisticalAnalysis

Project

Management

Control X’s

& Monitor Y’s

Identify Inputs

and Outputs

ID Variation:ANOVA

AnalyzeMeasurementSystems

Computer

Applications

EstablishLong\-TermQuality

Basic Statistics

DetermineProcessCapability

---

---

# Attribute vs. Variable Data

![[/img/06_Adv_BasicStats0.png]]

Increasing Information

note: Just as data types are continuous or discrete, there are probability distributions that are for discrete or continuous variables. Specifically, we will examine the Uniform, Binomial and Poisson distributions for discrete data and the normal distribution for continuous data. Other distributions, like Student’s t distribution and the Chi-square distribution will be mentioned in later weeks.

12\.4 15\.2 16\.4

09\.2 18\.7 15\.4

32\.6 14\.2 19\.1

08\.5 10\.7 06\.3

---

---

# Statistics

Sample Statistics are used to

ESTIMATE

Population Attributes

![](/img/06_Adv_BasicStats1.png)

---

---

# Important Population Attributes

S p r e a d

note: Four important process characteristics need to be determined to fully profile performance.  
Where process output tends to cluster: Location  
How much variation exists around that central tendency: Spread  
What is the pattern of frequency: Shape  
Is the snapshot analysis useful for future decision-making: Consistency

---

---

# Measures of Location: Central Tendency

* __MODE__
  * The mode of a set of measurements is defined to be the measurement that occurs most often \(with the highest frequency\)\.
  * If the data is graphed in a histogram or a dot plot\, the midpoint of the interval of the highest bar or stack represents the mode\.
* __MEDIAN__
  * The median of a set of measurements is defined to be the middle value when the measurements are arranged in order of magnitude\.
* __ARITHMETIC MEAN__
  * A “Weighted” Average
  * Each measurement is weighed by its frequency of occurrence
  
---

---

# Measures of Spread or Variability - Range

* __Range__
  * The range of a set of measurements is the difference between the largest and smallest values of the set\.

![](/img/06_Adv_BasicStats2.png)

Both distributions would have the same _range_ of values\.

But there is quite a difference in the _shape_ of the distributions\.

<span style="color:#FFFFFF"> _“_ </span> <span style="color:#FFFFFF"> _What is a shortcoming of using the range?_ </span>

---

---

# Measures of Spread or Variability

* Population Variance \(__s__ 2\)
  * The variance is the “weighted average”\, or the arithmetic mean of the squared deviations of all values in the group\.
  * An estimate for the Population Variance s2 is denoted by the symbol s2

![](/img/06_Adv_BasicStats3.png)  

![](/img/06_Adv_BasicStats4.png)

<span style="color:#FFFFFF"> _Do you notice any difference in these two equations_ </span> <span style="color:#FFFFFF"> _? _ </span>

---
* Population Standard Deviation \(s\)
  * The standard deviation is the positive square root of the variance
* Sample estimator for the Population Standard Deviation \(s or sigma “hat”\)
* Coefficient of Variation \(COV\)
  * s and s2 are measures of absolute variation
  * Sometimes it is useful to have a relative measure of variability
  * COV is the standard deviation normalized by the mean

![](/img/06_Adv_BasicStats5.png)

![](/img/06_Adv_BasicStats6.png)

![](/img/06_Adv_BasicStats7.png)

---

---

# Population Parameters vs. Sample Statistics

* Sample Statistics
  * Sample Mean \(X\-bar\)
  * Sample Variance \(s2\)
* Population Parameters
  * Population Mean \(m\)
  * Population Variance \(s2\)

![](/img/06_Adv_BasicStats8.png)

![](/img/06_Adv_BasicStats9.png)

![](/img/06_Adv_BasicStats10.png)

![](/img/06_Adv_BasicStats11.png)

<span style="color:#FFFFFF"> _For n > 25\, the difference is not practically important\._ </span>

---

---

# An Important Property of Variances

* Variances add; standard deviations do not\.
* Variances can be averaged and then a “pooled” standard deviation can be computed\.

![](/img/06_Adv_BasicStats12.png)

![](/img/06_Adv_BasicStats13.png)

---

---

# Population Parameters vs. Sample Statistics?

POPULATION PARAMETERS

SAMPLE STATISTICS

![](/img/06_Adv_BasicStats14.png)

![](/img/06_Adv_BasicStats15.png)

![](/img/06_Adv_BasicStats16.png)

![](/img/06_Adv_BasicStats17.png)

<span style="color:#FFFFFF"> _For n > 25\, the difference is not practically important\._ </span>

---

---

# Using Descriptive Statistics: an example

Scrap rates data of used fabric are collected by a confection firm\.

It is followed that\, The ratio defined as the scrap fabric over used fabric is listed monthly\.

Data is in “FABRIC\_SCRAPS”

![](/img/06_Adv_BasicStats18.png)

Fabric\_Scraps\.mtw

---

# Exploratory Analysis Using Minitab

Step 1: Stat\\Basic Statistics\\Graphical Summary

Step 2: Variables: “_Scrap\_Rate_”

Step 3:

![](/img/06_Adv_BasicStats19.png)

![](/img/06_Adv_BasicStats20.png)

<span style="color:#FFFFFF"> _Interpreting the “Shape": what to do next? _ </span>

  * _Location_
  * _Spread_
  * _Shape_

_Captured assuming stability over time_

_Next:_ _ _ _Check stability over time_

---

A fourth characteristic of data is stability over time.

When a sample is gathered it provides information about the short-term process behavior. If there is confidence that process location, spread, and shape are consistent through time, then the “snapshot” can also help explain the past and predict the future.

Graph\\Time Series Plot\\Simple

![](/img/06_Adv_BasicStats21.png)

![](/img/06_Adv_BasicStats22.png)

---

Generating the run chart indicates a shift in location over time…..perhaps three shifts.

---

# Minitab Output

![](/img/06_Adv_BasicStats23.png)

<span style="color:#FFFFFF"> _What does this show?_ </span>

---

# Remember Brushing and Subset Worksheet

![](/img/06_Adv_BasicStats24.png)

---

The brush tool can be used to examine potential data subsets.

 Setting up fields, [date] and [waste], for the ID variable box will present the data as it is selected using the mouse.

---

# Discover with MINITAB

_Last 12 months Scrap rate _

![](/img/06_Adv_BasicStats25.png)

<span style="color:#FFFFFF"> _What does it mean? What else do we know? _ </span>

---

The resulting analysis supports the partitioning. The exact boundary might be challenged, but it appears that the process has shifted over time. Is this an indication of good things happening? What else would you like to know?

---

# Using Descriptive Statistics: Predicting Outcomes

* Descriptive statistics are used to answer many questions relating to process performance and customer expectations:
  * What is the “typical” output?
  * How much variation is there in the output?
  * Is the process consistent over time?
* These same descriptive statistics might also be used to identify other tools\, _probability distributions_ \, to help:
  * explain the past\, and
  * predict the future
* by providing frequencies \(probabilities\) for outcomes of interest\.

---

The pattern of frequency offers not only a means to evaluate whether the process “delivers” to customer expectations, but can also be used to predict how often certain values will occur.

We can rarely predict exactly when certain values occur, but, based on prior patterns of frequency, we can predict how often they will occur.

In addition, we can take advantage of the relationship between frequencies and probabilities. If an event happens 10% of the time, then the likelihood that it will occur this time is 10%.

---

# Measures of Normality: Anderson-Darling

* Anderson\-Darling Test
  * Compares the actual data frequency distribution with a theoretical normal distribution calculated by using sample estimates for m and s:
  * Calculates a test statistic called A2 which should be small if the theoretical distribution fits the data distribution\.
  * The reported p\-value is the likelihood that the test statistic A2 could be as big as it is if the data set came from a normal distribution\.

![](/img/06_Adv_BasicStats26.png)

---

# Understanding Normality Test

* Anderson Darling Normality Test
  * Used to determine whether data is normally distributed\.
  * Null hypothesis: Data follow normal distribution\, <span style="color:#C00000">Ho = Data is Normal</span>
  * Alternative hypothesis: Data do _not_ follow normal distribution\,
  * <span style="color:#FFFF00">	</span> <span style="color:#C00000">Ha = Data is NOT Normal\.</span>
* P\-Value
  * Indicates that the probability of a random sample from a normally distributed population would deviate from normal as much as\, or more than your sample\.
  * High p\-value indicates you should fail to reject the null hypothesis that the data is representative of a normal distribution\.
  * Generally\, unless <span style="color:#C00000"> _P\-Value is less than 0\.05_ </span> \, you should fail to reject null hypothesis\.

---

   To validate the normality of your data there are many items to view in the Graphical Summary. Check them all:  
  actual graph (how does it look?)  
  the P-value and  
  the kurtosis and skewness values.

---

# Normality Test Examples

![](/img/06_Adv_BasicStats27.wmf)

![](/img/06_Adv_BasicStats28.wmf)

![](/img/06_Adv_BasicStats29.wmf)

![](/img/06_Adv_BasicStats30.wmf)

---

# Measures of Normality: Skewness

Data from a normal distribution should be equally distributed around the mean: 50% on either side

Skewness is a measure of non\-symmetry

Perfect symmetry would result in a skewness of 0\.0

![](/img/06_Adv_BasicStats31.png)

![](/img/06_Adv_BasicStats32.png)

![](/img/06_Adv_BasicStats33.png)

NEGATIVE

SKEWNESS

POSITIVE

SKEWNESS

---

# Measures of Normality: Kurtosis

Data from a normal distribution should have a specific shape relating to it’s mean and variance\.

Kurtosis is a measure of how \(too flat and broad\) or \(too tall and thin\) the pattern of frequency is relative to a normal distribution\.

A perfect fit would result in a kurtosis of 0\.0

![](/img/06_Adv_BasicStats34.png)

SHARPER \(Positive\)

FLATTER \(Negative\)

---

# Negative Kurtosis Example

![](/img/06_Adv_BasicStats35.png)

<span style="color:#FFFFFF"> _Distribution looks like a camel with 2 humps\!_ </span>

---

Mu= 63 ve 69 ve 75 olan 3 ayrı ana kütle

---

# Non-normal Distributions

---

Video Linkler:  
https://www.rudisbakery.com/organic/product/white-hamburger-buns/  
https://www.youtube.com/watch?v=9fTdOlqjAcg

Ref. Dosyalar:  
Ekmek_Agirliklari  
Bstatshapes  
Dolapgen

---

# Exponential Distributions

Used to assign probabilities to task cycle times

![](/img/06_Adv_BasicStats36.png)

![](/img/06_Adv_BasicStats37.png)

DO NOT MEMORIZE

![](/img/06_Adv_BasicStats38.png)

_Good News for _

_“Less the Better” Targets_

Distexamples\.mtw

---

# Example of an Exponential Application

A service time data results in:

![](/img/06_Adv_BasicStats39.wmf)

<span style="color:#FB8738">Question: </span> <span style="color:#FB8738">How long will 99% of all jobs take?</span>

<span style="color:#FFFFFF"> _Note the calculated mean and standard deviation_ </span>

---

# Can the Exponential Distribution be used?

Graph>Probability Plot…>Single

![](/img/06_Adv_BasicStats40.png)

![](/img/06_Adv_BasicStats41.png)

---

Use the probability plot to assess whether a particular distribution fits your data.  
The plot consists of:  
Plot points, which represent the proportion of the data meeting as sequence of cumulative frequencies.  
The fitted line, which is a graphical representation of the percentiles for the distribution model.  
A set of approximately 95.0% confidence intervals for the fitted line.

An Anderson-Darling statistic is calculated which measures the fit. Small values indicate good fit.

---

# Minitab Output

* Exponential Test
  * Null Hypothesis \- H0: Data follow exponential distribution
  * Alternative Hypothesis \- Ha: Data do not follow exponential dist\.

![](/img/06_Adv_BasicStats42.wmf)

---

# Example of an Exponential Application

Assumed m = 82\.19 minutes

Assumed pattern of frequency is Exponential

Graph>Probability Distribution Plot…>View Probability

![](/img/06_Adv_BasicStats43.png)

![](/img/06_Adv_BasicStats44.png)

---

Minitab has a routine that calculates cumulative probabilities for various values for the exponential distribution. The routine needs to know the mean, which uniquely defines the distribution.

For a population of service incidences whose mean is 82 minutes, Minitab reports that 99% of all services incidences will be completed within 377 minutes or 6.7 hours.

---

# Minitab Session Window Output

_How long will 99% of all jobs take?_

![](/img/06_Adv_BasicStats45.png)

---

Minitab has a routine that calculates cumulative probabilities for various values for the exponential distribution. The routine needs to know the mean, which uniquely defines the distribution.

For a population of service incidences whose mean is 82 minutes, Minitab reports that 99% of all services incidences will be completed within 377 minutes or 6.7 hours.

---

# The Gamma Distribution (Continuous Data)

* Used to assign probabilities to cycle time which accommodates a series of tasks
* Two parameters:
  * a = number of tasks performed sequentially
  * b = mean service time per task \(1/b = mean service rate\)

![](/img/06_Adv_BasicStats46.png)

---

The gamma probability function is a versatile and popular tool to assign probabilities to cycle time events.

It has two parameters that determine location, spread, and shape.

For cycle time applications, the two parameters represent:  
a = the number of sequential tasks involved in the cycle  
b = the mean time it takes to complete a single task

If a is an integer, the gamma distribution is also known as the Erlang distribution.

---

# Two Task Cycle Times

*  = ab
* 2 = ab2
* Example:
  * b = 10 minutes average cycle time
  * a = 2 tasks
  *  = 20 minutes
  *  = 14\.1 minutes

![](/img/06_Adv_BasicStats47.png)

---

With 2 tasks, the gamma distribution exhibits a mode away from 0.0.

Calculations:  
= ab = 2_10 = 20 minutes  
= [ab2]1/2 = [2_102]1/2  
= [200]1/2=14.1 minutes

---

# Three Task Cycle Times

*  = ab
* 2 = ab2
* Example:
  * b = 10 minutes average cycle time
  * a = 3 tasks
  *  = 30 minutes
  *  = 17\.32 minutes

![](/img/06_Adv_BasicStats48.png)

---

As the number of tasks increases, the gamma distribution appears more and more normal.

Calculations:  = ab = 3_10 = 30 minutes  
= [ab2]1/2 = [3_102]1/2  
= [300]1/2=17.3 minutes

---

# Ten Task Cycle Times

*  = ab
* 2 = ab2
* Example
  * b = 10 minutes average cycle time
  * a = 10 tasks
  *  = 100 minutes
  *  = 31\.6 minutes

![](/img/06_Adv_BasicStats49.png)

---

Eventually, a normal approximation is adequate to estimate the gamma distribution.

This can occur when the number of sequential tasks (the first parameter) is sufficient such that:  
   -3 = 0, or  
    = 3, or  
   2=92, or  
   2/2 = 9, or  
   [a2/b2]/[a/b2] = 9, or  
   a = 9

Note that this result does not rely on the mean service rate.

---

# Shape and Scale

_Cycle time of a process with multiple tasks/operations_

![](/img/06_Adv_BasicStats50.png)

_a = 7\.058 _ \(Estimated number of tasks\)

_b = 2\.939 _ \(Estimated average cycle time\)

---

# Attribute vs. Variable Data

![](/img/06_Adv_BasicStats51.png)

Increasing Information

---

Just as data types are continuous or discrete, there are probability distributions that are for discrete or continuous variables. Specifically, we will examine the Uniform, Binomial and Poisson distributions for discrete data and the normal distribution for continuous data. Other distributions, like Student’s t distribution and the Chi-square distribution will be mentioned in later weeks.

---

# What Proportion of Documents Will Have Errors?

* Purchasing spends time _reprocessing_ many purchase orders from the organization\.
  * According to the records\, reprocessing defective rate is 38\.7% \(0\.387\) over the past months\.
  * An average of 40 new P\.O\.s are submitted to Purchasing each week\.
* For any given week\, anticipating a need for more people to do the work\, what would be the highest possible number of P\.O\.s needing rework?

![](/img/06_Adv_BasicStats52.png)

---

# Binomial Distribution (Discrete Data)

* The Binomial Distribution assigns probabilities to the number of “events” observed in a set of trials when the propensity for an “event” is p\, where 0  p  1
* This distribution works if:
  * All outcomes are independent of each other\.
  * The propensity for “event” is constant for all trials\.
* A process that meets these criteria is called a:

<span style="color:#70AD47">Bernoulli Process</span>

---

The binomial distribution is used to determine probabilities for experiencing 0,1,2…or any number of “successes” from a series of trials, where the outcome is either a success or a failure. The event described as a success is determined by the experimenter.  
This distribution is accurate if the likelihood for success (call it p) is the same for each trial, and is not influenced by past behavior.

There is a phenomena in gambling called the “Gambler’s Fallacy”. Put yourself in the shoes of a hopeful gamester who is consistently playing “Red” on the roulette wheel. If “Black” turns up five times in a row, you might be more inclined to bet on “Red” next time because it is due. This, of course, is not true. The chance of “Red” or “Black” for any given spin of the wheel is not influenced at all by what occurred previously. The chance for “Red” on the sixth spin is the same as all the others, 50-50.

---

# Examples of Bernoulli Processes

* Flipping a fair coin where “heads” is defined as “event”\.
  * The propensity for event is p = 0\.50
  * The binomial distribution provides the probability of flipping four “heads” in ten trials = 0\.2051
* Sampling billing records as they are produced from a consistent process where “event” is defined as finding a defective document\.
  * If the propensity for defective documents is p = 0\.08\, then out of 100 documents\, no more than 12 will be defective with 95% certainty\.
* Categorizing the success of a service call\, determined by length of time\.
  * If the success rate is 98%\, then the probability that the next 20 service calls will meet the maximum specification is 0\.67

<span style="color:#FFFFFF"> _Binomials are very common in test areas\._ </span>

---

A simple example of a binomial experiment:  
Consider a deck of well-shuffled cards. Success is defined as drawing a diamond from the deck of cards. A binomial experiment would consist of drawing five cards from the deck and determining whether each one is a success or failure. In this case, n=5 and p=0.25.  
A binomial experiment would require that after drawing each card, the card is replaced in the deck and re-shuffled before drawing the next card.  
An experiment where the cards are not replaced is called a hypergeometric experiment. The probability distributions for this type of experiment can be found in any statistics text.

---

# Binomial Distribution Formulation

* Binomial Probability Equation
  * For a binomial experiment of n trials where the probability of event is p \(q = 1\-p\) then the probability distribution is:
* Example:
  * In the past\, The success rate for a procedure was ¾\. Recently\, four out of six failed\. Has anything changed? <span style="color:#FB8738">Find the probability that exactly four of six applications will fail\.</span> What is your conclusion?

![](/img/06_Adv_BasicStats53.png)

DO NOT

MEMORIZE

![](/img/06_Adv_BasicStats54.png)

---

The binomial distribution is rather complex. However, we can approximate the binomial distribution with a normal distribution if the following condition is met:  
that is, if the number of trials is greater than or equal to 5 divided by the minimum of p and q. This requirement ensures that the binomial distribution is reasonably symmetric.  
If this condition is met, a binomial distribution of n & p can be approximated by a normal distribution of:  
and

---

# Binomial Distributions

* The following are two different binomial distributions\.
  * The first has many successes per 100 trials and can be approximated by a normal distribution
  * The second has only a few successes per 100 trials and can be approximated by a Poisson distribution

![](/img/06_Adv_BasicStats55.png)

![](/img/06_Adv_BasicStats56.png)

---

The binomial distribution with a high success rate appears normal and, in fact, can be approximated by a normal distribution.  
The binomial distribution with a low success rate can be approximated by a Poisson distribution as discussed in the following slides.

---

# Max # of Defective POs

Best estimate for p = 58/150 = 0\.387

Number of “trials” = 40 \(per week\)

Maximum number of “defectives” with 99% certainty?

Calc>Probability Distributions>Binomial

![](/img/06_Adv_BasicStats57.png)

![](/img/06_Adv_BasicStats58.png)

---

We finally get to an answer proposed in slide 43. The application of the binomial distribution is easy to do with Minitab  
Using the sample estimate for the likelihood of “success” for any given trial, the utility that reports values corresponding to cumulative probabilities can determine the highest number of defects that would occur with 99% certainty, I.e., the most the department is likely to experience.

---

# Minitab Output

![](/img/06_Adv_BasicStats59.png)

---

We finally get to an answer proposed in slide 43. The application of the binomial distribution is easy to do with Minitab  
Using the sample estimate for the likelihood of “success” for any given trial, the utility that reports values corresponding to cumulative probabilities can determine the highest number of defects that would occur with 99% certainty, I.e., the most the department is likely to experience.

---

# Poisson Distribution

* The Poisson Distribution can be used to calculate probabilities for process outcomes that are measured as rates: mice/acre\, defects/unit\, calls/hour\, etc\.
  * Mice\, Defects\, and Calls are “events”
  * Acre\, Unit\, and Hour represent the “area of opportunity” in which the event occurs
* The Poisson distribution works if:
  * The occurrence of an “event” is equally likely across the whole “area of opportunity”
  * The likelihood of the occurrence of an “event” in any part of the “area of opportunity” is independent of an occurrence in another\.
* A process that meets this criteria is called a “Poisson Process”

<span style="color:#FFFFFF"> _Poisson experiments are rate experiments_ </span>

* Compare these two distributions\.
  * The first is the low\-success\-frequency binomial distribution
  * The second is a Poisson distribution with the same mean

![](/img/06_Adv_BasicStats60.png)

![](/img/06_Adv_BasicStats61.png)

<span style="color:#FFFFFF"> _Do these appear similar to you?_ </span>

---

This is a graphical example of the ability of the Poisson distribution to approximate the low-success-frequency binomial distribution.

* Definition:
  * For a Poisson experiment where l \(or m\) is the average number of successes in a given area of opportunity and e=2\.71828… the probability distribution is defined by:
* Example:
  * The average number of lab requests generated during weekday mornings is four per hour\.
  * What is the probability that six requests will arrive in any given hour?

![](/img/06_Adv_BasicStats62.png)

![](/img/06_Adv_BasicStats63.png)

<span style="color:#FFFFFF">DO NOT</span>

<span style="color:#FFFFFF">MEMORIZE</span>

![](/img/06_Adv_BasicStats64.png)

<span style="color:#FFFFFF"> _Binomial and Poisson are used in attribute SPC charts\._ </span>

---

When the normal approximation to the binomial distribution does not hold, i.e., when there are only a few successes in an interval, than the Poisson distribution can be used to approximate the binomial distribution.  
While defining these distributions can be a very dry subject, knowledge of them becomes increasingly important during subsequent statistical analyses.

---

# Minitab: Poisson Probability

The average number of lab requests generated during weekday mornings is four per hour\.

What is the probability that six requests will arrive in any given hour?

Calc>Probability Distributions>Poisson

![](/img/06_Adv_BasicStats65.wmf)

![](/img/06_Adv_BasicStats66.jpg)

![](/img/06_Adv_BasicStats67.jpg)

---

# Homework

* From a T\-Shirt Production line\, 600 T\-Shirts were taken randomly\. Defects on each t\-shirt were examined\. Data is in “TShirt\_PROD\.mtw”\, \(Defect Quantity column\)\. Times for examining each T\-shirt are also measured and recorded in Control time column \(in seconds\)\.
* Questions:
  * What is your best estimation for Non\-defect T\-shirt ratio?
  * What is the probability of having less than 15 “defective T\-shirts” in a randomly selected group of 25 T\-shirts from that process?
  * What is the probability of having more than 3 defects on a randomly selected T\-shirt?
  * From the control time data\, how many consecutive tasks are involved and what is the average cycle time per task in the control process?
  * What proportion of T\-shirts will be controlled within 1 minute?
