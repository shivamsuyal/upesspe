new Splide( '.splide',{
    type: 'loop',
    perPage: 5,
    perMove: 1,
    autoplay:true,
    // pauseOnHover:true,
    lazyLoad:'nearby',
    arrows:false,
    pagination:false,
    interval:3000,
    speed:1500,
    autoHeight:true,
    gap: '1em',
    breakpoints: {
		1152: {
			perPage: 3,
		},
		886: {
			perPage: 2,
		},
  }
} ).mount();


new FlipDown(1710441000,{
  theme:"light"
}).start();

