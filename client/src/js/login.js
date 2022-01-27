import getAjax from './index.js';
import img from './../icon/blue.png';
const its_proxy = 'http://192.168.0.210:3000'
$(function(){
    let data = {
        jsonrpc: "2.0",
        method: "login",
        params: {
            c_name: "admin",
            c_passwd: "admin"
        },
        id: 2
    }
    $.ajax({
        url: its_proxy + '/public',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        crossDomain: true,
        xhrFields: { withCredentials: false },
        success: function (data) {
            if (data.result) {
                getAjax(its_proxy)
                $('#Content').css("background-image", 'url(' + img + ')');
            }
        },
        error: function () {
            console.log('url 錯誤 無法登入')
        },
    });
})

export default its_proxy