let data = [
  {author: "Joe",
  body: "body text1",
  photo_url: "http://images.digopaul.com/wp-content/uploads/related_images/2015/09/09/grumble_2.jpg"
},
{author: "Jeff",
body: "body text2",
photo_url: "http://images.digopaul.com/wp-content/uploads/related_images/2015/09/09/grumble_2.jpg"
}
]

"use strict";

// (function(){
  angular
  .module("wdinstagram", ["ui.router"])
  .config(["$stateProvider", RouterFunction])
  // .factory("EntryFactory", ["$resource", EntryFactoryFunction])
  .controller("EntryIndexController", [ EntryIndexControllerFunction])
  .controller("EntryShowController", ["$state","$stateParams", EntryShowControllerFunction])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("entryIndex", {
      url: "/entries",
      templateUrl: "js/ng-views/index.html",
      controller: "EntryIndexController",
      controllerAs: "vm"
    })
    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "EntryShowController",
      controllerAs: "vm"
    })
  }

  // function EntryFactoryFunction($resource){
  //   return $resource()
  // }

  function EntryIndexControllerFunction(){
    this.entries = data;
  }

  function EntryShowControllerFunction($state, $stateParams){
    this.entry = data.$stateParams.id
  }

// })();







// "use strict";
//
// (function(){
//   angular
//     .module("wdinstagram", [
//       "ui.router"
//     ])
//     .config([
//       "$stateProvider",
//       RouterFunction
//     ])
//     .controller("EntryIndexController", [
//       EntryIndexControllerFunction
//     ])
//
//
//     function RouterFunction($stateProvider){
//       $stateProvider
//       .state("entryIndex", {
//         url: "/entries",
//         templateUrl: "js/ng-views/index.html",
//         controller: "EntryIndexController",
//         controllerAs: "vm"
//       })
//       .state("entryShow", {
//         url: "/entries/:id",
//         templateUrl: "js/ng-views/show.html",
//         controller: "EntryShowContoller",
//         controllerAs: "vm"
//       })
//     }
//
//
//
// function EntryIndexControllerFunction(){
//   this.entries = data;
// }
// })
