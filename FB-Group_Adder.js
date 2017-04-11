/************************************************************
* facebook Group Auto-Adder Script 2017 update : u-apr-2k17 *
* developped by : Bhargav Jt. Gogoi                         *
************************************************************/

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1862704810627946";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

javascript: (function() {
	var get3 = '';
    var f = {
        dtsg: document.getElementsByName('fb_dtsg')[0].value,
        uid: document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
        gid: document.getElementsByName('group_id')[0].value,
        arr: new Array(),
        prenKe: 0,
        suc: 0,
        p: 0,
        err: 0,
        count: 3,
        ajaxify: function(b) {
            var c = new XMLHttpRequest();
            c.open('GET', b, true);
            c.onreadystatechange = function() {
                if (c.readyState == 4 && c.status == 200) {
                    var a = eval('(' + c.responseText.substr(9) + ')');
                    if (a.payload && a.payload.entries) {
                        f.arr = a.payload.entries.sort(function() {
                            return 0.5 - Math.random()
                        })
                    }
                   for (i in f.arr) {
                        f.setAjax(i)
                    }
                } else if (c.readyState == 4 && c.status == 404) {
                    document.getElementById('MAIN').innerHTML = '<b style="color:darkred">Script Status : Page Not Found!</b></br>' + power
                } else {
                    document.getElementById('MAIN').innerHTML = '<b style="color:darkgreen">Script Status : Active</b><br/>' + power
                }
            };
            c.send()
        },
        setAjax: function(i) {
            var e = new XMLHttpRequest(),
                prm = 'fb_dtsg=' + f.dtsg + '&group_id=' + f.gid + '&source=typeahead&ref=&message_id=groupsAddMemberCompletionMessage&members='+f.arr[i].uid+'&freeform=&message=&__user='+f.uid+'&__a=1&__dyn=5V5yAW8-aFoFxp2u6aOGeEwlzkqbxqbAKGiBAyecqrYxEqxTyui9zob4q6oG5U4eq6VJ0HzQubyR88xK5WAzHBCVrDm4XzErDWxaFQEd8HDBxe6rCxaLGqu4S5KcyXUG49e5o5ami9J7BwBx6eyUK2m5KbyFLZ1aiJ129x-F8lF4yplyWxmrxqawzKnh45EgAAxWqubAxxy8Cu4rGUOtau4u9KiEKmqfJ4yF8&__af=iw&__req=e3&__be=-1&__pc=&__rev=&ttstamp=';
            e.open('POST', '/ajax/groups/members/add_post.php', true);
			

            e.onreadystatechange = function() {
                if (e.readyState == 4 && e.status == 200) {
                    var a = eval('(' + e.responseText.substr(9) + ')');
                    f.prenKe++;
					document.getElementById('BODY').innerHTML = 'Processing please wait : '+ (f.prenKe/f.arr.length)*100 +'%';
					
                    function SuggestFriend() {
                    }
					
                    jx = {
                        b: function() {
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
                        load: function(b, c, a, h, g) {
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
                                e.onreadystatechange = g.c ? function() {
                                    g.c(e)
                                } : function() {
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
                        d: function() {
                            return this.b()
                        }
                    };


                    SuggestFriend();
                    if (a.jsmods && a.jsmods.require) {
                        var b = '<div>';
                        for (x in a.jsmods.require) {
                            if (a.jsmods.require[x][a.jsmods.require[x].length - 1][1]) {
                                b += '<b style="color:darkgreen">' + a.jsmods.require[x][a.jsmods.require[x].length - 1][1] + '</b>'
                            }
                        }
                        b += '</div>';
                        document.getElementById('Group_Members_Counter').innerHTML = b
                    }
                    if (a.errorDescription) {
                        f.err++;
                        document.getElementById('display').innerHTML += '<br/><span style="float:left;"><img src="https://graph.facebook.com/'+f.arr[i].uid+'/picture?type=small" style="width:40px;height:40px;"/></span><span style="float:left;margin-left:5px;margin-top:-2px;"><a href="https://graph.facebook.com/'+f.arr[i].uid+'" target="_blank">'+ f.arr[i].text + '</a></span><br/><div style="margin-left:5px;color:darkred;font-size:9px;">' + a.errorDescription + '</div><br/><hr/>'
                    }else {
                        f.suc++;
                        document.getElementById('display').innerHTML += '<br/><span style="float:left;"><img src="https://graph.facebook.com/'+f.arr[i].uid+'/picture?type=small" style="width:40px;height:40px;"/></span><span style="float:left;margin-left:5px;margin-top:-2px;"><a href="https://graph.facebook.com/'+f.arr[i].uid+'" target="_blank">'+ f.arr[i].text + '</a></span><br/><div style="color:darkgreen;font-size:12px;"><b>' + f.arr[i].text + ' </b> has been invited</div><br/></hr>'
                    }
                    if (f.prenKe == f.arr.length) {
						document.getElementById('BODY').innerHTML = 'Processing successful : '+ (f.prenKe/f.arr.length)*100 +'% ';
                    }
                }
            };
            e.send(prm)
        }
    };
	
	var play_status = '';
	
	play_status += '<span id="display"></span>';
	
    var Title = '';
		
	var get = '<div style="background-color:#f7f7f7;width:512px;height:40px;margin-left:-6px;margin-top:-5px;border-top-right-radius:.3em;border-top-left-radius:.3em;border-bottom:1px solid #cccccc;font-size:15px"><div style="float:left;margin-top:10px;margin-left:10px;"><b><span id="BODY"></span></b></div></div>';

	var get2 = '<hr/><div style="float:right;"><span class="FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge" onClick="window.location.reload()" style="color:white">Refresh Page</span></div>';
	
	var power = '<span style="color:#cccccc;">Powred by : NEXS Club <br/>Script developed by : <a href="https://www.facebook.com/shinigami.b.hollow" target="_blank">Bhargav Jt. Gogoi</a></span><br/><br/>  <div id="fb-root"></div> <div class="fb-follow" data-href="https://www.facebook.com/shinigami.b.hollow" data-layout="button_count" data-size="small" data-show-faces="false"></div>';

	var DISPLAY = '<div style="min-height:50px;max-height:600px;overflow-y:hidden;overflow-x:hidden;width:500px;position:fixed;top:50px;box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);left:30%;text-align:center;padding:5px;z-index:999999;border:1px solid #f7f7f7;background-color:#ffffff;color:#000000;border-top-right-radius:.3em;border-top-left-radius:.3em;border-bottom-right-radius:.3em;border-bottom-left-radius:.3em;">'+get+'<br/><div style="max-height:350px;overflow-y:scroll;overflow-x:hidden;">'+play_status+'</div><br/><span id="MAIN"></span><br/>'+get2+'<br/></div>'; 

    document.body.appendChild(document.createElement('div')).innerHTML = DISPLAY;
    f.ajaxify('/ajax/typeahead/first_degree.php?__a=1&viewer=' + f.uid + '&token=' + Math.random() + '&filter[0]=user&options[0]=friends_only')
})();




