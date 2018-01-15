const xmlns = 'http://www.w3.org/2000/svg';
const defaultOptions = {
    containerId: 'loader-container',
    svgId: 'loader',
    fill: '#000000',
    size: 15,
    radius: 2,
    duration: 1000,
    maxOpacity: 0.75,
    minOpacity: 0.25,
    margin: 2,
    nbRects: 3
};
let svgEl = Symbol( 'svgEl' );
let settings = Symbol( 'settings' );
const createSVG = Symbol( 'createSVG' );
const createRectangles = Symbol( 'createRectangles' );
const createAnimateElement = Symbol( 'createAnimateElement' );

/**
 * SVGLoader class
 * @example
 * let myLoader = new SVGLoader( {
 *     containerId: 'my-container-id'
 * } );
 */
export class SVGLoader {
    /**
     * SVGLoader constructor
     * @param {Object} [options] - the settings given to the instance
     * @param {string} [options.containerId='loader-container'] The id of the element that will contain the SVG element
     * @param {string} [options.svgId='loader'] The id given to the created SVG element
     * @param {int} [options.nbRects=3] Number of rectangle shapes in the SVG
     * @param {int} [options.margin=2] Margin between the shapes (in px)
     * @param {string} [options.fill='#000000'] Color of the shapes in the SVG
     * @param {int} [options.size=15] Height and width of each shape (rectangle) of the SVG (in px)
     * @param {int} [options.radius=2] Value of the border radius of each rectangle shape of the SVG (in px)
     * @param {Number} [options.minOpacity=0.25] Opacity to give to each shapes at the begin of the animation
     * @param {Number} [options.maxOpacity=0.75] Opacity to give to each shapes at the end of the animation
     * @param {int} [options.duration=1000] Duration of the animation of each shape from minOpacity to maxOpacity (in ms)
     */
    constructor ( options = defaultOptions ) {
        /**
         * Merge settings
         * @ignore
         */
        this[ settings ] = Object.assign( {}, defaultOptions, options );
        this[ settings ].width = ( this[ settings ].size * this[ settings ].nbRects ) + ( ( this[ settings ].nbRects - 1 ) * this[ settings ].margin );

        // Container for the svg depending on given id
        const svgContainer = document.getElementById( this[ settings ].containerId );
        if ( !svgContainer ) {
            console.warn( `Oops, there's no dom element with "${ this[ settings ].containerId }" id` );
            return;
        }

        /**
         * Create the svg and append it to the container
         * @ignore
         */
        this[ svgEl ] = this[ createSVG ]();
        svgContainer.appendChild( this[ svgEl ] );

        // Create all shapes in a group appended in the svg
        const group = this[ createRectangles ]();
        this[ svgEl ].appendChild( group );
    }

    /**
     * Create SVG Element with size properties from settings
     * @access private
     * @returns {SVGElement} the svg element created
     */
    [ createSVG ] () {
        const el = document.createElementNS( xmlns, 'svg' );
        el.setAttributeNS( null, 'id', this[ settings ].svgId );
        el.setAttributeNS( null, 'viewBox', `0 0 ${ this[ settings ].width } ${ this[ settings ].size }` );
        el.setAttributeNS( null, 'width', this[ settings ].width );
        el.setAttributeNS( null, 'height', this[ settings ].size );
        return el;
    }

    /**
     * Create rectangle shapes depending on settings
     * @access private
     * @returns {SVGGElement} the group element containing all rectangles (SVGRectElement)
     */
    [ createRectangles ] () {
        const group = document.createElementNS( xmlns, 'g' );

        for ( let i = 0; i < this[ settings ].nbRects; i++ ) {
            const rect = document.createElementNS( xmlns, 'rect' );
            rect.setAttributeNS( null, 'id', `rect-${ i }` );
            rect.setAttributeNS( null, 'width', this[ settings ].size );
            rect.setAttributeNS( null, 'height', this[ settings ].size );
            rect.setAttributeNS( null, 'x', ( this[ settings ].size * i ) + ( i * this[ settings ].margin ) );
            rect.setAttributeNS( null, 'y', 0 );
            rect.setAttributeNS( null, 'rx', this[ settings ].radius );
            rect.setAttributeNS( null, 'ry', this[ settings ].radius );
            rect.setAttributeNS( null, 'fill', this[ settings ].fill );
            rect.setAttributeNS( null, 'fill-opacity', this[ settings ].maxOpacity );

            const animate = this[ createAnimateElement ]( i );

            rect.appendChild( animate );
            group.appendChild( rect );
        }

        return group;
    }

    /**
     * Create Animate element for a rectangle shape of the svg
     * @access private
     * @param {int} index
     * @returns {SVGAnimateElement} the animate element of a rectangle
     */
    [ createAnimateElement ] ( index ) {
        const animate = document.createElementNS( xmlns, 'animate' );
        animate.setAttribute( 'attributeName', 'opacity' );
        animate.setAttribute( 'values', `${ this[ settings ].maxOpacity };${ this[ settings ].minOpacity };${ this[ settings ].maxOpacity }` );

        if ( index === 0 ) {
            animate.setAttribute( 'begin', `${ 0 }ms` );
        }
        else {
            animate.setAttribute( 'begin', `${ this[ settings ].duration / ( ( this[ settings ].nbRects + 1 ) - index ) }ms` );
        }
        animate.setAttribute( 'dur', `${ this[ settings ].duration }ms` );
        animate.setAttribute( 'repeatCount', 'indefinite' );

        return animate;
    }

    /**
     * Hide or show the SVG Element
     * @access public
     * @returns {SVGLoader} the current instance
     */
    toggle () {
        window.getComputedStyle( this[ svgEl ] ).display === 'none' ? this.show() : this.hide();
        return this;
    }

    /**
     * Show the SVG Element
     * @access public
     * @returns {SVGLoader} the current instance
     */
    show () {
        this[ svgEl ].style.display = 'block';
        return this;
    }

    /**
     * Hide the SVG Element
     * @access public
     * @returns {SVGLoader} the current instance
     */
    hide () {
        this[ svgEl ].style.display = 'none';
        return this;
    }

    /**
     * @access public
     * Remove the SVG element from DOM and delete all properties or listeners
     */
    destroy () {
        const svgContainer = document.getElementById( this[ settings ].containerId );
        svgContainer.querySelector( 'svg' ).remove();
        delete this[ settings ];
        delete this[ svgEl ];
    }

    /**
     * The current settings of the instance
     * @type {Object}
     * @property {string} containerId The id of the element that will contain the SVG element
     * @property {string} svgId The id given to the created SVG element
     * @property {int} nbRects Number of rectangle shapes in the SVG
     * @property {int} margin Margin between the shapes (in px)
     * @property {string} fill Color of the shapes in the SVG
     * @property {int} size Height and width of each shape (rectangle) of the SVG (in px)
     * @property {int} radius Value of the border radius of each rectangle shape of the SVG (in px)
     * @property {Number} minOpacity Opacity to give to each shapes at the begin of the animation
     * @property {Number} maxOpacity Opacity to give to each shapes at the end of the animation
     * @property {int} duration Duration of the animation of each shape from minOpacity to maxOpacity (in ms)
     */
    get settings () {
        return this[ settings ];
    }

    /**
     * The default options for settings if there's no settings given to the constructor
     * @type {Object}
     * @property {string} containerId The id of the element that will contain the SVG element
     * @property {string} svgId The id given to the created SVG element
     * @property {int} nbRects Number of rectangle shapes in the SVG
     * @property {int} margin Margin between the shapes (in px)
     * @property {string} fill Color of the shapes in the SVG
     * @property {int} size Height and width of each shape (rectangle) of the SVG (in px)
     * @property {int} radius Value of the border radius of each rectangle shape of the SVG (in px)
     * @property {Number} minOpacity Opacity to give to each shapes at the begin of the animation
     * @property {Number} maxOpacity Opacity to give to each shapes at the end of the animation
     * @property {int} duration Duration of the animation of each shape from minOpacity to maxOpacity (in ms)
     */
    static get defaultOptions () {
        return defaultOptions;
    }
}
