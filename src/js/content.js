function drawHtml(data) {
    let html = ''

    Dictionary.forEach(function (DictionaryItem, Dictionarykey) {
        data.forEach(function (dataItem, dataKey) {

            if (DictionaryItem.name === dataItem.name) {
                const DictionaryName = DictionaryItem.name;
                const DictionaryUnit = DictionaryItem.unit;
                const count = dataItem.count
                let color = getColors(count, DictionaryItem);
                let icon = getIconStatus(count, DictionaryItem);
                html += `
                    <div class="btn btn-lg sensor-group">
                        <div class="group-name">
                            <div class="label"><img src="${DictionaryItem.display}" alt="${DictionaryName}"></div>
                        </div>
                        <div class="group-value">
                            <span class="label" style="color:${color}">${count}</span>
                        </div>
                        <div class="group-unit">
                            <div class="label" >${DictionaryUnit}</div>
                        </div>
                        <div class="group-icon">
                            ${icon}
                        </div>
                    </div>
                `;
            }
        });
    });
    $('#Content').html(html);
}

function getStatus(count, DictionaryItem) {

    if (!count || !DictionaryItem) {
        return '';
    }
    else if (0 <= count && count < DictionaryItem.value1) {
        return 'status1'
    }
    else if (DictionaryItem.value1 <= count && count < DictionaryItem.value2) {
        return 'status2'
    }
    else if (DictionaryItem.value2 <= count && count < DictionaryItem.value3) {
        return 'status3'
    }
    else if (DictionaryItem.value3 <= count && count < DictionaryItem.value4) {
        return 'status4'
    }
    if (DictionaryItem.value4 < count && count < DictionaryItem.value5 || DictionaryItem.value4 <= count) {
        return 'status5'
    }
    return 'status5'
}
function getColors(data, DictionaryItem) {

    let status = getStatus(data, DictionaryItem)
    switch (status) {
        case 'status1':
        case 'status2':
        case 'status3':
        case 'status4':
            return '#ffc107'
        case 'status5':
            return '#EB5757'
        default:
            return '#c1c1c1'
    }
}

function getIconStatus(data, DictionaryItem) {

    let status = getStatus(data, DictionaryItem)
    switch (status) {
        case 'status1':
            return '<img src="./src/icon/laughing.png" alt="大笑">'

        case 'status2':
            return '<img src="./src/icon/smiley.png" alt="笑臉">'

        case 'status3':
            return '<img src="./src/icon/cryingface.png" alt="哭臉">'

        case 'status4':
            return '<img src="./src/icon/cry.png" alt="大哭">'

        case 'status5':
            return '<img src="./src/icon/anger.png" alt="生氣">'

        default:
            return '<img src="./src/icon/anger.png" alt="生氣">'
    }
}