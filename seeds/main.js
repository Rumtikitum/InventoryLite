const anime = require('animejs')
anime ({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value:0, duration: 800}  
    ],
    rotate: {
    value: '1turn',
    },
    borderRadius: 50,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    delay: function() { return anime.random(0, 1000); },
    // autoplay: false,
    loop: true,
    elasticity: 200 
   
}); 
playPause.play();