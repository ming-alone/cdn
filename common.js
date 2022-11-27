$(function(){
    // $(".cases .sidenav .item").click(function (){
    //     var id = $(this).attr('id');
    //     console.log("id",id);
    //     $.ajax({
    //         url: 'http://192.168.2.99:8080/backstage/product/list',
    //         dataType:'html',
    //         type:'get',
    //         params: {type_id:6},
    //         success:function(t){
               
    //             $(".cases .sidenav .item").removeClass('active');
    //             $('#'+id).addClass('active');

    //             console.log(id);
    //             if(id=='shop'){
    //                 $('#case-detail-title').text('商城开发');
    //                 $('#case-detail-desc').text('H5商城、PC商城、小程序商城、公众号商城、打造全网式覆盖。');
    //             }
    //             if(id=='wxapp'){
    //                 $('#case-detail-title').text('小程序开发');
    //                 $('#case-detail-desc').text('按需定制微信小程序、支付宝小程序、抖音小程序等，多行业场景适用。');
    //             }
    //             if(id=='website'){
    //                 $('#case-detail-title').text('网站开发');
    //                 $('#case-detail-desc').text('品牌官网、企业官网、电商、企业营销、官方门户、信息门户、集团站群等网站量身定制。');
    //             }

    //             $('#index_ajax').html(t);
    //         },
    //         error: function () {
    //         }

    //     })
    // })
    // 点击商城切换
    // $(".cases .sidenav .item").click(function(){
    //     var id = $(this).attr('id');
    //     console.log("id",id);
    //     $(".cases .sidenav .item").removeClass('active');
    //     $('#'+id).addClass('active');
    //     if(id=='shop'){
    //         $('#case-detail-title').text('商城开发');
    //         $('#case-detail-desc').text('H5商城、PC商城、小程序商城、公众号商城、打造全网式覆盖。');
    //     }
    //     if(id=='wxapp'){
    //         $('#case-detail-title').text('小程序开发');
    //         $('#case-detail-desc').text('按需定制微信小程序、支付宝小程序、抖音小程序等，多行业场景适用。');
    //     }
    //     if(id=='website'){
    //         $('#case-detail-title').text('网站开发');
    //         $('#case-detail-desc').text('品牌官网、企业官网、电商、企业营销、官方门户、信息门户、集团站群等网站量身定制。');
    //     }

    //     // $('#index_ajax').html(t);
    //     // console.log(t);
    //     // $(".cases .sidenav .item").removeClass('active');
        
    // })

    init_cases_swiper();

    $(".goods_rcmd .but button").click(function (){
        var id = $(this).attr('id');
        console.log("id2", id );
        $.ajax({
            url: '/index/cases/cases_ajax',
            dataType:'html',
            type:'post',
            data: {id:id},
            success:function(t){
                $(".goods_rcmd .but button").removeClass('active');
                $('#'+id).addClass('active');
                $('#cases_ajax').html(t);
                init_cases_swiper();
            },
            error: function () {
            }

        })
    })

    $('#close').click(function(){
        var src = $(this).attr('class');
        if(src.indexOf('fa-bars')>0){
            $('.navigate .con').css({display:'block'});
            $(this).attr('class','fa fa-close nav');
        }else{
            $('.navigate .con').css({display:'none'});
            $(this).attr('class','fa fa-bars nav');
        }
    })
    // 轮播图
    var certifySwiper = new Swiper('#index_banner .swiper-container', {

        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:true
    })

    new Swiper('#eval .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 40
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 80
            },
        },
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    // 软件优势轮播图
    var swiper = new Swiper('#certify .swiper-container', {
        effect: 'coverflow',
        // grabCursor: true,
        // centeredSlides: true,
        slidesPerView: 'auto',
        loopedSlides: '1',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            //   depth: 100,
            //   modifier: 2,
            //   slideShadows: true,
        },
        loop: true,
    })


    if($('#allmap').length>0){
        ShowMap('119.314389,26.095002', '奔阳信息科技有限公司', '宁德大厦', '15985761802','15');
    }

    function ShowMap(zuobiao, name, addrsee, phone, zoom) {
        var arrzuobiao = zuobiao.split(',');
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom);
        map.addControl(new BMap.NavigationControl());
        var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]));

        map.addOverlay(marker);
        var infoWindow = new BMap.InfoWindow('<p style="color: #bf0008;font-size:14px;">' + name + '</p><p>地址：' + addrsee + '</p><p>电话：' + phone + '</p>');
        marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
        });
        marker.openInfoWindow(infoWindow);
    }



})

function init_cases_swiper(){
    new Swiper('.goods_rcmd .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 40
            },
            800: {
                slidesPerView: 2.5,
                spaceBetween: 40
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 80
            },
            1600: {
                slidesPerView: 4.5,
                spaceBetween: 80
            },
        },
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}


/*表单提交 start*/
function message(){
    var tel = $('#tel').val();
    if (tel == "") {
        my_alert('请输入您的联系方式');
        return false;
    }else {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(tel)) {
            my_alert('手机格式不正确');
            return false;
        }
    }
    var username = $('#username').val();
    if (username == "") {
        my_alert('请输入您的姓名');
        return false;
    }
    var title = $('#title').val();

    console.log("手机号",tel);
    console.log("姓名",username);
    console.log("需求",title);

    // $.post("/index/index/message",{tel:tel,username:username,title:title},function(res){
    //     my_alert(res.msg);
    // })
    return false;
}
function message2(){
    var tel = $('#tel2').val();
    // if (tel == "") {
    //     my_alert('请输入您的联系方式');
    //     return false;
    // }else {
    //     var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    //     if (!myreg.test(tel)) {
    //         my_alert('手机格式不正确');
    //         return false;
    //     }
    // }
    var username = $('#username2').val();
    // if (username == "") {
    //     my_alert('请输入您的姓名');
    //     return false;
    // }
    var title = $('#title2').val();
    console.log("手机号",tel);
    console.log("姓名",username);
    console.log("需求",title);

    $.post("http://192.168.188.182/backstage/demand/add",{tel:clientTel,username:clientName,title:clientDemand},function(res){
        my_alert(res.msg);
    })
    return false;
}
/*表单提交 end*/


/*自定义 my_alert() start*/
function my_alert(msg){
    var timestamp=new Date().getTime();
    console.log("timestamp",timestamp);
    var alert_id = 'alert'+timestamp;
    console.log("alert_id",alert_id);
    $('body').after("<div class='my_alert' id='" + alert_id + "'>"+ msg +"</div>");
    setTimeout(function(){
        $('#'+alert_id).remove();
    },3000)
}
/*自定义 my_alert() end*/