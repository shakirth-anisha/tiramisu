# Contribution to tiramisu

*table of contents*

* [Guide to Contribution](#guide-to-contribution)
    * [Git Commit Message Guidelines]()
    * [Guide for design posts]()
    * [Guide for memebrs list]()
* [Installation Guidelines](#installation-guidelines)
    * [Using the pre-built binaries](#using-the-pre-built-binaries)
    * [Installation from Source](#installation-from-source)
    * [Installation using Homebrew](#installation-using-homebrew)

## Guide to Contribution

To make yourselves familiar with the [static site generator](https://en.wikipedia.org/wiki/Static_site_generator), while working with layouts, we recommend you to go through the in-detail [documentation](https://anna-docs.netlify.app/docs). The installation instructions can be found below

### Git Commit Message Guidelines

Refer to the following [article](https://www.conventionalcommits.org/en/v1.0.0/) regarding writing conventional git commit messages, to make it easier for the maintainers to understand the PR's and progress.

### Guide for design posts

> This is only for HSP Members

- Any small writeup on the inspirations, thought process behind the desings would be appreciated
- Design posts can be added under `site/content/design/EVENT_NAME.md` and must follow the following frontmatter

```yaml
---
title: EVENT NAME
date: "YYYY-MM-DD"
tags: [TAG-1, TAG-2]
collections: [design]
description: ...
authors: ["Author Name 1", "Author Name 2"]
previewimage: path to a square preview image
layout: design
---
```

- Posts can be written normally in accordance to the common markdown specifications that can be found [here](http://commonmark.org)

- Inorder to include *grid based images* similar to what is on display in the `/gallery` page of the site, place all images inside a div in the markdown file as follows

```md

// snip of a blog

<div class="img-gird">

![alt text for image - necessary](path_to_image)

![alt text for image - necessary](path_to_image)

![alt text for image - necessary](path_to_image)

</div>
```

> Do keep in mind the mandatory spaces between each of the image lines!



### Guide for memebrs list

>  This is only for HSP Members

To add your name to the list of members part of the club, follow the steps

1. Add a `markdown` file to `site/content/members`. For example

```sh
touch site/content/members/YOURNAME.md
```

2. Add a frontmatter to the markdown file

```yaml
---
title: YOUR NAME
description: TEAM NAME
collections: ["members>YEAR", ...]
previewimage: url_to_your_image
customFields:
    - SocialsName: url_to_your_profile
    - ...
---
```

**Note**

`SocialsName` could either be `Linkedin`, `Github`, `Instagram`, `X`, etc. If you would like to link any other social account, add the key name, and also save an svg of the icon to that social provider at `/static/icons/SocialsName.svg`, otherwise there wouldn't be any icons available to display.


---

## Installation Guidelines

To get started with contributing to this repo, you will require the binaries for `anna` (release 3.0):

### From anna binaries

Download the binaries from: https://github.com/anna-ssg/anna/releases/tag/v3.0.0. For example

```sh
curl -L https://github.com/anna-ssg/anna/releases/download/v3.0.0/anna_Linux_x86_64.tar.gz > anna_Linux_x86.tar.gz
```

Extract the binaries and add the executable to path

```sh
tar -xvzf anna_Linux_x86.tar.gz
./anna -h
```

### Build anna from source

To build from source, you will need to have [Go lang](https://go.dev/) installed. clone the `anna-ssg` available at https://github.com/anna-ssg/anna.git.

```sh
git clone --depth=1 https://github.com/anna-ssg/anna.git
cd anna
# Install the dependencies
go install
# Build with the Makefile
make
```

This builds the SSG and also creates a sample rendered directory, which isn't the requirement. You can use this binary by adding it to your path and using it in the same directory as this repository.

### Installing anna with Homebrew

Anna-ssg provides hombrew taps for MacOS systems as of now. To install, run the following commands

```sh
brew tap anna/anna-ssg
brew install anna

# To run anna
anna -h
```
