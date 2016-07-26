$(function() {
    $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            $(".search-but").click();
        }
    });

    $(".search-but").click(function() {
        var val = $(".search-text").val();
        switch (val) {
            case val = "关于我们":
                window.location = "about us.html";
                break;
            case val = "新闻动态":
                window.location = "news.html";
                break;
            case val = "新闻":
                window.location = "news.html";
                break;
            case val = "欧盟":
                window.location = "globa2.html";
                break;
            case val = "全球创新云":
                window.location = "globa2.html";
                break;
            case val = "创新云":
                window.location = "news.html";
                break;
            case val = "全球创新港":
                window.location = "global1.html";
                break;
            case val = "创新港":
                window.location = "global1.html";
                break;
            case val = "核心业务":
                window.location = "operation.html";
                break;
            case val = "运营模式":
                window.location = "operation.html";
                break;
            case val = "社区服务网":
                window.location = "service.html";
                break;
            case val = "服务网":
                window.location = "service.html";
                break;
            case val = "样板社区":
                window.location = "community.html";
                break;
            case val = "社区":
                window.location = "community.html";
                break;
            case val = "加入我们":
                window.location = "talents.html";
                break;
            case val = "人才招聘":
                window.location = "talents.html";
                break;
            case val = "联系我们":
                window.location = "contact.html";
                break;
        }
    })

})
