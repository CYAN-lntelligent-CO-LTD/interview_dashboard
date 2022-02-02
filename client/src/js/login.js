import getAjax from './index.js';
import img from './../icon/blue.png';
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
        url: API_URL + '/public',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        crossDomain: true,
        xhrFields: { withCredentials: false },
        success: function (data) {
            if (data.result) {
                getAjax(API_URL)
                $('#Content').css("background-image", 'url(' + img + ')');
            }
        },
        error: function () {
            console.log('url 錯誤 無法登入')
        },
    });
})
