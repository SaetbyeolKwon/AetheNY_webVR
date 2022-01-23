/* global AFRAME */
AFRAME.registerComponent('3d-info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    // var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.artpieceEl;
    this.artTitleEl = document.querySelector('#artTitle');
    this.artDescriptionEl = document.querySelector('#artDescription');

    this.movieInfo = {
      merryFamilyButton: {
        title: 'The Merry Family',
        imgEl: document.querySelector('#dish'),
        description: 'The household depicted here is a cheerful madhouse. Old and young are enjoying themselves to the hilt: the mother and grand - mother have broken into song, the children are making music or smoking, while the father raises his glass. The younger children follow his example.'
      },
      musicalContestButton: {
        title: 'The Musical Contest between Apollo and Marsyas',
        imgEl: document.querySelector('#carpet'),
        description: "The Musical Contest depicts the fatal challenge on Apollo made by the satyr Marsyas as described in Ovid´s Metamorphoses. Marsyas was, despite playing his flute very skilfully, outshined by Apollo who, furious at the very attempt to challenge the God of music, had Marsyas skinned alive."
      },
      merryCompanyButton: {
        title: 'A Merry Company',
        imgEl: document.querySelector('#walldeco'),
        description: "This is an outstanding example of Palamedesz´s merry company scenes paited during his years in Delft. This example must date from about 1633, the date on a very similar scene in the Rijksmuseum, Amsterdam. Palamedesz´paintings are easily recognized; they mostly depict merry companies eating, drinking and playing music."
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
    // fadeBackgroundEl.object3D.renderOrder = 9;
    // fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    // this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(0.05, 0.05, 0.05);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    // this.fadeBackgroundEl.object3D.visible = true;

    if (this.artpieceEl) { this.artpieceEl.object3D.visible = false; }
    this.artpieceEl = movieInfo.imgEl;
    this.artpieceEl.object3D.visible = true;

    this.artTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.artDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    // this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    // this.fadeBackgroundEl.object3D.visible = false;
  }
});