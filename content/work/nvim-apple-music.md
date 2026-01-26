---
title: "apple-music.nvim"
description: "Apple Music + Neovim. Ugly duckling music player meets chad text editor."
date: 2024-07-12
pinned: true
tags: ["Neovim", "Lua", "Music"]
repository: "https://github.com/p5quared/apple-music.nvim"
liveDemo: "https://github.com/p5quared/apple-music.nvim"
---

I am a pretty heavy music listener, and for some time I have been using Apple Music to do my music streaming. I am also a pretty heavy coder, and for some time (around a year) I have been using [Neovim](https://neovim.io/) as my text editor of choice.

One thing I love about Neovim is how immersive it feels. It is, almost necessarily, a tailor made editing experience with all the tools and plugins you need and none of the ones you don't. Apple music, on the other hand, is an awful experience which I try to stay as un-immersed in as I can. I have been mostly using my phone to play music but this is annoying as then I have to switch my bluetooth speaker, and then I want to play a video on my computer and then...

There had to be a better way, I thought. It turned out there was not (an option that would satisfy me). So I decided to build one.

I found someone had already made a [CLI version](https://github.com/p5quared/apple-music.nvim) of what I wanted, but there was not a Neovim interface. In little time I whipped up some Lua bindings for the Apple Script scripts from the mentioned CLI app. For fun I also added some automated documentation generation with [lemmy-help](https://github.com/numToStr/lemmy-help)!

So far it's really taking off, having already received 3 stars on Github!

Check it out at [apple-music.nvim](https://github.com/p5quared/apple-music.nvim)!