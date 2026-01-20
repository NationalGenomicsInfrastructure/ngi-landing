![ngi-firn](https://raw.githubusercontent.com/NationalGenomicsInfrastructure/ngi-firn/refs/heads/main/docs/images/repoheader.svg)

# NGI landing page

Demo repository with a prototype for a new NGI website. It uses [Nuxt](https://nuxt.com/) with [Nuxt Content](https://content.nuxt.com/), [Nuxt UI](https://ui.nuxt.com) and [Nuxt Studio](https://studio.nuxt.com).

The content of the website is stored as MDX in `content`. Assets such as images are located in `public` and tracked with [Git LFS](https://git-lfs.com) for better efficiency.

[![License: MIT](https://img.shields.io/badge/License-MIT-0056b3.svg)](https://opensource.org/licenses/MIT)

## Development

### Modern JavaScript Setup

If you are unfamiliar with the setup for a web application using JavaScript, the introduction to [Modern JavaScript explained for dinosaurs](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html) is highly recommended, not only for dinosaurs but also for beginners. 

This project uses `pnpm` as the [package manager](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html#using-a-javascript-package-manager-(npm)). Since mixing package managers can cause conflicts in the `package.json`, it is recommended to stick with `pnpm` when working on **Firn**. `pnpm` will help you install, update, and manage the dependencies (external libraries and tools) that our project needs.

### Switch to Node version 24

To use Node version 24, using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) is recommended, which allows you to easily install and switch between different Node.js versions. If you don't have nvm installed, you can install it [as described](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Then you can switch to Node version 24 with:

```bash
nvm use 24
```

### Set up pnpm

First, install pnpm if you haven't already:

```bash
# Using npm to install pnpm globally
npm install -g pnpm

# On macOS, you can also use Homebrew
brew install pnpm
```

Then install the project dependencies:

```bash
pnpm install
```

### Set up Git LFS

Git LFS (Large File Storage) is an extension for Git that replaces large files such as images, videos, or other binaries with text pointers inside Git, while storing the file contents on a remote server. This helps keep the repository fast and clones lightweight.

To install Git LFS, run once:

```bash
# macOS
brew install git-lfs

# Linux
sudo apt-get install git-lfs

# Windows (using Chocolatey)
choco install git-lfs
```

This repository has already been configured to use Git LFS for common image files, the file `.gitattributes` specifies which file extensions are automatically replaced by pointers.

#### Track a new file type with Git LFS

Suppose we for the first time add a new file type with the fictional extension `*.ext` to our repository, we can add it to the Git LFS managed files with:

```bash
git lfs track "*.ext"
git add .gitattributes
git add <your large files>
git commit -m "Track .ext with Git LFS"
```

After setup, any files matching the patterns you specified (like `*.ext`) will be managed by Git LFS.

### Development Server

Start the development server:

```bash
pnpm dev
```

and view the preview on `http://localhost:3000`.