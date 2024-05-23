<SectionHR>Welcome</SectionHR>

Hello, and welcome to my site. I'm Tim Finley, a Broadcast Engineer with an interest in software development. I have worked on several projects in Python, VueJS, and Javascript. Recently, I have started learning Rust.  

This webpage was a practice in VueJS as well as SCSS. Everything here was developed by me. You can see the source of this project on my [github](https://github.com/maxtimbo/finley-group-lcars).

<SectionHR :textAlign="'justify-center'">My Projects</SectionHR>
### CLI based Audio Player
I'm currently working on an audio player in Rust that handles playlists from radio automation software suites to be used as backup audio. This project has proven to be extremely challenging.

<lhr />
### Invoice-CLI
In my most recent "not completed but abondonded" project, I wrote a command line program that allows a user to create invoices. The project is written in Rust and uses SQLite.

<lhr />
### Radio-Automation Python
Before completing this project, I had had several Python scripts that would take care of various download and audio manipulation tasks. This project aimed to combine them all into one comprehensive package. Although I really like where the project is currently, there are several things I would like to improve, such as threaded downloads and an even easier to use command line interface for generating jobs.

<lhr />
### RIFF/Wave Data Manipulation
RadAutoPy uses my riff-header Python package to manipulate wav headers to allow for more meta data following the CART Chunk spec. This project taught me a great deal about C as well as the file structure of audio.

<lhr />

<script setup>
import { lhr, SectionHR } from '@/elements';
</script>