(function(){
    let services = angular.module('dawyari.services');
    services.factory('VideoService', ['$location', function($location){
        function navigateToAddEntry(){
            $location.path('/add-video');
        }

        return{
            navigateToAddEntry:navigateToAddEntry
        }
    }]);
})(window.angular);