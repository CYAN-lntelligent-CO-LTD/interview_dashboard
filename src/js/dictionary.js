class Dictionary {
    constructor(options) {
        this.data = []
    }
    drawhtml(data) {
        const dictArrys = this.dicArray();
        let html = ''
        dictArrys.forEach(function (DictionaryItem, Dictionarykey) {
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
    dicArray() {
        const dictionaryData = [
            {
                id: 0,
                name: 'TEP',
                display: './src/icon/temperature.png',
                unit: '℃',
                value1: 10,
                value2: 20,
                value3: 30,
                value4: 40,
                value5: 50,
            },
            {
                id: 1,
                name: 'HUM',
                display: './src/icon/humidity.png',
                unit: '%',
                value1: 50,
                value2: 60,
                value3: 70,
                value4: 80,
                value5: 90,
            },
            {
                id: 2,
                name: 'PM25',
                display: './src/icon/pm2.5.png',
                unit: 'ug/m³',
                value1: 35,
                value2: 53,
                value3: 58,
                value4: 71,
                value5: 100,
            },
            {
                id: 3,
                name: 'HCHO',
                display: './src/icon/hcho.png',
                unit: 'ppm',
                value1: 0.1,
                value2: 0.5,
                value3: 1,
                value4: 2,
            },
            {
                id: 4,
                name: 'CO2',
                display: './src/icon/co2.png',
                unit: 'ppm',
                value1: 1000,
                value2: 1200,
                value3: 1600,
                value4: 2000,
                value5: 3000,
            },
            {
                id: 5,
                name: 'O3',
                display: './src/icon/o3.png',
                unit: 'ppm',
                value1: 0.164,
                value2: 0.204,
                value3: 0.404,
                value4: 0.504,
                value5: 0.604,
            },
        ]
        return dictionaryData
    }
}
