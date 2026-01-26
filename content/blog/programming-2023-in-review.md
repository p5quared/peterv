---
title: "Programming: 2023 in Review"
date: 2023-09-22
tags: ["personal"]
---

I was tidying my GitHub today and noticed that it has been just a little over one year since I started [getReddit](https://github.com/p5quared/getReddit), a tool that made videos in the 'Youtube Shorts' or Tiktok format from Reddit content. It was probably one of the first things that I programmed *myself*, that is to say it was not the result of following some tutorial or guide. I broke down the problem myself and then researched and implemented solutions to each step along the way. It was been an important milestone for me, also igniting the bulk of my interest and passion in computer science that I still have today. Working on it I learned a lot but in particular it opened my eyes to what I could achieve in programming if I would just [RTFM](https://xkcd.com/293/).

> *By the way, this is technically not 2023 in review, it's really more like August 22' -> August 23'. I might write a separate review for whatever I do between August and January though.*

## getReddit

A tool for generating videos in a Tiktok or Youtube Shorts format, from Reddit posts. The tool used the Python Reddit API Wrapper (praw) to gather reddit content as text, narration was created with Google's Text to Speech API (gTTS), stills of the text were produced using Python Image Library (Pillow), and a movie was edited together with MoviePy.

I already described a lot of this project's importance to me, but I should also add that it was a significant factor in my drive to return to school. Working on this made me realize how much I could love programming.

## BMCC

Right after *getReddit* I actually enrolled in BMCC (I was not able to get into any 4 year schools, but that's another story). While there I took two programming classes, their second semester of C++ and Data Structures. It took a lot of convincing and effort to get them to give me some credits in CS and believe in my but believe in me they did. 

### First Open Source Contribution

The classes were incredibly easy but I wanted to push my programming a little more, so I decided to create GUI's for all of my homework assignments, using a C++ library called FTXUI. 

Somewhere along the line I found a section of documentation that had a little mis-phrasing that was bad enough to probably consider a typo and I was suddenly a child at Christmas (I think it was around Christmas actually)--I had found something in an open source project that *I* could improve! I quickly and methodically read a few guides on typical open source contribution workflows and when I felt ready I sent a tentative pull request on Github. I checked that PR just about every five minutes to see what would happen and to my pleasant surprise the owner merged it in with minimal changes!

Needless to say I was left feeling like a *real* big deal. Honestly it still kinda makes me happy looking back at it, and I really appreciated the author's  politeness:

*Me:*

> Again, this is my first PR so let me know if my process is incorrect. Thanks!

*Author:*

> Everything is perfect!
Thanks for your contribution!

[The actual PR.](https://github.com/ArthurSonzogni/FTXUI/pull/585)

### Mr. President

At BMCC I wanted to find a group of like minded people, people passionate about CS and excited to work and learn. I decided my search would begin and conclude by joining the programming club, where I was suddenly thrust into the position of president (I am writing another article on this topic). While in the club, I put on a variety of workshops and activities, but what I treasured most was the couple little projects I started and managed there.

#### The Sheriff

We had a discord server, which had a bot that was used for a few basics such as verification. I thought our uses seemed simple enough so why not just program it ourselves? The leadership at the time (before my presidency), said basically "Whatever, go right ahead", and ahead I did go. I worked with DiscordPy and started a grassroots effort to recruit assistants and new contributors. In every conversation they would appear to be so excited to get started and swear they'd work hard but I think once they got home and realized they'd have to do quite a lot of self-studying most would lose a lot of steam. Nonetheless, a few gave it their all and made some functional contributions. I really did cherish those that did try, not for their skills but for their perseverance. The bot never really did that much but at nearly 1000 lines of code it was a reasonably sized project and I got to get some hands on experience with git and code-reviewing. 

### Supplemental Instruction

In my second semester at BMCC I volunteered as a 'supplemental instruction leader' which I'd summarize as a sort of TA minus an office or cubicle and plus a cheesy name. I would sit in on lectures and basically assist students in lectures and labs, as well as hold some 'office hours' where I would virtually instruct and assist students with their work in C++.

 I learned a lot from the students and I also picked up an immense gratitude for whoever is out there (professors or TA's) manually grading code, because reading many students' code made me want to tear my eyes out. Mostly this was because of poor formatting or keeping lots of old, dead code, but there was one perpetrator in particular who made me laugh out loud (to myself).

The students were tasked with creating a sort of 'Roomba' who would clean up a square room. Every student used a while loop and basically moved the robot forward until it hits a wall, turns around, and cleans another row, turns around, etc... Well, *every student except one.* One student actually used a for loop. No, I'm not talking about the fairly common `for(;;)`. This student essentially wrote:

`

for(int i=0; i<99999999999999999999; i++) {

    if (roomIsClean)

        break;

    // robot logic...

}

`

To this day I think this was the funniest piece of code I have ever read, and perhaps the best argument for [Go's syntax](https://gobyexample.com/for).

### Dementia

As I was at the helm of the programming club, I also was a part of some 'research projects'. One was regarding Dementia, essentially, the goal was to create an application to aid the lives of those living with dementia, their family, and caregivers. 

Personally, I feel that is way too big of a scope for a few (*re: just me)* community college students to code up. I believe (and argued at the time) that it would be more productive to do a study on what accessibility looks like for those living with dementia. There is little to no published work on this topic specifically (that I could find), and it seems it would be simpler to attempt to apply the methodologies used to measure other groups (blind, deaf, etc...) to a new group (those with dementia) and potentially glean meaningful results. Nonetheless, we trudged forward and endeavored to create '[Things](https://culturedcode.com/things/)' for old people.

While the efforts in that direction didn't exactly yield the greatest fruit, I did use this project as a way to get to know a particularly special web-framework: [Sveltekit](https://svelte.dev/)! Sveltekit really opened my eyes to what I think the gold standard of web-frameworks could be. I look at the time I spent learning React as more of a primer that has enabled me to appreciate Svelte more. In Svelte, everything is straightforward and generally the simplest way to implement a feature *is *the best way. Svelte's approach to use a compiler is probably what enables a lot of its novel approach. One of these days I'll probably write a piece on my infatuation with Svelte, but since learning it, I have never had the desire to use anything else (except [HTMX](https://htmx.org/) lately) and my experience has been incredible.

### Data-Science

Towards the end of my second semester, we had a guest, Sam, come in (virtually) to teach us a little intro to data-science. We covered a lot of the basics of Pandas, Seaborn, and similar libraries in Python. I then participated in [ASA's datafest](https://ww2.amstat.org/education/datafest/), where my team won first place in both categories. 

> I must say I am a little skeptical of this result. Not that I wasn't proud of our work, but I'm not positive our school was actually registered to participate... Our professor who was submitting on our school's behalf (each school hosts their own 'sub-competition', or a school can host for an area) told us our results but we never saw any official emails or heard from anyone else... Very odd, but I digress...

## Summer '23

I was *so* excited for classes to be over, not for the lack of school, but so that I could devote much more time to programming. I finally got the chance to try out Neovim as an editor, and got to customizing my desktop and environment so that my workflow has become *far* more productive, and *stylish. *;)

### .dotfiles < neovim

As I mentioned, I finally got to use Neovim!!!! In my code-editor journey, I started out on VSCode, which I used for a short period and liked and still think is pretty great. I then moved to JetBrains which I think is *really great*. I used JetBrains editors (PyCharm, CLion, Webstorm) for about a year, and loved the features that came included like refactoring and lovely debugging experiences. However, seeing every year's Stack Overflow Developer Survey suggest [Neovim is the most loved editor](https://survey.stackoverflow.co/2023/#section-admired-and-desired-integrated-development-environment), that 'grass is greener' feeling kept growing for months before the summer.

I had to wait though, because Neovim is not like other editors. When you install it, it is quite *raw* so to speak. I would say that compared to editors like VSCode and IntelliJ, the base of Neovim is almost unusable. However, what Neovim does have in spades is its available customization. It is not easy to customize, coming from VSCode and IntelliJ it felt like I had to program my own damn editor half the time, but after a lot of tinkering and tutorials, things have started to settle, and I am loving it! It is *blazingly* *fast* and it is a comforting feeling knowing exactly what is installed and what the editor is capable of, because I was the one who labored to install and configure everything.

### dotfiles < rest

I also got deeper into configurations in **Yabai, SKHD, **and a few other tools. Most of these pertain to how I operate the rest of my computer. For example, I can move and orient windows such as Chrome, Nvim, etc... all from keybindings. I also adopted **Alacritty** as my terminal emulator, which, like nvim is *blazingly fast*. However, I am considering switching from Alacritty in the near future because of its lack of support for font ligatures, and background blur filters on MacOS.

### go

During the summer I started learning Go, which has been *awesome*. I cannot understate how much I admire Go as a language. To me, it has all the best of Python and C wrapped together and compressed to the bare minimum. Its simplicity, some argue, is a fault, but I think that could not be further from the truth. Google engineers designed Go specifically so that it would be as easy and quick as possible for engineers to pick up a new language and write productive code. In Go, things just make sense. It is probably the only language I've seen where you can go to the definitions of most any standard library function and literally *read the definition* and not want to [*gouge your eyes out*](https://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a01115_source.html).

Anyways, I've come to the conclusion that Go is awesome and I hope to be able to use it professionally one day.

### c

At the end of the summer I looked at what courses I'd be taking and noticed that I would have to learn C, so I decided to get ahead of the game. Luckily, I already know C++ pretty decently so I'm very familiar with the pain points that many might encounter (*pointers*). I learned by following an online textbook where you get to [build your own Redis](https://build-your-own.org/redis/) from scratch. Much of the content was definitely beyond my programming purview, but even just going through the motions I learned a lot about systems programming and the internals of databases.

## Closing Remarks

Well, I think that's a pretty good summary of my programming in 2023. Of course, this doesn't quite cover it all but these are at least the main points and subjects where I feel I learned or grew the most. My experiences overall have been pointing me towards the career field of [distributed systems](https://en.wikipedia.org/wiki/Distributed_computing), which I want to study more of in the coming months.

Anyways, if you read this whole post, thanks for reading, and *viva la neovim! :)*