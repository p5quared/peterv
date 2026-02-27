---
title: "A Text Editor for the Brave"
date: 2024-11-05
description: "What is Neovim, and how to uninstall VSCode. If you don't write a lot of code, this probably won't make any sense."
tags: ["neovim"]
---

If you don't write a lot of code, this might not make a lot of sense. 

## 9 Variable Scopes

If you do write a lot of code, you're probably familiar with *that feeling*. You know, that shame and hopelessness as you hack away at your keyboard writing code in your Microsoft-owned text editor while getting completion assistance from your Microsoft-owned LLM and finally push your code to a Microsoft-owned git platform (just be grateful I didn't say Microsoft owned OS). *Why do I feel so crushed,* you ask yourself, *why can't I use a text editor made ****by the people, for the people***, *for the little guys like me?* You can stop holding your breath, because such an experience is available ([well, has been available for 50 years](https://en.wikipedia.org/wiki/Ex_(text_editor))). 

Neovim is a modal text editor. You can write text in *insert* mode, select text with *visual* mode, and move around your cursor in *normal *mode (there are more modes, but nobody knows what they are). You are put in charge of an arsenal of commands and keymaps to use at will, for example, while in *normal* mode you can press `yip` to copy a block of text (**y**ank **i**nside **p**aragraph) or `ci)` to delete the contents of the nearest `(...)` (and copy those contents) and begin inserting text in its place. At first, trying to learn these editing incantations feels like studying for a test for a class you don't even need to take, but then summer vacation comes around and you realize you'll never need to spend your money at the arcade playing Street Fighter and Mortal Kombat. You can get all the combos and adrenaline you need from playing Neovim.

The astute (or mature) reader may notice that 'Neovim' looks like the prefix 'neo' attached to 'vim'. This is no mistake. The astute (or mature) reader may also recognize 'vim' as the austere text editor most well known for its ability to trap its users. Neovim is actually a fork of vim. You see, at some point people decided they'd like to be able to extend or modify the tool they use every day with a language which didn't require you manually declare variable scope. *What, like local versus global? *Haha! There are [9 variable scopes](https://learnvim.irian.to/vimscript/vimscript_variable_scopes#variable-scopes) in vimscript. Neovim then was born out of the tears of those writing programs with 9 variable scopes. There are a few nifty things Neovim set out to do, but arguably the most valuable was ditching (de-emphasizing) vimscript and implementing an API in Lua. Lua is a quirky language itself, with list indices starting at 1 and `~=` being the inequality operator, but it deserves a round of applause for 2 variable scopes! 

## nvim .

Getting started in Neovim is a reasonable task if you're somewhat familiar with Vim (at least the motions). If you have no idea what vim motions are or how to escape vim, I'd suggest you install the vim extension in your editor of choice and familiarize yourself first. If you're already familiar or feeling brave, continue reading and I'll give a brief rundown on what Neovim is all about.

On the first step, Neovim set the 'shell' option, on the seventh step Neovim [loads your user config](https://neovim.io/doc/user/starting.html#initialization) by searching for an `init.lua` which you should probably put in `~/.config/nvim/init.lua`. Within this file you can do pretty much anything to your heart's content. If you've made it this far, you're finally free.

### Finally Getting Started

The first thing you'll probably want to do is install a plugin manager. Luckily you've decided to join in the golden age of Neovim where we have (for now mostly) settled on a standard package manager: [Lazy.nvim](https://lazy.folke.io/installation), written by Folke. Folke is to Neovim as tpope is to Vim (if you don't get that, it's okay, you're new here). I would write something here about how to do that and how to install and manage plugins but Folke's plugin documentation is pretty much unbeatable so go there and don't let me lead you astray.

#### Necessary Plugins

I claim these are totally necessary to be productive in Neovim. The seasoned Vim veterans may not need them, but I grew up in a privileged era. 

**LspZero **or **Lspconfig** should be installed to setup/configure language server integrations.

**Mason** should be installed to manage/install language servers.

**cmp **or **blink** should be installed so you can have a completion menu.

**Telescope **or **fzf** should be installed so you can quickly search for things.

#### Plugins for Quality of Life 

You could get by without these but honestly a lot of these are basically drop-in value adds.

**Oil** will make you realize how slow your current terminal file management practices are.

**Persistence** allows you to continue playing Neovim from where you left off.

**gitsigns** adds some useful visual git information

**harpoon** allows you to store files you visit a lot and instantly jump to and fro.

#### Hakuna Matata Plugins

*What a wonderful phrase. *When you've started to get comfortable with plugins and Neovim, these plugins will help you eradicate the desire to `code .` ever again. Some of these might take a little bit more work to get *just right*.

**Outline **gives you a symbol overview (classes, functions, variables, etc.) that you can use to aid reading and navigation.

**Lualine** provides a statusline that you can use to display useful info (file path, git branch, git changes, etc.).

**Lazygit** is a nice git TUI (this is kinda cheating since this is just a cli app wrapped for Neovim).

**Trouble** can help you browse LSP diagnostics.

#### Misc

**nvim-dap **lets you set breakpoints and interactively debug code in an experience on par with VSCode

**neotest** runs tests, watches tests, observes outputs and more .

**mini.nvim **is a collection of independent plugins mini in size but large in utility.

**snacks.nvim** is a new collection of QoL plugins I just noticed today but it's by Folke so I'm including it.

## Onward

Great, you made it to the part where I play my Neovim coding montage set to Metallica music. Just kidding. I hope that you'll go on a try using Neovim. I think it turns writing code into a much more awesome experience but it's definitely not for everyone and even for me was an acquired taste. Indeed, when it comes to programming, it probably won't make solving your problems much easier or faster, but it does make copying and pasting text take one less keystroke and that's got to count for something right?

> If you're a little confused, feel free to look at [my Neovim config](https://github.com/p5quared/.dotfiles/tree/main/.config/nvim), and if you're really confused you might consider starting with something like [Lazyvim](https://www.lazyvim.org/), a preconfigured Neovim experience that's great out of the box. I'd also like to take this time to shoutout [my own plugin](https://github.com/p5quared/apple-music.nvim) for you Apple Music users. Thanks for reading, cheers.