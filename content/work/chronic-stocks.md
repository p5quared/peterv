---
title: "Chronic Stocks"
description: "Measuring stock-chart similarity and predicting price action."
date: 2023-08-07
pinned: false
tags: ["SvelteKit", "Finance", "Javascript", "Python"]
repository: "https://github.com/p5quared/chronicstocks"
liveDemo: "https://www.chronicstocks.net/"
---

If you have ever studied trading (of stocks, options, etc...) you have undoubtedly heard of *technical analysis. *According to *Investopedia:*

> Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume. Unlike fundamental analysis, which attempts to evaluate a security's value based on business results such as sales and earnings, [technical analysis](https://www.investopedia.com/terms/t/technical-analyst.asp) focuses on the study of price and volume.

> [*- source*](https://www.investopedia.com/terms/t/technicalanalysis.asp)



One of the forms of technical analysis is using trend lines, or curves to influence decision making. For example, the cup and handle pattern is a bullish signal, shapes like pennants and flags can be either bullish or bearish (depending on direction), and the head and shoulders is typically a bearish signal ([*source*](https://www.investopedia.com/articles/technical/112601.asp)). That is, given a certain shape or pattern, the market will *typically* act in a predictable manner (at least enough to make money).

My question is this:

### Is this BS?

While I may not have the knowledge or expertise to singlehandedly debunk or confirm technical analysis, I decided to at least explore the shape aspect of trading, and determine how prevalent and useful these patterns are.

**Goal:** *Devise a program that, given a particular period of a stock-chart, will return other periods that match the shape as closely as possible.*

What this means is that, given a list of numbers (prices) which on a chart will form lines or curves with peaks and valleys, we want to find other periods
where the lines, curves, peaks and valleys look pretty close. 

## Approach

I decided to start out by testing a number of strategies for this using Python in Jupyter Notebook. I just gathered some test data from [Yahoo Finance](https://finance.yahoo.com/) and loaded up [PyCharm](https://www.jetbrains.com/pycharm/).

I'd suggest you take a moment to ponder about how you would measure stock chart similarity--I'll explain the methods I explored later but for now I'll quickly go through the broader strategy.

Select our 'target' period (which we will call *P)*.

Select the periods we will compare *P *to, which we will call *Q*.

Normalize each *Q1, Q2, ... Qi* because the shape of our periods is independent of price (a cup and handle looks the same whether a stock is $10 or $1000).  

Compare each individual *Q1, Q2 ... Qi * to *P *and assign *Qi* some score based on its similarity to *P*.

After assigning a score to each *Qi* we should have a list that, if sorted by score, we can use to pull out as many similar periods to P as we'd like!

While the site linked does this all with Javascript, I will share the Python methods as they are more succinct and shareable.

### 1. Select P

`spy = pd.read_csv('../data/SPY.csv', parse_dates=True)`

`p_duration= 30`

`p_start = random.randint(0, len(spy) - p_duration)`

`# Get our random period`

`p = spy.iloc[p_start : p_start + p_duration]`

Here we use [Pandas](https://pandas.pydata.org/) to load in the CSV with price data, and then simply select a duration and random start date, and finally select our stock period using `spy.iloc[x1, x2]`.

### 2. Select *Q*.

`q_rangeA = [spy.iloc[i:i+p_duration] for i in range(0, p_start-p_duration, p_duration)]`

`q_rangeB = [spy.iloc[p_start + p_duration : i + p_start + p_duration] for i in range(p_start + p_duration, len(spy), p_duration)]`

`all_q = [q for q in q_rangeA + q_rangeB if len(q) == p_duration]`

Selecting Q looks a little more complicated but basically we are just selecting slices of length, *duration *from before and after our target period (obviously, we don't want to compare our target period to itself). Then we combine them and throw out any periods that may have gotten cut short (the number of days before and after our target period is not necessarily divisible by our duration).

### 3. Normalize & Score

We have to normalize the data somehow because really, a stock's price shouldn't play any role in our searching, because as mentioned it plays no role in a shape. Some measure of *relative* price is what we want, but *relative to what* will depend on what scoring method we choose. For instance, we could normalize by change in price, where each price is converted to a percentage of the previous price. 

*e.g. a list of prices could be normalized in the following way:*

$100 -> 100% -> 1

$110 -> 110% -> 1.1

$121 -> 110% -> 1.1

$119 -> 98% -> .98

$99 ->  83% -> .83

But because normalizing depends on how we will compare, we must first pick a comparison method. I hope you have thought about some interesting ways to do this!

Imagine you were doing this by hand with stock charts on paper. You might consider laying one over the other, and shading in the region between the two lines. You could calculate the area of the shaded region and perhaps find the 'closest' match by finding the pair of stock charts with the smallest shaded region.

What you've just described is Calculus (viva la Calculus!!), and is one of the strategies I explored in Python. Unfortunately, this strategy has a downfall in that it does not handle sharp spikes very well.

If we think of a triangle with two fixed vertices, as we move the third vertex further away, we get a longer and pointier triangle. The trouble here is if we imagine the area this triangle forms. If we have a pointy spike, that is very noticeable, whereas if our triangle is short and stout, he is hard to detect. Hence why, when comparing our stock periods, we'd much rather find periods with short and stout triangles (relatively speaking), and raw summing of areas doesn't really account for this well.

There were a couple other strategies I explored but the one that worked the best (and simplest) was **KL Divergence**. 

> In [mathematical statistics](https://en.wikipedia.org/wiki/Mathematical_statistics), the **Kullback–Leibler divergence** (also called **relative entropy** and **I-divergence**), denoted KL(P∥Q), is a type of [statistical distance](https://en.wikipedia.org/wiki/Statistical_distance): a measure of how one [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution) *P* is different from a second, reference probability distribution *Q.* A simple [interpretation](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence#Interpretations) of the KL divergence of *P* from *Q* is the [expected](https://en.wikipedia.org/wiki/Expected_value) excess [surprise](https://en.wikipedia.org/wiki/Surprisal) from using *Q* as a model when the actual distribution is *P*.

> -[Wikipedia](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence)

That's pretty verbose if I do say so myself, but basically KL divergence (aka relative entropy) is a measure of difference in two probablility
distributions. Or, given distributions *P* and *Q*, the KL Divergence of  from *Q* is a measure of how well *Q* would perform
as a model when the actual distribution is *P*. Or at least that is what it is to the best of my understanding.

Stock charts are not probability distributions, obviously, but to get around that we simply normalize each period such that the sum
of prices in the period is equal to 1 and suddenly we have a list of data that could fool the best of statisticians into believing it is a list of probabilities.

As a bonus, this was *dead* simple to implement with NumPy:

`def normalize_pdf(data):    `

`    return data / data.sum()`

`def kl_divergence(p, q):    `

`    return np.sum(np.where(p != 0, p * np.log(p / q), 0))`

This strategy proved to be quite effective in identifying similar stock periods. I have yet to quantify the results, but in my findings thus far I have been able to identify that there are patterns and conditions which seem to indicate performance. How many of these patterns could be described as 'human readable' or how well this idea applies to known patterns, is for now TBD.

Soon I'd like to work on this quantification, and also explore some trading ideas that employ kl_divergence to inform decision making. 

## Website

If you want to try this out yourself, visit[ chronicstocks.net](https://www.chronicstocks.net/), a site I made to explore this idea in an interactive setting. The website makes a lot of *judicious* assumptions to produce a rough estimate of the historical performance of a given period shape. I don't know that I would trust it totally to inform your decision making, but it is pretty fun to play around with!

### How it's made

The site was built with [SvelteKit](https://svelte.dev) and [Skeleton](https://skeleton.dev) and hosted via [Vercel](https://vercel.com).