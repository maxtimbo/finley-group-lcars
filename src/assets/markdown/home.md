<SectionHR>Welcome</SectionHR>

Hello, and welcome to my site. I'm Tim Finley, a Broadcast Engineer with a strong background in FM broadcasting.
While my primary focus is broadcast engineering, I also have interests in IT and computer repair. If you're having an issue and would like me to help troubleshoot, please open a ticket at my [tech support website](https://fgtech.finley-group.com).

In addition, I've also been learning various programming languages. I have worked on several projects in Python, VueJS, and Javascript. Recently, I have started learning Rust.  

This webpage was a practice in VueJS as well as SCSS. Everything here was developed by me, with inspiration from [Jim Robertus](https://thelcars.com/). Some of the buttons along the side have functions. Most are just placeholders. There is also a hidden audio player that you can use to stream some of the stations I oversee. You can see the source of this website on my [github](https://github.com/maxtimbo/finley-group-lcars).

In addition to coding, I am also an FAA Part 107 Licensed Pilot and have done several drone missions around both radio broadcast towers and private homes for real estate agents. For inquiries regarding drone missions, please send me an [email](mailto:tim.finley24@gmail.com). Some samples of my work are below.

<SectionHR>Drone Images</SectionHR>

<ImageGallery :images="[
    { thumbnail: '/images/thumb_Top3.webp', full: '/images/Top3.webp' },
    { thumbnail: '/images/thumb_bluffton2.webp', full: '/images/bluffton2.webp' },
    { thumbnail: '/images/thumb_studioTop.webp', full: '/images/studioTop.webp' },
    { thumbnail: '/images/thumb_woahTop.webp', full: '/images/woahTop.webp' },
    { thumbnail: '/images/thumb_SavannahArtSchool.webp', full: '/images/SavannahArtSchool.webp' },
]" />

<SectionHR :textAlign="'justify-center'">My Projects</SectionHR>
### CLI based Audio Player
I'm currently working on an audio player in Rust that handles playlists from radio automation software suites to be used as backup audio. This project has proven to be extremely challenging.

<lhr />
### Invoice-CLI
In my most recent "not completed but abondonded" project, I wrote a command line program that allows a user to create invoices. The project is written in Rust and uses SQLite.

**~Update~**  
I have actually completed this and it works quite well. If you're interested, you can see the project [on my github](https://github.com/maxtimbo/invoice-cli).

<lhr />
### Radio-Automation Python
Before completing this project, I had had several Python scripts that would take care of various download and audio manipulation tasks. This project aimed to combine them all into one comprehensive package. Although I really like where the project is currently, there are several things I would like to improve, such as threaded downloads and an even easier to use command line interface for generating jobs.

<lhr />
### RIFF/Wave Data Manipulation
RadAutoPy uses my riff-header Python package to manipulate wav headers to allow for more meta data following the CART Chunk spec. This project taught me a great deal about C as well as the file structure of audio.

<lhr />

<script setup>
import { lhr, SectionHR, ImageGallery } from '@/elements';
</script>
