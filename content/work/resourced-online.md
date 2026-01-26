---
title: "Resourced Online"
description: "Explorations in misdirection."
date: 2023-11-15
pinned: true
tags: ["Sveltekit", "Pocketbase"]
repository: "https://github.com/p5quared/alty"
liveDemo: "https://www.resourcedonline.com/"
---

Have you ever wanted to send a friend a link to a seemingly trustworthy website, only for it to take them to a video of Rick Astley singing a song? Enter: [resourcedonline.com](https://resourcedonline.com).



You can create fake links by entering a destination (where you want your target to be sent), and some fake content you want to be displayed when you send it via your favorite messaging app.



The result will be a link with a caption, description and image of your choosing, which when clicked will send people wherever you'd like.



Example:

![image](https://cdn.sanity.io/images/x4wuwagv/production/0405172b175242f72e6de18530e553cc5025a5a5-444x966.png)



## How it Works

The site utilizes something called "Open Graph", which is a protocol designed by Facebook which allows any web page to become a "rich object" in social media contexts. 

Essentially, when you create a fake link, the site creates a fake page on the internet and lets companies like Google or Facebook know where to find the page. The page contains the fake information that you specify when you create a fake link, and when users click on a link they are first sent to the fake page, then immediately redirected to the "real" destination. 

## Abuse Concerns

I am sure that some people will wonder, *isn't this a dangerous tool?* I can't deny that one could use this for nefarious purposes. However, I think that if people want to prank their friends they should be allowed, and we cannot limit our creativity to only what cannot be abused, because just about anything has potential for abuse.