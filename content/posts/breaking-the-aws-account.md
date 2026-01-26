---
title: "Breaking the AWS Account"
date: 2024-08-13
description: "A play by play of my time at Trusted Nurse Staffing."
tags: ["buffalo", "narrative", "personal", "career"]
---

The year is 2024. Computer science students are fighting to secure any internship opportunity they can get their hands on. I am no different. Lost, alone, and afraid, my mind goes numb as I let an AI fill out internship application 158. There is no end in sight.

Then suddenly I got my first interview, and my first internship.

## Genesis

> In the beginning God created the heaven and the earth.
And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.
And God said, Let there be light: and there was light.
And God saw the light, and it was good; and God divided the light from the darkness.

Starting a first job (first in a field at least) is always a little nerve racking. I arrived green as can be and very quickly was given my first assignment: design and implement a pipeline to transfer telemetry data from AWS RDS to an external S3 bucket for analysis. Alternatively, you could say my job was to copy some files to a folder, but let's not quibble over semantics. 

While not totally incompetent, I was not very familiar with most of the tools I was using, and it cost me a lot of research to make the slightest progress. As my comfort level grew I figured out how to test my hypotheses (did this file get copied correctly?) on our company's AWS account. The thing I found myself testing the most was permissions. To let computer *A* do *XYZ* to resources owned by computer *B, * *B *has to provide permission. Which permissions out of the thousands of combinations? Well it wasn't always obvious, so I would test different combinations. 

That was when it happened: I accidentally deleted the permission that allowed us to access AWS. Suddenly I couldn't log in. I messaged our CTO:

![image](https://cdn.sanity.io/images/x4wuwagv/production/6482c313990da56e1d187806db06017c83637e7f-1010x710.jpg)

I broke the entire AWS account. The engineering manager in control was out on an extended leave. At the time, I couldn't find the humor. David walked over to my desk and asked me about the slip up in a conversation that went something like this: 

> *David*: So, you didn't do this with Terraform?
*Me*: No...
*David: *You went and modified the AWS account permissions in the console by hand?
*Me:* Yes....
*David:* Did you show anyone at all the changes you were making?
*Me: No......*
*David:* Well... You can probably see why you should do that next time.

## Proverbs

> Give instruction to a wise man, and he will be still wiser; teach a righteous man, and he will increase in learning.

Despite my best efforts to (unintentionally) sabotage the company, David was quite merciful to me, possibly because he could tell I was overestimating the magnitude of my error in my head. In any case things carried on and from that point on I was much more careful to use the proper techniques and ask for verification. I was slower but I wasn't breaking as many things.

Besides this, David also left me with words of wisdom, for example:

> It's only a bad question if you ask it three times.

I now try to write a lot more down.

After I was finished with the pipeline task, I focused entirely on [full stack](https://aws.amazon.com/what-is/full-stack-development/#:~:text=Full%20stack%20development%20is%20the,user%20interactions%20with%20the%20application.) development working more closely with the dev team, designers, and our PM. 

![image](https://cdn.sanity.io/images/x4wuwagv/production/bedfa3512da8a588be6891835dfba3720c49229f-2880x1800.jpg)

> Caleb, Shifra and I debug my code at 6pm, "*Burning the Midnight Oil"* as we put it.

While a few weeks of full stack development is far from enough to become a strong developer, I found myself getting comfortable with my (lessening) incompetence. As I got to know the projects better, work went faster and solutions came easier.

## Exodus

> Remember this day in which you came out from Egypt, out of the house of slavery, for by a strong hand the Lord brought you out from this place.

Alas, just as the sailing started getting smoother, my time was up. I moved out of my apartment in Buffalo and said goodbye for now to New York. After a brief stint in Montana I flew back to Buffalo to verbalize my goodbyes. Due to some oversights and time management problems, I did not get to have a particularly fulfilling goodbye with my team. I guess I have yet to break my lifelong habit of Irish goodbyes (and hellos). 

I only got to meet some of my team members face to face for a few brief minutes and was graciously gifted a wonderful arrangement of Buffalo edibles (no, not *those* edibles) ahead of my flight to Seattle.

![image](https://cdn.sanity.io/images/x4wuwagv/production/dc90a8d5a8a6a6fe1e774044d874ea2c64fcbd9f-768x1024.jpg)

While the week of my move to Seattle and start at Amazon is exciting, it is also bittersweet as I say goodbye (at least for now) to many of the faces and places that have become familiar to me in the last year. As a (proud) two time college dropout, the road to this point has, at many points, been a difficult one to navigate. My time at TNS will always hold a special place in my heart. As my first internship, it was not only an invaluable learning experience, but a *deeply* *validating* one as well.

From now on, I'll do my very best to not break the AWS account.

> Pictures from Seattle as I begin my next journey:

![image](https://cdn.sanity.io/images/x4wuwagv/production/0f9fd54702ba52d621246b96c83c12c9db5b7294-768x1024.jpg)

![image](https://cdn.sanity.io/images/x4wuwagv/production/95ef6a651029e76757fcefa251ff66eb1249bb9f-768x1024.jpg)

> A final thank you to Dave for hiring me and keeping Tony humble on the putting green, to Tony and Michael for preventing me from making things ugly, to Hannah for filling me in on the Buffalo lore, and to Mike, Shifra, Caleb, Brandon, and Dillon for debugging my code (oh and well Dave for that too).