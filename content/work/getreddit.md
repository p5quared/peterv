---
title: "getReddit"
description: "Social media content generator."
date: 2023-08-26
pinned: false
tags: ["python", "reddit"]
repository: "https://github.com/p5quared/getReddit"
liveDemo: "https://youtube.com/shorts/wC7rbeAkIiM"
---

By some measure this is the project that started it all for me. I was pretty sure I wanted to be a programmer, but this project confirmed it and set me on an incredible trajectory.

## Background

I browse Reddit and Youtube quite a lot. Some time ago Youtube added something called 'Youtube Shorts' which was a section for short, vertically framed videos. It was obviously an attempt to copy the format that Tiktok rose to fame with. Most of content (probably to this day) is more or less identical to that of Tiktok (many creators likely upload to both places). One form of video that would come up decently frequently were these 'Reddit Stories'. Essentially they would take posts from Reddit, narrate them and display the text, with some generic 'attention grabber' background video behind it. They would usually look something like these:

![image](https://cdn.sanity.io/images/x4wuwagv/production/56f3b25a0fd4d476309434cba7eed0a1241ea4c9-1280x720.png)

I was honestly a little bothered at how low effort these videos seemed to produce (unlike the rest of Tiktok of course). When I really thought about it I thought that they seemed like something a robot could produce. I thought a little harder and then thought that I should try to make a robot produce these videos. *Aha!*

## Process

This was a huge project for me, I had only really taken one CS class in college by then, and I really learned almost nothing anyways. I had only just learned what an API was a few weeks before and barely 'got' the whole importing libraries thing in Python. Nonetheless I set out a plan and jumped in feet first.

In my research I settled on the following steps to make movies:

Get text content from reddit (pRaw).

Get narrations from text content (gTTS).

Make still images from text (PIL).

Composite the text, still images, and generic background videos (moviepy).

It took quite a while for me to put it all together but when I had it felt incredible. Working on this project not only gave me knowledge but it gave me confidence and an understanding of how I could be able to reason through and create just about anything (within reason) I could imagine with my computer given just effort and patience.

While it is a fairly humble project, it is one that holds a special place in my heart and important spot on my timeline as a programmer.

Example Output:

[Video1](https://youtube.com/shorts/QMXuWF5wCb0)

[Video2](https://youtube.com/shorts/wC7rbeAkIiM)