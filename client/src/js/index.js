import {drawHtml} from './content.js';
import its_proxy from './login.js';
function getAjax() {
    let data = {
        jsonrpc: "2.0",
        method: "get_tag_values",
        params: null,
        id: 2
    }
    $.ajax({
        type: 'POST',
        url: its_proxy + '/var',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'text/plain; charset=UTF-8',
        success: function (res) {
            const data = res.result.data
            //物件轉陣列
            let dataArr = Object.entries(data)
                .map(([TagName, TagCount]) => {
                    return { name: TagName, count: TagCount }
                });

            drawHtml(dataArr);
            // const myTimeout = setTimeout(() => {
            //     getAjax();
            // }, 1000);
        },
        error: function () {
            console.log('url 錯誤')
        },
    });
}
export default getAjax