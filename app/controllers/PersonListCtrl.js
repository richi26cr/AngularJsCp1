/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 17/01/14
 * Time: 09:26 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonListCtrl',['$scope',
    function($scope) {
        $scope.persons = [
            {
                "name": "Richard",
                "lastName": "Leiva Navarro",
                "direction": "Quebradilla, Costa Rica",
                "pictureUrl": "pic/img1.jpg",
                "age": 27
            },{
                "name": "Roy",
                "lastName": "Bonilla Arias",
                "direction": "Cartago, Costa Rica",
                "pictureUrl": "pic/img2.jpg",
                "age": 30
            },{
                "name": "Luis",
                "lastName": "Castillo Porras",
                "direction": "Desamparados, Costa Rica",
                "pictureUrl": "pic/img3.jpg",
                "age": 25
            },{
                "name": "Abraham",
                "lastName": "Wind",
                "direction": "Heredia, Costa Rica",
                "pictureUrl": "pic/img4.jpg",
                "age": 31
            },{
                "name": "Javier",
                "lastName": "Li Fong",
                "direction": "Guanacaste, Costa Rica",
                "pictureUrl": "pic/img5.jpg",
                "age": 23
            }
        ];
    }
]);