/**====================================================
 *  Private properties
 =====================================================*/

// XML namespace for SVG
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
let svgEl = Symbol();
let settings = Symbol();

/**====================================================
 *  Private methods
 =====================================================*/
const say = Symbol();
const createSVG = Symbol();
const createRectangles = Symbol();

/**====================================================
 *  Main Class
 =====================================================*/
export class SVGLoader {
    /**
     * Constructor
     * @param options
     * @returns {boolean}
     */
    constructor( options = defaultOptions ) {
        // Settings
        this[ settings ] = Object.assign( {}, defaultOptions, options );
        this[ settings ].width = ( this[ settings ].size * this[ settings ].nbRects ) + ( ( this[ settings ].nbRects - 1 ) * this[ settings ].margin );

        // Container for the svg depending on given id
        const svgContainer = document.getElementById( this[ settings ].containerId );
        if( !svgContainer ) {
            console.warn( `Oops, there's no dom element with "${ this[ settings ].containerId }" id` )
            return false;
        }

        // Create the svg and append it to the container
        this[ svgEl ] = this[ createSVG ]();
        svgContainer.appendChild( this[ svgEl ] );

        // Create all shapes in a group appended in the svg
        const group = this[ createRectangles ]();
        this[ svgEl ].appendChild( group );
    }

    /**
     * Create SVG Element with size properties from settings
     * @returns {HTMLElement | SVGAElement | SVGCircleElement | SVGClipPathElement | SVGComponentTransferFunctionElement | SVGDefsElement | *}
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
     * Create reactangle shapes depending on settings
     * @returns {HTMLElement | SVGAElement | SVGCircleElement | SVGClipPathElement | SVGComponentTransferFunctionElement | SVGDefsElement | *}
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

            const animate = document.createElementNS( xmlns, 'animate' );
            animate.setAttribute( 'attributeName', 'opacity' );
            animate.setAttribute( 'values', `${ this[ settings ].maxOpacity };${ this[ settings ].minOpacity };${ this[ settings ].maxOpacity }` );

            if ( i === 0 ) {
                animate.setAttribute( 'begin', `${ 0 }ms` );
            }
            else {
                animate.setAttribute( 'begin', `${ this[ settings ].duration/( ( this[ settings ].nbRects + 1 ) - i ) }ms` );
            }

            animate.setAttribute( 'dur', `${ this[ settings ].duration }ms` );
            animate.setAttribute( 'repeatCount', 'indefinite' );

            rect.appendChild( animate );
            group.appendChild( rect );
        }

        return group;
    }


    /**
     * Hide or show the SVG Element
     */
    toggle() {
        window.getComputedStyle( this[ svgEl ] ).display === 'none' ? this.show() : this.hide();
    }

    /**
     * Show the SVG Element
     */
    show() {
        this[ svgEl ].style.display = 'block';
    }

    /**
     * Hide the SVG Element
     */
    hide() {
        this[ svgEl ].style.display = 'none';
    }

    /**
     * Remove the SVG element from DOM and delete all properties or listeners
     */
    destroy() {
        const svgContainer = document.getElementById( this[ settings ].containerId );
        svgContainer.querySelector( 'svg' ).remove();
        delete this[ settings ];
        delete this[ svgEl ];
    }

    /**====================================================
     *  getters
     =====================================================*/
    /**
     * The current settings of the instance
     * @returns {*}
     */
    get settings() {
        return this[ settings ];
    }

    /**
     * The default options for settings if there's no settings given to the constructor
     * @returns {{containerId: string, svgId: string, fill: string, size: number, radius: number, duration: number, maxOpacity: number, minOpacity: number, margin: number, nbRects: number}}
     */
    static get defaultOptions() {
        return defaultOptions;
    }
}
