---
client: "Imagine RIT"
title: "The Reef"
cover: "./cover.png"
date: "January - May 2019"
service: "RIT Capstone Project"
order: 1
---

`youtube: https://www.youtube.com/watch?v=XeQvFEMa53k`


The Reef is an exhibit that was showcased at Imagine RIT on April 27th, 2019. It set out to educate audiences about plastic pollution and encourage people to become environmentally conscious citizens through social media and technology. I acted as the Lead Engineer of the main exhibit, a double-widescreen Unity experience played using smartphones as game controllers. I created core gameplay systems including a WebSocket based network layer enabling communcation between smartphones and the game instance and several graphical effects.

# Pitching the Project

<div style="width: 100%; text-align: center; padding-bottom: 12px;">
    <video autoplay loop style="width: 100%; margin: 0 auto; display: block">
        <source src="./reef_proof_of_concept.mp4" type="video/mp4">
    </video>
    <br />
    <em>
        Proof of concept for phone/computer interaction
        <br /> Left Side: computer view. Right Side: phone view
    </em>
</div>

Initially our 6 member team was only given a simple two word prompt: "do good." Plastic pollution was a relevant issue we all quickly agreed was worth exploring. Knowing that families with young children and potential RIT students were the two biggest groups of people at Imagine RIT, we set out to create a simple to understand yet technologically novel exhibit in the span around 5 months.

The use a double widescreen projection display was inspired by [previous Imagine RIT exibit *THARSIS*.](https://www.youtube.com/watch?v=xGYJ0FaGlvw) *THARSIS* was a static exibit however, and we
wanted to one up it and with something more interactive. The idea of pulling a piece of trash off the main projector display and onto a phone was an idea I brainstormed that was very inspiring to me.
The rest of the team felt this idea might be too ambitious but I created a quick proof of concept that successfully got the rest of the team on board.

## Network Layer

The smartphones controlled the main game through a WebSocket based JavaScript app.
The phones sent their current gyroscope/orientation to a Socket server hosted on
Heroku, which then in turn sent this information to the main game. 