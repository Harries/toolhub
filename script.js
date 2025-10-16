// ==========================================
// 多语言支持
// ==========================================
const translations = {
    'zh-CN': {
        app_title: '开发者工具箱',
        home_title: '免费在线开发者工具',
        home_subtitle: '快速、安全、易用的开发者工具。所有处理都在浏览器本地完成。',
        json_tab: 'JSON 格式化',
        json_card_desc: '格式化、压缩和验证 JSON 数据，支持语法高亮',
        timestamp_tab: '时间戳转换',
        timestamp_card_desc: '时间戳与日期时间互转，支持多时区',
        json_title: 'JSON 格式化工具',
        format_btn: '格式化',
        compress_btn: '压缩',
        clear_btn: '清空',
        copy_btn: '复制',
        json_input_label: '输入 JSON:',
        json_output_label: '格式化结果:',
        json_input_placeholder: '粘贴或输入 JSON 数据，例如：{"name":"张三","age":25}',
        json_output_placeholder: '格式化后的 JSON 将显示在这里',
        timestamp_title: '时间戳转换工具',
        timezone_label: '选择时区:',
        current_time_title: '当前时间',
        current_time_label: '当前时间:',
        timestamp_sec_label: '时间戳(秒):',
        timestamp_ms_label: '时间戳(毫秒):',
        ts_to_date_title: '时间戳转日期',
        input_timestamp_label: '输入时间戳:',
        input_timestamp_placeholder: '输入时间戳 (支持秒或毫秒)',
        unit_sec: '秒',
        unit_ms: '毫秒',
        convert_btn: '转换',
        date_to_ts_title: '日期转时间戳',
        select_datetime_label: '选择日期时间:',
        footer_text: '© 2025 开发者工具箱 | 纯静态工具，数据不会上传到服务器',
        error_no_input: '请输入 JSON 数据',
        error_json_invalid: 'JSON 格式错误',
        error_no_timestamp: '请输入时间戳',
        error_timestamp_invalid: '时间戳格式错误，请输入数字',
        error_timestamp_range: '无效的时间戳',
        error_no_datetime: '请选择日期时间',
        error_datetime_invalid: '无效的日期时间',
        success_copied: '已复制',
        result_success: '转换成功',
        result_timezone: '时区：',
        result_datetime: '日期时间：',
        result_timestamp_sec: '时间戳(秒)：',
        result_timestamp_ms: '时间戳(毫秒)：',
        result_utc: 'UTC时间：'
    },
    'zh-TW': {
        app_title: '開發者工具箱',
        home_title: '免費線上開發者工具',
        home_subtitle: '快速、安全、易用的開發者工具。所有處理都在瀏覽器本地完成。',
        json_tab: 'JSON 格式化',
        json_card_desc: '格式化、壓縮和驗證 JSON 資料，支援語法高亮',
        timestamp_tab: '時間戳轉換',
        timestamp_card_desc: '時間戳與日期時間互轉，支援多時區',
        json_title: 'JSON 格式化工具',
        format_btn: '格式化',
        compress_btn: '壓縮',
        clear_btn: '清空',
        copy_btn: '複製',
        json_input_label: '輸入 JSON:',
        json_output_label: '格式化結果:',
        json_input_placeholder: '貼上或輸入 JSON 資料，例如：{"name":"張三","age":25}',
        json_output_placeholder: '格式化後的 JSON 將顯示在這裡',
        timestamp_title: '時間戳轉換工具',
        timezone_label: '選擇時區:',
        current_time_title: '當前時間',
        current_time_label: '當前時間:',
        timestamp_sec_label: '時間戳(秒):',
        timestamp_ms_label: '時間戳(毫秒):',
        ts_to_date_title: '時間戳轉日期',
        input_timestamp_label: '輸入時間戳:',
        input_timestamp_placeholder: '輸入時間戳 (支援秒或毫秒)',
        unit_sec: '秒',
        unit_ms: '毫秒',
        convert_btn: '轉換',
        date_to_ts_title: '日期轉時間戳',
        select_datetime_label: '選擇日期時間:',
        footer_text: '© 2025 開發者工具箱 | 純靜態工具，資料不會上傳到伺服器',
        error_no_input: '請輸入 JSON 資料',
        error_json_invalid: 'JSON 格式錯誤',
        error_no_timestamp: '請輸入時間戳',
        error_timestamp_invalid: '時間戳格式錯誤，請輸入數字',
        error_timestamp_range: '無效的時間戳',
        error_no_datetime: '請選擇日期時間',
        error_datetime_invalid: '無效的日期時間',
        success_copied: '已複製',
        result_success: '轉換成功',
        result_timezone: '時區：',
        result_datetime: '日期時間：',
        result_timestamp_sec: '時間戳(秒)：',
        result_timestamp_ms: '時間戳(毫秒)：',
        result_utc: 'UTC時間：'
    },
    'en': {
        app_title: 'Developer Toolbox',
        home_title: 'Free Online Developer Tools',
        home_subtitle: 'Fast, secure, and easy-to-use tools for developers. All processing is done locally in your browser.',
        json_tab: 'JSON Formatter',
        json_card_desc: 'Format, compress, and validate JSON data with syntax highlighting',
        timestamp_tab: 'Timestamp Converter',
        timestamp_card_desc: 'Convert between Unix timestamp and datetime with timezone support',
        json_title: 'JSON Formatter Tool',
        format_btn: 'Format',
        compress_btn: 'Compress',
        clear_btn: 'Clear',
        copy_btn: 'Copy',
        json_input_label: 'Input JSON:',
        json_output_label: 'Formatted Result:',
        json_input_placeholder: 'Paste or input JSON data, e.g.: {"name":"John","age":25}',
        json_output_placeholder: 'Formatted JSON will be displayed here',
        timestamp_title: 'Timestamp Converter Tool',
        timezone_label: 'Select Timezone:',
        current_time_title: 'Current Time',
        current_time_label: 'Current Time:',
        timestamp_sec_label: 'Timestamp (seconds):',
        timestamp_ms_label: 'Timestamp (milliseconds):',
        ts_to_date_title: 'Timestamp to Date',
        input_timestamp_label: 'Input Timestamp:',
        input_timestamp_placeholder: 'Input timestamp (seconds or milliseconds)',
        unit_sec: 'Seconds',
        unit_ms: 'Milliseconds',
        convert_btn: 'Convert',
        date_to_ts_title: 'Date to Timestamp',
        select_datetime_label: 'Select Date Time:',
        footer_text: '© 2025 Developer Toolbox | Static tool, data is not uploaded to server',
        error_no_input: 'Please input JSON data',
        error_json_invalid: 'Invalid JSON format',
        error_no_timestamp: 'Please input timestamp',
        error_timestamp_invalid: 'Invalid timestamp format, please input numbers',
        error_timestamp_range: 'Invalid timestamp',
        error_no_datetime: 'Please select date time',
        error_datetime_invalid: 'Invalid date time',
        success_copied: 'Copied',
        result_success: 'Conversion successful',
        result_timezone: 'Timezone:',
        result_datetime: 'Date Time:',
        result_timestamp_sec: 'Timestamp (sec):',
        result_timestamp_ms: 'Timestamp (ms):',
        result_utc: 'UTC Time:'
    }
};

// 添加更多语言（使用 Object.assign 确保兼容性）
translations['ja'] = Object.assign({}, translations['en'], {
    app_title: 'デベロッパーツールボックス',
    home_title: '無料オンライン開発者ツール',
    home_subtitle: '高速、安全、使いやすい開発者ツール。すべての処理はブラウザ内でローカルに行われます。'
});

translations['ko'] = Object.assign({}, translations['en'], {
    app_title: '개발자 도구 상자',
    home_title: '무료 온라인 개발자 도구',
    home_subtitle: '빠르고 안전하며 사용하기 쉬운 개발자 도구. 모든 처리는 브라우저에서 로컬로 수행됩니다.'
});

translations['es'] = Object.assign({}, translations['en'], {
    app_title: 'Caja de Herramientas para Desarrolladores',
    home_title: 'Herramientas Gratuitas en Línea para Desarrolladores',
    home_subtitle: 'Herramientas rápidas, seguras y fáciles de usar para desarrolladores. Todo el procesamiento se realiza localmente en su navegador.'
});

translations['fr'] = Object.assign({}, translations['en'], {
    app_title: 'Boîte à Outils pour Développeurs',
    home_title: 'Outils Gratuits en Ligne pour Développeurs',
    home_subtitle: 'Outils rapides, sécurisés et faciles à utiliser pour les développeurs. Tout le traitement est effectué localement dans votre navigateur.'
});

translations['de'] = Object.assign({}, translations['en'], {
    app_title: 'Entwickler-Toolbox',
    home_title: 'Kostenlose Online-Entwicklertools',
    home_subtitle: 'Schnelle, sichere und benutzerfreundliche Tools für Entwickler. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.'
});

translations['pt'] = Object.assign({}, translations['en'], {
    app_title: 'Caixa de Ferramentas do Desenvolvedor',
    home_title: 'Ferramentas Gratuitas Online para Desenvolvedores',
    home_subtitle: 'Ferramentas rápidas, seguras e fáceis de usar para desenvolvedores. Todo o processamento é feito localmente no seu navegador.'
});

translations['ru'] = Object.assign({}, translations['en'], {
    app_title: 'Инструменты разработчика',
    home_title: 'Бесплатные онлайн-инструменты для разработчиков',
    home_subtitle: 'Быстрые, безопасные и простые в использовании инструменты для разработчиков. Вся обработка выполняется локально в вашем браузере.'
});

let currentLang = 'en';

// 切换语言
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error('Translation not found for language:', lang);
        return;
    }

    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// ==========================================
// 工具切换
// ==========================================
function showTool(toolName) {
    // 切换导航链接状态
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    // 切换工具区域
    const toolSections = document.querySelectorAll('.tool-section');
    toolSections.forEach(section => section.classList.remove('active'));
    document.getElementById(toolName + '-tool').classList.add('active');
}

// 保留旧的 switchTab 函数以防万一
function switchTab(tabName) {
    showTool(tabName);
}

// ==========================================
// JSON 格式化功能
// ==========================================
function formatJSON() {
    const input = document.getElementById('json-input').value.trim();
    const output = document.getElementById('json-output');
    const errorDiv = document.getElementById('json-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        const jsonObj = JSON.parse(input);
        const formatted = JSON.stringify(jsonObj, null, 4);
        output.value = formatted;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_json_invalid + ': ' + e.message;
        output.value = '';
    }
}

function compressJSON() {
    const input = document.getElementById('json-input').value.trim();
    const output = document.getElementById('json-output');
    const errorDiv = document.getElementById('json-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        const jsonObj = JSON.parse(input);
        const compressed = JSON.stringify(jsonObj);
        output.value = compressed;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_json_invalid + ': ' + e.message;
        output.value = '';
    }
}

function clearJSON() {
    document.getElementById('json-input').value = '';
    document.getElementById('json-output').value = '';
    document.getElementById('json-error').textContent = '';
}

function copyJSON() {
    const output = document.getElementById('json-output');

    if (!output.value) {
        alert(translations[currentLang].error_no_input);
        return;
    }

    output.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const originalText = event.target.textContent;
    event.target.textContent = '✓ ' + translations[currentLang].success_copied;
    event.target.style.background = '#67c23a';

    setTimeout(() => {
        event.target.textContent = originalText;
        event.target.style.background = '';
    }, 1500);
}

// ==========================================
// 时间戳转换功能
// ==========================================

// 获取选中的时区
function getSelectedTimezone() {
    const select = document.getElementById('timezone-select');
    return select ? select.value : 'Asia/Shanghai';
}

// 格式化日期时间（支持时区）
function formatDateTime(date, timezone) {
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('zh-CN', options);
    const parts = formatter.formatToParts(date);

    const getValue = (type) => parts.find(p => p.type === type)?.value || '';

    const year = getValue('year');
    const month = getValue('month');
    const day = getValue('day');
    const hour = getValue('hour');
    const minute = getValue('minute');
    const second = getValue('second');

    // 获取星期
    const weekdayOptions = { timeZone: timezone, weekday: 'long' };
    const weekday = new Intl.DateTimeFormat('zh-CN', weekdayOptions).format(date);

    return {
        formatted: `${year}-${month}-${day} ${hour}:${minute}:${second} ${weekday}`,
        year, month, day, hour, minute, second, weekday
    };
}

// 更新当前时间显示
function updateCurrentTime() {
    const now = new Date();
    const timestampSec = Math.floor(now.getTime() / 1000);
    const timestampMs = now.getTime();
    const timezone = getSelectedTimezone();

    const dateInfo = formatDateTime(now, timezone);

    document.getElementById('current-datetime').textContent = dateInfo.formatted;
    document.getElementById('current-timestamp-sec').textContent = timestampSec;
    document.getElementById('current-timestamp-ms').textContent = timestampMs;
}

// 更新所有时间显示（时区改变时调用）
function updateAllTimes() {
    updateCurrentTime();

    // 如果有转换结果，重新转换
    const timestampInput = document.getElementById('timestamp-input').value.trim();
    if (timestampInput) {
        convertTimestamp();
    }
}

// 时间戳转日期
function convertTimestamp() {
    const input = document.getElementById('timestamp-input').value.trim();
    const resultDiv = document.getElementById('timestamp-result');
    const t = translations[currentLang];

    if (!input) {
        resultDiv.innerHTML = `<span style="color: #f56c6c;">❌ ${t.error_no_timestamp}</span>`;
        return;
    }

    const timestamp = parseInt(input);

    if (isNaN(timestamp)) {
        resultDiv.innerHTML = `<span style="color: #f56c6c;">❌ ${t.error_timestamp_invalid}</span>`;
        return;
    }

    // 判断是秒还是毫秒
    const unit = document.querySelector('input[name="ts-unit"]:checked').value;
    const date = unit === 'sec' ? new Date(timestamp * 1000) : new Date(timestamp);

    if (isNaN(date.getTime())) {
        resultDiv.innerHTML = `<span style="color: #f56c6c;">❌ ${t.error_timestamp_range}</span>`;
        return;
    }

    const timezone = getSelectedTimezone();
    const dateInfo = formatDateTime(date, timezone);

    resultDiv.innerHTML = `
        <div style="color: #67c23a; font-weight: 600; margin-bottom: 10px;">✓ ${t.result_success}</div>
        <div><strong>${t.result_timezone}</strong>${timezone}</div>
        <div><strong>${t.result_datetime}</strong>${dateInfo.formatted}</div>
        <div><strong>${t.result_timestamp_sec}</strong>${Math.floor(date.getTime() / 1000)}</div>
        <div><strong>${t.result_timestamp_ms}</strong>${date.getTime()}</div>
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e4e7ed;">
            <strong>${t.result_utc}</strong>${date.toISOString().replace('T', ' ').replace('.000Z', '')}
        </div>
    `;
}

// 日期转时间戳
function convertDatetime() {
    const input = document.getElementById('datetime-input').value;
    const resultDiv = document.getElementById('datetime-result');
    const t = translations[currentLang];

    if (!input) {
        resultDiv.innerHTML = `<span style="color: #f56c6c;">❌ ${t.error_no_datetime}</span>`;
        return;
    }

    const date = new Date(input);

    if (isNaN(date.getTime())) {
        resultDiv.innerHTML = `<span style="color: #f56c6c;">❌ ${t.error_datetime_invalid}</span>`;
        return;
    }

    const timestampSec = Math.floor(date.getTime() / 1000);
    const timestampMs = date.getTime();
    const timezone = getSelectedTimezone();
    const dateInfo = formatDateTime(date, timezone);

    resultDiv.innerHTML = `
        <div style="color: #67c23a; font-weight: 600; margin-bottom: 10px;">✓ ${t.result_success}</div>
        <div><strong>${t.result_timezone}</strong>${timezone}</div>
        <div><strong>${t.result_datetime}</strong>${dateInfo.formatted}</div>
        <div><strong>${t.result_timestamp_sec}</strong>${timestampSec}</div>
        <div><strong>${t.result_timestamp_ms}</strong>${timestampMs}</div>
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e4e7ed;">
            <strong>${t.result_utc}</strong>${date.toISOString().replace('T', ' ').replace('.000Z', '')}
        </div>
    `;
}

// 复制文本
function copyText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    const t = translations[currentLang];

    // 创建临时文本框
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // 显示复制成功提示
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + t.success_copied;
    btn.style.background = '#67c23a';
    btn.style.color = 'white';
    btn.style.borderColor = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    }, 1500);
}

// ==========================================
// 页面初始化
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // 加载保存的语言设置，默认英文
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLang = savedLang;

    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = savedLang;

        // 语言切换监听
        langSelect.addEventListener('change', function(e) {
            switchLanguage(e.target.value);
        });
    }

    // 初始化语言
    switchLanguage(savedLang);

    // 初始化当前时间显示
    updateCurrentTime();

    // 每秒更新一次当前时间
    setInterval(updateCurrentTime, 1000);

    // 设置默认日期时间为当前时间
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const datetimeInput = document.getElementById('datetime-input');
    datetimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;

    // 添加回车键快捷操作
    document.getElementById('json-input').addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            formatJSON();
        }
    });

    document.getElementById('timestamp-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            convertTimestamp();
        }
    });

    console.log('🛠️ 开发者工具箱已加载完成');
});
