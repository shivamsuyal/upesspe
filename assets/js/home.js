new Splide( '.splide',{
    type: 'loop',
    perPage: 4,
    perMove: 1,
    autoplay:true,
    // pauseOnHover:true,
    lazyLoad:'nearby',
    arrows:false,
    pagination:false,
    interval:3000,
    speed:1500
} ).mount();

