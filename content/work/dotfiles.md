---
title: ".dotfiles"
description: "my dotfiles"
date: 2023-08-13
pinned: true
tags: ["neovim", "lua"]
repository: "https://github.com/p5quared/.dotfiles"
---

## Background



![image](https://cdn.sanity.io/images/x4wuwagv/production/121883ce490f2bae7ca6f08c01e432743d93dd90-1920x1080.png)

The other day I accidentally broke my MBP (💀💀💀).
Fortunately, I was able to fix the problem by resetting everything (*re: turning it off and back on again*), but the process of getting everything back to where I had it took more time than I would have liked. Therefore, I have decided it is time to start managing my dotfiles more efficiently.

After doing some [reading](https://alexpearce.me/2016/02/managing-dotfiles-with-stow/) I settled on a basic setup using `stow` and `git`.

## Software

Includedin my dotfiles are configurations for the following:

Alacritty

Yabai

skhd

nvim

Along with some other miscreants that have snuck in.

### Alacritty

I use alacritty as my terminal emulator, it's been super easy to set up and configure. I am considering swapping in the near future because of Alacritty's lack of support for ligatures and background blur on MacOS. :(

### Yabai && skhd

I've been using Yabai along with skhd to manage my windows for a while on MacOS. I'm happy with my current configuration and experience using them. However, I think installation and configuration has been a pain. I think one of the biggest hurdles so far is the lack of, proper documentation. I may be a *newb*, but it seems like things shouldn't be this hard.

### Neovim

This summer I adopted using Neovim as my editor and I haven't looked back. I have mostly been developing JS/TS with SvelteKit and the experience has been incredible. I've been using vim motions to edit code for a few years so luckily I did not have to adjust to that, but adjusting to the package management and configuration system has been a shift. So far I have avoided installing some file tree plugin and have been loving me some Netrw and Telescope.

I think the next steps for my Neovim are:

Debugger

Refactoring

Jupyter

#### Debugger

I don't find myself seeking one working with Web-stuff, but I am planning on doing more with Go/C in the coming months, and in those workflows I *really* like using the debugger in Clion/GoLand.

#### Refactoring

I really got used to using the refactor tools in IntelliJ, and have not gotten
around to studying the refactoring options for Neovim. I'd like to be able to use the builtin find/replace commands more fluently but they are a bit daunting. I am just getting started with [theprimeagen/refactoring.nvim](https://github.com/ThePrimeagen/refactoring.nvim) but it is too early to share my thoughts.

#### Jupyter

I don't find myself desiring to use Jupyter that often but once in a while it
is almost a necessity and in those situations I find myself leaving Neovim behind. The nature of Jupyter work might make it more worthwhile to just work in PyCharm.

![image](https://cdn.sanity.io/images/x4wuwagv/production/53cd4e0c6810b97fbb6f8fd607164ac22b1e77fe-1920x1080.png)