---
title: "Against Spec Driven Development"
date: 2026-03-21T22:25:44-07:00
description: "Why, for now, I believe SDD is inferior to prompt driven development."
draft: true
---

Some companies are enforcing or at least heavily promoting the Spec-Driven Development (SDD)
flavor of agentic programming. In SDD you first write or modify specifications in markdown files,
well actually
you write a _prompt_ and an agent writes specifcations in markdown files. Then you unleash
your agent, no, your team of agents (because the more the merrier, they say). In a perfect world
you sit back, grab your coffee (or other preferred drug of choice) and by the time you're back
the agents have adjusted the codebase to suit the new spec. Oh and they also tested it,
wrote a PR, reviewed the PR and left comments, ammended the PR, approved the PR, shipped the code,
and broke production--_say what?_

Agents are only able to work on codebases at all because of context management.
Good agents, when given a prompt, use subagents to retrieve relevant pieces of information,
adding them to the context. Because, in SDD, spec files define the total contract of 
your application, it seems impossible to get around the fact that agents will need
to consume these at non-zero cost.

_Of course_, you say, _agents can manage spec files 'smartly', like they do code_.
Sure, you can conditionally include spec files in the context where they apply to the plan,
but how should you do that? Full text search? Vectorized spec files? Agents scanning every
spec and deciding is probably the most effective answer here. Then what do you include in
the context? Every relevant spec file that pertains to the implementation? If agents
carelessly compact information from spec files, then specification files suddenly are a lot less
valuable to have. 

Another argument of spec driven development suggest that agents getting stuck, or implementations being
bad is a non-issue, "If you get a nasty 2,000 line diff, just ask the agent to start over and do it more better."
I mean hey, if it works for you I'm sure it will work for your agents too.

Reviewing is going to be harder. First you have to review the specs, which, by the way, read like they 
were written by LLMs and are not exactly _terse_. If you thought reading 5 pages of LLM markdown was
bad, wait until you see the code they generated because agents are brave refactorers.
That's okay except, since you spend all of your time
corralling agents to write and implement your own specs, you're so abstracted away from the codebase
you'll be a lot less likely to notice _that test isn't testing_.

A little while ago I ran an experiment where I cloned an existing regex library, and wrote a structured fuzz
testing harness around it. I then created a second library with a duplicate API, and set up the fuzz
tests to run against both, generating millions of valid regex and strings, and set up some ralph
loops to attempt to create a better versions in various ways, like optimizing for compilation speed.
I'm totally open to this being my fault, but after every run, the agents confidently sloppified
themselves to death. Agents certainly have _agency_, but so far they do not seem to be able to self-direct
themselves anywhere good.

My fear is that larger projects will start out using SDD and start out just fine, but there may come a time when
the next agent just cant fit the next bug fix into the codebase. Try and try
