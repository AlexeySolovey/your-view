var shop = angular.module('shop',['ngSanitize']);
// Add controller for main page
shop.controller('mainController', function($scope) {
    $scope.wall_left_length = function(){
    	if ($scope.form_type_model == 2 || $scope.form_type_model == 4) {
            return 2;
    }
    };
    $scope.wall_right_length = function(){
        if ($scope.form_type_model == 1 || $scope.form_type_model == 2) {
            return 5;
        }
    };
});


var lang = $('meta[name="keywords"]').attr("lang") ? $('meta[name="keywords"]').attr("lang") : false;
var goods_names = ['С‚РѕРІР°СЂ','С‚РѕРІР°СЂР°','С‚РѕРІР°СЂРѕРІ'];

function declension(num, expressions) {
    var result;

    if (lang) {
        if (lang == 'en') {
            if (num == 1) {
                result = expressions['0'];
            } else {
                result = expressions['2'];
            }
        } else {
            count = num % 100;
            if (count >= 5 && count <= 20) {
                result = expressions['2'];
            } else {
                count = count % 10;
                if (count == 1) {
                    result = expressions['0'];
                } else if (count >= 2 && count <= 4) {
                    result = expressions['1'];
                } else {
                    result = expressions['2'];
                }
            }
        }
    }

    return result ? num+' '+result : num;
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function preloadImages()
{
    for(var i = 0; i<arguments.length; i++)
        $("<img />").attr("src", arguments[i]);
}




