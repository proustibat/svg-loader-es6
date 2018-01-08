const defaultOptions = {
    containerId: 'loader-container',
    svgId: 'loader',
    fill: '#1f1f1f',
    size: 15,
    radius: 2,
    duration: 1000,
    maxOpacity: 0.75,
    minOpacity: 0.25,
    margin: 2,
    nbRects: 3
};

export class SVGLoader {
    constructor( options = defaultOptions ) {

        // settings
        this.settings = Object.assign( {}, defaultOptions, options );
        this.settings.width = ( this.settings.size * this.settings.nbRects ) + ( ( this.settings.nbRects - 1 ) * this.settings.margin );

        // XML namespace for SVG
        this.xmlns = 'http://www.w3.org/2000/svg';

        const svgContainer = document.getElementById( this.settings.containerId );

        this.svgEl = this.createSVG();
        svgContainer.appendChild( this.svgEl );

        const group = this.createRectangles();
        this.svgEl.appendChild( group );
    }

    createSVG() {
        const el = document.createElementNS( this.xmlns, 'svg' );
        el.setAttributeNS( null, 'id', this.settings.svgId );
        el.setAttributeNS( null, 'viewBox', `0 0 ${ this.settings.width } ${ this.settings.size }` );
        el.setAttributeNS( null, 'width', this.settings.width );
        el.setAttributeNS( null, 'height', this.settings.size );
        return el;
    }

    createRectangles() {
        const group = document.createElementNS( this.xmlns, 'g' );

        for ( let i = 0; i < this.settings.nbRects; i++ ) {
            const rect = document.createElementNS( this.xmlns, 'rect' );
            rect.setAttributeNS( null, 'id', `rect-${ i }` );
            rect.setAttributeNS( null, 'width', this.settings.size );
            rect.setAttributeNS( null, 'height', this.settings.size );
            rect.setAttributeNS( null, 'x', ( this.settings.size * i ) + ( i * this.settings.margin ) );
            rect.setAttributeNS( null, 'y', 0 );
            rect.setAttributeNS( null, 'rx', this.settings.radius );
            rect.setAttributeNS( null, 'ry', this.settings.radius );
            rect.setAttributeNS( null, 'fill', this.settings.fill );
            rect.setAttributeNS( null, 'fill-opacity', this.settings.maxOpacity );

            const animate = document.createElementNS( this.xmlns, 'animate' );
            animate.setAttribute( 'attributeName', 'opacity' );
            animate.setAttribute( 'values', `1;'+${ this.settings.minOpacity }+';1` );

            if ( i === 0 ) {
                animate.setAttribute( 'begin', `${ 0 }ms` );
            }
            else {
                animate.setAttribute( 'begin', `${ this.settings.duration/( ( this.settings.nbRects + 1 ) - i ) }ms` );
            }

            animate.setAttribute( 'dur', `${ this.settings.duration }ms` );
            animate.setAttribute( 'repeatCount', 'indefinite' );

            rect.appendChild( animate );
            group.appendChild( rect );
        }

        return group;
    }

    toggle() {
        if ( window.getComputedStyle( this.svgEl ).display === 'none' ) {
            this.show();
            return false;
        }
        this.hide()
    }

    show() {
        this.svgEl.style.display = 'block';
    }

    hide() {
        this.svgEl.style.display = 'none';
    }

    destroy() {
        const svgContainer = document.getElementById( this.settings.containerId );
        svgContainer.querySelector( 'svg' ).remove();
    }
}
