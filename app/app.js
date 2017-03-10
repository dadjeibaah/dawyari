(function () {
    let app = angular.module('dawyari', [
        'ngRoute',
        'ngResource',
        'dawyari.dashboard',
        'angular-plupload']);
    var services = angular.module('dawyari.services', []);
    var dashboard = angular.module('dawyari.dashboard', ['dawyari.services']);


    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'app/dashboard/dashboard.html'})
            .when('/add-video', {templateUrl: 'app/dashboard/add-video.html'});
    });
})(window.angular);