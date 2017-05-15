/*
author:蔡明；
date:170301;
*/

$.fn.extend({
    lazyload:function(opt,callback){
        if(!opt){};
        _this=this,effect=opt.effect||"show";
        function size(){
            var _top=$(window).scrollTop();
            _this.each(function(){
                var height=$(this).height(),img_top=$(this).offset().top;
                if(_top>=img_top-$(window).height() && _top<=img_top+height){
                    var data_original=$(this).attr("data-original");
                    if(data_original!=null && data_original!=undefined){
                        if($(this).is(":visible")){
                            $(this).attr("src",data_original);
                            $(this).removeAttr('data-original');
                            $(this).effect;
                        }
                    }
                }
            })
        }
        size();
        $(window).resize(function(){
            size();
        })
        $(window).scroll(function(){
            size();
        })
    },
    tab:function(opt,callback){
        if(!opt){}
        var _this=$(this),ina_click=opt.click||"click",daohang=_this.find(opt.daohang||"li"),cur=opt.cur||"cur",original=opt.original||"null",prev=opt.prev||null,next=opt.next||null,display=opt.display||"block",auto=opt.auto||"false",time=opt.time||5000;
        var nr=new Array();
        var Time;
        if(opt.nr==null){nr[0]=_this.find(".ina_nr")}
        else{
            var _nr=opt.nr.split(",");
            for(var i=0;i<_nr.length;i++){
                nr[i]=_this.find(_nr[i]);
            }
        }
        daohang.eq(0).addClass(cur);
        for(var i=0;i<nr.length;i++){
            nr[i].hide().eq(0).show();
            if(nr[i].is("img")){
                if(nr[i].eq(0).attr(original)!=null){
                    if(nr[i].eq(0).offset().top<$(window).scrollTop()+$(window).height()&&nr[i].eq(0).offset().top>=$(window).scrollTop()){
                        if(nr[i].eq(0).is(":visible")){
                            nr[i].eq(0).attr("src",nr[i].eq(0).attr(original));
                            nr[i].eq(0).removeAttr(original);
                        }
                    }
                }
            }
            else{
                for(var j=0;j<nr[i].eq(0).find("img").length;j++){
                    if(nr[i].eq(0).find("img").eq(j).attr(original)!=null){
                        if(nr[i].eq(0).find("img").eq(j).offset().top<$(window).scrollTop()+$(window).height()&&nr[i].eq(0).find("img").eq(j).offset().top>=$(window).scrollTop()){
                            if(nr[i].eq(0).find("img").eq(j).is(":visible")){
                                nr[i].eq(0).find("img").eq(j).attr("src",nr[i].eq(0).find("img").eq(j).attr(original));
                                nr[i].eq(0).find("img").eq(j).removeAttr(original);
                            }
                        }
                    }
                }
            }
        }
        function qh(obj){
            daohang.removeClass(cur).eq(obj).addClass(cur);
            if(auto=="true"){clearInterval(Time);}
            for(var i=0;i<nr.length;i++){
                if(display=="block"){
                    nr[i].hide().eq(obj).show();
                    Time=setInterval(function(){
                        for(var i=0;i<daohang.length;i++){
                            if(daohang.eq(i).hasClass('cur')){
                                var m=i+1;
                                if(m>=daohang.length){m=0}
                                qh(m)
                                return false;
                            }
                        }
                    },time)
                }
                else if(display=="left"){
                    for(var j=0;j<nr[i].length;j++){
                        if(nr[i].eq(j).is("img")){var width=nr[i].eq(j).width()}
                        else{var width=nr[i].eq(j).find("img").width()}
                        if(nr[i].eq(j).is(":visible")){
                            if(obj<j){
                                nr[i].eq(j).stop().animate({left:width},function(){
                                    $(this).hide();
                                    Time=setInterval(function(){
                                        for(var i=0;i<daohang.length;i++){
                                            if(daohang.eq(i).hasClass('cur')){
                                                var m=i+1;
                                                if(m>=daohang.length){m=0}
                                                qh(m)
                                                return false;
                                            }
                                        }
                                    },time)
                                });
                                nr[i].eq(obj).stop().show().css({left:-width}).animate({left:0});
                            }
                            else if(obj>j){
                                nr[i].eq(j).stop().animate({left:-width},function(){
                                    $(this).hide();
                                    Time=setInterval(function(){
                                        for(var i=0;i<daohang.length;i++){
                                            if(daohang.eq(i).hasClass('cur')){
                                                var m=i+1;
                                                if(m>=daohang.length){m=0}
                                                qh(m)
                                                return false;
                                            }
                                        }
                                    },time)
                                });
                                nr[i].eq(obj).stop().show().css({left:width}).animate({left:0});
                            }
                            break;
                        }
                    }
                }
                if(nr[i].eq(obj).is("img")){
                    if(nr[i].eq(obj).attr(original)!=null){
                        if(nr[i].eq(obj).offset().top<$(window).scrollTop()+$(window).height()&&nr[i].eq(obj).offset().top>=$(window).scrollTop()){
                            nr[i].eq(obj).attr("src",nr[i].eq(obj).attr(original));
                            nr[i].eq(obj).removeAttr(original);
                        }
                    }
                }
                else{
                    for(var j=0;j<nr[i].eq(obj).find("img").length;j++){
                        if(nr[i].eq(obj).find("img").eq(j).attr(original)!=null){
                            if(nr[i].eq(obj).find("img").eq(j).offset().top<$(window).scrollTop()+$(window).height()&&nr[i].eq(obj).find("img").eq(j).offset().top>=$(window).scrollTop()){
                                nr[i].eq(obj).find("img").eq(j).attr("src",nr[i].eq(obj).find("img").eq(j).attr(original));
                                nr[i].eq(obj).find("img").eq(j).removeAttr(original);
                            }
                        }
                    }
                }
            }
        }
        daohang.on(ina_click,function(){
            qh($(this).index())
        })
        if(prev!=null){
            _this.find(prev).click(function(){
                for(var i=0;i<daohang.length;i++){
                    if(daohang.eq(i).hasClass('cur')){
                        var m=i-1;
                        if(m<0){m=daohang.length-1}
                        qh(m)
                        return false;
                    }
                }
            })
        }
        if(next!=null){
            _this.find(next).click(function(){
                for(var i=0;i<daohang.length;i++){
                    if(daohang.eq(i).hasClass('cur')){
                        var m=i+1;
                        if(m>=daohang.length){m=0}
                        qh(m)
                        return false;
                    }
                }
            })
        }
        if(auto=="true"){
            Time=setInterval(function(){
                for(var i=0;i<daohang.length;i++){
                    if(daohang.eq(i).hasClass('cur')){
                        var m=i+1;
                        if(m>=daohang.length){m=0}
                        qh(m)
                        return false;
                    }
                }
            },time)
        }
    },
    Focus:function(opt,callback){
        if(!opt){}
        var _this=$(this),nr=_this.find(opt.qhys||"img"),controls=opt.controls||"ina_hdp",auto=opt.auto||"true",on=opt.on||"cur",ina_click=opt.click||"click",time=opt.time||"5000",display=opt.display||"block",prevnext=opt.prevnext||"false",original=opt.original||"null",num=opt.num||"false",prev=opt._prev||null,next=opt._next||null,loop=opt.loop||"true";
        nr.hide().eq(0).show();
        if(nr.eq(0).is("img")){
          if(nr.eq(0).attr(original)!=null){
            if(_this.offset().top<$(window).scrollTop()+$(window).height()&&_this.offset().top>=$(window).scrollTop()){
              nr.eq(0).attr("src",nr.eq(0).attr(original));
              nr.eq(0).removeAttr(original);
            }
          }
        }
        else{
          for(var j=0;j<nr.eq(0).find("img").length;j++){
            if(nr.eq(0).find("img").eq(j).attr(original)!=null){
              if(nr.eq(0).find("img").eq(j).offset().top<$(window).scrollTop()+$(window).height()&&nr.eq(0).find("img").eq(j).offset().top>=$(window).scrollTop()){
                nr.eq(0).find("img").eq(j).attr("src",nr.eq(0).find("img").eq(j).attr(original));
                nr.eq(0).find("img").eq(j).removeAttr(original);
              }
            }
          }
        }
        if(nr.length>1){
            _this.append("<div class='"+controls+"'></div>");
            for(var i=1;i<nr.length+1;i++){
                if(i==1){_this.find("."+controls).append("<a href='javascript:void(0)' target='_self' class='"+on+"'>"+i+"</a>")}
                else{_this.find("."+controls).append("<a href='javascript:void(0)' target='_self'>"+i+"</a>")}
                }
            if(num=="true"){
              _this.append("<div class='ina_num'><b>1</b><i>/</i><span>"+nr.length+"</span></div>");
            }
            function qh(i){
                if(loop=="false"&&prev!=null){
                    if(i==0){pre.hide();next.show();}
                    else if(i==nr.length-1){pre.show();next.hide();}
                    else{pre.show();next.show();}
                }
              if(nr.eq(i).is("img")){
                if(nr.eq(i).attr(original)!=null){
                  if(_this.offset().top<$(window).scrollTop()+$(window).height()&&_this.offset().top>=$(window).scrollTop()){
                    nr.eq(i).attr("src",nr.eq(i).attr(original));
                    nr.eq(i).removeAttr(original);
                  }
                }
              }
              else{
                for(var j=0;j<nr.eq(i).find("img").length;j++){
                  if(nr.eq(i).find("img").eq(j).attr(original)!=null){
                    if(_this.offset().top<$(window).scrollTop()+$(window).height()&&_this.offset().top>=$(window).scrollTop()){
                      nr.eq(i).find("img").eq(j).attr("src",nr.eq(i).find("img").eq(j).attr(original));
                      nr.eq(i).find("img").eq(j).removeAttr(original);
                    }
                  }
                }
              }
                if(auto=="true"){clearInterval(timer);}
                if(display=="block"){nr.hide().eq(i).show();if(auto=="true"){timer=window.setInterval(function(){
                    i++;
                    if(i>=nr.length){i=0}
                    qh(i)
                    },time)}}
                else{
                    var width=nr.eq(0).outerWidth();
                    for(var j=0;j<nr.length;j++){
                        if(nr.eq(j).is(":visible")){
                            if(i>j){
                                nr.eq(i).show().css({left:width}).stop().animate({left:0})
                                nr.eq(j).css({left:0}).stop().animate({left:-width},function(){nr.eq(j).hide();if(auto=="true"){timer=window.setInterval(function(){
                                  i++;
                                  if(i>=nr.length){i=0}
                                  qh(i)
                                   },time)}})
                                   break;
                                }
                            else if(i<j){
                                nr.eq(i).show().css({left:-width}).stop().animate({left:0})
                                nr.eq(j).css({left:0}).stop().animate({left:width},function(){nr.eq(j).hide();if(auto=="true"){timer=window.setInterval(function(){
                                  i++;
                                  if(i>=nr.length){i=0}
                                  qh(i)
                                  },time)}})
                                  break;
                                }
                            }
                        }
                    }
                if(!_this.is(":visible")){return false;}
                _this.find("."+controls).find("a").removeClass(on).eq(i).addClass(on);
                var _num=i+1;
                _this.find(".ina_num").html("<b>"+_num+"</b><i>/</i><span>"+nr.length+"</span>");
                }
            if(prevnext=="true"){
                if(prev==null||next==null){
                  _this.append("<div class='ina_prev'>&lt;</div><div class='ina_next'>&gt;</div>");
                  var pre=_this.find(".ina_prev"),next=_this.find(".ina_next");
                  var prev_next_width=pre.width();
                _this.mouseover(function(){
                    pre.stop().animate({left:0});
                    next.stop().animate({right:0});
                }).mouseout(function(){
                    pre.stop().animate({left:-prev_next_width});
                    next.stop().animate({right:-prev_next_width});
                });
                }
                else{
                  var pre=_this.find(prev),next=_this.find(next);
                  if(loop=="false"){pre.hide()}
                }
                pre.click(function(){
                    if(nr.is(":animated")){return false;}
                    for(var i=0;i<nr.length;i++){
                        if(nr.eq(i).is(":visible")){
                            i--;
                            if(i<0){i=nr.length-1}
                            qh(i)
                            break;
                            }
                        }
                    })
                next.click(function(){
                    if(nr.is(":animated")){return false;}
                    for(var i=0;i<nr.length;i++){
                        if(nr.eq(i).is(":visible")){
                            i++;
                            if(i>=nr.length){i=0}
                            qh(i)
                            break;
                            }
                        }
                    })
                }
            if(auto=="true"){
                //if(!_this.is(":visible")){return false;}
                _this.find("."+controls).find("a").on(ina_click,function(){
                if(nr.is(":animated")){return false;}   
                clearInterval(timer);
                var n=$(this).index();
                qh(n);
                })
                var timer,m=0;
                timer=window.setInterval(function(){
                    m++;
                    if(m>=nr.length){m=0}
                    qh(m)
                    },time)
                }
            else if(auto=="false"){
                _this.find("."+controls).find("a").on(ina_click,function(){
                qh($(this).index())
                })
            }
        }
    },
    rolling:function(opt,callback){
        if(!opt){}
        var _this=$(this),direction=opt.direction||"up",box=_this.find(opt.box||"ul"),element=opt.element||"li",rollingtime=opt.rollingtime||"500",intervaltime=opt.intervaltime||"5000",num=opt.num||"1",prev=_this.find(opt.prev)||null,next=_this.find(opt.next)||null,original=opt.original||"null";
        var time;
        function Show(){
          for(var i=0;i<box.find(element).length;i++){
            if(box.find(element).eq(i).is("img")){
              if(box.find(element).eq(i).attr(original)!=null){
                if(box.find(element).eq(i).offset().top<$(window).scrollTop()+$(window).height()&&box.find(element).eq(i).offset().top>=$(window).scrollTop()){
                  box.find(element).eq(i).attr("src",box.find(element).eq(i).attr(original));
                  box.find(element).eq(i).removeAttr(original);
                }
              }
            }
            else{
              for(var j=0;j<box.find(element).eq(i).find("img").length;j++){
                if(box.find(element).eq(i).find("img").eq(j).attr(original)!=null){
                  if(box.find(element).eq(i).find("img").eq(j).offset().top<$(window).scrollTop()+$(window).height()&&box.find(element).eq(i).find("img").eq(j).offset().top>=$(window).scrollTop()){
                    box.find(element).eq(i).find("img").eq(j).attr("src",box.find(element).eq(i).find("img").eq(j).attr(original));
                    box.find(element).eq(i).find("img").eq(j).removeAttr(original);
                  }
                }
              }
            }
          }
        }
        Show();
        $(window).scroll(function(){
          Show();
        })
        function up(){
          Show();
            if(box.is(":animated")){return false;}
            else{
                var lineHeight=box.find(element).eq(0).outerHeight(),height=lineHeight*num;
                clearInterval(time);
                box.stop().animate({marginTop:-height},rollingtime,function(){
                for(var i=0;i<num;i++){
                    box.find(element).eq(0).appendTo(box);
                }
                box.css({marginTop:0});
                if(direction=="up"){time=window.setInterval(function(){up()},intervaltime);return false;}
                else{if(direction=="down"){time=window.setInterval(function(){down()},intervaltime);return false;}}
                })
            }
        };
        function down(){
          Show();
            if(box.is(":animated")){return false;}
            else{
                var lineHeight=box.find(element).eq(0).outerHeight(),height=lineHeight*num;
                clearInterval(time);
                box.css({marginTop:-height});
                for(var i=0;i<num;i++){
                    box.find(element).eq(box.find(element).length-1).insertBefore(box.find(element).eq(0))
                }
                box.stop().animate({marginTop:0},rollingtime,function(){
                if(direction=="up"){time=window.setInterval(function(){up()},intervaltime);return false;}
                else{if(direction=="down"){time=window.setInterval(function(){down()},intervaltime);return false;}}
                })
            }
        }
        function left(){
          Show();
            if(box.is(":animated")){return false;}
            else{
                var lineWidth=box.find(element).eq(0).outerWidth(),width=lineWidth*num;
                box.css({width:box.find(element).length*lineWidth});
                clearInterval(time);
                box.stop().animate({marginLeft:-width},rollingtime,function(){
                for(var i=0;i<num;i++){
                    box.find(element).eq(0).appendTo(box)
                }
                box.css({marginLeft:0});
                if(direction=="left"){time=window.setInterval(function(){left()},intervaltime);return false;}
                else{if(direction=="right"){time=window.setInterval(function(){right()},intervaltime);return false;}}
                })
            }
        }
        function right(){
          Show();
            if(box.is(":animated")){return false;}
            else{
                var lineWidth=box.find(element).eq(0).outerWidth(),width=lineWidth*num;
                box.css({width:box.find(element).length*lineWidth});
                clearInterval(time);
                box.css({marginLeft:-width});
                for(var i=0;i<num;i++){
                    box.find(element).eq(box.find(element).length-1).insertBefore(box.find(element).eq(0))
                }
                box.stop().animate({marginLeft:0},rollingtime,function(){
                    if(direction=="left"){time=window.setInterval(function(){left()},intervaltime);return false;}
                    else{if(direction=="right"){time=window.setInterval(function(){right()},intervaltime);return false;}}
                })
            }
        }
        switch(direction){
            case "up":
                 if(box.find(element).length>num){

                     var time_up;
                     if(prev!=null){
                         prev.click(function(){down();})
                         }
                     if(next!=null){
                         next.click(function(){up();})
                         }
                     time=window.setInterval(function(){up()},intervaltime)
                     _this.mouseover(function(){
                         clearInterval(time)
                         }).mouseout(function(){
                             time=window.setInterval(function(){up()},intervaltime)
                             })
                     }
                 break;
            case "down":
                     if(box.find(element).length>num){
                         var time;
                         if(prev!=null){
                         prev.click(function(){down();})
                         }
                         if(next!=null){
                         next.click(function(){up();})
                         }
                         time=window.setInterval(function(){down()},intervaltime)
                         _this.mouseover(function(){
                             clearInterval(time)
                             }).mouseout(function(){
                                 time=window.setInterval(function(){down()},intervaltime)
                                 })
                     }
                 break;
            case "left":
                 if(box.find(element).length>num){
                    box.css({width:box.find(element).length*box.find(element).eq(0).outerWidth()});
                     var time;
                     if(prev!=null){
                         prev.click(function(){right();})
                         }
                     if(next!=null){
                         next.click(function(){left();})
                         }
                     time=window.setInterval(function(){left()},intervaltime)
                     _this.mouseover(function(){
                         clearInterval(time)
                         }).mouseout(function(){
                             time=window.setInterval(function(){left()},intervaltime)
                             })
                     }
                 break;
            case "right":
                 if(box.find(element).length>num){
                    box.css({width:box.find(element).length*box.find(element).eq(0).outerWidth()});
                     var time;
                     if(prev!=null){
                         prev.click(function(){right();})
                         }
                     if(next!=null){
                         next.click(function(){left();})
                         }
                     time=window.setInterval(function(){right()},intervaltime)
                     _this.mouseover(function(){
                         clearInterval(time)
                         }).mouseout(function(){
                             time=window.setInterval(function(){right()},intervaltime)
                             })
                     }
                 break;
            }
    }
})
function ina_tk(str,btn,href){
    var height=$(window).height();
    if(href==undefined||href==null){href="javascript:;"}
    var html="<div class='ina_tkbg' style='height:"+height+"px'></div><div class='ina_tk'><a href='javascript:;' class='ina_close'>&times;</a><p>"+str+"</p><div class='ina_tkbtn'><i></i><a href='"+href+"'>"+btn+"</a></div></div>";
    $("body").append(html)
    $(".ina_tkbg,.ina_close,.ina_tk .ina_tkbtn a").live("click",function(){
        $(".ina_tk,.ina_tkbg").remove();
    })
}
function ina_tksure(bt,str,fn,obj){
    var timestamp = Date.parse(new Date());
    $("body").append("<div class='ina_zhezhao' style='display:block;' onclick='$(\".ina_zhezhao,.ina_tksure\").remove();'></div><div class='ina_tksure'><div class='ina_tkbt'><h3>"+bt+"</h3></div><div class='ina_tknr'>"+str+"</div><div class='ina_tkbottom'><a class='ina_close' href='javascript:;' onclick='$(this).parents(\".ina_tksure\").remove();$(\".ina_zhezhao\").remove();'>取消</a><a href='javascript:;' id='ina_"+timestamp+"'>确定</a></div></div>");
    $("#ina_"+timestamp).click(function(){
        ina_callback(obj,fn)
    })
}
function ina_callback(obj,fn){
    if (typeof fn === "function"){
        fn(obj);
    }
}
function ina_tkclose(bt,str,fn,obj){
    $("body").append("<div class='ina_zhezhao' style='display:block;' onclick='$(\".ina_zhezhao,.ina_tkclose\").remove();ina_callback("+obj+","+fn+")'></div><div class='ina_tkclose'><div class='ina_tkbt'><h3>"+bt+"</h3></div><div class='ina_tknr'><img src='http://img.news18a.com/community/image/tk_duigou.png'><p>"+str+"</p></div></div>")
    window.setTimeout(function(){
        if($(".ina_tkclose").length>0){
            $(".ina_zhezhao,.ina_tkclose").remove();
            ina_callback(obj,fn);
        }
    },3000)
}