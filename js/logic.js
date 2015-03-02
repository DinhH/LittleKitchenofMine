var app = angular.module('app', ['wu.masonry']);

app.controller('ItemsController',

  function ItemsController($scope) {
    // $scope.types = ['office', 'music', 'apartment'];
    $scope.types = ['Breakfasts', 'Entrees', 'Deserts', 'Snacks', /*'Blog'*/];

    $scope.items = [{
       name: 'Spaghetti Aglio Olio',
      //price: 4,
      rating: '★★★★★',
      link: 'http://www.yummygraphy.com/2014/12/spaghetti-aglio-olio.html/',
      type: 'Entrees',
      img: 'images/pasta3.jpg',
      //bought: true
    }, {

      name: 'Roasted Red Pepper Pasta',
      //price: 4,
      rating: '★★★★★',
      link: 'http://confessionsofapickyeater.com/2014/10/roasted-red-pepper-pasta/',
      type: 'Entrees',
      img: 'images/pasta2.jpg',
      //bought: true
    }, {
      name: 'One Pot Cacio e Pepe',
      //price: 4,
      rating: '★★★★',
      link: 'http://sweetsaltytart.com/2014/11/the-lazy-cooks-guide-to-one-pot-pasta-featuring-cacio-e-pepe/',
      type: 'Entrees',
      img: 'images/pasta1.jpg',
      //bought: true
    }, /*{
        name: 'Personal Blog',
      link: 'blog.html',
      type: 'Blog',
      img: 'images/blog-icon.png', 
    },*/ {

      name: 'Vegan Granola-Pancakes',
      //price: 4,
      rating: '★★★★★',
      link: 'http://www.connoisseurusveg.com/2014/12/vegan-granola-pancakes.html',
      type: 'Breakfasts',
      img: 'images/granola-pancakes-featured.jpg',
      //bought: true
    }, {
      name: 'Pandan Chiffon',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://kirbiecravings.com/2010/06/pandan-chiffon-cake-revisited.html',
      type: 'Snacks',
      img: 'images/pandan-chiffon.JPG',
      //bought: true
    }, {
      name: 'Hasselback Potatoes',
      rating: '★★★★',
      //price: 23.99,
      link: 'http://scarlettabakes.com/baby-ancho-hasselback-potatoes-a-giveaway/',
      type: 'Entrees',
      img: 'images/HP.jpg',
      //bought: true
    },  {
      name: 'Sticky Rice With Mango',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://www.chasingsomebluesky.blogspot.com/2013/02/thai-sticky-rice-with-mango.html',
      type: 'Deserts',
      img: 'images/rice+mango.jpg',
      //bought: true
    },  {
      name: 'Cittrus Panna Cotta',
      rating: '★★★★',
      //price: 23.99,
      link: 'http://www.greedygourmet.com/recipes-by-cooking-times/30-mins-or-less/citrus-panna-cotta/',
      type: 'Deserts',
      img: 'images/panacota.jpg',
      //bought: true
    },  {
      name: 'Baked Kale Chips',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://www.lemonandmocha.com/2014/01/21/crispy-baked-kale-chips/',
      type: 'Snacks',
      img: 'images/kale.jpg',
      //bought: true
    },  {
      name: 'Vanilla Bean Cupcakes',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://www.foodbymars.com/home/2015/pisces-birthday-post-recipe-vanilla-bean-cupcakes-with-pistachio-buttercream',
      type: 'Snacks',
      img: 'images/cupcakes.jpeg',
      //bought: true
    },  {
      name: 'Coliflower Mashed Potatoes',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://www.greatfoodlifestyle.com/mashed-potatoes-and-cauliflower-low-fat-low-glycemic/',
      type: 'Entrees',
      img: 'images/Cauli-Potatoes.jpg',
      //bought: true
    },  {
      name: 'FERRERO ROCHER COOKIES',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://portandfin.com/ferrero-rocher-cookies/',
      type: 'Snacks',
      img: 'images/Cookies4.jpg',
      //bought: true
    },  {
      name: 'Crepes with Meyer Lemon Curd and Berries',
      rating: '★★★★',
      //price: 23.99,
      link: 'http://saltandwind.com/recipes/162-crepes-with-meyer-lemon-curd-and-berries-recipe',
      type: 'Snacks',
      img: 'images/crepes.jpg',
      //bought: true
    },  {
      name: 'Vegetarian Breakfast Sandwich',
      rating: '★★★★',
      //price: 23.99,
      link: 'http://www.abalanceoftastes.com/blog/2015/1/4/vegetarian-breakfast-sandwich',
      type: 'Entrees',
      img: 'images/veggie.jpeg',
      //bought: true
    },   {
      name: 'Mushroom Pate',
      rating: '★★★',
      //price: 23.99,
      link: 'http://myvega.com/vega-life/recipe-center/mushroom-pate/',
      type: 'Snacks',
      img: 'images/pate.jpg',
      //bought: true
    },  {
      name: 'Braided Bread with Strawberry and Cream Cheese Filling',
      rating: '★★★★★',
      //price: 23.99,
      link: 'http://ohsweetday.com/2015/02/braided-bread-with-strawberry-and-cream-cheese-filling.html',
      type: 'Snacks',
      img: 'images/bread.jpg',
      //bought: true
    },


    
    ];
  });

$(function () {
  $('#showing').mixItUp({
     animation: {
      animateResizeContainer: false,
      effects: 'fade rotateX(-45deg) translateY(-10%)'
    }
  });
});

$(function () { 
  $("#pop").popover();  
});  

