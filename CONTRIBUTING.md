# Contributing to the HSP site

_table of contents_

* [Contribution Guide](#contribution-guide)
    * [Git Commit Message Guidelines](#git-commit-message-guidelines)
    * [Guide for design posts](#guide-for-design-posts)
    * [Guide for members list](#guide-for-members-list)

## Contribution Guide

To make yourselves familiar with the [static site generator](https://en.wikipedia.org/wiki/Static_site_generator),
while working with layouts, we recommend going through the [documentation](https://anna-docs.netlify.app/docs).

Posts can be written normally in accordance to the CommonMark markdown specifications found [here](http://commonmark.org)

> A guide to install and use "anna", the custom static-site generator used to build this site, can be found [here](https://anna-docs.netlify.app/quick-start).

Before getting started, you need git ssh setup on your system. You will need to generate an ssh key which you can find [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) by following the necessary steps mentioned. After this you will need to [add the new ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to your github account. To test the setup, run the following command

```sh
ssh -T git@github.com
```

You will be given a prompt similar to what is given below

```
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> Are you sure you want to continue connecting (yes/no)? yes
```

This message below confirms the setup
```
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

---

### Git Commit Message Guidelines

Refer to the following [article](https://www.conventionalcommits.org/en/v1.0.0/) regarding writing conventional git commit messages
to make it easier for the maintainers to understand the PRs and progress.

---

### Guide for design posts

> This is only for HSP Members

-   Any small writeup on the inspiration, thought process behind the designs would be appreciated
-   Design posts can be added under `site/content/design/EVENT_NAME.md` and must follow the following frontmatter template

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

-   Inorder to include _grid based images_ similar to what is on display in the `/gallery` page of the site,
    place all images inside a div in the markdown file as follows

```md
// snip of a blog

<div class="img-grid">

![alt text for image - necessary](path_to_image)

![alt text for image - necessary](path_to_image)

![alt text for image - necessary](path_to_image)

</div>
```

> Do keep in mind the mandatory spaces between each of the image lines!

---

### Guide for members list

> This is only for HSP Members

To add your name to the list of members section of the site, follow these steps

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

`SocialsName` could either be `Linkedin`, `Github`, `Instagram`, `X`, etc. If you would like to link any other social account,
add the key name, and also save an svg of the icon to that social provider at `/static/icons/SocialsName.svg`,
otherwise there wouldn't be any icons available to display.
