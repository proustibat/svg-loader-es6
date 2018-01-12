# SVG Loader ES6 
A class to create customizable SVG loader with Vanilla ES6.

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
}
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
### [A complete demo is available here](https://github.com/proustibat/svg-loader-es6-example)
<img src="https://j.gifs.com/zK9948.gif" alt="Live Demo Examples" width="500" />

#### [The source code of the demo is here](https://github.com/proustibat/svg-loader-es6-example)

### [Use the settings generator here](https://github.com/proustibat/svg-loader-es6-example/generator.html)
<img src="https://j.gifs.com/qYDD8r.gif" alt="Settings generator gif" width="500" />

## Contributing

- Issue Tracker: [https://github.com/proustibat/svg-loader-es6/issues](https://github.com/proustibat/svg-loader-es6/issues)
- Source Code: [https://github.com/proustibat/svg-loader-es6](https://github.com/proustibat/svg-loader-es6)
- Pull Requests: [https://github.com/proustibat/svg-loader-es6/pulls](https://github.com/proustibat/svg-loader-es6/pulls)
