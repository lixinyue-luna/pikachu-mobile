'use strict';

angular.module('starter.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")

        .service('recipeFactory', ['$resource', 'baseURL', function($resource,baseURL) {
                this.getRecipe = function(){
                    return $resource(baseURL+"recipe/:id",null,  {'update':{method:'PUT' }});
                };
        }])

        .factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            var favFac = {};
            var favorites = []; // save IDs

            favFac.addToFavorites = function (index) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index)
                        return;
                }
                favorites.push({id: index});
            };

            favFac.deleteFromFavorites = function (index) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index) {
                        favorites.splice(i, 1);
                    }
                }
            };

            favFac.getFavorites = function () {
                return favorites;
            };

            return favFac;
        }])

        .factory('shoppingFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            var shopFac = {};
            var shoppinglist = [];

            shopFac.addToShoppinglist = function (index) {
                for (var i = 0; i < shoppinglist.length; i++) {
                    if (shoppinglist[i].id == index)
                        return;
                }
                shoppinglist.push({id: index});
            };

            shopFac.deleteFromShoppinglist = function (index) {
                for (var i = 0; i < shoppinglist.length; i++) {
                    if (shoppinglist[i].id == index) {
                        shoppinglist.splice(i, 1);
                    }
                }
            };

            shopFac.getShoppinglist = function () {
                return Shoppinglist;
            };

            return shopFac;

        }])

;
