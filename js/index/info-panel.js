/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.artpieceEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      karigurashiButton: {
        title: 'SOUTH BEACH',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'When most people think about living in Miami, what they’re thinking about is South Beach: beautiful people on an even more beautiful beach, an insane party scene, celebrities, and art deco architecture. If what you’re looking for is to extend spring break as long as possible, South Beach might be the perfect place for you. In all seriousness, this area is gorgeous and there’s always a party going on.'
      },
      kazetachinuButton: {
        title: 'MIAMI',
        imgEl: document.querySelector('#carpet'),
        description: "This is an outstanding example of Palamedesz´s merry company scenes paited during his years in Delft. This example must date from about 1633, the date on a very similar scene in the Rijksmuseum, Amsterdam. Palamedesz´paintings are easily recognized; they mostly depict merry companies eating, drinking and playing music. The subject was very popular in Holland at the time, perhaps because of its ambiguity."
      },
      ponyoButton: {
        title: 'A Merry Company',
        imgEl: document.querySelector('#walldeco'),
        description: "This is an outstanding example of Palamedesz´s merry company scenes paited during his years in Delft. This example must date from about 1633, the date on a very similar scene in the Rijksmuseum, Amsterdam. Palamedesz´paintings are easily recognized; they mostly depict merry companies eating, drinking and playing music. The subject was very popular in Holland at the time, perhaps because of its ambiguity."
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    // this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(0.05, 0.05, 0.05);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.artpieceEl) { this.artpieceEl.object3D.visible = false; }
    this.artpieceEl = movieInfo.imgEl;
    this.artpieceEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    // this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});