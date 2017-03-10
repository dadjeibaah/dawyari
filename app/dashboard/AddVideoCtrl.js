(function(){
    let appDashboard = angular.module('dawyari.dashboard');
    appDashboard.controller('AddVideoCtrl', ['$scope', 'VideoService', function ($scope, VideoService) {
        $scope.fileUpload = {
            url: '/posts/1/attachments'
        };
    }]);
})(window.angular);