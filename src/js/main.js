/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @iconUniformNames
 * @documentationApi
 * @objectifyEventListeners
 * @minimizeProperties
 * @parentElementSelector
 * @distinctEventListeners
 * @propertiesElemUnderscore
 * @propertyNamingConventions
 * @propertify
 * @methodNamingConventions
 */




/**
 * 
 * @param {Object}                  schema
 * @param {HTMLElement|CSSRule}     schema.parent
 * @param {SVGElement}              schema.icon
 * @param {URL}                     [schema.href]
 * @param {String}                  [schema.title]
 */
function DynamicIcon( schema ) {

    /**
     * 
     * @property
     * @private
     */
    this._spanElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._iconSrc = null;

    /**
     * 
     * @property
     * @private
     */
    this._parentElem = null;




    if ( typeof schema.parent === 'object' ) {

        this._parentElem = schema.parent;

    } else if ( typeof schema.parent === 'string' ) {

        this._parentElem = document.querySelector( schema.parent );

    }

    this._iconSrc = schema.icon;

    if ( schema.hasOwnProperty( 'href' ) === true ) {

        this._parentElem.setAttribute( 'href', schema.href );

    }

    if ( schema.hasOwnProperty( 'title' ) === true ) {

        this._parentElem.setAttribute( 'title', schema.title );

    }

    var fragment = document.createDocumentFragment();

    this._spanElem = document.createElement( 'SPAN' );
    this._spanElem.innerHTML = this._iconSrc;
    fragment.appendChild( this._spanElem );

    this._parentElem.appendChild( fragment );

};

/**
 * 
 * @param {SVGElement} newIcon 
 */
DynamicIcon.prototype.setIcon = function( newIcon ) {

    var iconToChange = newIcon;

    this._spanElem.style.opacity = 0;

    setTimeout( function(){

        this._spanElem.innerHTML = newIcon;

        this._spanElem.style.opacity = 1;

    }.bind( this ), 150 );

};

/**
 * 
 * @param {URL} newImage 
 */
DynamicIcon.prototype.setImage = function( newImage ) {

    var imgElem = new Image();
    imgElem.src = newImage;
    this._parentElem.appendChild( imgElem );

};

/**
 * 
 */
DynamicIcon.prototype.reset = function() {

    this._spanElem.style.opacity = 0;

    setTimeout( function(){

        this._spanElem.innerHTML = this._iconSrc;

        this._spanElem.style.opacity = 1;

    }.bind( this ), 150 );

};