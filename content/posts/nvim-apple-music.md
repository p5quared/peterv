---
title: "apple-music.nvim"
date: 2024-07-17
description: "Apple Music + Neovim. Ugly duckling music player meets chad text editor."
tags: ["neovim", "lua", "music", "project"]
---

![image](https://cdn.sanity.io/images/x4wuwagv/production/bbf5779f16c5f47df9c12931c510693a534e77d8-1600x1200.gif)

I am a pretty heavy music listener and for some time I have been using Apple Music to do my music streaming. I am also a pretty heavy coder and for some time (around a year) I have been using [Neovim](https://neovim.io/) as my text editor of choice.

One thing I love about Neovim is how immersive it feels. If you don't know, Neovim is a text editor known for its confusing controls (you use *hjkl* to move a cursor around and must memorize dozens of commands to become useful) and for its overall primitive experience (it is based on one of the earliest popular text editors). Neovim allows you to slowly build up a configuration by either installing and configuring plugins made by others, or by making your own additions in a programming language called *Lua*. 

Apple music on the other hand is an awful experience which I try to stay as un-immersed in as I can. I have been mostly using my phone to play music but this is annoying as then I have to switch my bluetooth speaker, and then I want to play a video on my computer and then...

I thought to myself, *certainly there must be a better way*. It turned out there really wasn't one... So, since I love procrastination-programming and have so much free time on my hands I decided to build something myself.

I found someone had already made a [CLI version](https://github.com/p5quared/apple-music.nvim) of what I wanted, but there was not a Neovim interface. In little time I whipped up some Lua bindings for the Apple Script scripts from the mentioned CLI app. For fun I also added some automated documentation generation with [lemmy-help](https://github.com/numToStr/lemmy-help)!

I haven't made any official release/notices yet and it has already become the most popular Apple-Music Neovim plugin globally!

Check it out at [apple-music.nvim](https://github.com/p5quared/apple-music.nvim)!