//百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=PGbgnOwOIr1FrQBkGIkViXXS&callback=init";
    document.body.appendChild(script);
}

function init() {
    var map = new BMap.Map("map", {
        minZoom: 8,
        maxZoom: 18
    }); // 创建Map实例119.291921, 39.824546
    var point = new BMap.Point(116.509767, 39.808679); // 创建点坐标
    map.centerAndZoom(point, 18);
    setTimeout(function() {
        map.setZoom(15);
    }, 2000); //两秒后放大到15级


    map.disableDragging(); //禁止拖拽
    setTimeout(function() {
        map.enableDragging();
    }, 2000); //两秒后开启拖拽


    map.enableScrollWheelZoom(); //启用滚轮放大缩小

    // var pointA = new BMap.Point(106.486654,29.490295);  // 创建点坐标A--大渡口区
    // var pointB = new BMap.Point(106.581515,29.615467);  // 创建点坐标B--江北区
    // alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
    // var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  //定义折线
    // map.addOverlay(polyline);//添加折线到地图上


    //在地图右上角添加缩放
    var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_ZOOM
    });
    map.addControl(top_right_navigation);










    map.enableInertialDragging();
    map.enableContinuousZoom();
    var size = new BMap.Size(10, 20);
    map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,
        // 切换城市之间事件
        // onChangeBefore: function(){
        //    alert('before');
        // },
        // 切换城市之后事件
        // onChangeAfter:function(){
        //   alert('after');
        // }
    }));





    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    map.setCurrentCity("北京大兴区亦城国际"); // 设置地图显示的城市 此项是必须设置的

}
window.onload = loadJScript; //异步加载地图
