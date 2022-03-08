# Lowpoly Palette Cover

[![npm version](https://img.shields.io/npm/v/lowpoly-palette-cover.svg?style=flat-square)](https://www.npmjs.com/package/lowpoly-palette-cover)
[![Downloads/week](https://img.shields.io/npm/dw/lowpoly-palette-cover.svg)](https://npmjs.org/package/lowpoly-palette-cover)
[![License](https://img.shields.io/npm/l/lowpoly-palette-cover.svg)](https://github.com/israelroldan/lowpoly-palette-cover/blob/master/package.json)
[![build status](https://img.shields.io/travis/israelroldan/lowpoly-palette-cover/master.svg?style=flat-square)](https://travis-ci.org/israelroldan/lowpoly-palette-cover)
[![coverage](https://img.shields.io/codecov/c/github/israelroldan/lowpoly-palette-cover.svg?style=flat-square)](https://codecov.io/github/israelroldan/lowpoly-palette-cover)

**Generate a low-poly background image from another image's color palette.**



---

## Motivation

Low-poly images are a nice way to inject some vibrant life to an otherwise boring design. If you want to generate them dynamically there are multiple ways to do it but none that can take an image and generate a low-poly background based on the image's color palette, until now!

## Usage

### Installation

```
yarn add lowpoly-palette-cover
```

### Usage

```js
import LowpolyCover from 'lowpoly-palette-cover'

const opts = {
  width: 500,
  height: 500
};

// Get image as data URI
LowpolyCover.from('/path/to/image', opts).asSVG().then((svg) => { /* do something with svg */ })
LowpolyCover.from('/path/to/image', opts).asPNG().then((png) => { /* do something with png */ })

// Get the canvas element directly
LowpolyCover.from('/path/to/image').asCanvas().then((canvas) => { /* do something with canvas */ })

// Obtain image palette (output of node-vibrant)
LowpolyCover.from('/path/to/image').getPalette().then((palette) => { /* do something with palette */ })
```
