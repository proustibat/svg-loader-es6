# SVG Loader ES6 <a href='https://github.com/proustibat/svg-loader-es6/blob/master/LICENSE.md'><img src='https://img.shields.io/github/license/proustibat/svg-loader-es6.svg' alt='GitHub license'/></a>

## A class to create customizable SVG loader with Vanilla ES6.




| [![NPM](https://nodei.co/npm/svg-loader-es6.png?compact=true)](https://www.npmjs.com/package/svg-loader-es6) </br> [![GitHub package version](https://img.shields.io/github/package-json/v/proustibat/svg-loader-es6.svg)]() [![npm](https://img.shields.io/npm/v/svg-loader-es6.svg)](https://www.npmjs.com/package/svg-loader-es6) [![Npm downloads](https://img.shields.io/npm/dt/svg-loader-es6.svg)](https://www.npmjs.com/package/svg-loader-es6) | [![Build Status](https://travis-ci.org/proustibat/svg-loader-es6.svg?branch=master)](https://travis-ci.org/proustibat/svg-loader-es6) </br> [![Sonar quality gate](https://sonarcloud.io/api/badges/gate?key=prstbt.svg-loader-es6)](https://sonarcloud.io/dashboard?id=.svg-loader-es6) </br> [![Code Climate](https://codeclimate.com/github/proustibat/svg-loader-es6/badges/gpa.svg)](https://codeclimate.com/github/proustibat/svg-loader-es6) | [![Greenkeeper badge](https://badges.greenkeeper.io/proustibat/svg-loader-es6.svg)](https://greenkeeper.io/) </br>[![Dependencies Status](https://david-dm.org/proustibat/stats-text/status.svg)](https://david-dm.org/proustibat/stats-text) </br>[![DevDependencies Status](https://david-dm.org/proustibat/stats-text/dev-status.svg)](https://david-dm.org/proustibat/stats-text?type=dev) |
| --- | :--- | :---- |

[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)](https://github.com/proustibat/svg-loader-es6/commits/master) </br> [![GitHub last commit](https://img.shields.io/github/last-commit/proustibat/svg-loader-es6.svg)](https://github.com/proustibat/svg-loader-es6/commits/master) | [![CodeClimate issues](https://img.shields.io/codeclimate/issues/github/proustibat/svg-loader-es6.svg)](https://codeclimate.com/github/proustibat/svg-loader-es6/issues) <br/> [![Open issues](https://sonarcloud.io/api/badges/measure?key=prstbt.svg-loader-es6&metric=open_issues)](https://sonarcloud.io/component_measures?id=prstbt.svg-loader-es6&metric=open_issues) | [![Complexity](https://sonarcloud.io/api/badges/measure?key=prstbt.svg-loader-es6&metric=complexity)](https://sonarcloud.io/component_measures?id=prstbt.svg-loader-es6&metric=complexity) <br/> [![Cognitive Complexity](https://sonarcloud.io/api/badges/measure?key=prstbt.svg-loader-es6&metric=cognitive_complexity)](https://sonarcloud.io/component_measures?id=prstbt.svg-loader-es6&metric=cognitive_complexity) | [![Bugs](https://sonarcloud.io/api/badges/measure?key=prstbt.svg-loader-es6&metric=bugs)](https://sonarcloud.io/component_measures?id=prstbt.svg-loader-es6&metric=bugs) <br/> [![Code smells](https://sonarcloud.io/api/badges/measure?key=prstbt.svg-loader-es6&metric=code_smells)](https://sonarcloud.io/component_measures?id=prstbt.svg-loader-es6&metric=code_smells) |
| :--- | :--- | :--- | :---- |

---------------------

## Installation
```sh
# Yarn
yarn add --exact svg-loader-es6

# NPM
npm install --save --save-exact svg-loader-es6

```

## Usage

Somewhere in your document:

```html
<div id="your-container-id" />
```
Then in your javascript :
- Import:
```js
import { SVGLoader } from 'svg-loader-es6';
```
- Instantiate:
```js
new SVGLoader( {
  containerId: 'your-container-id'
} )
```

## Settings
The constructor can accept more keys in the object as parameters.

Option | Type | Default | Description
------ | ---- | ------- | -----------
containerId | String | "loader-container" | **Required** - The id of the element that will contain the SVG element
svgId | String | "loader" | The id given to the created SVG element
nbRects | int   | 3 | Number of rectangle shapes in the SVG
margin | int   | 2 | Margin between the shapes (in px)
fill | String (Hex, RGB, RGBA)   | "#000000" | Color of the shapes in the SVG
size | int   | 15 | Height and width of each shape (rectangle) of the SVG (in px)
radius | int   | 2 | Value of the border radius of each rectangle shape of the SVG (in px)
minOpacity | Number   | 0.25 | Opacity to give to each shapes at the begin of the animation
maxOpacity | Number   | 0.75 | Opacity to give to each shapes at the end of the animation
duration | int   | 1000 | Duration of the animation of each shape from minOpacity to maxOpacity (in ms)


## Properties of an instance

Property | Type  | Description
-------- | ----  | -----------
settings | Object | The current options of the SVGLoader instance (read-only)
defaultOptions | Object | The default options for settings if there's no settings given to the constructor. This is a static method, so call it as follows: `SVGLoader.defaultProperties`


## Methods 

Property | Parameters | Default | Description
-------- | ---------- | ------- | -----------
toggle | - | - | Hide or show the SVG Element
show | - | - | Show the SVG Element
hide | - | - | Hide the SVG Element
destroy | - | - | Remove the SVG element from DOM and delete all properties or listeners


## Demo
### [A complete demo is available here](https://proustibat.github.io/svg-loader-es6-example/)
<img src="https://j.gifs.com/zK9948.gif" alt="Live Demo Examples" width="500" />

#### [The source code of the demo is here](https://github.com/proustibat/svg-loader-es6-example)

### [Use the settings generator here](https://proustibat.github.io/svg-loader-es6-example/generator.html)
<img src="https://j.gifs.com/qYDD8r.gif" alt="Settings generator gif" width="500" />

## Contributing

<table>
  <tr>
    <td>
      <ul>
        <li>Issue Tracker: <a href="https://github.com/proustibat/svg-loader-es6/issues" alt="">https://github.com/proustibat/svg-loader-es6/issues</a></li>
        <li>Source Code: <a href="https://github.com/proustibat/svg-loader-es6">https://github.com/proustibat/svg-loader-es6</a></li>
        <li>Pull Requests: <a href="https://github.com/proustibat/svg-loader-es6/pulls" alt="">https://github.com/proustibat/svg-loader-es6/pulls</a></li>
      </ul>
    </td>
    <td><a href="https://github.com/standard/standard"><img src="https://cdn.rawgit.com/standard/standard/master/badge.svg" alt="JavaScript Style Guide" /></a></td>
  </tr>  
</table>


[The dashboard with CI and code quality indicators](https://proustibat.github.io/svg-loader-es6-example/dashboard.html)
