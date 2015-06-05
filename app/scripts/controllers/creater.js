var modCreater = angular.module('moduleCreater',[]);
modCreater.controller('CreaterController',function($scope){
    var bodyW=0,bodyH=0,curPage=1,totalPage=4;
    var initPage = function(){
        bodyW = window.innerWidth;
        bodyH = window.innerHeight;
        $('#wraper').css({'width':bodyW,'height':bodyH});
        $('#wraper form').each(function(index,item){
            $(item).css({'width':bodyW,'height':bodyH});
        })
    }
    var nextPage = function(){
        if(curPage<totalPage){
            $('#wraper').css('transform','translateY('+-curPage*bodyH+'px)');
            curPage++;
        }else{
            $('#nextTrigger').hide();
        }
    }
    window.onresize =  initPage;

    $scope.nextTrigger = function(){
        nextPage();
    }
    initPage();
})
