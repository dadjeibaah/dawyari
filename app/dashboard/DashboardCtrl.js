(function () {
    let appDashboard = angular.module('dawyari.dashboard');
    appDashboard.controller('DashboardCtrl', ['$scope', 'VideoService', function ($scope, VideoService) {
        $scope.addVideoDiary = function () {
            VideoService.navigateToAddEntry();
        };
    }]);
})(window.angular);