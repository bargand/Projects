anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(_el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
el()