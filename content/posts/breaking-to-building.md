---
title: "Breaking to Building"
date: 2024-11-25
description: "AWS is all about Day 1. This is about Day 1, 2, 3, ..."
tags: ["seattle", "narrative", "personal", "careeer"]
---

Recently I wrote [*Breaking the AWS Account*](breaking-the-aws-account)* *where I spoke briefly on the first time I worked directly with AWS. In the process of of some notoriously productive intern work, I accidentally shut out access for my entire company. Well, one week after that internship, in a moment of dramatic irony, I boarded a plane to Seattle to intern at AWS.

![image](https://cdn.sanity.io/images/x4wuwagv/production/5717034da2b239ca5bbef9a9152ad3b9862b1729-768x1024.jpg)

Even having some professional experience under my belt there are some things that stood out immediately: the buildings were bigger, the elevators taller and the coffee line longer. Three months prior I met my first professional software developer and now I was surrounded, no escape. 

I worked on the Amplify Data team, responsible for a portion of AWS Amplify focused on supporting data modeling, supporting infrastructure, and application interaction. I want to explain what I did so it's necessary that you understand what Amplify is. Straight from the horse's mouth, Amplify states:

> AWS Amplify is everything you need to build web and mobile apps. Easy to start, easy to scale.

Personally, even with experience building apps, I have no clue what that means. 

Let's look at how you use Amplify with a focus on my team's responsibilities. Users of Amplify are application developers--programmers and engineers. When you build an app, you almost certainly have some data. This blog relies on data in the form of posts. Each post has some attributes or fields like a title, description, tags, content, and more. So the first thing you do with Amplify is define your data in a schema, that is, the data your app relies on. In my case it might look something like this:

`a.schema({
  "post": a.model({
  id: a.string().required(),
  title: a.string().required(),
  tags: a.string(),
  content: a.string().required(),
  created_at: a.datetime()
})`

My application is simple, but others may include many different models like users and comments and also need to represent relationships and rules e.g. I can only edit the comments which I posted. 

Later on Amplify does two things. First, it processes this data schema and produces what I like to call the "shopping list", and goes to AWS and "purchases" things on your behalf. The "shopping list" details all of the resources and connections necessary for your app to function. For example you probably need a database to store those posts and a server that will allow your users to "talk" to the database through your app, perhaps some service running in the cloud to handle authentication, maybe another service to connect to an external datasource, etc... The other handy thing it does is generate a lot of code necessary for you, *the application developer, *to talk to these services that Amplify just ordered. For example it generates the code necessary to list all of the posts you've made, open a specific post, edit a post, etc... This significantly speeds up development, especially when you want to add or modify a new model and the code to interact with your changes is instantly available.

![image](https://cdn.sanity.io/images/x4wuwagv/production/d5cf55512beb0dc3d3a571fc133d83015882203f-960x540.jpg)

Now, my project involved implementing support for modeling a special type of data. This particular data type is known as `autoincrement` or `serial` and is basically a number with some special properties. [Here's a link to learn more](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL), but I don't think it's particularly important.

Implementing this was exciting because it not only required code modifications in numerous places, but also because I was also aware of how rare it is, generally, to get to develop public customer features as an intern.

I could spend a couple paragraphs discussing the implementation plan, process, and execution but I don't think it's that interesting if you don't already know quite a lot about programming, so I'll skip to the important takeaways.

 First and perhaps most importantly, the project was a success. I completed my implementation with time to spare despite a number of setbacks including much more difficulty settling on the design and planning, and a brief moment where it was thought the project could not be implemented (due to a risk of breaking many customer applications). 

Second, I loved getting to peek at the software development cycle at scale. My team was essentially two teams of five or six developers, but our work relied on or was relied upon by numerous other teams. It was fun to watch your code move through the "pipeline", the automated processes kicked off to monitor your code, test it, and ultimately deploy it to regions around the world.

And third, the culmination of both of these points was getting to "live the life" of a software engineer developing a new feature from start to finish. I designed it in documents reviewed and approved by the team, I made numerous code changes to implement things according to my design, I encountered setbacks or things I'd missed during design and had to quickly develop solutions, and at the end I had extended a framework used by thousands to build applications that will be used by who knows how many. 

![image](https://cdn.sanity.io/images/x4wuwagv/production/f31870cc8f4c8124dc2657d203d1be881c1104be-768x1024.jpg)

It wasn't easy but it sure was fun.

![image](https://cdn.sanity.io/images/x4wuwagv/production/c7b38ca27ac7733fb7fec976d31bcf497a0da566-1024x768.jpg)

> I would like to extend a thank you to my manager Dan and mentor Chris for giving me the guidance and feedback necessary to succeed, as well as the space to feel ownership over my work. Really though, I appreciated the whole team at Amplify Data for maintaining such a welcoming and fun environment when you needed help or just wanted to play horse downstairs.