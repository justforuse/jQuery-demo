$(function () {


        var page = 1;
        var i = 4;
        //console.log(page);
        $("span.next").click(function () {
            //console.log('enter');
            var $parent = $(this).parents("div.v_show");
            var $v_show = $parent.find("div.v_content_list");
            var $v_content = $parent.find("div.v_content");

            //内容显示区
            var v_width = $v_content.width();

            var len = $v_show.find("li").length;
            var page_count = Math.ceil(len / i);
            if (!$v_show.is(":animated")) {

                if (page == page_count) {
                    $v_show.animate({left: "0"}, "normal");
                    page = 1;
                    //console.log(page);
                } else {
                    $v_show.animate({left: "-=" + v_width}, "normal");
                    page++;
                    //console.log(page);
                }

                $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current");
            }

        });

        //back
        $("span.prev").click(function () {
            //console.log('enter');
            var $parent = $(this).parents("div.v_show");
            var $v_show = $parent.find("div.v_content_list");
            var $v_content = $parent.find("div.v_content");

            //内容显示区
            var v_width = $v_content.width();

            var len = $v_show.find("li").length;
            var page_count = Math.ceil(len / i);
            if (!$v_show.is(":animated")) {
                if (page == 1) {
                    $v_show.animate({left: '-=' + v_width * (page_count - 1)}, "slow");
                    page = page_count;

                } else {
                    $v_show.animate({left: "+=" + v_width}, "normal");
                    page--;
                    //console.log(page);
                }

                $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current");

            }

        });

        $(".highlight_tip span").click(function () {
            var $pageToGo = $(this).index() +1;
            //console.log("page: " + page);
            //console.log("index: " + $pageToGo);

            var $parent = $(this).parents("div.v_show");
            var $v_show = $parent.find("div.v_content_list");
            var $v_content = $parent.find("div.v_content");

            //内容显示区
            var v_width = $v_content.width();

            var len = $v_show.find("li").length;


            if (!$v_show.is(":animated")) {
                if ($pageToGo > page) {

                    $v_show.animate({left: "-=" + v_width*($pageToGo - page)}, "normal");
                    page = $pageToGo;
                    $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current");

                } else {
                    $v_show.animate({left: "+=" + v_width*(page - $pageToGo)}, "normal");
                    page = $pageToGo;
                    $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current");

                }
            }


        });
        setInterval("$('span.next').trigger('click')",3000);

    }
)