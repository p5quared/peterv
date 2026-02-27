---
title: "Design Up Front"
date: 2026-01-26
description: "Rethink agile for agents."
tags: ["software", "ai"]
---

You open your terminal and enter `claude`, "Welcome back Peter!", it says to you, making you feel warm inside.
In the console you write, "Build me a chess analysis tool that can load my chess games from chess.com and analyze my games to find
frequent inaccuracies and suggest improvements." The thinking indicator pulses gently, the token counter whirs to life,
electricity is rerouted from hospitals to GPUs, _magic begins_. Thirty minutes later Mr. Claude returns from his meditative expedition,
having produced what must be some of the most well crafted, idiomatic, and pragmatic software the world has ever seen.

Excitedly, you enter `dune build && dune exec chess analyzer: Error: Cannot compile lib/domain/board.ml because it depends on
lib/domain/move.ml which depends on lib/domain/board.ml`. No. This can't be. You beg claude to resolve the circular dependency
but he only laughs and taunts you with a $200 bill.

You wake up covered in sweat, your laptop closed beside you. Phew, it was just a dream.

The promise of agentic tools like Claude is that they can write software nearly independently.
But the reality is you can't `/plan` your way out of a shitty idea. Here's my take: With agentic systems,
we should be spending _more time_ on low level system designs, not less.

Even the latest and greatest Opus whatever and Codex this-and-that models seem to struggle to make
comprehendable contributions to the scatterbrained messes I call code. While Gemini has probably not 
comprehensively studied my clever all-in-one `doEverything(ctx: DoEverythingContext)`, it has studied
such works as _Domain Driven Design_, _Refactoring_, and _Design Patterns_ and can recite them significantly
more approximately correctly than I.

In my personal experience, models can complete tasks in any codebase. The question is how _substantial_,
or _complex_ of a task can a model complete on its own. At some point of complexity, you have to either
start downsizing the tasks you feed your model dramatically to accomodate this,
or spend the bulk of your time steering the model to a sensible solution, or accept garbage.

In an organized codebase you get two benefits. First, design patterns are meant to be a _lingua franca_,
which means when I see two interfaces: `PricingStrategy` and `PricingStrategyDecorator`,
I immediately have an idea of what the two classes do and how they may relate. Second, and more importantly,
a well organized codebase is necessarily easy to test. For starters you can probably remove the network calls
and most external dependencies from everywhere in your program except the outermost layer.
Mocking everything everywhere is hardly testing and it might lead to a codebase where minute bugfixes require
the updating of dozens of tests that were mocking false assumptions:
[Testing on the Toilet: Change-Detector Tests Considered Harmful](https://testing.googleblog.com/2015/01/testing-on-toilet-change-detector-tests.html).
Would you rather implement a performance improvement in your storage adapter and run your integration test suite in seconds,
or would you rather improve it at the client callsite in the center of your program and update the mocks on the way out?
Which would you rather have Claude do?

This isn't a bad thing--it's arguably more fun than ever to design code because implementing
designs takes seconds or minutes. My point is that in the past you might have spent some of the coding time iterating
and improving on the design you are implementing. However, our model tools have settled on a strategy of
picking a plan once and sticking to it till the end. So lean into it, plan shit out--build Claude a bouncy house
and let the adrenaline fueled token stream run wild.
