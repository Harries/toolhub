// ==========================================
// 多语言支持
// ==========================================
const translations = {
    'zh-CN': {
        app_title: 'Toolhub',
        home_title: '免费在线开发者工具',
        home_subtitle: '快速、安全、易用的开发者工具。所有处理都在浏览器本地完成。',

        // 导航分类
        nav_encryption: '🔐 加密与编码',
        nav_format: '📝 格式化与转换',
        nav_time: '⏰ 时间与任务',
        nav_devtools: '🔧 开发工具',

        // 加密与编码工具
        tool_text_encryption: '文本加解密',
        tool_text_encryption_desc: '一个简单的文本加解密工具，为用户提供便捷的信息保护方案',
        tool_base64: 'Base64 编码',
        tool_base64_desc: '将文本或文件编码为 Base64 格式，或解码 Base64 字符串',
        tool_md5: 'MD5 加密',
        tool_md5_desc: '将文本转换为 MD5 哈希值，支持大写或小写格式输出',
        tool_jwt: 'JWT Token 生成',
        tool_jwt_desc: '生成和解析 JSON Web Token，并且支持选择多种算法',
        tool_rsa: 'RSA 公私钥生成',
        tool_rsa_desc: '生成 RSA 公钥和私钥，并且支持多种密钥长度选择',
        tool_url: 'URL 编解码',
        tool_url_desc: '使用 ASCII 映射对 URL 中的非标准字符进行编码或解码',

        // 格式化与转换工具
        tool_json_validator: 'JSON 格式校验',
        tool_json_validator_desc: '验证 JSON 数据格式是否正确，支持格式化和错误提示',
        tool_json_compress: 'JSON 压缩',
        tool_json_compress_desc: '将 JSON 数据压缩为一行的紧凑格式，以便节省空间',
        tool_yaml: 'YAML-Properties 转换',
        tool_yaml_desc: '在 YAML 和 Properties 格式之间相互转换，简化配置文件管理',
        tool_xml: 'XML 压缩和格式化',
        tool_xml_desc: '压缩 XML 数据以优化加载，或格式化为易读的样式',
        tool_sql_format: 'SQL 格式化',
        tool_sql_format_desc: '格式化SQL语句以提高代码的可读性、可维护性和可理解性',
        tool_sql_validator: 'SQL验证器',
        tool_sql_validator_desc: '格式化和校验SQL DDL语句，支持多种数据库，提升代码可读性',
        tool_css: 'CSS 压缩和格式化',
        tool_css_desc: '压缩 CSS 代码以优化加载，或格式化为易读的样式',
        tool_naming: '命名格式转换',
        tool_naming_desc: '在驼峰命名和下划线命名之间进行转换，支持大小驼峰和多种下划线格式',
        tool_unicode: 'Unicode 转换',
        tool_unicode_desc: '在中文和 Unicode 字符之间进行双向转换，以方便进行字符处理',
        tool_chinese: '中文简繁转换',
        tool_chinese_desc: '在简体中文和繁体中文之间进行双向转换，支持文本和文件转换',

        // 时间与任务工具
        tool_timestamp: '时间戳转换',
        tool_timestamp_desc: '将时间戳与可读日期时间之间相互转换，支持多种格式',
        tool_crontab: 'Crontab 编写器',
        tool_crontab_desc: '轻松生成和管理 Crontab 调度表达式，支持实时预览和常见示例',
        tool_calendar: '日历查看',
        tool_calendar_desc: '可以随时随地查看月份日历数据，如日期和节气等信息',
        tool_timer: '简单计时器',
        tool_timer_desc: '一个简单易用的计时器工具，支持计数器和倒计时功能',

        // 开发工具
        tool_qrcode: '二维码工具',
        tool_qrcode_desc: '支持生成简单二维码或解码二维码图片，使用非常简单',
        tool_regex: '正则表达式测试',
        tool_regex_desc: '验证正则表达式否能够准确地匹配、提取或替换符合特定模式的字符串',
        tool_char_counter: '字符数统计',
        tool_char_counter_desc: '快速统计文本的字符数、单词数和行数，适合写作、编程和数据分析',
        tool_ip: 'IP地址获取与查询',
        tool_ip_desc: '快速获取您的出口公网 IP 地址，或者查询IP地址归属地信息，非常简单便捷又实用',
        tool_uuid: 'UUID 生成器',
        tool_uuid_desc: '支持生成 v1、v3、v4、v5 和 NIL 版本的 UUID，满足不同场景需求',
        tool_password: '随机密码生成',
        tool_password_desc: '生成包含数字、字母和特殊字符的随机密码，可自定义长度',
        tool_modulo: '取模计算器',
        tool_modulo_desc: '计算两个数的模，即一个数除以另一个数所得的余数',
        tool_calculator: '简单计算器',
        tool_calculator_desc: '一个可以随时随地使用的简单计算器，支持基本的加减乘除运算',
        tool_ascii: 'ASCII 艺术字',
        tool_ascii_desc: '将英文字符转化为由 ASCII 字符精心排列组合成的文本形式',
        tool_color: '颜色选择器',
        tool_color_desc: '能够让用户通过直观简单的操作方式精确选取所需颜色',

        // 旧的翻译保留
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
        result_utc: 'UTC时间：',
        markdown_tab: 'Markdown 转 PDF',
        markdown_card_desc: '将 Markdown 文档转换为 PDF 文件，支持格式化',
        markdown_title: 'Markdown 转 PDF 转换器',
        markdown_input_label: '输入 Markdown:',
        markdown_input_placeholder: '在此粘贴或输入 Markdown 内容...',
        preview_label: '预览:',
        preview_btn: '预览',
        download_btn: '下载 PDF',
        error_markdown_invalid: 'Markdown 格式错误',
        error_pdf_generation: 'PDF 生成失败',
        crontab_tab: 'Crontab 编写器',
        crontab_card_desc: '创建、验证和理解 Cron 表达式，支持可视化解释',
        crontab_title: 'Crontab 表达式编写器',
        crontab_schedule_settings: '调度设置:',
        crontab_minute: '分钟:',
        crontab_hour: '小时:',
        crontab_day: '日期:',
        crontab_month: '月份:',
        crontab_weekday: '星期:',
        crontab_every: '每',
        crontab_specific: '指定',
        crontab_range: '范围',
        crontab_interval: '间隔',
        crontab_not_specified: '不指定',
        generate_btn: '生成',
        crontab_expression: 'Crontab 表达式:',
        copy_btn: '复制',
        crontab_next_runs: '接下来 5 次执行时间:',
        crontab_common_examples: '常见示例:',
        example_midnight: '每天凌晨 0 点',
        example_every2h: '每 2 小时',
        example_every5m: '每 5 分钟',
        example_workday9: '工作日 9 点',
        success_copied: '已复制',
        error_crontab_invalid: '无效的 Crontab 表达式',
        url_tab: 'URL 编解码',
        url_card_desc: '编码和解码 URL，支持多种编码格式',
        url_title: 'URL 编解码工具',
        url_input_label: '输入内容:',
        url_input_placeholder: '输入文本或 URL...',
        url_encode_slash: '对 "/" 和 ":" 进行编码',
        url_encode_btn: 'URL 编码',
        url_decode_btn: 'URL 解码',
        url_result_label: '转换结果:',
        url_result_placeholder: '结果将显示在这里...',
        url_mapping_title: 'ASCII 与 URL 编码映射表',
        url_character: '字符',
        url_ascii_code: 'ASCII 码',
        url_encoded: 'URL 编码',
        error_decode_failed: 'URL 解码失败'
    },
    'zh-TW': {
        app_title: 'Toolhub',
        home_title: '免費線上開發者工具',
        home_subtitle: '快速、安全、易用的開發者工具。所有處理都在瀏覽器本地完成。',

        // 導航分類
        nav_encryption: '🔐 加密與編碼',
        nav_format: '📝 格式化與轉換',
        nav_time: '⏰ 時間與任務',
        nav_devtools: '🔧 開發工具',

        // 加密與編碼工具
        tool_text_encryption: '文本加解密',
        tool_text_encryption_desc: '一個簡單的文本加解密工具，為用戶提供便捷的信息保護方案',
        tool_base64: 'Base64 編碼',
        tool_base64_desc: '將文本或文件編碼為 Base64 格式，或解碼 Base64 字符串',
        tool_md5: 'MD5 加密',
        tool_md5_desc: '將文本轉換為 MD5 哈希值，支持大寫或小寫格式輸出',
        tool_jwt: 'JWT Token 生成',
        tool_jwt_desc: '生成和解析 JSON Web Token，並且支持選擇多種算法',
        tool_rsa: 'RSA 公私鑰生成',
        tool_rsa_desc: '生成 RSA 公鑰和私鑰，並且支持多種密鑰長度選擇',
        tool_url: 'URL 編解碼',
        tool_url_desc: '使用 ASCII 映射對 URL 中的非標準字符進行編碼或解碼',

        // 格式化與轉換工具
        tool_json_validator: 'JSON 格式校驗',
        tool_json_validator_desc: '驗證 JSON 數據格式是否正確，支持格式化和錯誤提示',
        tool_json_compress: 'JSON 壓縮',
        tool_json_compress_desc: '將 JSON 數據壓縮為一行的緊湊格式，以便節省空間',
        tool_yaml: 'YAML-Properties 轉換',
        tool_yaml_desc: '在 YAML 和 Properties 格式之間相互轉換，簡化配置文件管理',
        tool_xml: 'XML 壓縮和格式化',
        tool_xml_desc: '壓縮 XML 數據以優化加載，或格式化為易讀的樣式',
        tool_sql_format: 'SQL 格式化',
        tool_sql_format_desc: '格式化SQL語句以提高代碼的可讀性、可維護性和可理解性',
        tool_sql_validator: 'SQL驗證器',
        tool_sql_validator_desc: '格式化和校驗SQL DDL語句，支持多種數據庫，提升代碼可讀性',
        tool_css: 'CSS 壓縮和格式化',
        tool_css_desc: '壓縮 CSS 代碼以優化加載，或格式化為易讀的樣式',
        tool_naming: '命名格式轉換',
        tool_naming_desc: '在駝峰命名和下劃線命名之間進行轉換，支持大小駝峰和多種下劃線格式',
        tool_unicode: 'Unicode 轉換',
        tool_unicode_desc: '在中文和 Unicode 字符之間進行雙向轉換，以方便進行字符處理',
        tool_chinese: '中文簡繁轉換',
        tool_chinese_desc: '在簡體中文和繁體中文之間進行雙向轉換，支持文本和文件轉換',

        // 時間與任務工具
        tool_timestamp: '時間戳轉換',
        tool_timestamp_desc: '將時間戳與可讀日期時間之間相互轉換，支持多種格式',
        tool_crontab: 'Crontab 編寫器',
        tool_crontab_desc: '輕鬆生成和管理 Crontab 調度表達式，支持實時預覽和常見示例',
        tool_calendar: '日曆查看',
        tool_calendar_desc: '可以隨時隨地查看月份日曆數據，如日期和節氣等信息',
        tool_timer: '簡單計時器',
        tool_timer_desc: '一個簡單易用的計時器工具，支持計數器和倒計時功能',

        // 開發工具
        tool_qrcode: '二維碼工具',
        tool_qrcode_desc: '支持生成簡單二維碼或解碼二維碼圖片，使用非常簡單',
        tool_regex: '正則表達式測試',
        tool_regex_desc: '驗證正則表達式否能夠準確地匹配、提取或替換符合特定模式的字符串',
        tool_char_counter: '字符數統計',
        tool_char_counter_desc: '快速統計文本的字符數、單詞數和行數，適合寫作、編程和數據分析',
        tool_ip: 'IP地址獲取與查詢',
        tool_ip_desc: '快速獲取您的出口公網 IP 地址，或者查詢IP地址歸屬地信息，非常簡單便捷又實用',
        tool_uuid: 'UUID 生成器',
        tool_uuid_desc: '支持生成 v1、v3、v4、v5 和 NIL 版本的 UUID，滿足不同場景需求',
        tool_password: '隨機密碼生成',
        tool_password_desc: '生成包含數字、字母和特殊字符的隨機密碼，可自定義長度',
        tool_modulo: '取模計算器',
        tool_modulo_desc: '計算兩個數的模，即一個數除以另一個數所得的餘數',
        tool_calculator: '簡單計算器',
        tool_calculator_desc: '一個可以隨時隨地使用的簡單計算器，支持基本的加減乘除運算',
        tool_ascii: 'ASCII 藝術字',
        tool_ascii_desc: '將英文字符轉化為由 ASCII 字符精心排列組合成的文本形式',
        tool_color: '顏色選擇器',
        tool_color_desc: '能夠讓用戶通過直觀簡單的操作方式精確選取所需顏色',

        // 舊的翻譯保留
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
        result_utc: 'UTC時間：',
        markdown_tab: 'Markdown 轉 PDF',
        markdown_card_desc: '將 Markdown 文檔轉換為 PDF 文件，支援格式化',
        markdown_title: 'Markdown 轉 PDF 轉換器',
        markdown_input_label: '輸入 Markdown:',
        markdown_input_placeholder: '在此貼上或輸入 Markdown 內容...',
        preview_label: '預覽:',
        preview_btn: '預覽',
        download_btn: '下載 PDF',
        error_markdown_invalid: 'Markdown 格式錯誤',
        error_pdf_generation: 'PDF 生成失敗',
        crontab_tab: 'Crontab 編寫器',
        crontab_card_desc: '建立、驗證和理解 Cron 表達式，支援可視化解釋',
        crontab_title: 'Crontab 表達式編寫器',
        crontab_schedule_settings: '調度設置:',
        crontab_minute: '分鐘:',
        crontab_hour: '小時:',
        crontab_day: '日期:',
        crontab_month: '月份:',
        crontab_weekday: '星期:',
        crontab_every: '每',
        crontab_specific: '指定',
        crontab_range: '範圍',
        crontab_interval: '間隔',
        crontab_not_specified: '不指定',
        generate_btn: '生成',
        crontab_expression: 'Crontab 表達式:',
        crontab_next_runs: '接下來 5 次執行時間:',
        crontab_common_examples: '常見示例:',
        example_midnight: '每天凌晨 0 點',
        example_every2h: '每 2 小時',
        example_every5m: '每 5 分鐘',
        example_workday9: '工作日 9 點',
        error_crontab_invalid: '無效的 Crontab 表達式',
        url_tab: 'URL 編解碼',
        url_card_desc: '編碼和解碼 URL，支援多種編碼格式',
        url_title: 'URL 編解碼工具',
        url_input_label: '輸入內容:',
        url_input_placeholder: '輸入文本或 URL...',
        url_encode_slash: '對 "/" 和 ":" 進行編碼',
        url_encode_btn: 'URL 編碼',
        url_decode_btn: 'URL 解碼',
        url_result_label: '轉換結果:',
        url_result_placeholder: '結果將顯示在這裡...',
        url_mapping_title: 'ASCII 與 URL 編碼映射表',
        url_character: '字符',
        url_ascii_code: 'ASCII 碼',
        url_encoded: 'URL 編碼',
        error_decode_failed: 'URL 解碼失敗'
    },
    'en': {
        app_title: 'Toolhub',
        home_title: 'Free Online Developer Tools',
        home_subtitle: 'Fast, secure, and easy-to-use tools for developers. All processing is done locally in your browser.',

        // Navigation categories
        nav_encryption: '🔐 Encryption & Encoding',
        nav_format: '📝 Format & Convert',
        nav_time: '⏰ Time & Schedule',
        nav_devtools: '🔧 Developer Tools',

        // Encryption & Encoding tools
        tool_text_encryption: 'Text Encryption',
        tool_text_encryption_desc: 'A simple text encryption and decryption tool for convenient information protection',
        tool_base64: 'Base64 Encoding',
        tool_base64_desc: 'Encode text or files to Base64 format, or decode Base64 strings',
        tool_md5: 'MD5 Encryption',
        tool_md5_desc: 'Convert text to MD5 hash value, supports uppercase or lowercase output',
        tool_jwt: 'JWT Token Generator',
        tool_jwt_desc: 'Generate and parse JSON Web Tokens with support for multiple algorithms',
        tool_rsa: 'RSA Key Generator',
        tool_rsa_desc: 'Generate RSA public and private keys with support for various key lengths',
        tool_url: 'URL Encoder/Decoder',
        tool_url_desc: 'Encode or decode non-standard characters in URLs using ASCII mapping',

        // Format & Convert tools
        tool_json_validator: 'JSON Validator',
        tool_json_validator_desc: 'Validate JSON data format with formatting and error hints',
        tool_json_compress: 'JSON Compressor',
        tool_json_compress_desc: 'Compress JSON data into a compact one-line format to save space',
        tool_yaml: 'YAML-Properties Converter',
        tool_yaml_desc: 'Convert between YAML and Properties formats to simplify configuration file management',
        tool_xml: 'XML Formatter',
        tool_xml_desc: 'Compress XML data to optimize loading, or format for readability',
        tool_sql_format: 'SQL Formatter',
        tool_sql_format_desc: 'Format SQL statements to improve code readability, maintainability and comprehension',
        tool_sql_validator: 'SQL Validator',
        tool_sql_validator_desc: 'Format and validate SQL DDL statements, supports multiple databases',
        tool_css: 'CSS Formatter',
        tool_css_desc: 'Compress CSS code to optimize loading, or format for readability',
        tool_naming: 'Naming Converter',
        tool_naming_desc: 'Convert between camelCase and snake_case, supports various formats',
        tool_unicode: 'Unicode Converter',
        tool_unicode_desc: 'Bidirectional conversion between Chinese and Unicode characters',
        tool_chinese: 'Chinese Converter',
        tool_chinese_desc: 'Bidirectional conversion between Simplified and Traditional Chinese',

        // Time & Schedule tools
        tool_timestamp: 'Timestamp Converter',
        tool_timestamp_desc: 'Convert between timestamp and readable datetime, supports multiple formats',
        tool_crontab: 'Crontab Editor',
        tool_crontab_desc: 'Easily generate and manage Crontab schedule expressions with real-time preview',
        tool_calendar: 'Calendar Viewer',
        tool_calendar_desc: 'View monthly calendar data including dates and solar terms anytime, anywhere',
        tool_timer: 'Simple Timer',
        tool_timer_desc: 'A simple and easy-to-use timer tool with counter and countdown functions',

        // Developer tools
        tool_qrcode: 'QR Code Tool',
        tool_qrcode_desc: 'Generate simple QR codes or decode QR code images, very easy to use',
        tool_regex: 'Regex Tester',
        tool_regex_desc: 'Test if regular expressions can accurately match, extract or replace strings',
        tool_char_counter: 'Character Counter',
        tool_char_counter_desc: 'Quickly count characters, words and lines in text, suitable for writing and programming',
        tool_ip: 'IP Address Lookup',
        tool_ip_desc: 'Quickly get your public IP address or query IP address location information',
        tool_uuid: 'UUID Generator',
        tool_uuid_desc: 'Generate v1, v3, v4, v5 and NIL versions of UUID for different scenarios',
        tool_password: 'Password Generator',
        tool_password_desc: 'Generate random passwords with numbers, letters and special characters',
        tool_modulo: 'Modulo Calculator',
        tool_modulo_desc: 'Calculate the modulo of two numbers, i.e., the remainder of division',
        tool_calculator: 'Simple Calculator',
        tool_calculator_desc: 'A simple calculator that can be used anytime, anywhere',
        tool_ascii: 'ASCII Art',
        tool_ascii_desc: 'Convert English characters into text art made of ASCII characters',
        tool_color: 'Color Picker',
        tool_color_desc: 'Precisely select colors through intuitive and simple operations',

        // Legacy translations
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
        footer_text: '© 2025 Toolhub | Static tool, data is not uploaded to server',
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
        result_utc: 'UTC Time:',
        markdown_tab: 'Markdown to PDF',
        markdown_card_desc: 'Convert Markdown documents to PDF files with formatting support',
        markdown_title: 'Markdown to PDF Converter',
        markdown_input_label: 'Input Markdown:',
        markdown_input_placeholder: 'Paste or input Markdown content here...',
        preview_label: 'Preview:',
        preview_btn: 'Preview',
        download_btn: 'Download PDF',
        error_markdown_invalid: 'Invalid Markdown format',
        error_pdf_generation: 'PDF generation failed',
        crontab_tab: 'Crontab Editor',
        crontab_card_desc: 'Create, validate, and understand cron expressions with visual explanation',
        crontab_title: 'Crontab Expression Editor',
        crontab_schedule_settings: 'Schedule Settings:',
        crontab_minute: 'Minute:',
        crontab_hour: 'Hour:',
        crontab_day: 'Day of Month:',
        crontab_month: 'Month:',
        crontab_weekday: 'Day of Week:',
        crontab_every: 'Every',
        crontab_specific: 'Specific',
        crontab_range: 'Range',
        crontab_interval: 'Interval',
        crontab_not_specified: 'Not Specified',
        generate_btn: 'Generate',
        crontab_expression: 'Crontab Expression:',
        copy_btn: 'Copy',
        crontab_next_runs: 'Next 5 Execution Times:',
        crontab_common_examples: 'Common Examples:',
        example_midnight: 'Every day at midnight',
        example_every2h: 'Every 2 hours',
        example_every5m: 'Every 5 minutes',
        example_workday9: 'Workday at 9 AM',
        success_copied: 'Copied',
        error_crontab_invalid: 'Invalid crontab expression',
        url_tab: 'URL Encoder/Decoder',
        url_card_desc: 'Encode and decode URLs with support for various encoding formats',
        url_title: 'URL Encoder/Decoder',
        url_input_label: 'Input Content:',
        url_input_placeholder: 'Enter text or URL...',
        url_encode_slash: 'Encode "/" and ":"',
        url_encode_btn: 'URL Encode',
        url_decode_btn: 'URL Decode',
        url_result_label: 'Conversion Result:',
        url_result_placeholder: 'Result will appear here...',
        url_mapping_title: 'ASCII & URL Encoding Mapping:',
        url_character: 'Character',
        url_ascii_code: 'ASCII Code',
        url_encoded: 'URL Encoded',
        error_decode_failed: 'URL decode failed'
    }
};

// 日语翻译
translations['ja'] = {
    app_title: 'Toolhub',
    home_title: '無料オンライン開発者ツール',
    home_subtitle: '高速、安全、使いやすい開発者ツール。すべての処理はブラウザ内でローカルに行われます。',

    // ナビゲーションカテゴリ
    nav_encryption: '🔐 暗号化とエンコーディング',
    nav_format: '📝 フォーマットと変換',
    nav_time: '⏰ 時間とスケジュール',
    nav_devtools: '🔧 開発ツール',

    // 暗号化とエンコーディングツール
    tool_text_encryption: 'テキスト暗号化',
    tool_base64: 'Base64エンコーディング',
    tool_md5: 'MD5暗号化',
    tool_jwt: 'JWTトークン生成',
    tool_rsa: 'RSA鍵生成',
    tool_url: 'URLエンコーダー/デコーダー',

    // フォーマットと変換ツール
    tool_json_validator: 'JSONバリデーター',
    tool_json_compress: 'JSON圧縮',
    tool_yaml: 'YAML-Properties変換',
    tool_xml: 'XMLフォーマッター',
    tool_sql_format: 'SQLフォーマッター',
    tool_sql_validator: 'SQLバリデーター',
    tool_css: 'CSSフォーマッター',
    tool_naming: '命名規則変換',
    tool_unicode: 'Unicode変換',
    tool_chinese: '中国語簡繁変換',

    // 時間とスケジュールツール
    tool_timestamp: 'タイムスタンプ変換',
    tool_crontab: 'Crontabエディター',
    tool_calendar: 'カレンダービューアー',
    tool_timer: 'シンプルタイマー',

    // 開発ツール
    tool_qrcode: 'QRコードツール',
    tool_regex: '正規表現テスター',
    tool_char_counter: '文字数カウンター',
    tool_ip: 'IPアドレス検索',
    tool_uuid: 'UUID生成器',
    tool_password: 'パスワード生成器',
    tool_modulo: 'モジュロ計算機',
    tool_calculator: 'シンプル計算機',
    tool_ascii: 'ASCIIアート',
    tool_color: 'カラーピッカー',

    // 旧翻訳
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
    result_utc: 'UTC時刻:',
    markdown_tab: 'Markdown to PDF',
    markdown_card_desc: 'Markdownドキュメントをフォーマッティング対応のPDFファイルに変換',
    markdown_title: 'Markdown to PDF コンバーター',
    markdown_input_label: 'Markdown入力:',
    markdown_input_placeholder: 'ここにMarkdownコンテンツを貼り付けまたは入力してください...',
    preview_label: 'プレビュー:',
    preview_btn: 'プレビュー',
    download_btn: 'PDFをダウンロード',
    error_markdown_invalid: '無効なMarkdown形式',
    error_pdf_generation: 'PDF生成に失敗しました',
    crontab_tab: 'Crontab エディター',
    crontab_card_desc: 'Cron式を作成、検証、理解し、ビジュアル説明をサポート',
    crontab_title: 'Crontab式エディター',
    crontab_schedule_settings: 'スケジュール設定:',
    crontab_minute: '分:',
    crontab_hour: '時間:',
    crontab_day: '日:',
    crontab_month: '月:',
    crontab_weekday: '曜日:',
    crontab_every: '毎',
    crontab_specific: '指定',
    crontab_range: '範囲',
    crontab_interval: '間隔',
    crontab_not_specified: '指定なし',
    generate_btn: '生成',
    crontab_expression: 'Crontab式:',
    crontab_next_runs: '次の5回の実行時間:',
    crontab_common_examples: '一般的な例:',
    example_midnight: '毎日午前0時',
    example_every2h: '2時間ごと',
    example_every5m: '5分ごと',
    example_workday9: '平日午前9時',
    error_crontab_invalid: '無効なCrontab式',
    url_tab: 'URLエンコーダー/デコーダー',
    url_card_desc: 'URLをエンコード/デコード、複数のエンコード形式をサポート',
    url_title: 'URLエンコーダー/デコーダー',
    url_input_label: '入力内容:',
    url_input_placeholder: 'テキストまたはURLを入力...',
    url_encode_slash: '"/"と":"をエンコード',
    url_encode_btn: 'URLエンコード',
    url_decode_btn: 'URLデコード',
    url_result_label: '変換結果:',
    url_result_placeholder: '結果がここに表示されます...',
    url_mapping_title: 'ASCII & URLエンコーディングマッピング:',
    url_character: '文字',
    url_ascii_code: 'ASCIIコード',
    url_encoded: 'URLエンコード',
    error_decode_failed: 'URLデコードに失敗しました'
};

// 韩语翻译
translations['ko'] = {
    app_title: 'Toolhub',
    home_title: '무료 온라인 개발자 도구',
    home_subtitle: '빠르고 안전하며 사용하기 쉬운 개발자 도구. 모든 처리는 브라우저에서 로컬로 수행됩니다.',

    // 네비게이션 카테고리
    nav_encryption: '🔐 암호화 및 인코딩',
    nav_format: '📝 포맷 및 변환',
    nav_time: '⏰ 시간 및 일정',
    nav_devtools: '🔧 개발 도구',

    // 암호화 및 인코딩 도구
    tool_text_encryption: '텍스트 암호화',
    tool_base64: 'Base64 인코딩',
    tool_md5: 'MD5 암호화',
    tool_jwt: 'JWT 토큰 생성기',
    tool_rsa: 'RSA 키 생성기',
    tool_url: 'URL 인코더/디코더',

    // 포맷 및 변환 도구
    tool_json_validator: 'JSON 검증기',
    tool_json_compress: 'JSON 압축',
    tool_yaml: 'YAML-Properties 변환',
    tool_xml: 'XML 포맷터',
    tool_sql_format: 'SQL 포맷터',
    tool_sql_validator: 'SQL 검증기',
    tool_css: 'CSS 포맷터',
    tool_naming: '명명 규칙 변환',
    tool_unicode: 'Unicode 변환',
    tool_chinese: '중국어 간체/번체 변환',

    // 시간 및 일정 도구
    tool_timestamp: '타임스탬프 변환',
    tool_crontab: 'Crontab 편집기',
    tool_calendar: '캘린더 뷰어',
    tool_timer: '간단한 타이머',

    // 개발 도구
    tool_qrcode: 'QR 코드 도구',
    tool_regex: '정규식 테스터',
    tool_char_counter: '문자 수 카운터',
    tool_ip: 'IP 주소 조회',
    tool_uuid: 'UUID 생성기',
    tool_password: '비밀번호 생성기',
    tool_modulo: '모듈로 계산기',
    tool_calculator: '간단한 계산기',
    tool_ascii: 'ASCII 아트',
    tool_color: '색상 선택기',

    // 기존 번역
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
    result_utc: 'UTC 시간:',
    markdown_tab: 'Markdown to PDF',
    markdown_card_desc: 'Markdown 문서를 형식 지정 지원이 있는 PDF 파일로 변환',
    markdown_title: 'Markdown to PDF 변환기',
    markdown_input_label: 'Markdown 입력:',
    markdown_input_placeholder: 'Markdown 콘텐츠를 여기에 붙여넣거나 입력하세요...',
    preview_label: '미리보기:',
    preview_btn: '미리보기',
    download_btn: 'PDF 다운로드',
    error_markdown_invalid: '잘못된 Markdown 형식',
    error_pdf_generation: 'PDF 생성 실패',
    crontab_tab: 'Crontab 편집기',
    crontab_card_desc: 'Cron 식을 만들고, 검증하고, 이해하며 시각적 설명을 지원',
    crontab_title: 'Crontab 식 편집기',
    crontab_schedule_settings: '일정 설정:',
    crontab_minute: '분:',
    crontab_hour: '시간:',
    crontab_day: '일:',
    crontab_month: '월:',
    crontab_weekday: '요일:',
    crontab_every: '매',
    crontab_specific: '특정',
    crontab_range: '범위',
    crontab_interval: '간격',
    crontab_not_specified: '지정 안 함',
    generate_btn: '생성',
    crontab_expression: 'Crontab 식:',
    crontab_next_runs: '다음 5회 실행 시간:',
    crontab_common_examples: '일반적인 예:',
    example_midnight: '매일 자정',
    example_every2h: '2시간마다',
    example_every5m: '5분마다',
    example_workday9: '평일 오전 9시',
    error_crontab_invalid: '잘못된 Crontab 식',
    url_tab: 'URL 인코더/디코더',
    url_card_desc: 'URL을 인코드/디코드하고 다양한 인코딩 형식을 지원',
    url_title: 'URL 인코더/디코더',
    url_input_label: '입력 내용:',
    url_input_placeholder: '텍스트 또는 URL 입력...',
    url_encode_slash: '"/"와 ":"를 인코드',
    url_encode_btn: 'URL 인코드',
    url_decode_btn: 'URL 디코드',
    url_result_label: '변환 결과:',
    url_result_placeholder: '결과가 여기에 표시됩니다...',
    url_mapping_title: 'ASCII 및 URL 인코딩 매핑:',
    url_character: '문자',
    url_ascii_code: 'ASCII 코드',
    url_encoded: 'URL 인코딩',
    error_decode_failed: 'URL 디코드 실패'
};

// 西班牙语翻译
translations['es'] = {
    app_title: 'Toolhub',
    home_title: 'Herramientas Gratuitas en Línea para Desarrolladores',
    home_subtitle: 'Herramientas rápidas, seguras y fáciles de usar para desarrolladores. Todo el procesamiento se realiza localmente en su navegador.',

    // Categorías de navegación
    nav_encryption: '🔐 Cifrado y Codificación',
    nav_format: '📝 Formato y Conversión',
    nav_time: '⏰ Tiempo y Programación',
    nav_devtools: '🔧 Herramientas de Desarrollo',

    // Herramientas de cifrado y codificación
    tool_text_encryption: 'Cifrado de Texto',
    tool_base64: 'Codificación Base64',
    tool_md5: 'Cifrado MD5',
    tool_jwt: 'Generador de Token JWT',
    tool_rsa: 'Generador de Claves RSA',
    tool_url: 'Codificador/Decodificador URL',

    // Herramientas de formato y conversión
    tool_json_validator: 'Validador JSON',
    tool_json_compress: 'Compresor JSON',
    tool_yaml: 'Conversor YAML-Properties',
    tool_xml: 'Formateador XML',
    tool_sql_format: 'Formateador SQL',
    tool_sql_validator: 'Validador SQL',
    tool_css: 'Formateador CSS',
    tool_naming: 'Conversor de Nomenclatura',
    tool_unicode: 'Conversor Unicode',
    tool_chinese: 'Conversor Chino',

    // Herramientas de tiempo y programación
    tool_timestamp: 'Conversor de Marca de Tiempo',
    tool_crontab: 'Editor Crontab',
    tool_calendar: 'Visor de Calendario',
    tool_timer: 'Temporizador Simple',

    // Herramientas de desarrollo
    tool_qrcode: 'Herramienta de Código QR',
    tool_regex: 'Probador de Expresiones Regulares',
    tool_char_counter: 'Contador de Caracteres',
    tool_ip: 'Búsqueda de Dirección IP',
    tool_uuid: 'Generador UUID',
    tool_password: 'Generador de Contraseñas',
    tool_modulo: 'Calculadora de Módulo',
    tool_calculator: 'Calculadora Simple',
    tool_ascii: 'Arte ASCII',
    tool_color: 'Selector de Color',

    // Traducciones antiguas
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
    result_utc: 'Hora UTC:',
    markdown_tab: 'Markdown a PDF',
    markdown_card_desc: 'Convertir documentos Markdown a archivos PDF con soporte de formato',
    markdown_title: 'Convertidor de Markdown a PDF',
    markdown_input_label: 'Entrada Markdown:',
    markdown_input_placeholder: 'Pegue o ingrese contenido Markdown aquí...',
    preview_label: 'Vista Previa:',
    preview_btn: 'Vista Previa',
    download_btn: 'Descargar PDF',
    error_markdown_invalid: 'Formato Markdown inválido',
    error_pdf_generation: 'Error al generar PDF',
    crontab_tab: 'Editor Crontab',
    crontab_card_desc: 'Crear, validar y entender expresiones cron con explicación visual',
    crontab_title: 'Editor de Expresiones Crontab',
    crontab_schedule_settings: 'Configuración de Horario:',
    crontab_minute: 'Minuto:',
    crontab_hour: 'Hora:',
    crontab_day: 'Día:',
    crontab_month: 'Mes:',
    crontab_weekday: 'Día de la Semana:',
    crontab_every: 'Cada',
    crontab_specific: 'Específico',
    crontab_range: 'Rango',
    crontab_interval: 'Intervalo',
    crontab_not_specified: 'No Especificado',
    generate_btn: 'Generar',
    crontab_expression: 'Expresión Crontab:',
    crontab_next_runs: 'Próximas 5 Ejecuciones:',
    crontab_common_examples: 'Ejemplos Comunes:',
    example_midnight: 'Cada día a medianoche',
    example_every2h: 'Cada 2 horas',
    example_every5m: 'Cada 5 minutos',
    example_workday9: 'Día laboral a las 9 AM',
    error_crontab_invalid: 'Expresión Crontab inválida',
    url_tab: 'Codificador/Decodificador URL',
    url_card_desc: 'Codificar y decodificar URLs con soporte para varios formatos de codificación',
    url_title: 'Codificador/Decodificador URL',
    url_input_label: 'Contenido de Entrada:',
    url_input_placeholder: 'Ingrese texto o URL...',
    url_encode_slash: 'Codificar "/" y ":"',
    url_encode_btn: 'Codificar URL',
    url_decode_btn: 'Decodificar URL',
    url_result_label: 'Resultado de Conversión:',
    url_result_placeholder: 'El resultado aparecerá aquí...',
    url_mapping_title: 'Mapeo de Codificación ASCII y URL:',
    url_character: 'Carácter',
    url_ascii_code: 'Código ASCII',
    url_encoded: 'Codificado URL',
    error_decode_failed: 'Error al decodificar URL'
};

// 法语翻译
translations['fr'] = {
    app_title: 'Toolhub',
    home_title: 'Outils Gratuits en Ligne pour Développeurs',
    home_subtitle: 'Outils rapides, sécurisés et faciles à utiliser pour les développeurs. Tout le traitement est effectué localement dans votre navigateur.',

    // Catégories de navigation
    nav_encryption: '🔐 Chiffrement et Encodage',
    nav_format: '📝 Format et Conversion',
    nav_time: '⏰ Temps et Planification',
    nav_devtools: '🔧 Outils de Développement',

    // Outils de chiffrement et encodage
    tool_text_encryption: 'Chiffrement de Texte',
    tool_base64: 'Encodage Base64',
    tool_md5: 'Chiffrement MD5',
    tool_jwt: 'Générateur de Token JWT',
    tool_rsa: 'Générateur de Clés RSA',
    tool_url: 'Encodeur/Décodeur URL',

    // Outils de format et conversion
    tool_json_validator: 'Validateur JSON',
    tool_json_compress: 'Compresseur JSON',
    tool_yaml: 'Convertisseur YAML-Properties',
    tool_xml: 'Formateur XML',
    tool_sql_format: 'Formateur SQL',
    tool_sql_validator: 'Validateur SQL',
    tool_css: 'Formateur CSS',
    tool_naming: 'Convertisseur de Nomenclature',
    tool_unicode: 'Convertisseur Unicode',
    tool_chinese: 'Convertisseur Chinois',

    // Outils de temps et planification
    tool_timestamp: 'Convertisseur d\'Horodatage',
    tool_crontab: 'Éditeur Crontab',
    tool_calendar: 'Visualiseur de Calendrier',
    tool_timer: 'Minuteur Simple',

    // Outils de développement
    tool_qrcode: 'Outil de Code QR',
    tool_regex: 'Testeur d\'Expressions Régulières',
    tool_char_counter: 'Compteur de Caractères',
    tool_ip: 'Recherche d\'Adresse IP',
    tool_uuid: 'Générateur UUID',
    tool_password: 'Générateur de Mot de Passe',
    tool_modulo: 'Calculatrice de Modulo',
    tool_calculator: 'Calculatrice Simple',
    tool_ascii: 'Art ASCII',
    tool_color: 'Sélecteur de Couleur',

    // Anciennes traductions
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
    result_utc: 'Heure UTC:',
    markdown_tab: 'Markdown vers PDF',
    markdown_card_desc: 'Convertir des documents Markdown en fichiers PDF avec support de formatage',
    markdown_title: 'Convertisseur Markdown vers PDF',
    markdown_input_label: 'Entrée Markdown:',
    markdown_input_placeholder: 'Collez ou saisissez le contenu Markdown ici...',
    preview_label: 'Aperçu:',
    preview_btn: 'Aperçu',
    download_btn: 'Télécharger PDF',
    error_markdown_invalid: 'Format Markdown invalide',
    error_pdf_generation: 'Échec de la génération du PDF',
    crontab_tab: 'Éditeur Crontab',
    crontab_card_desc: 'Créer, valider et comprendre les expressions cron avec explication visuelle',
    crontab_title: 'Éditeur d\'Expressions Crontab',
    crontab_schedule_settings: 'Paramètres de Planification:',
    crontab_minute: 'Minute:',
    crontab_hour: 'Heure:',
    crontab_day: 'Jour:',
    crontab_month: 'Mois:',
    crontab_weekday: 'Jour de la Semaine:',
    crontab_every: 'Chaque',
    crontab_specific: 'Spécifique',
    crontab_range: 'Plage',
    crontab_interval: 'Intervalle',
    crontab_not_specified: 'Non Spécifié',
    generate_btn: 'Générer',
    crontab_expression: 'Expression Crontab:',
    crontab_next_runs: 'Prochaines 5 Exécutions:',
    crontab_common_examples: 'Exemples Courants:',
    example_midnight: 'Chaque jour à minuit',
    example_every2h: 'Toutes les 2 heures',
    example_every5m: 'Toutes les 5 minutes',
    example_workday9: 'Jour ouvrable à 9 AM',
    error_crontab_invalid: 'Expression Crontab invalide',
    url_tab: 'Encodeur/Décodeur URL',
    url_card_desc: 'Encoder et décoder les URL avec support de plusieurs formats d\'encodage',
    url_title: 'Encodeur/Décodeur URL',
    url_input_label: 'Contenu d\'Entrée:',
    url_input_placeholder: 'Saisissez du texte ou une URL...',
    url_encode_slash: 'Encoder "/" et ":"',
    url_encode_btn: 'Encoder URL',
    url_decode_btn: 'Décoder URL',
    url_result_label: 'Résultat de Conversion:',
    url_result_placeholder: 'Le résultat apparaîtra ici...',
    url_mapping_title: 'Mappage d\'Encodage ASCII et URL:',
    url_character: 'Caractère',
    url_ascii_code: 'Code ASCII',
    url_encoded: 'Encodé URL',
    error_decode_failed: 'Échec du décodage URL'
};

// 德语翻译
translations['de'] = {
    app_title: 'Toolhub',
    home_title: 'Kostenlose Online-Entwicklertools',
    home_subtitle: 'Schnelle, sichere und benutzerfreundliche Tools für Entwickler. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',

    // Navigationskategorien
    nav_encryption: '🔐 Verschlüsselung & Kodierung',
    nav_format: '📝 Format & Konvertierung',
    nav_time: '⏰ Zeit & Planung',
    nav_devtools: '🔧 Entwicklertools',

    // Verschlüsselung & Kodierung Tools
    tool_text_encryption: 'Textverschlüsselung',
    tool_base64: 'Base64-Kodierung',
    tool_md5: 'MD5-Verschlüsselung',
    tool_jwt: 'JWT-Token-Generator',
    tool_rsa: 'RSA-Schlüsselgenerator',
    tool_url: 'URL-Encoder/Decoder',

    // Format & Konvertierung Tools
    tool_json_validator: 'JSON-Validator',
    tool_json_compress: 'JSON-Kompressor',
    tool_yaml: 'YAML-Properties-Konverter',
    tool_xml: 'XML-Formatierer',
    tool_sql_format: 'SQL-Formatierer',
    tool_sql_validator: 'SQL-Validator',
    tool_css: 'CSS-Formatierer',
    tool_naming: 'Namenskonverter',
    tool_unicode: 'Unicode-Konverter',
    tool_chinese: 'Chinesischer Konverter',

    // Zeit & Planung Tools
    tool_timestamp: 'Zeitstempel-Konverter',
    tool_crontab: 'Crontab-Editor',
    tool_calendar: 'Kalender-Viewer',
    tool_timer: 'Einfacher Timer',

    // Entwicklertools
    tool_qrcode: 'QR-Code-Tool',
    tool_regex: 'Regex-Tester',
    tool_char_counter: 'Zeichenzähler',
    tool_ip: 'IP-Adress-Suche',
    tool_uuid: 'UUID-Generator',
    tool_password: 'Passwort-Generator',
    tool_modulo: 'Modulo-Rechner',
    tool_calculator: 'Einfacher Rechner',
    tool_ascii: 'ASCII-Kunst',
    tool_color: 'Farbwähler',

    // Alte Übersetzungen
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
    result_utc: 'UTC-Zeit:',
    markdown_tab: 'Markdown zu PDF',
    markdown_card_desc: 'Konvertieren Sie Markdown-Dokumente in PDF-Dateien mit Formatierungsunterstützung',
    markdown_title: 'Markdown zu PDF Konverter',
    markdown_input_label: 'Markdown-Eingabe:',
    markdown_input_placeholder: 'Fügen Sie hier Markdown-Inhalte ein oder geben Sie sie ein...',
    preview_label: 'Vorschau:',
    preview_btn: 'Vorschau',
    download_btn: 'PDF Herunterladen',
    error_markdown_invalid: 'Ungültiges Markdown-Format',
    error_pdf_generation: 'PDF-Generierung fehlgeschlagen',
    crontab_tab: 'Crontab-Editor',
    crontab_card_desc: 'Erstellen, validieren und verstehen Sie Cron-Ausdrücke mit visueller Erklärung',
    crontab_title: 'Crontab-Ausdrucks-Editor',
    crontab_schedule_settings: 'Zeitplaneinstellungen:',
    crontab_minute: 'Minute:',
    crontab_hour: 'Stunde:',
    crontab_day: 'Tag:',
    crontab_month: 'Monat:',
    crontab_weekday: 'Wochentag:',
    crontab_every: 'Jeden',
    crontab_specific: 'Spezifisch',
    crontab_range: 'Bereich',
    crontab_interval: 'Intervall',
    crontab_not_specified: 'Nicht angegeben',
    generate_btn: 'Generieren',
    crontab_expression: 'Crontab-Ausdruck:',
    crontab_next_runs: 'Nächste 5 Ausführungen:',
    crontab_common_examples: 'Häufige Beispiele:',
    example_midnight: 'Täglich um Mitternacht',
    example_every2h: 'Alle 2 Stunden',
    example_every5m: 'Alle 5 Minuten',
    example_workday9: 'Arbeitstag um 9 Uhr',
    error_crontab_invalid: 'Ungültiger Crontab-Ausdruck',
    url_tab: 'URL-Encoder/Decoder',
    url_card_desc: 'Codieren und decodieren Sie URLs mit Unterstützung für verschiedene Codierungsformate',
    url_title: 'URL-Encoder/Decoder',
    url_input_label: 'Eingabeinhalt:',
    url_input_placeholder: 'Text oder URL eingeben...',
    url_encode_slash: '"/" und ":" codieren',
    url_encode_btn: 'URL codieren',
    url_decode_btn: 'URL decodieren',
    url_result_label: 'Konvertierungsergebnis:',
    url_result_placeholder: 'Das Ergebnis wird hier angezeigt...',
    url_mapping_title: 'ASCII- und URL-Codierungszuordnung:',
    url_character: 'Zeichen',
    url_ascii_code: 'ASCII-Code',
    url_encoded: 'URL-codiert',
    error_decode_failed: 'URL-Decodierung fehlgeschlagen'
};

// 葡萄牙语翻译
translations['pt'] = {
    app_title: 'Toolhub',
    home_title: 'Ferramentas Gratuitas Online para Desenvolvedores',
    home_subtitle: 'Ferramentas rápidas, seguras e fáceis de usar para desenvolvedores. Todo o processamento é feito localmente no seu navegador.',

    // Categorias de navegação
    nav_encryption: '🔐 Criptografia e Codificação',
    nav_format: '📝 Formato e Conversão',
    nav_time: '⏰ Tempo e Agendamento',
    nav_devtools: '🔧 Ferramentas de Desenvolvimento',

    // Ferramentas de criptografia e codificação
    tool_text_encryption: 'Criptografia de Texto',
    tool_base64: 'Codificação Base64',
    tool_md5: 'Criptografia MD5',
    tool_jwt: 'Gerador de Token JWT',
    tool_rsa: 'Gerador de Chaves RSA',
    tool_url: 'Codificador/Decodificador URL',

    // Ferramentas de formato e conversão
    tool_json_validator: 'Validador JSON',
    tool_json_compress: 'Compressor JSON',
    tool_yaml: 'Conversor YAML-Properties',
    tool_xml: 'Formatador XML',
    tool_sql_format: 'Formatador SQL',
    tool_sql_validator: 'Validador SQL',
    tool_css: 'Formatador CSS',
    tool_naming: 'Conversor de Nomenclatura',
    tool_unicode: 'Conversor Unicode',
    tool_chinese: 'Conversor Chinês',

    // Ferramentas de tempo e agendamento
    tool_timestamp: 'Conversor de Timestamp',
    tool_crontab: 'Editor Crontab',
    tool_calendar: 'Visualizador de Calendário',
    tool_timer: 'Temporizador Simples',

    // Ferramentas de desenvolvimento
    tool_qrcode: 'Ferramenta de Código QR',
    tool_regex: 'Testador de Expressões Regulares',
    tool_char_counter: 'Contador de Caracteres',
    tool_ip: 'Pesquisa de Endereço IP',
    tool_uuid: 'Gerador UUID',
    tool_password: 'Gerador de Senha',
    tool_modulo: 'Calculadora de Módulo',
    tool_calculator: 'Calculadora Simples',
    tool_ascii: 'Arte ASCII',
    tool_color: 'Seletor de Cores',

    // Traduções antigas
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
    result_utc: 'Hora UTC:',
    markdown_tab: 'Markdown para PDF',
    markdown_card_desc: 'Converter documentos Markdown em arquivos PDF com suporte a formatação',
    markdown_title: 'Conversor de Markdown para PDF',
    markdown_input_label: 'Entrada Markdown:',
    markdown_input_placeholder: 'Cole ou insira conteúdo Markdown aqui...',
    preview_label: 'Visualização:',
    preview_btn: 'Visualizar',
    download_btn: 'Baixar PDF',
    error_markdown_invalid: 'Formato Markdown inválido',
    error_pdf_generation: 'Falha na geração do PDF',
    crontab_tab: 'Editor Crontab',
    crontab_card_desc: 'Criar, validar e entender expressões cron com explicação visual',
    crontab_title: 'Editor de Expressões Crontab',
    crontab_schedule_settings: 'Configurações de Agendamento:',
    crontab_minute: 'Minuto:',
    crontab_hour: 'Hora:',
    crontab_day: 'Dia:',
    crontab_month: 'Mês:',
    crontab_weekday: 'Dia da Semana:',
    crontab_every: 'Cada',
    crontab_specific: 'Específico',
    crontab_range: 'Intervalo',
    crontab_interval: 'Intervalo',
    crontab_not_specified: 'Não Especificado',
    generate_btn: 'Gerar',
    crontab_expression: 'Expressão Crontab:',
    crontab_next_runs: 'Próximas 5 Execuções:',
    crontab_common_examples: 'Exemplos Comuns:',
    example_midnight: 'Todos os dias à meia-noite',
    example_every2h: 'A cada 2 horas',
    example_every5m: 'A cada 5 minutos',
    example_workday9: 'Dia útil às 9 AM',
    error_crontab_invalid: 'Expressão Crontab inválida',
    url_tab: 'Codificador/Decodificador de URL',
    url_card_desc: 'Codificar e decodificar URLs com suporte para vários formatos de codificação',
    url_title: 'Codificador/Decodificador de URL',
    url_input_label: 'Conteúdo de Entrada:',
    url_input_placeholder: 'Insira texto ou URL...',
    url_encode_slash: 'Codificar "/" e ":"',
    url_encode_btn: 'Codificar URL',
    url_decode_btn: 'Decodificar URL',
    url_result_label: 'Resultado da Conversão:',
    url_result_placeholder: 'O resultado aparecerá aqui...',
    url_mapping_title: 'Mapeamento de Codificação ASCII e URL:',
    url_character: 'Caractere',
    url_ascii_code: 'Código ASCII',
    url_encoded: 'Codificado em URL',
    error_decode_failed: 'Falha na decodificação de URL'
};

// 俄语翻译
translations['ru'] = {
    app_title: 'Toolhub',
    home_title: 'Бесплатные онлайн-инструменты для разработчиков',
    home_subtitle: 'Быстрые, безопасные и простые в использовании инструменты для разработчиков. Вся обработка выполняется локально в вашем браузере.',

    // Категории навигации
    nav_encryption: '🔐 Шифрование и Кодирование',
    nav_format: '📝 Форматирование и Конвертация',
    nav_time: '⏰ Время и Планирование',
    nav_devtools: '🔧 Инструменты Разработчика',

    // Инструменты шифрования и кодирования
    tool_text_encryption: 'Шифрование Текста',
    tool_base64: 'Кодирование Base64',
    tool_md5: 'Шифрование MD5',
    tool_jwt: 'Генератор JWT Токенов',
    tool_rsa: 'Генератор RSA Ключей',
    tool_url: 'Кодировщик/Декодировщик URL',

    // Инструменты форматирования и конвертации
    tool_json_validator: 'Валидатор JSON',
    tool_json_compress: 'Компрессор JSON',
    tool_yaml: 'Конвертер YAML-Properties',
    tool_xml: 'Форматтер XML',
    tool_sql_format: 'Форматтер SQL',
    tool_sql_validator: 'Валидатор SQL',
    tool_css: 'Форматтер CSS',
    tool_naming: 'Конвертер Именования',
    tool_unicode: 'Конвертер Unicode',
    tool_chinese: 'Конвертер Китайского',

    // Инструменты времени и планирования
    tool_timestamp: 'Конвертер Временных Меток',
    tool_crontab: 'Редактор Crontab',
    tool_calendar: 'Просмотр Календаря',
    tool_timer: 'Простой Таймер',

    // Инструменты разработчика
    tool_qrcode: 'Инструмент QR-кода',
    tool_regex: 'Тестер Регулярных Выражений',
    tool_char_counter: 'Счетчик Символов',
    tool_ip: 'Поиск IP-адреса',
    tool_uuid: 'Генератор UUID',
    tool_password: 'Генератор Паролей',
    tool_modulo: 'Калькулятор Модуля',
    tool_calculator: 'Простой Калькулятор',
    tool_ascii: 'ASCII Искусство',
    tool_color: 'Выбор Цвета',

    // Старые переводы
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
    result_utc: 'Время UTC:',
    markdown_tab: 'Markdown в PDF',
    markdown_card_desc: 'Преобразование документов Markdown в файлы PDF с поддержкой форматирования',
    markdown_title: 'Конвертер Markdown в PDF',
    markdown_input_label: 'Ввод Markdown:',
    markdown_input_placeholder: 'Вставьте или введите содержимое Markdown здесь...',
    preview_label: 'Предпросмотр:',
    preview_btn: 'Предпросмотр',
    download_btn: 'Скачать PDF',
    error_markdown_invalid: 'Неверный формат Markdown',
    error_pdf_generation: 'Ошибка при создании PDF',
    crontab_tab: 'Редактор Crontab',
    crontab_card_desc: 'Создание, проверка и понимание выражений cron с визуальным объяснением',
    crontab_title: 'Редактор выражений Crontab',
    crontab_schedule_settings: 'Параметры расписания:',
    crontab_minute: 'Минута:',
    crontab_hour: 'Час:',
    crontab_day: 'День:',
    crontab_month: 'Месяц:',
    crontab_weekday: 'День недели:',
    crontab_every: 'Каждый',
    crontab_specific: 'Конкретный',
    crontab_range: 'Диапазон',
    crontab_interval: 'Интервал',
    crontab_not_specified: 'Не указано',
    generate_btn: 'Создать',
    crontab_expression: 'Выражение Crontab:',
    crontab_next_runs: 'Следующие 5 запусков:',
    crontab_common_examples: 'Общие примеры:',
    example_midnight: 'Каждый день в полночь',
    example_every2h: 'Каждые 2 часа',
    example_every5m: 'Каждые 5 минут',
    example_workday9: 'Рабочий день в 9 AM',
    error_crontab_invalid: 'Неверное выражение Crontab',
    url_tab: 'Кодировщик/Декодер URL',
    url_card_desc: 'Кодирование и декодирование URL с поддержкой различных форматов кодирования',
    url_title: 'Кодировщик/Декодер URL',
    url_input_label: 'Содержимое ввода:',
    url_input_placeholder: 'Введите текст или URL...',
    url_encode_slash: 'Кодировать "/" и ":"',
    url_encode_btn: 'Кодировать URL',
    url_decode_btn: 'Декодировать URL',
    url_result_label: 'Результат преобразования:',
    url_result_placeholder: 'Результат появится здесь...',
    url_mapping_title: 'Таблица кодирования ASCII и URL:',
    url_character: 'Символ',
    url_ascii_code: 'Код ASCII',
    url_encoded: 'Кодировано URL',
    error_decode_failed: 'Ошибка при декодировании URL'
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
    // 检查必要的 DOM 元素是否存在（仅在 index.html 中存在）
    const currentDatetimeEl = document.getElementById('current-datetime');
    if (!currentDatetimeEl) {
        return; // 如果不在 index.html 中，直接返回
    }

    const now = new Date();
    const timestampSec = Math.floor(now.getTime() / 1000);
    const timestampMs = now.getTime();
    const timezone = getSelectedTimezone();

    const dateInfo = formatDateTime(now, timezone);

    currentDatetimeEl.textContent = dateInfo.formatted;
    document.getElementById('current-timestamp-sec').textContent = timestampSec;
    document.getElementById('current-timestamp-ms').textContent = timestampMs;
}

// 更新所有时间显示（时区改变时调用）
function updateAllTimes() {
    updateCurrentTime();

    // 如果有转换结果，重新转换
    const timestampInput = document.getElementById('timestamp-input');
    if (timestampInput && timestampInput.value.trim()) {
        convertTimestamp();
    }
}

// 时间戳转日期
function convertTimestamp() {
    const timestampInput = document.getElementById('timestamp-input');
    const resultDiv = document.getElementById('timestamp-result');

    // 检查必要的 DOM 元素是否存在
    if (!timestampInput || !resultDiv) {
        return; // 如果不在 index.html 中，直接返回
    }

    const input = timestampInput.value.trim();
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
    const unitRadio = document.querySelector('input[name="ts-unit"]:checked');
    if (!unitRadio) {
        return; // 如果单位选择不存在，直接返回
    }

    const unit = unitRadio.value;
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
// 初始化其他功能（在 header 和 footer 加载后调用）
function initializePageFeatures() {
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
    if (datetimeInput) {
        datetimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
    }

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

    console.log('🛠️ Toolhub 已加载完成');
}

document.addEventListener('DOMContentLoaded', function() {
    // 在 DOMContentLoaded 时初始化页面功能
    // header 和 footer 会在此之后动态加载
    setTimeout(() => {
        initializePageFeatures();
    }, 100);
});

// ==========================================
// 动态加载 Header 和 Footer
// ==========================================
const headerHTML = `<div class="header-content">
    <div class="header-left">
        <a href="index.html" class="logo">
            <span class="logo-icon">🛠️</span>
            <span class="logo-text" data-i18n="app_title">Toolhub</span>
        </a>
        <nav class="header-nav">
            <!-- 加密与编码 -->
            <div class="nav-dropdown">
                <a href="#" class="nav-link" data-i18n="nav_encryption">🔐 加密与编码</a>
                <div class="dropdown-menu">
                    <a href="text-encryption.html" class="dropdown-item" data-i18n="tool_text_encryption">文本加解密</a>
                    <a href="base64.html" class="dropdown-item" data-i18n="tool_base64">Base64 编码</a>
                    <a href="md5.html" class="dropdown-item" data-i18n="tool_md5">MD5 加密</a>
                    <a href="jwt.html" class="dropdown-item" data-i18n="tool_jwt">JWT Token 生成</a>
                    <a href="rsa.html" class="dropdown-item" data-i18n="tool_rsa">RSA 公私钥生成</a>
                    <a href="url-encoder.html" class="dropdown-item" data-i18n="tool_url">URL 编解码</a>
                </div>
            </div>

            <!-- 格式化与转换 -->
            <div class="nav-dropdown">
                <a href="#" class="nav-link" data-i18n="nav_format">📝 格式化与转换</a>
                <div class="dropdown-menu">
                    <a href="json-formatter.html" class="dropdown-item" data-i18n="tool_json_validator">JSON 格式校验</a>
                    <a href="json-formatter.html" class="dropdown-item" data-i18n="tool_json_compress">JSON 压缩</a>
                    <a href="yaml-properties.html" class="dropdown-item" data-i18n="tool_yaml">YAML-Properties 转换</a>
                    <a href="xml-formatter.html" class="dropdown-item" data-i18n="tool_xml">XML 压缩和格式化</a>
                    <a href="sql-formatter.html" class="dropdown-item" data-i18n="tool_sql_format">SQL 格式化</a>
                    <a href="sql-validator.html" class="dropdown-item" data-i18n="tool_sql_validator">SQL验证器</a>
                    <a href="css-formatter.html" class="dropdown-item" data-i18n="tool_css">CSS 压缩和格式化</a>
                    <a href="naming-converter.html" class="dropdown-item" data-i18n="tool_naming">命名格式转换</a>
                    <a href="unicode.html" class="dropdown-item" data-i18n="tool_unicode">Unicode 转换</a>
                    <a href="chinese-converter.html" class="dropdown-item" data-i18n="tool_chinese">中文简繁转换</a>
                </div>
            </div>

            <!-- 时间与任务 -->
            <div class="nav-dropdown">
                <a href="#" class="nav-link" data-i18n="nav_time">⏰ 时间与任务</a>
                <div class="dropdown-menu">
                    <a href="timestamp-converter.html" class="dropdown-item" data-i18n="tool_timestamp">时间戳转换</a>
                    <a href="crontab-editor.html" class="dropdown-item" data-i18n="tool_crontab">Crontab 编写器</a>
                    <a href="calendar.html" class="dropdown-item" data-i18n="tool_calendar">日历查看</a>
                    <a href="timer.html" class="dropdown-item" data-i18n="tool_timer">简单计时器</a>
                </div>
            </div>

            <!-- 开发工具 -->
            <div class="nav-dropdown">
                <a href="#" class="nav-link" data-i18n="nav_devtools">🔧 开发工具</a>
                <div class="dropdown-menu">
                    <a href="qrcode.html" class="dropdown-item" data-i18n="tool_qrcode">二维码工具</a>
                    <a href="regex.html" class="dropdown-item" data-i18n="tool_regex">正则表达式测试</a>
                    <a href="char-counter.html" class="dropdown-item" data-i18n="tool_char_counter">字符数统计</a>
                    <a href="ip-lookup.html" class="dropdown-item" data-i18n="tool_ip">IP地址获取与查询</a>
                    <a href="uuid.html" class="dropdown-item" data-i18n="tool_uuid">UUID 生成器</a>
                    <a href="password-generator.html" class="dropdown-item" data-i18n="tool_password">随机密码生成</a>
                    <a href="modulo.html" class="dropdown-item" data-i18n="tool_modulo">取模计算器</a>
                    <a href="calculator.html" class="dropdown-item" data-i18n="tool_calculator">简单计算器</a>
                    <a href="ascii-art.html" class="dropdown-item" data-i18n="tool_ascii">ASCII 艺术字</a>
                    <a href="color-picker.html" class="dropdown-item" data-i18n="tool_color">颜色选择器</a>
                </div>
            </div>
        </nav>
    </div>
    <div class="header-right">
        <select id="language-select" class="language-select">
            <option value="en">🇬🇧 English</option>
            <option value="zh-CN">🇨🇳 中文简体</option>
            <option value="zh-TW">🇨🇳 中文繁體</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="ko">🇰🇷 한국어</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="pt">🇵🇹 Português</option>
            <option value="ru">🇷🇺 Русский</option>
        </select>
        <a href="https://github.com" target="_blank" class="header-link">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
        </a>
    </div>
</div>`;

const footerHTML = `
<div class="footer-content">
    <div class="footer-copyright">
        <span data-i18n="footer_text">© 2025 Toolhub | Static tool, data is not uploaded to server</span>
    </div>
</div>`;

function loadHeader() {
    const headerContainer = document.querySelector('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        // 重新初始化语言选择器
        setTimeout(() => {
            const langSelect = document.getElementById('language-select');
            if (langSelect) {
                const savedLang = localStorage.getItem('preferredLanguage') || 'en';
                currentLang = savedLang;
                langSelect.value = savedLang;

                // 语言切换监听
                langSelect.addEventListener('change', function(e) {
                    const selectedLang = e.target.value;
                    switchLanguage(selectedLang);
                });

                // 初始化语言
                switchLanguage(savedLang);
            }
            setActiveNavLink();
        }, 0);
    }
}

function loadFooter() {
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        // 重新应用翻译
        setTimeout(() => {
            switchLanguage(currentLang);
        }, 0);
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// Markdown 转 PDF 功能
// ==========================================
function previewMarkdown() {
    const input = document.getElementById('markdown-input');
    const preview = document.getElementById('markdown-preview');
    const errorDiv = document.getElementById('markdown-error');

    if (!input || !preview) return;

    const markdown = input.value.trim();

    if (!markdown) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        preview.innerHTML = '';
        return;
    }

    try {
        errorDiv.textContent = '';
        // 使用 marked 库解析 Markdown
        const html = marked.parse(markdown);
        preview.innerHTML = html;
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_markdown_invalid + ': ' + e.message;
        preview.innerHTML = '';
    }
}

function downloadPDF() {
    const input = document.getElementById('markdown-input');
    const errorDiv = document.getElementById('markdown-error');

    if (!input) return;

    const markdown = input.value.trim();

    if (!markdown) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    try {
        errorDiv.textContent = '';

        // 先预览 Markdown
        const html = marked.parse(markdown);

        // 创建一个临时容器用于 PDF 生成
        const element = document.createElement('div');
        element.innerHTML = html;
        element.style.padding = '20px';
        element.style.fontFamily = 'Arial, sans-serif';
        element.style.lineHeight = '1.6';
        element.style.color = '#333';

        // 配置 PDF 选项
        const opt = {
            margin: 10,
            filename: 'document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // 生成 PDF
        html2pdf().set(opt).from(element).save();

    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_pdf_generation + ': ' + e.message;
    }
}

function clearMarkdown() {
    const input = document.getElementById('markdown-input');
    const preview = document.getElementById('markdown-preview');
    const errorDiv = document.getElementById('markdown-error');

    if (input) input.value = '';
    if (preview) preview.innerHTML = '';
    if (errorDiv) errorDiv.textContent = '';
}

// ==========================================
// Crontab 编写器功能
// ==========================================
function updateCrontab() {
    const minute = buildCrontabField('minute');
    const hour = buildCrontabField('hour');
    const day = buildCrontabField('day');
    const month = buildCrontabField('month');
    const weekday = buildCrontabField('weekday');

    const expr = `${minute} ${hour} ${day} ${month} ${weekday}`;
    document.getElementById('crontab-expression').value = expr;

    generateNextRuns(expr);
}

function buildCrontabField(fieldName) {
    const typeSelect = document.getElementById(`${fieldName}-type`);
    const type = typeSelect.value;

    if (type === '*' || type === '?') {
        return type;
    }

    if (type === 'specific') {
        const valueInput = document.getElementById(`${fieldName}-value`);
        return valueInput.value;
    }

    if (type === 'interval') {
        const intervalInput = document.getElementById(`${fieldName}-interval`);
        return `*/${intervalInput.value}`;
    }

    if (type === 'range') {
        const valueInput = document.getElementById(`${fieldName}-value`);
        const maxValue = fieldName === 'minute' ? 59 : fieldName === 'hour' ? 23 : fieldName === 'day' ? 31 : fieldName === 'month' ? 12 : 6;
        return `${valueInput.value}-${maxValue}`;
    }

    return '*';
}

function generateCrontab() {
    updateCrontab();
}

function generateNextRuns(expr) {
    const list = document.getElementById('crontab-next-runs');
    list.innerHTML = '';

    try {
        const parts = expr.split(/\s+/);
        if (parts.length !== 5) {
            list.innerHTML = '<li>' + translations[currentLang].error_crontab_invalid + '</li>';
            return;
        }

        // 生成接下来的 5 次执行时间（近似）
        const now = new Date();
        const runs = [];

        for (let i = 0; i < 5; i++) {
            const nextRun = new Date(now.getTime() + (i + 1) * 60000);
            runs.push(nextRun.toLocaleString());
        }

        runs.forEach((run, index) => {
            const li = document.createElement('li');
            li.textContent = run;
            list.appendChild(li);
        });
    } catch (e) {
        list.innerHTML = '<li>' + translations[currentLang].error_crontab_invalid + '</li>';
    }
}

function setExample(expr) {
    const parts = expr.split(/\s+/);
    if (parts.length !== 5) return;

    const [minute, hour, day, month, weekday] = parts;

    // 设置分钟
    if (minute === '*') {
        document.getElementById('minute-type').value = '*';
    } else if (minute.includes('/')) {
        document.getElementById('minute-type').value = 'interval';
        document.getElementById('minute-interval').value = minute.split('/')[1];
    } else {
        document.getElementById('minute-type').value = 'specific';
        document.getElementById('minute-value').value = minute;
    }

    // 设置小时
    if (hour === '*') {
        document.getElementById('hour-type').value = '*';
    } else if (hour.includes('/')) {
        document.getElementById('hour-type').value = 'interval';
        document.getElementById('hour-interval').value = hour.split('/')[1];
    } else {
        document.getElementById('hour-type').value = 'specific';
        document.getElementById('hour-value').value = hour;
    }

    // 设置日期
    if (day === '*') {
        document.getElementById('day-type').value = '*';
    } else if (day === '?') {
        document.getElementById('day-type').value = '?';
    } else {
        document.getElementById('day-type').value = 'specific';
        document.getElementById('day-value').value = day;
    }

    // 设置月份
    if (month === '*') {
        document.getElementById('month-type').value = '*';
    } else {
        document.getElementById('month-type').value = 'specific';
        document.getElementById('month-value').value = month;
    }

    // 设置星期
    if (weekday === '?') {
        document.getElementById('weekday-type').value = '?';
    } else if (weekday === '*') {
        document.getElementById('weekday-type').value = '*';
    } else {
        document.getElementById('weekday-type').value = 'specific';
        document.getElementById('weekday-value').value = weekday;
    }

    updateCrontab();
}

function copyCrontab() {
    const expr = document.getElementById('crontab-expression');
    expr.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + translations[currentLang].success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

function clearCrontabForm() {
    document.getElementById('minute-type').value = '*';
    document.getElementById('hour-type').value = '*';
    document.getElementById('day-type').value = '*';
    document.getElementById('month-type').value = '*';
    document.getElementById('weekday-type').value = '?';

    document.getElementById('crontab-expression').value = '* * * * ?';
    document.getElementById('crontab-error').textContent = '';

    const list = document.getElementById('crontab-next-runs');
    list.innerHTML = '<li>-</li>';
}

// ==========================================
// URL 编解码功能
// ==========================================
function performURLEncode() {
    const input = document.getElementById('url-input');
    const result = document.getElementById('url-result');
    const errorDiv = document.getElementById('url-error');

    if (!input || !result) return;

    const text = input.value;

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    try {
        errorDiv.textContent = '';
        const encodeSlash = document.getElementById('encode-slash').checked;
        let encoded = encodeURIComponent(text);

        // 如果不编码 "/" 和 ":"，则替换回来
        if (!encodeSlash) {
            encoded = encoded.replace(/%2F/g, '/').replace(/%3A/g, ':');
        }

        result.value = encoded;
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
    }
}

function performURLDecode() {
    const input = document.getElementById('url-input');
    const result = document.getElementById('url-result');
    const errorDiv = document.getElementById('url-error');

    if (!input || !result) return;

    const text = input.value;

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    try {
        errorDiv.textContent = '';
        const decoded = decodeURIComponent(text);
        result.value = decoded;
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_decode_failed;
    }
}

function updateURLConversion() {
    // 实时更新（可选）
    // 这里可以添加实时转换逻辑
}

function copyURLResult() {
    const result = document.getElementById('url-result');
    if (!result) return;

    result.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + translations[currentLang].success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

function clearURLAll() {
    const input = document.getElementById('url-input');
    const result = document.getElementById('url-result');
    const errorDiv = document.getElementById('url-error');

    if (input) input.value = '';
    if (result) result.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

// 页面加载时动态加载 header 和 footer
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadHeader();
        loadFooter();
    });
} else {
    // 如果 script 在 DOMContentLoaded 之后加载
    loadHeader();
    loadFooter();
}
