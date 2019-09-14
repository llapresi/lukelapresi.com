---
client: "Imagine RIT"
title: "The Reef"
cover: "./cover.png"
date: "January - May 2019"
service: "RIT Capstone Project"
order: 1
---

`vimeo: https://vimeo.com/334741486`

[Check out the official website of *The Reef* here](https://designed.cad.rit.edu/nmcapstone/project/the-reef)

*The Reef* is an exhibit that was showcased at Imagine RIT on April 27th, 2019. It set out to educate audiences about plastic pollution and encourage people to become environmentally conscious citizens through social media and technology. I acted as the Lead Engineer of the main exhibit, a double-widescreen Unity experience played using smartphones as game controllers. I created core gameplay systems including a WebSocket based network layer enabling communication between smartphones and the game instance and several graphical effects.


<iframe src="https://player.vimeo.com/video/334808142" width="640" height="177" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
</iframe>

<div style="width: 100%; text-align: center; padding-bottom: 48px; padding-top:12px;">
    <em>
        Recording of a playthrough of The Reef
    </em>
</div>

# Pitching the Project

<div style="width: 100%; text-align: center; padding-bottom: 30px;">
    <video autoplay muted loop style="width: 100%; margin: 0 auto; display: block">
        <source src="./reef_proof_of_concept.mp4" type="video/mp4">
    </video>
    <div style="padding-top: 12px">
        <em>
            Proof of concept for phone/computer interaction
            <br /> Left Side: computer view. Right Side: phone view
        </em>
    </div>
</div>

Initially our 6 member team was only given a simple two word prompt: "do good." Plastic pollution was a relevant issue we all quickly agreed was worth exploring. Knowing that families with young children and potential RIT students were the two biggest groups of people at Imagine RIT, we set out to create a simple to understand yet technologically novel exhibit in the span around 5 months.

The use a double widescreen projection display was inspired by [previous Imagine RIT exibit *THARSIS*.](https://www.youtube.com/watch?v=xGYJ0FaGlvw)
*THARSIS* was a static exhibit however, and we wanted to one up it and with something more interactive. The idea of pulling a
piece of trash off the main projector display and onto a phone was an idea I brainstormed that was very inspiring to me.
The rest of the team felt this idea might be too ambitious but I created a quick proof of concept that successfully
got the rest of the team on board.

# Empowering Designers through Tools

In order to empower our three designers to work on the game (none of who had any prior experience with Unity),
I created several to allow them to edit and create graphical effects.

This included a "noise beam" shader, that uses two layers of procedurally generated noise to allow our designers
to create effects such as beams of light, turbulence, and more.

<div style="width: 100%; text-align: center; padding-bottom: 30px;">
    <video autoplay loop muted style="width: 100%; margin: 0 auto; display: block">
        <source src="./noisebeam_shader.mp4" type="video/mp4">
    </video>
    <div style="padding-top: 12px">
        <em>
            "Noise beam" shader and editor in action
        </em>
    </div>
</div>

Another important effect and tool I created was an animated fish shader, that allowed a single image of a fish
to be procedurally animated.

<div style="width: 100%; text-align: center; padding-bottom: 30px;">
    <video autoplay loop muted style="width: 100%; margin: 0 auto; display: block">
        <source src="./fish_shader.mp4" type="video/mp4">
    </video>
    <div style="padding-top: 12px">
        <em>
            Animated fish shader and editor in action
        </em>
    </div>
</div>

In the final game these were used in a particle system allowing tons of fish to be rendered on screen at once.

# Phone to Screen Interaction

The smartphones controlled the main game through a WebSocket based JavaScript app.
The phones sent their current gyroscope/orientation to a Socket server hosted on
Heroku, which then in turn sent this information to the main game. Orientation information was sent
at around 20hz to reduce network congestion, with interpolation used
displayed cursors to ensure movement at a smooth 60 frames per second.
