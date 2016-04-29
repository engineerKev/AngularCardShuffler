cardShuffler.controller('shuffleController', ['$scope', function($scope){
    var randSeed = 51;
    var makeRange = function() {
        var numRange = [];
        
        for( var i = 0 ;i < 52; i++) numRange[i] = i + 1;
        
        return numRange;
    };
    
    var usedIndecies = [];
    
    $scope.range = makeRange();
    
    $scope.shuffleEm = function(){
        for(var i = 0; i < $scope.range.length; i++){
            var randomInd = Math.round(Math.random()*randSeed)+1;
            
            if(usedIndecies.length === 0) {
                usedIndecies.push(randomInd);
            }else {
                while(checkArrValue(usedIndecies, randomInd)){
                    randomInd = Math.round(Math.random()*randSeed)+1;
                }
                usedIndecies.push(randomInd);
            }
        }
        $scope.range = usedIndecies;
        usedIndecies = [];
        return;
    };
    
    var checkArrValue = function(arr, value){
        for(var i = 0; i < arr.length; i ++){
            if(arr[i] === value) {
                console.log("match found!")
                console.log("array value: "+arr[i])
                console.log("new value: "+value)
                return true;
            }
        }
        console.log("no matches!")
        return false;
    }
    
    $scope.newDeck = function(){
        $scope.range = makeRange();
    }
}]);