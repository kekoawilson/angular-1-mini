
angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = [ 'Kyle', 'Ben', 'John', 'Riley', 'Keegan']
    $scope.addFriend = function() {
        $scope.friends.push($scope.newFriend)
        $scope.newFriend = ''
    }
})