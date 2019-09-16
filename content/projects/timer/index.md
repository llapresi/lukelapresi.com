---
client: "Super Easy Apps"
title: "Super Easy Timer"
cover: "./cover.jpg"
date: "August - December 2017"
service: "macOS App"
order: 2
---
Super Easy Timer is a macOS countdown timer app that uses a natural language parser to make
setting times as easy as typing them out. ([www.supereasytimer.com](http://supereasytimer.com/).)
I was the lead developer of Super Easy Timer during my internship at Super Easy Apps. Super Easy Timer was initially created for internal use by management but was moved to production after results exceeded company’s expectations. Developed using Swift 4 in an Agile + Kanban, Test Driven environment with utilizing GitFlow and XCTest.

<iframe src='https://gfycat.com/ifr/sourfamiliararrowana' title="Super Easy Timer in action" frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

<div style="width: 100%; text-align: center; padding-bottom: 48px; padding-top:12px;">
    <em>
        Super Easy Timer in action
    </em>
</div>

# Development
I was initially hired by Super Easy Apps to write documentation and tutorials for the company's
online Swift development course. While I went into the job with zero experience with
the Swift language and the macOS/iOS development platform, I quickly became proficient with the
new development environment.

My manager at Super Easy Apps is a fan of using countdown timers to manage his work time.
However, he didn't like any of the existing timer apps on macOS, dismayed at how clunky the act of simply setting a timer was with them.
When talking to me about his use of countdown timers and his issues with the existing ones for macOS, I proposed making a prototype for a new timer app that would focus on making the act of setting timers as easy and streamlined as possible. My boss told me to see what I could do with the concept and after presenting him
a prototype made in a few days, he was impressed and tasked me to work on the timer as my primary job.

# Creating Keyboard Centered UX
Super Easy Timer's workflow focused entirely around keyboard first use, avoiding the clunky mouse based menus most timers
opt to use. Timers can be set by simply entering a duration (ex. "20min", "2 hours 12sec") and pressing enter.

<iframe src='https://gfycat.com/ifr/impoliteshadowyaustrianpinscher' title="Super Easy Timer accepts multiple time formats." frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

<div style="width: 100%; text-align: center; padding-bottom: 48px; padding-top:12px;">
    <em>
        Super Easy Timer accepts multiple time formats.
    </em>
</div>

While a timer is running, you can easily add and remove time from it by simply appending "add" or "remove" respectively to a
duration value.

<iframe src='https://gfycat.com/ifr/aggressiveperkybluet' title="You can easily add and remove time from the current timer." frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

<div style="width: 100%; text-align: center; padding-bottom: 48px; padding-top:12px;">
    <em>
        You can easily add and remove time from the current timer.
    </em>
</div>

Super Easy Timer also contains a mini mode that allows you to pin the timer to a corner of the screen so you can keep track of
the time while doing other tasks.

<iframe src='https://gfycat.com/ifr/inborngrimcockatoo' title="Mini mode lets you keep track of the time while doing other tasks" frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

<div style="width: 100%; text-align: center; padding-bottom: 48px; padding-top:12px;">
    <em>
        You can easily add and remove time from the current timer.
    </em>
</div>
