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


document.getElementById('submit').onclick = function () {
    var clientName = document.getElementById('username2').value;
    var clientTel = document.getElementById('tel2').value;
    var clientDemand = document.getElementById('title2').value;
     if (clientTel == "") {
        my_alert('请输入您的联系方式');
        return false;
    }else {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(clientTel)) {
            my_alert('手机格式不正确');
            return false;
        }
    }
    console.log(clientName, clientTel, clientDemand);
    axios({
        method: 'POST',
        url: 'http://192.168.2.82:10086/backstage/demand',
        data: {
            clientName,
            clientTel,
            clientDemand
        },
    }).then((res) => {
        console.log(res);
    })
}

// 首页案例中心 
const arr = document.querySelectorAll('.cases .sidenav .item')
for (let i = 0; i < arr.length; i++) {
    let text = arr[i].innerText
    let type_id
    arr[i].onclick = function () {
        console.log("当前带点击",arr[i]);
        document.getElementById('shop').classList.remove("active")
        document.getElementById('wxapp').classList.remove("active")
        document.getElementById('website').classList.remove("active")
        arr[i].classList.add('active');
        
        if (text == '商城开发') {
            document.getElementById('case-detail-title').innerText = '商城开发'
            document.getElementById('case-detail-desc').innerText = 'H5商城、PC商城、小程序商城、公众号商城、打造全网式覆盖。'
            type_id = 6
            
        }
        if (text == '小程序开发') {
            document.getElementById('case-detail-title').innerText = '小程序开发'
            document.getElementById('case-detail-desc').innerText = '按需定制微信小程序、支付宝小程序、抖音小程序等，多行业场景适用。'
            type_id = 2
        }
        if (text == '网站开发') {
            $('#case-detail-title').text('网站开发');
            $('#case-detail-desc').text('品牌官网、企业官网、电商、企业营销、官方门户、信息门户、集团站群等网站量身定制。');
            document.getElementById('case-detail-title').innerText = '网站开发'
            document.getElementById('case-detail-desc').innerText = '品牌官网、企业官网、电商、企业营销、官方门户、信息门户、集团站群等网站量身定制。'
           
            type_id = 1
        }
        axios({
            method: 'get',
            url: "http://192.168.2.82:10086/backstage/product/ptdList",
            params: {
                type_id
            }
        }).then((res) => {
            console.log(res);
            const { rows } = res.data
            document.getElementById('index_ajax').innerHTML = rows.map((item) => {
                return `  
            <a href="./cases/index.html" class="case-item">
            <div><img src="${item.ptdCover}"></div>
            <div>${item.createBy}</div>
        </a>
        `
            }).join('');
        })
    }
}


   // 首页导航
   axios({
    method:'get',
    url:'http://192.168.2.82:10086/backstage/type/list',

}).then((res)=>{
    console.log("res",res);
    const {rows} = res.data
    const span = document.getElementById('spanA')
    console.log(span);
    span.innerHTML  = rows.map((item)=>{
       return `<a class='La' href="${item.typeUrl}">${item.typeName}</a>`    
    }).join('')
    // localStorage.setItem("navigate",span.innerHTML)


})



