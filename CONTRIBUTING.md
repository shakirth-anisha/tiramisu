# Contribution to tiramisu

*table of contents*

* [Guide to Contribution](#guide-to-contribution)
    * [Git Commit Message Guidelines]()
* [Installation Guidelines](#installation-guidelines)
    * [Using the pre-built binaries](#using-the-pre-built-binaries)
    * [Installation from Source](#installation-from-source)
    * [Installation using Homebrew](#installation-using-homebrew)

## Guide to Contribution

To make yourselves familiar with the [static site generator](https://en.wikipedia.org/wiki/Static_site_generator), while working with layouts, we recommend you to go through the in-detail [documentation](https://anna-docs.netlify.app/docs). The installation instructions can be found below

### Git Commit Message Guidelines

Refer to the following [article](https://www.conventionalcommits.org/en/v1.0.0/) regarding writing conventional git commit messages, to make it easier for the maintainers to understand the PR's and progress.

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
