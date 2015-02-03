var app = angular.module('app', ['wu.masonry']);

app.controller('ItemsController',

  function ItemsController($scope) {
    // $scope.types = ['office', 'music', 'apartment'];
    $scope.types = ['Breakfasts', 'Entrees', 'Deserts', 'Snacks', 'Blog'];

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
    }, {
        name: 'Personal Blog',
      link: 'blog.html',
      type: 'Blog',
      img: 'images/blog-icon.png', 
    }, {

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
