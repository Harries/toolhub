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
        xml_tab: 'XML 格式化',
        xml_card_desc: '格式化、压缩和验证 XML 数据，支持语法高亮',
        timestamp_tab: '时间戳转换',
        timestamp_card_desc: '时间戳与日期时间互转，支持多时区',
        json_title: 'JSON 格式化工具',
        xml_title: 'XML 格式化工具',
        format_btn: '格式化',
        compress_btn: '压缩',
        clear_btn: '清空',
        copy_btn: '复制',
        input_label: '输入:',
        output_label: '输出:',
        json_input_label: '输入 JSON:',
        json_output_label: '格式化结果:',
        json_input_placeholder: '粘贴或输入 JSON 数据，例如：{"name":"张三","age":25}',
        json_output_placeholder: '格式化后的 JSON 将显示在这里',
        xml_input_placeholder: '在此粘贴您的 XML...',
        xml_output_placeholder: '格式化后的 XML 将显示在这里...',
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
        xml_tab: 'XML 格式化',
        xml_card_desc: '格式化、壓縮和驗證 XML 資料，支援語法高亮',
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
        xml_tab: 'XML Formatter',
        xml_card_desc: 'Format, compress, and validate XML data with syntax highlighting',
        timestamp_tab: 'Timestamp Converter',
        timestamp_card_desc: 'Convert between Unix timestamp and datetime with timezone support',
        json_title: 'JSON Formatter Tool',
        xml_title: 'XML Formatter Tool',
        format_btn: 'Format',
        compress_btn: 'Compress',
        clear_btn: 'Clear',
        copy_btn: 'Copy',
        input_label: 'Input:',
        output_label: 'Output:',
        json_input_label: 'Input JSON:',
        json_output_label: 'Formatted Result:',
        json_input_placeholder: 'Paste or input JSON data, e.g.: {"name":"John","age":25}',
        json_output_placeholder: 'Formatted JSON will be displayed here',
        xml_input_placeholder: 'Paste your XML here...',
        xml_output_placeholder: 'Formatted XML will appear here...',
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

// 日语翻译
translations['ja'] = {
    app_title: 'デベロッパーツールボックス',
    home_title: '無料オンライン開発者ツール',
    home_subtitle: '高速、安全、使いやすい開発者ツール。すべての処理はブラウザ内でローカルに行われます。',
    json_tab: 'JSONフォーマッター',
    json_card_desc: 'JSON データのフォーマット、圧縮、検証をシンタックスハイライト付きで実行',
    xml_tab: 'XMLフォーマッター',
    xml_card_desc: 'XML データのフォーマット、圧縮、検証をシンタックスハイライト付きで実行',
    timestamp_tab: 'タイムスタンプ変換',
    timestamp_card_desc: 'Unix タイムスタンプと日時の相互変換、タイムゾーン対応',
    json_title: 'JSONフォーマッターツール',
    xml_title: 'XMLフォーマッターツール',
    format_btn: 'フォーマット',
    compress_btn: '圧縮',
    clear_btn: 'クリア',
    copy_btn: 'コピー',
    input_label: '入力:',
    output_label: '出力:',
    json_input_label: 'JSON入力:',
    json_output_label: 'フォーマット結果:',
    json_input_placeholder: 'JSONデータを貼り付けまたは入力してください。例: {"name":"太郎","age":25}',
    json_output_placeholder: 'フォーマットされたJSONがここに表示されます',
    xml_input_placeholder: 'XMLをここに貼り付けてください...',
    xml_output_placeholder: 'フォーマットされたXMLがここに表示されます...',
    timestamp_title: 'タイムスタンプ変換ツール',
    timezone_label: 'タイムゾーンを選択:',
    current_time_title: '現在時刻',
    current_time_label: '現在時刻:',
    timestamp_sec_label: 'タイムスタンプ（秒）:',
    timestamp_ms_label: 'タイムスタンプ（ミリ秒）:',
    ts_to_date_title: 'タイムスタンプから日時へ',
    input_timestamp_label: 'タイムスタンプを入力:',
    input_timestamp_placeholder: 'タイムスタンプを入力（秒またはミリ秒）',
    unit_sec: '秒',
    unit_ms: 'ミリ秒',
    convert_btn: '変換',
    date_to_ts_title: '日時からタイムスタンプへ',
    select_datetime_label: '日時を選択:',
    footer_text: '© 2025 デベロッパーツールボックス | 静的ツール、データはサーバーにアップロードされません',
    error_no_input: 'データを入力してください',
    error_json_invalid: '無効なJSON形式',
    error_no_timestamp: 'タイムスタンプを入力してください',
    error_timestamp_invalid: '無効なタイムスタンプ形式、数字を入力してください',
    error_timestamp_range: '無効なタイムスタンプ',
    error_no_datetime: '日時を選択してください',
    error_datetime_invalid: '無効な日時',
    success_copied: 'コピーしました',
    result_success: '変換成功',
    result_timezone: 'タイムゾーン:',
    result_datetime: '日時:',
    result_timestamp_sec: 'タイムスタンプ（秒）:',
    result_timestamp_ms: 'タイムスタンプ（ミリ秒）:',
    result_utc: 'UTC時刻:'
};

// 韩语翻译
translations['ko'] = {
    app_title: '개발자 도구 상자',
    home_title: '무료 온라인 개발자 도구',
    home_subtitle: '빠르고 안전하며 사용하기 쉬운 개발자 도구. 모든 처리는 브라우저에서 로컬로 수행됩니다.',
    json_tab: 'JSON 포맷터',
    json_card_desc: '구문 강조 표시로 JSON 데이터 형식 지정, 압축 및 검증',
    xml_tab: 'XML 포맷터',
    xml_card_desc: '구문 강조 표시로 XML 데이터 형식 지정, 압축 및 검증',
    timestamp_tab: '타임스탬프 변환',
    timestamp_card_desc: 'Unix 타임스탬프와 날짜/시간 간 변환, 시간대 지원',
    json_title: 'JSON 포맷터 도구',
    xml_title: 'XML 포맷터 도구',
    format_btn: '형식 지정',
    compress_btn: '압축',
    clear_btn: '지우기',
    copy_btn: '복사',
    input_label: '입력:',
    output_label: '출력:',
    json_input_label: 'JSON 입력:',
    json_output_label: '형식 지정 결과:',
    json_input_placeholder: 'JSON 데이터를 붙여넣거나 입력하세요. 예: {"name":"홍길동","age":25}',
    json_output_placeholder: '형식이 지정된 JSON이 여기에 표시됩니다',
    xml_input_placeholder: 'XML을 여기에 붙여넣으세요...',
    xml_output_placeholder: '형식이 지정된 XML이 여기에 표시됩니다...',
    timestamp_title: '타임스탬프 변환 도구',
    timezone_label: '시간대 선택:',
    current_time_title: '현재 시간',
    current_time_label: '현재 시간:',
    timestamp_sec_label: '타임스탬프(초):',
    timestamp_ms_label: '타임스탬프(밀리초):',
    ts_to_date_title: '타임스탬프를 날짜로',
    input_timestamp_label: '타임스탬프 입력:',
    input_timestamp_placeholder: '타임스탬프 입력(초 또는 밀리초)',
    unit_sec: '초',
    unit_ms: '밀리초',
    convert_btn: '변환',
    date_to_ts_title: '날짜를 타임스탬프로',
    select_datetime_label: '날짜/시간 선택:',
    footer_text: '© 2025 개발자 도구 상자 | 정적 도구, 데이터는 서버에 업로드되지 않습니다',
    error_no_input: '데이터를 입력하세요',
    error_json_invalid: '잘못된 JSON 형식',
    error_no_timestamp: '타임스탬프를 입력하세요',
    error_timestamp_invalid: '잘못된 타임스탬프 형식, 숫자를 입력하세요',
    error_timestamp_range: '잘못된 타임스탬프',
    error_no_datetime: '날짜/시간을 선택하세요',
    error_datetime_invalid: '잘못된 날짜/시간',
    success_copied: '복사됨',
    result_success: '변환 성공',
    result_timezone: '시간대:',
    result_datetime: '날짜/시간:',
    result_timestamp_sec: '타임스탬프(초):',
    result_timestamp_ms: '타임스탬프(밀리초):',
    result_utc: 'UTC 시간:'
};

// 西班牙语翻译
translations['es'] = {
    app_title: 'Caja de Herramientas para Desarrolladores',
    home_title: 'Herramientas Gratuitas en Línea para Desarrolladores',
    home_subtitle: 'Herramientas rápidas, seguras y fáciles de usar para desarrolladores. Todo el procesamiento se realiza localmente en su navegador.',
    json_tab: 'Formateador JSON',
    json_card_desc: 'Formatear, comprimir y validar datos JSON con resaltado de sintaxis',
    xml_tab: 'Formateador XML',
    xml_card_desc: 'Formatear, comprimir y validar datos XML con resaltado de sintaxis',
    timestamp_tab: 'Conversor de Marca de Tiempo',
    timestamp_card_desc: 'Convertir entre marca de tiempo Unix y fecha/hora con soporte de zona horaria',
    json_title: 'Herramienta de Formateador JSON',
    xml_title: 'Herramienta de Formateador XML',
    format_btn: 'Formatear',
    compress_btn: 'Comprimir',
    clear_btn: 'Limpiar',
    copy_btn: 'Copiar',
    input_label: 'Entrada:',
    output_label: 'Salida:',
    json_input_label: 'Entrada JSON:',
    json_output_label: 'Resultado Formateado:',
    json_input_placeholder: 'Pegue o ingrese datos JSON, ej: {"name":"Juan","age":25}',
    json_output_placeholder: 'El JSON formateado se mostrará aquí',
    xml_input_placeholder: 'Pegue su XML aquí...',
    xml_output_placeholder: 'El XML formateado aparecerá aquí...',
    timestamp_title: 'Herramienta de Conversor de Marca de Tiempo',
    timezone_label: 'Seleccionar Zona Horaria:',
    current_time_title: 'Hora Actual',
    current_time_label: 'Hora Actual:',
    timestamp_sec_label: 'Marca de Tiempo (segundos):',
    timestamp_ms_label: 'Marca de Tiempo (milisegundos):',
    ts_to_date_title: 'Marca de Tiempo a Fecha',
    input_timestamp_label: 'Ingresar Marca de Tiempo:',
    input_timestamp_placeholder: 'Ingresar marca de tiempo (segundos o milisegundos)',
    unit_sec: 'Segundos',
    unit_ms: 'Milisegundos',
    convert_btn: 'Convertir',
    date_to_ts_title: 'Fecha a Marca de Tiempo',
    select_datetime_label: 'Seleccionar Fecha/Hora:',
    footer_text: '© 2025 Caja de Herramientas para Desarrolladores | Herramienta estática, los datos no se cargan en el servidor',
    error_no_input: 'Por favor ingrese datos',
    error_json_invalid: 'Formato JSON inválido',
    error_no_timestamp: 'Por favor ingrese marca de tiempo',
    error_timestamp_invalid: 'Formato de marca de tiempo inválido, por favor ingrese números',
    error_timestamp_range: 'Marca de tiempo inválida',
    error_no_datetime: 'Por favor seleccione fecha/hora',
    error_datetime_invalid: 'Fecha/hora inválida',
    success_copied: 'Copiado',
    result_success: 'Conversión exitosa',
    result_timezone: 'Zona Horaria:',
    result_datetime: 'Fecha/Hora:',
    result_timestamp_sec: 'Marca de Tiempo (seg):',
    result_timestamp_ms: 'Marca de Tiempo (ms):',
    result_utc: 'Hora UTC:'
};

// 法语翻译
translations['fr'] = {
    app_title: 'Boîte à Outils pour Développeurs',
    home_title: 'Outils Gratuits en Ligne pour Développeurs',
    home_subtitle: 'Outils rapides, sécurisés et faciles à utiliser pour les développeurs. Tout le traitement est effectué localement dans votre navigateur.',
    json_tab: 'Formateur JSON',
    json_card_desc: 'Formater, compresser et valider les données JSON avec coloration syntaxique',
    xml_tab: 'Formateur XML',
    xml_card_desc: 'Formater, compresser et valider les données XML avec coloration syntaxique',
    timestamp_tab: 'Convertisseur d\'Horodatage',
    timestamp_card_desc: 'Convertir entre horodatage Unix et date/heure avec support de fuseau horaire',
    json_title: 'Outil de Formateur JSON',
    xml_title: 'Outil de Formateur XML',
    format_btn: 'Formater',
    compress_btn: 'Compresser',
    clear_btn: 'Effacer',
    copy_btn: 'Copier',
    input_label: 'Entrée:',
    output_label: 'Sortie:',
    json_input_label: 'Entrée JSON:',
    json_output_label: 'Résultat Formaté:',
    json_input_placeholder: 'Collez ou saisissez des données JSON, ex: {"name":"Jean","age":25}',
    json_output_placeholder: 'Le JSON formaté sera affiché ici',
    xml_input_placeholder: 'Collez votre XML ici...',
    xml_output_placeholder: 'Le XML formaté apparaîtra ici...',
    timestamp_title: 'Outil de Convertisseur d\'Horodatage',
    timezone_label: 'Sélectionner le Fuseau Horaire:',
    current_time_title: 'Heure Actuelle',
    current_time_label: 'Heure Actuelle:',
    timestamp_sec_label: 'Horodatage (secondes):',
    timestamp_ms_label: 'Horodatage (millisecondes):',
    ts_to_date_title: 'Horodatage vers Date',
    input_timestamp_label: 'Saisir l\'Horodatage:',
    input_timestamp_placeholder: 'Saisir l\'horodatage (secondes ou millisecondes)',
    unit_sec: 'Secondes',
    unit_ms: 'Millisecondes',
    convert_btn: 'Convertir',
    date_to_ts_title: 'Date vers Horodatage',
    select_datetime_label: 'Sélectionner Date/Heure:',
    footer_text: '© 2025 Boîte à Outils pour Développeurs | Outil statique, les données ne sont pas téléchargées sur le serveur',
    error_no_input: 'Veuillez saisir des données',
    error_json_invalid: 'Format JSON invalide',
    error_no_timestamp: 'Veuillez saisir l\'horodatage',
    error_timestamp_invalid: 'Format d\'horodatage invalide, veuillez saisir des nombres',
    error_timestamp_range: 'Horodatage invalide',
    error_no_datetime: 'Veuillez sélectionner date/heure',
    error_datetime_invalid: 'Date/heure invalide',
    success_copied: 'Copié',
    result_success: 'Conversion réussie',
    result_timezone: 'Fuseau Horaire:',
    result_datetime: 'Date/Heure:',
    result_timestamp_sec: 'Horodatage (sec):',
    result_timestamp_ms: 'Horodatage (ms):',
    result_utc: 'Heure UTC:'
};

// 德语翻译
translations['de'] = {
    app_title: 'Entwickler-Toolbox',
    home_title: 'Kostenlose Online-Entwicklertools',
    home_subtitle: 'Schnelle, sichere und benutzerfreundliche Tools für Entwickler. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
    json_tab: 'JSON-Formatierer',
    json_card_desc: 'JSON-Daten mit Syntaxhervorhebung formatieren, komprimieren und validieren',
    xml_tab: 'XML-Formatierer',
    xml_card_desc: 'XML-Daten mit Syntaxhervorhebung formatieren, komprimieren und validieren',
    timestamp_tab: 'Zeitstempel-Konverter',
    timestamp_card_desc: 'Konvertierung zwischen Unix-Zeitstempel und Datum/Uhrzeit mit Zeitzonenunterstützung',
    json_title: 'JSON-Formatierer-Tool',
    xml_title: 'XML-Formatierer-Tool',
    format_btn: 'Formatieren',
    compress_btn: 'Komprimieren',
    clear_btn: 'Löschen',
    copy_btn: 'Kopieren',
    input_label: 'Eingabe:',
    output_label: 'Ausgabe:',
    json_input_label: 'JSON-Eingabe:',
    json_output_label: 'Formatiertes Ergebnis:',
    json_input_placeholder: 'JSON-Daten einfügen oder eingeben, z.B.: {"name":"Hans","age":25}',
    json_output_placeholder: 'Formatiertes JSON wird hier angezeigt',
    xml_input_placeholder: 'Fügen Sie Ihr XML hier ein...',
    xml_output_placeholder: 'Formatiertes XML wird hier angezeigt...',
    timestamp_title: 'Zeitstempel-Konverter-Tool',
    timezone_label: 'Zeitzone Auswählen:',
    current_time_title: 'Aktuelle Zeit',
    current_time_label: 'Aktuelle Zeit:',
    timestamp_sec_label: 'Zeitstempel (Sekunden):',
    timestamp_ms_label: 'Zeitstempel (Millisekunden):',
    ts_to_date_title: 'Zeitstempel zu Datum',
    input_timestamp_label: 'Zeitstempel Eingeben:',
    input_timestamp_placeholder: 'Zeitstempel eingeben (Sekunden oder Millisekunden)',
    unit_sec: 'Sekunden',
    unit_ms: 'Millisekunden',
    convert_btn: 'Konvertieren',
    date_to_ts_title: 'Datum zu Zeitstempel',
    select_datetime_label: 'Datum/Uhrzeit Auswählen:',
    footer_text: '© 2025 Entwickler-Toolbox | Statisches Tool, Daten werden nicht auf den Server hochgeladen',
    error_no_input: 'Bitte Daten eingeben',
    error_json_invalid: 'Ungültiges JSON-Format',
    error_no_timestamp: 'Bitte Zeitstempel eingeben',
    error_timestamp_invalid: 'Ungültiges Zeitstempelformat, bitte Zahlen eingeben',
    error_timestamp_range: 'Ungültiger Zeitstempel',
    error_no_datetime: 'Bitte Datum/Uhrzeit auswählen',
    error_datetime_invalid: 'Ungültiges Datum/Uhrzeit',
    success_copied: 'Kopiert',
    result_success: 'Konvertierung erfolgreich',
    result_timezone: 'Zeitzone:',
    result_datetime: 'Datum/Uhrzeit:',
    result_timestamp_sec: 'Zeitstempel (Sek):',
    result_timestamp_ms: 'Zeitstempel (ms):',
    result_utc: 'UTC-Zeit:'
};

// 葡萄牙语翻译
translations['pt'] = {
    app_title: 'Caixa de Ferramentas do Desenvolvedor',
    home_title: 'Ferramentas Gratuitas Online para Desenvolvedores',
    home_subtitle: 'Ferramentas rápidas, seguras e fáceis de usar para desenvolvedores. Todo o processamento é feito localmente no seu navegador.',
    json_tab: 'Formatador JSON',
    json_card_desc: 'Formatar, comprimir e validar dados JSON com destaque de sintaxe',
    xml_tab: 'Formatador XML',
    xml_card_desc: 'Formatar, comprimir e validar dados XML com destaque de sintaxe',
    timestamp_tab: 'Conversor de Timestamp',
    timestamp_card_desc: 'Converter entre timestamp Unix e data/hora com suporte a fuso horário',
    json_title: 'Ferramenta de Formatador JSON',
    xml_title: 'Ferramenta de Formatador XML',
    format_btn: 'Formatar',
    compress_btn: 'Comprimir',
    clear_btn: 'Limpar',
    copy_btn: 'Copiar',
    input_label: 'Entrada:',
    output_label: 'Saída:',
    json_input_label: 'Entrada JSON:',
    json_output_label: 'Resultado Formatado:',
    json_input_placeholder: 'Cole ou insira dados JSON, ex: {"name":"João","age":25}',
    json_output_placeholder: 'O JSON formatado será exibido aqui',
    xml_input_placeholder: 'Cole seu XML aqui...',
    xml_output_placeholder: 'O XML formatado aparecerá aqui...',
    timestamp_title: 'Ferramenta de Conversor de Timestamp',
    timezone_label: 'Selecionar Fuso Horário:',
    current_time_title: 'Hora Atual',
    current_time_label: 'Hora Atual:',
    timestamp_sec_label: 'Timestamp (segundos):',
    timestamp_ms_label: 'Timestamp (milissegundos):',
    ts_to_date_title: 'Timestamp para Data',
    input_timestamp_label: 'Inserir Timestamp:',
    input_timestamp_placeholder: 'Inserir timestamp (segundos ou milissegundos)',
    unit_sec: 'Segundos',
    unit_ms: 'Milissegundos',
    convert_btn: 'Converter',
    date_to_ts_title: 'Data para Timestamp',
    select_datetime_label: 'Selecionar Data/Hora:',
    footer_text: '© 2025 Caixa de Ferramentas do Desenvolvedor | Ferramenta estática, os dados não são enviados para o servidor',
    error_no_input: 'Por favor, insira dados',
    error_json_invalid: 'Formato JSON inválido',
    error_no_timestamp: 'Por favor, insira o timestamp',
    error_timestamp_invalid: 'Formato de timestamp inválido, por favor insira números',
    error_timestamp_range: 'Timestamp inválido',
    error_no_datetime: 'Por favor, selecione data/hora',
    error_datetime_invalid: 'Data/hora inválida',
    success_copied: 'Copiado',
    result_success: 'Conversão bem-sucedida',
    result_timezone: 'Fuso Horário:',
    result_datetime: 'Data/Hora:',
    result_timestamp_sec: 'Timestamp (seg):',
    result_timestamp_ms: 'Timestamp (ms):',
    result_utc: 'Hora UTC:'
};

// 俄语翻译
translations['ru'] = {
    app_title: 'Инструменты разработчика',
    home_title: 'Бесплатные онлайн-инструменты для разработчиков',
    home_subtitle: 'Быстрые, безопасные и простые в использовании инструменты для разработчиков. Вся обработка выполняется локально в вашем браузере.',
    json_tab: 'Форматтер JSON',
    json_card_desc: 'Форматирование, сжатие и проверка данных JSON с подсветкой синтаксиса',
    xml_tab: 'Форматтер XML',
    xml_card_desc: 'Форматирование, сжатие и проверка данных XML с подсветкой синтаксиса',
    timestamp_tab: 'Конвертер временных меток',
    timestamp_card_desc: 'Преобразование между временной меткой Unix и датой/временем с поддержкой часовых поясов',
    json_title: 'Инструмент форматирования JSON',
    xml_title: 'Инструмент форматирования XML',
    format_btn: 'Форматировать',
    compress_btn: 'Сжать',
    clear_btn: 'Очистить',
    copy_btn: 'Копировать',
    input_label: 'Ввод:',
    output_label: 'Вывод:',
    json_input_label: 'Ввод JSON:',
    json_output_label: 'Форматированный результат:',
    json_input_placeholder: 'Вставьте или введите данные JSON, например: {"name":"Иван","age":25}',
    json_output_placeholder: 'Форматированный JSON будет отображен здесь',
    xml_input_placeholder: 'Вставьте ваш XML здесь...',
    xml_output_placeholder: 'Форматированный XML появится здесь...',
    timestamp_title: 'Инструмент конвертера временных меток',
    timezone_label: 'Выбрать часовой пояс:',
    current_time_title: 'Текущее время',
    current_time_label: 'Текущее время:',
    timestamp_sec_label: 'Временная метка (секунды):',
    timestamp_ms_label: 'Временная метка (миллисекунды):',
    ts_to_date_title: 'Временная метка в дату',
    input_timestamp_label: 'Введите временную метку:',
    input_timestamp_placeholder: 'Введите временную метку (секунды или миллисекунды)',
    unit_sec: 'Секунды',
    unit_ms: 'Миллисекунды',
    convert_btn: 'Конвертировать',
    date_to_ts_title: 'Дата во временную метку',
    select_datetime_label: 'Выбрать дату/время:',
    footer_text: '© 2025 Инструменты разработчика | Статический инструмент, данные не загружаются на сервер',
    error_no_input: 'Пожалуйста, введите данные',
    error_json_invalid: 'Неверный формат JSON',
    error_no_timestamp: 'Пожалуйста, введите временную метку',
    error_timestamp_invalid: 'Неверный формат временной метки, пожалуйста, введите числа',
    error_timestamp_range: 'Неверная временная метка',
    error_no_datetime: 'Пожалуйста, выберите дату/время',
    error_datetime_invalid: 'Неверная дата/время',
    success_copied: 'Скопировано',
    result_success: 'Конвертация успешна',
    result_timezone: 'Часовой пояс:',
    result_datetime: 'Дата/время:',
    result_timestamp_sec: 'Временная метка (сек):',
    result_timestamp_ms: 'Временная метка (мс):',
    result_utc: 'Время UTC:'
};

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
// XML 格式化功能
// ==========================================
function formatXML() {
    const input = document.getElementById('xml-input');
    const output = document.getElementById('xml-output');
    const errorDiv = document.getElementById('xml-error');

    if (!input || !output) return;

    const xmlText = input.value.trim();

    if (!xmlText) {
        showError(errorDiv, translations[currentLang].error_no_input || 'Please input XML data');
        return;
    }

    try {
        // 解析 XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // 检查解析错误
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
            throw new Error('XML parsing error');
        }

        // 格式化 XML
        const formatted = formatXMLString(xmlDoc);
        output.value = formatted;
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    } catch (error) {
        showError(errorDiv, translations[currentLang].error_json_invalid || 'XML format error: ' + error.message);
        output.value = '';
    }
}

function formatXMLString(xmlDoc) {
    const serializer = new XMLSerializer();
    let xmlString = serializer.serializeToString(xmlDoc);

    // 美化 XML
    let formatted = '';
    let indent = 0;
    const tab = '  ';

    xmlString.split(/>\s*</).forEach((node, index, arr) => {
        if (index > 0) {
            node = '<' + node;
        }
        if (index < arr.length - 1) {
            node = node + '>';
        }

        // 减少缩进（闭合标签）
        if (node.match(/^<\/\w/)) {
            indent--;
        }

        // 添加缩进
        formatted += tab.repeat(indent) + node + '\n';

        // 增加缩进（开始标签）
        if (node.match(/^<\w[^>]*[^\/]>$/)) {
            indent++;
        }
    });

    return formatted.trim();
}

function compressXML() {
    const input = document.getElementById('xml-input');
    const output = document.getElementById('xml-output');
    const errorDiv = document.getElementById('xml-error');

    if (!input || !output) return;

    const xmlText = input.value.trim();

    if (!xmlText) {
        showError(errorDiv, translations[currentLang].error_no_input || 'Please input XML data');
        return;
    }

    try {
        // 解析 XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // 检查解析错误
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
            throw new Error('XML parsing error');
        }

        // 压缩 XML（移除空白）
        const serializer = new XMLSerializer();
        const compressed = serializer.serializeToString(xmlDoc).replace(/>\s+</g, '><');

        output.value = compressed;
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    } catch (error) {
        showError(errorDiv, translations[currentLang].error_json_invalid || 'XML format error: ' + error.message);
        output.value = '';
    }
}

function copyXML() {
    const output = document.getElementById('xml-output');
    if (!output) return;

    if (output.value) {
        output.select();
        document.execCommand('copy');
        showCopySuccess(document.querySelector('#xml-tool .btn-success'));
    }
}

function clearXML() {
    const input = document.getElementById('xml-input');
    const output = document.getElementById('xml-output');
    const errorDiv = document.getElementById('xml-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
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
    const jsonInput = document.getElementById('json-input');
    if (jsonInput) {
        jsonInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                formatJSON();
            }
        });
    }

    const xmlInput = document.getElementById('xml-input');
    if (xmlInput) {
        xmlInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                formatXML();
            }
        });
    }

    const timestampInput = document.getElementById('timestamp-input');
    if (timestampInput) {
        timestampInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                convertTimestamp();
            }
        });
    }

    console.log('🛠️ 开发者工具箱已加载完成');
});
