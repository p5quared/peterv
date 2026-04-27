---
title: "Division the Hard Way"
date: 2024-04-03
description: "A description and solution for one of the more creative software interview problems."
tags: ["leetcode"]
---

When I talk to people outside of software, the task of solving coding problems during interviews is one that I don't think I am ever able to explain properly. Therefore, I'd like to share a problem I came across that I think has a really creative solution and may shed some light on the style of problems asked at companies like Amazon and Google.

## Evaluating Division

In this problem we are given two 'lists' of data. The first is a list of equations with variables which mean something like *a / b = x*. In other words, we get two variables (*a, b*), and the result of diving *a/b* which is a number, *x*. The second list contains a list of *queries*. Each query looks like *a/b. *The goal of the problem is to build a list of results. For each query, if possible, we compute the result. If it is impossible to compute a given query we place a *-1* on the results list.

Notice that some queries are obvious. For instance, if we have a list of data like *a/b=x, b/c = y*, the queries *a/b *and *b/c* are obvious (*x and y*). But what if we want to find *a/c?* How can we tell if a query is impossible?

## Solving

To find a solution, I started by writing examples out on paper and filling in possible numbers. If we have *a/b = 2, b/c = 3*, we can use *a=12, b=6, c=2* and work out that *a/c = 6.**** ***From here I realized you could rewrite *6 = (a/b)(b/c), *or more generally *(a/z) = (a/b)(b/c)(c/d)...(y/z)*! 

In other words, if we want to find *a/c* but don't already know it, we can find a solution by multiplying all of the *in between* equations together.

## Translating to Code

With this observation, we know *what* to do, but *how* to do it in code might still not be obvious. The intuition here is that this multiplying together of all the in-between equations is functionally the same thing as path-finding. What I mean is if we imagine *a/b=x* as a road connecting *a -> b* with a toll costing *x* dollars, then finding *a/c* is equivalent to finding a path of roads from *a* to *c* and multiplying their costs together.

This observation has transformed the problem we are trying to solve from one about algebra and calculating division, to traveling through a network of connected nodes (*a, b, c)* where each path has a cost. These [graph problems](https://en.wikipedia.org/wiki/Graph_theory) are studied a lot in computer science, and this task of writing code to travel through a network and find a path from node *a* to node *c* is pretty common and not hard to study and implement. I'm going to skip showing the code here though as I feel it is not really the point of this article.

## Why?

Most people (particularly those who are preparing to interview) despise these problems and see them as a meaningless and inaccurate measure of their abilities as a software engineer. I would just say that these comments seem to forget that roles in big tech have hiring rates often lower than 1%. A general screen is completely necessary to weed out the candidate pool in some way, and companies (particularly Google) did research and found these problems to be the most effective preliminary screen. The candidates who can comfortably solve these problems are generally either smart and hard-working (a lot of studying), or extremely smart. 

One of the most common alternatives is take-home problems. Where you are asked to create some software on your own time and hand in your code at the end. I think this is a poor system because of how much labor it takes on both ends: hours of time for a candidate to write code, and then more time for interviewers to review it.

Solving data-structures and algorithms problems is obviously not the most perfect measure of a candidates abilities, but I'd argue that it is the most effective bandaid we have for a difficult problem in hiring.