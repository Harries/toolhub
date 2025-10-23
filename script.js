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

        // 取模计算器工具
        modulo_title: '取模计算器',
        modulo_dividend: '被除数 (Dividend)',
        modulo_divisor: '除数 (Divisor)',
        modulo_dividend_placeholder: '输入被除数',
        modulo_divisor_placeholder: '输入除数',
        modulo_calculate: '计算',
        modulo_result_label: '计算结果:',
        modulo_examples: '常见示例:',
        modulo_example_1: '(10 除以 3 余 1)',
        modulo_example_2: '(17 除以 5 余 2)',
        modulo_example_3: '(100 除以 7 余 2)',
        modulo_example_4: '(256 能被 16 整除)',
        modulo_error_dividend: '请输入被除数',
        modulo_error_divisor: '请输入除数',
        modulo_error_zero: '除数不能为 0',

        // ASCII 艺术字工具
        ascii_title: 'ASCII 艺术字生成器',
        ascii_input_label: '输入文本 (仅支持英文字符)',
        ascii_input_placeholder: '在此输入您的文本...',
        ascii_font_label: '选择字体样式',
        ascii_font_standard: '标准',
        ascii_font_banner: '横幅',
        ascii_font_block: '方块',
        ascii_font_slant: '斜体',
        ascii_font_small: '小型',
        ascii_font_big: '大型',
        ascii_generate: '生成',
        ascii_output_placeholder: 'ASCII 艺术字将显示在这里...',
        ascii_info_title: '使用说明',
        ascii_info_1: '• 仅支持英文字母、数字和常见符号',
        ascii_info_2: '• 建议输入文本长度不超过 20 个字符以获得最佳显示效果',
        ascii_info_3: '• 不同字体样式有不同的视觉效果，可以尝试多种样式',
        ascii_info_4: '• 生成的 ASCII 艺术字可以直接复制到文本编辑器或社交媒体',

        // 颜色选择器工具
        color_title: '颜色选择器',
        color_picker_label: '颜色选择器',
        color_rgb_sliders: 'RGB 滑块',
        color_values_title: '颜色值 (点击复制)',
        color_presets: '常用颜色',

        // IP地址查询工具
        ip_get_my_ip: '获取 IP',
        ip_query: '查询',
        ip_get_button: '获取',
        ip_input_label: '输入IP地址:',
        ip_input_placeholder: '输入IP地址',
        ip_query_button: '查询',
        ip_your_ip_info: '您的IP信息:',
        ip_query_result: '查询结果:',
        ip_query_desc: '查询 IP 地址归属地信息。',
        ip_click_query: '点击"查询"按钮开始',
        ip_loading: '正在获取IP地址',
        ip_get_failed: '获取IP失败，请稍后重试',
        ip_input_required: '请输入IP地址',
        ip_querying: '正在查询IP信息',
        ip_address: 'IP地址:',
        ip_copy: '复制',

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
        error_no_input: '请输入数据',
        error_no_input_json: '请输入 JSON 数据',
        error_no_input_xml: '请输入 XML 数据',
        error_no_input_url: '请输入 URL 或文本',
        error_no_input_base64: '请输入要编码的文本',
        error_no_input_md5: '请输入要加密的文本',
        error_no_input_text: '请输入文本',
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
        error_decode_failed: 'URL 解码失败',

        // 文本加解密
        encryption_title: '文本加解密工具',
        encryption_input_label: '输入文本:',
        encryption_input_placeholder: '输入要加密或解密的文本...',
        encryption_password_label: '密码:',
        encryption_password_placeholder: '输入加密/解密密码',
        encryption_output_label: '结果:',
        encryption_output_placeholder: '加密或解密的结果将显示在这里',
        encrypt_btn: '加密',
        decrypt_btn: '解密',
        show_password: '显示密码',
        error_encryption_no_input: '请输入要加密的文本',
        error_encryption_no_password: '请输入密码',
        error_decryption_failed: '解密失败，请检查密码是否正确',
        success_encrypted: '加密成功',
        success_decrypted: '解密成功',

        // Base64 编码解码
        base64_title: 'Base64 编码工具',
        base64_input_label: '输入文本:',
        base64_input_placeholder: '输入要编码或解码的文本...',
        base64_file_label: '或上传文件:',
        base64_file_hint: '最大文件大小: 10MB',
        base64_output_label: '结果:',
        base64_output_placeholder: '编码或解码的结果将显示在这里',
        base64_encode_btn: '编码',
        base64_decode_btn: '解码',
        error_base64_encode_failed: 'Base64 编码失败',
        error_base64_decode_failed: 'Base64 解码失败，请检查输入是否为有效的 Base64 字符串',
        error_file_too_large: '文件过大，请选择小于 10MB 的文件',
        error_file_read_failed: '文件读取失败',

        // MD5 加密
        md5_title: 'MD5 加密工具',
        md5_input_label: '输入文本:',
        md5_input_placeholder: '输入要转换为 MD5 的文本...',
        md5_output_label: '结果:',
        md5_output_placeholder: 'MD5 哈希结果将显示在这里',
        md5_compute_btn: '计算',
        md5_lowercase: '小写',
        md5_uppercase: '大写',
        md5_32bit: '32位',
        md5_16bit: '16位',
        error_md5_compute_failed: 'MD5 计算失败',

        // JWT Token 生成与解析
        jwt_title: 'JWT Token 生成与解析工具',
        jwt_generate_btn: '生成',
        jwt_parse_btn: '解析',
        jwt_generate_mode: '生成模式',
        jwt_parse_mode: '解析模式',
        jwt_input_label: '输入',
        jwt_output_label: '输出',
        jwt_header_label: '头部 (Header):',
        jwt_payload_label: '载荷 (Payload):',
        jwt_secret_label: '密钥 (Secret):',
        jwt_algorithm_label: '算法 (Algorithm):',
        jwt_token_label: 'JWT Token:',
        jwt_input_token_label: '输入 Token:',
        jwt_signature_label: '签名 (Signature):',
        error_jwt_invalid_json: 'JSON 格式错误',
        error_jwt_invalid_token: 'Token 格式无效',
        error_jwt_verification_failed: 'Token 验证失败',
        success_jwt_generated: 'JWT Token 生成成功',
        success_jwt_parsed: 'JWT Token 解析成功',

        // RSA 公私钥生成
        rsa_title: 'RSA 公私钥生成工具',
        rsa_generate_btn: '生成',
        rsa_copy_public_btn: '复制公钥',
        rsa_copy_private_btn: '复制私钥',
        rsa_config_label: '配置',
        rsa_output_label: '输出',
        rsa_key_length_label: '密钥长度:',
        rsa_format_label: '格式:',
        rsa_public_key_label: '公钥:',
        rsa_private_key_label: '私钥:',
        rsa_info_title: '信息:',
        rsa_info_1: '1024 位: 快速生成，适合测试',
        rsa_info_2: '2048 位: 推荐用于一般用途',
        rsa_info_3: '4096 位: 高安全性，生成较慢',
        error_rsa_generate_failed: 'RSA 密钥生成失败',
        success_rsa_generated: 'RSA 密钥对生成成功',

        // YAML-Properties 转换
        yaml_title: 'YAML-Properties 转换工具',
        yaml_to_properties_btn: 'YAML → Properties',
        properties_to_yaml_btn: 'Properties → YAML',
        yaml_input_label: '输入:',
        yaml_output_label: '输出:',
        yaml_input_placeholder: '粘贴 YAML 或 Properties 格式数据...',
        yaml_output_placeholder: '转换结果将显示在这里',
        error_yaml_invalid: 'YAML 格式错误',
        error_properties_invalid: 'Properties 格式错误',
        success_yaml_converted: 'YAML 转换成功',
        success_properties_converted: 'Properties 转换成功',

        // SQL 格式化
        sql_format_title: 'SQL 格式化工具',
        sql_input_label: '输入:',
        sql_output_label: '输出:',
        sql_input_placeholder: '粘贴 SQL 语句...',
        sql_output_placeholder: '格式化后的 SQL 将显示在这里',
        error_sql_invalid: 'SQL 格式错误',

        // SQL 验证器
        sql_validator_title: 'SQL 验证器',
        sql_validator_input_placeholder: '粘贴 SQL DDL 语句...',
        sql_validator_output_placeholder: '验证结果将显示在这里',
        validate_btn: '验证',
        db_mysql: 'MySQL',
        db_postgresql: 'PostgreSQL',
        db_sqlserver: 'SQL Server',
        db_oracle: 'Oracle',
        db_sqlite: 'SQLite',
        validation_success: 'SQL 验证通过',
        validation_error: 'SQL 验证失败',
        validation_warning: 'SQL 验证警告',
        error_sql_syntax: 'SQL 语法错误',
        error_sql_reserved_word: '保留字使用不当',
        error_sql_invalid_type: '无效的数据类型',
        error_sql_missing_constraint: '缺少约束定义',

        // CSS 格式化
        css_title: 'CSS 格式化工具',
        css_input_label: '输入:',
        css_output_label: '输出:',
        css_input_placeholder: '粘贴 CSS 代码...',
        css_output_placeholder: '格式化或压缩后的 CSS 将显示在这里',
        error_css_invalid: 'CSS 格式错误',

        // 命名格式转换
        naming_title: '命名格式转换工具',
        naming_input_label: '输入:',
        naming_output_label: '输出:',
        naming_input_placeholder: '输入命名文本（支持驼峰、下划线等格式）...',
        convert_btn: '转换',
        error_naming_invalid: '命名格式错误',

        // Unicode 转换
        unicode_title: 'Unicode 转换工具',
        unicode_input_label: '输入:',
        unicode_output_label: '输出:',
        unicode_input_placeholder: '输入中文文本或 Unicode 编码...',
        unicode_output_placeholder: '转换结果将显示在这里',
        to_unicode_btn: '转为 Unicode',
        from_unicode_btn: '从 Unicode 转换',
        unicode_info_title: 'Unicode 格式示例:',
        error_unicode_invalid: 'Unicode 格式错误',

        // 简单计算器
        history: '计算历史',
        history_empty: '暂无历史记录',

        // 简单计时器
        timer_stopwatch: '计时器',
        timer_stopwatch_label: '计时器',
        timer_countdown: '倒计时',
        timer_countdown_label: '倒计时',
        timer_hours: '小时',
        timer_minutes: '分钟',
        timer_seconds: '秒',
        timer_start: '开始',
        timer_pause: '暂停',
        timer_reset: '重置',

        // 字符数统计
        char_counter_input_placeholder: '输入或粘贴文本内容...',
        char_counter_characters: '字符数',
        char_counter_words: '单词数',
        char_counter_lines: '行数',
        char_counter_spaces: '空格数',
        char_counter_info_title: '统计说明',
        char_counter_info_1: '• 字符数：包括所有字符（包括空格、标点符号等）',
        char_counter_info_2: '• 单词数：以空格分隔的单词数量',
        char_counter_info_3: '• 行数：按换行符分隔的行数',
        char_counter_info_4: '• 空格数：文本中的空格数量',

        // UUID 生成器
        uuid_generate_settings: '生成设置',
        uuid_results: '生成结果',
        uuid_info_title: 'UUID 版本说明',
        uuid_info_v1: '• UUID v1: 基于时间戳和 MAC 地址生成，具有时间顺序性',
        uuid_info_v3: '• UUID v3: 基于 MD5 哈希的命名空间 UUID，确定性生成',
        uuid_info_v4: '• UUID v4: 基于随机数生成，最常用的 UUID 版本',
        uuid_info_v5: '• UUID v5: 基于 SHA-1 哈希的命名空间 UUID，确定性生成',
        uuid_info_nil: '• UUID NIL: 全零 UUID (00000000-0000-0000-0000-000000000000)',
        uuid_validate_title: 'UUID 验证',
        uuid_validate_desc: '验证输入的字符串是否为有效的 UUID',
        uuid_validate_placeholder: '输入 UUID 进行验证',
        uuid_value: 'UUID:',
        uuid_version: '版本:',
        uuid_type: '类型:',
        uuid_input_required: '请输入 UUID',
        uuid_invalid: '无效的 UUID 格式',
        uuid_copy_all: '复制全部',
        uuid_download: '下载',

        // 密码生成器
        password_generate_settings: '生成设置',
        password_length_placeholder: '密码长度',
        password_uppercase: '大写字母 (A-Z)',
        password_lowercase: '小写字母 (a-z)',
        password_numbers: '数字 (0-9)',
        password_special: '特殊字符 (!@#$%^&*)',
        password_results: '生成结果',
        password_info_title: '密码生成说明',
        password_info_desc: '• 支持自定义密码长度（4-128 字符）',
        password_info_chars: '• 可选择包含大写字母、小写字母、数字和特殊字符',
        password_info_secure: '• 生成的密码完全随机，所有处理都在本地浏览器完成',
        password_error_length: '密码长度必须在 4 到 128 之间',
        password_error_no_options: '请至少选择一种字符类型',
        password_copy_success: '密码已复制到剪贴板',
        validate_btn: '验证',

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

        // 取模計算器工具
        modulo_title: '取模計算器',
        modulo_dividend: '被除數 (Dividend)',
        modulo_divisor: '除數 (Divisor)',
        modulo_dividend_placeholder: '輸入被除數',
        modulo_divisor_placeholder: '輸入除數',
        modulo_calculate: '計算',
        modulo_result_label: '計算結果:',
        modulo_examples: '常見示例:',
        modulo_example_1: '(10 除以 3 餘 1)',
        modulo_example_2: '(17 除以 5 餘 2)',
        modulo_example_3: '(100 除以 7 餘 2)',
        modulo_example_4: '(256 能被 16 整除)',
        modulo_error_dividend: '請輸入被除數',
        modulo_error_divisor: '請輸入除數',
        modulo_error_zero: '除數不能為 0',

        // ASCII 藝術字工具
        ascii_title: 'ASCII 藝術字生成器',
        ascii_input_label: '輸入文本 (僅支持英文字符)',
        ascii_input_placeholder: '在此輸入您的文本...',
        ascii_font_label: '選擇字體樣式',
        ascii_font_standard: '標準',
        ascii_font_banner: '橫幅',
        ascii_font_block: '方塊',
        ascii_font_slant: '斜體',
        ascii_font_small: '小型',
        ascii_font_big: '大型',
        ascii_generate: '生成',
        ascii_output_placeholder: 'ASCII 藝術字將顯示在這裡...',
        ascii_info_title: '使用說明',
        ascii_info_1: '• 僅支持英文字母、數字和常見符號',
        ascii_info_2: '• 建議輸入文本長度不超過 20 個字符以獲得最佳顯示效果',
        ascii_info_3: '• 不同字體樣式有不同的視覺效果，可以嘗試多種樣式',
        ascii_info_4: '• 生成的 ASCII 藝術字可以直接複製到文本編輯器或社交媒體',

        // 顏色選擇器工具
        color_title: '顏色選擇器',
        color_picker_label: '顏色選擇器',
        color_rgb_sliders: 'RGB 滑塊',
        color_values_title: '顏色值 (點擊複製)',
        color_presets: '常用顏色',

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
        error_no_input: '請輸入資料',
        error_no_input_json: '請輸入 JSON 資料',
        error_no_input_xml: '請輸入 XML 資料',
        error_no_input_url: '請輸入 URL 或文字',
        error_no_input_base64: '請輸入要編碼的文字',
        error_no_input_md5: '請輸入要加密的文字',
        error_no_input_text: '請輸入文字',
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
        error_decode_failed: 'URL 解碼失敗',

        // 文本加解密
        encryption_title: '文本加解密工具',
        encryption_input_label: '輸入文本:',
        encryption_input_placeholder: '輸入要加密或解密的文本...',
        encryption_password_label: '密碼:',
        encryption_password_placeholder: '輸入加密/解密密碼',
        encryption_output_label: '結果:',
        encryption_output_placeholder: '加密或解密的結果將顯示在這裡',
        encrypt_btn: '加密',
        decrypt_btn: '解密',
        show_password: '顯示密碼',
        error_encryption_no_input: '請輸入要加密的文本',
        error_encryption_no_password: '請輸入密碼',
        error_decryption_failed: '解密失敗，請檢查密碼是否正確',
        success_encrypted: '加密成功',
        success_decrypted: '解密成功',

        // Base64 編碼解碼
        base64_title: 'Base64 編碼工具',
        base64_input_label: '輸入文本:',
        base64_input_placeholder: '輸入要編碼或解碼的文本...',
        base64_file_label: '或上傳文件:',
        base64_file_hint: '最大文件大小: 10MB',
        base64_output_label: '結果:',
        base64_output_placeholder: '編碼或解碼的結果將顯示在這裡',
        base64_encode_btn: '編碼',
        base64_decode_btn: '解碼',
        error_base64_encode_failed: 'Base64 編碼失敗',
        error_base64_decode_failed: 'Base64 解碼失敗，請檢查輸入是否為有效的 Base64 字符串',
        error_file_too_large: '文件過大，請選擇小於 10MB 的文件',
        error_file_read_failed: '文件讀取失敗',

        // MD5 加密
        md5_title: 'MD5 加密工具',
        md5_input_label: '輸入文本:',
        md5_input_placeholder: '輸入要轉換為 MD5 的文本...',
        md5_output_label: '結果:',
        md5_output_placeholder: 'MD5 哈希結果將顯示在這裡',
        md5_compute_btn: '計算',
        md5_lowercase: '小寫',
        md5_uppercase: '大寫',
        md5_32bit: '32位',
        md5_16bit: '16位',
        error_md5_compute_failed: 'MD5 計算失敗',

        // JWT Token 生成與解析
        jwt_title: 'JWT Token 生成與解析工具',
        jwt_generate_btn: '生成',
        jwt_parse_btn: '解析',
        jwt_generate_mode: '生成模式',
        jwt_parse_mode: '解析模式',
        jwt_input_label: '輸入',
        jwt_output_label: '輸出',
        jwt_header_label: '頭部 (Header):',
        jwt_payload_label: '載荷 (Payload):',
        jwt_secret_label: '密鑰 (Secret):',
        jwt_algorithm_label: '算法 (Algorithm):',
        jwt_token_label: 'JWT Token:',
        jwt_input_token_label: '輸入 Token:',
        jwt_signature_label: '簽名 (Signature):',
        error_jwt_invalid_json: 'JSON 格式錯誤',
        error_jwt_invalid_token: 'Token 格式無效',
        error_jwt_verification_failed: 'Token 驗證失敗',
        success_jwt_generated: 'JWT Token 生成成功',
        success_jwt_parsed: 'JWT Token 解析成功',

        // RSA 公私鑰生成
        rsa_title: 'RSA 公私鑰生成工具',
        rsa_generate_btn: '生成',
        rsa_copy_public_btn: '複製公鑰',
        rsa_copy_private_btn: '複製私鑰',
        rsa_config_label: '配置',
        rsa_output_label: '輸出',
        rsa_key_length_label: '密鑰長度:',
        rsa_format_label: '格式:',
        rsa_public_key_label: '公鑰:',
        rsa_private_key_label: '私鑰:',
        rsa_info_title: '信息:',
        rsa_info_1: '1024 位: 快速生成，適合測試',
        rsa_info_2: '2048 位: 推薦用於一般用途',
        rsa_info_3: '4096 位: 高安全性，生成較慢',
        error_rsa_generate_failed: 'RSA 密鑰生成失敗',
        success_rsa_generated: 'RSA 密鑰對生成成功',

        // YAML-Properties 轉換
        yaml_title: 'YAML-Properties 轉換工具',
        yaml_to_properties_btn: 'YAML → Properties',
        properties_to_yaml_btn: 'Properties → YAML',
        yaml_input_label: '輸入:',
        yaml_output_label: '輸出:',
        yaml_input_placeholder: '粘貼 YAML 或 Properties 格式數據...',
        yaml_output_placeholder: '轉換結果將顯示在這裡',
        error_yaml_invalid: 'YAML 格式錯誤',
        error_properties_invalid: 'Properties 格式錯誤',
        success_yaml_converted: 'YAML 轉換成功',
        success_properties_converted: 'Properties 轉換成功',

        // SQL 格式化
        sql_format_title: 'SQL 格式化工具',
        sql_input_label: '輸入:',
        sql_output_label: '輸出:',
        sql_input_placeholder: '粘貼 SQL 語句...',
        sql_output_placeholder: '格式化後的 SQL 將顯示在這裡',
        error_sql_invalid: 'SQL 格式錯誤',

        // SQL 驗證器
        sql_validator_title: 'SQL 驗證器',
        sql_validator_input_placeholder: '粘貼 SQL DDL 語句...',
        sql_validator_output_placeholder: '驗證結果將顯示在這裡',
        validate_btn: '驗證',
        db_mysql: 'MySQL',
        db_postgresql: 'PostgreSQL',
        db_sqlserver: 'SQL Server',
        db_oracle: 'Oracle',
        db_sqlite: 'SQLite',
        validation_success: 'SQL 驗證通過',
        validation_error: 'SQL 驗證失敗',
        validation_warning: 'SQL 驗證警告',
        error_sql_syntax: 'SQL 語法錯誤',
        error_sql_reserved_word: '保留字使用不當',
        error_sql_invalid_type: '無效的數據類型',
        error_sql_missing_constraint: '缺少約束定義',

        // CSS 格式化
        css_title: 'CSS 格式化工具',
        css_input_label: '輸入:',
        css_output_label: '輸出:',
        css_input_placeholder: '粘貼 CSS 代碼...',
        css_output_placeholder: '格式化或壓縮後的 CSS 將顯示在這裡',
        error_css_invalid: 'CSS 格式錯誤',

        // 命名格式轉換
        naming_title: '命名格式轉換工具',
        naming_input_label: '輸入:',
        naming_output_label: '輸出:',
        naming_input_placeholder: '輸入命名文本（支持駝峰、下劃線等格式）...',
        convert_btn: '轉換',
        error_naming_invalid: '命名格式錯誤',

        // Unicode 轉換
        unicode_title: 'Unicode 轉換工具',
        unicode_input_label: '輸入:',
        unicode_output_label: '輸出:',
        unicode_input_placeholder: '輸入中文文本或 Unicode 編碼...',
        unicode_output_placeholder: '轉換結果將顯示在這裡',
        to_unicode_btn: '轉為 Unicode',
        from_unicode_btn: '從 Unicode 轉換',
        unicode_info_title: 'Unicode 格式示例:',
        error_unicode_invalid: 'Unicode 格式錯誤',

        // 簡單計算器
        history: '計算歷史',
        history_empty: '暫無歷史記錄',

        // 簡單計時器
        timer_stopwatch: '計時器',
        timer_stopwatch_label: '計時器',
        timer_countdown: '倒計時',
        timer_countdown_label: '倒計時',
        timer_hours: '小時',
        timer_minutes: '分鐘',
        timer_seconds: '秒',
        timer_start: '開始',
        timer_pause: '暫停',
        timer_reset: '重置',

        // 字符數統計
        char_counter_input_placeholder: '輸入或粘貼文本內容...',
        char_counter_characters: '字符數',
        char_counter_words: '單詞數',
        char_counter_lines: '行數',
        char_counter_spaces: '空格數',
        char_counter_info_title: '統計說明',
        char_counter_info_1: '• 字符數：包括所有字符（包括空格、標點符號等）',
        char_counter_info_2: '• 單詞數：以空格分隔的單詞數量',
        char_counter_info_3: '• 行數：按換行符分隔的行數',
        char_counter_info_4: '• 空格數：文本中的空格數量',

        // UUID 生成器
        uuid_generate_settings: '生成設置',
        uuid_results: '生成結果',
        uuid_info_title: 'UUID 版本說明',
        uuid_info_v1: '• UUID v1: 基於時間戳和 MAC 地址生成，具有時間順序性',
        uuid_info_v3: '• UUID v3: 基於 MD5 哈希的命名空間 UUID，確定性生成',
        uuid_info_v4: '• UUID v4: 基於隨機數生成，最常用的 UUID 版本',
        uuid_info_v5: '• UUID v5: 基於 SHA-1 哈希的命名空間 UUID，確定性生成',
        uuid_info_nil: '• UUID NIL: 全零 UUID (00000000-0000-0000-0000-000000000000)',
        uuid_validate_title: 'UUID 驗證',
        uuid_validate_desc: '驗證輸入的字符串是否為有效的 UUID',
        uuid_validate_placeholder: '輸入 UUID 進行驗證',
        uuid_value: 'UUID:',
        uuid_version: '版本:',
        uuid_type: '類型:',
        uuid_input_required: '請輸入 UUID',
        uuid_invalid: '無效的 UUID 格式',
        uuid_copy_all: '複製全部',
        uuid_download: '下載',

        // 密碼生成器
        password_generate_settings: '生成設置',
        password_length_placeholder: '密碼長度',
        password_uppercase: '大寫字母 (A-Z)',
        password_lowercase: '小寫字母 (a-z)',
        password_numbers: '數字 (0-9)',
        password_special: '特殊字符 (!@#$%^&*)',
        password_results: '生成結果',
        password_info_title: '密碼生成說明',
        password_info_desc: '• 支持自定義密碼長度（4-128 字符）',
        password_info_chars: '• 可選擇包含大寫字母、小寫字母、數字和特殊字符',
        password_info_secure: '• 生成的密碼完全隨機，所有處理都在本地瀏覽器完成',
        password_error_length: '密碼長度必須在 4 到 128 之間',
        password_error_no_options: '請至少選擇一種字符類型',
        password_copy_success: '密碼已複製到剪貼板',
        validate_btn: '驗證',

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

        // Modulo Calculator Tool
        modulo_title: 'Modulo Calculator',
        modulo_dividend: 'Dividend',
        modulo_divisor: 'Divisor',
        modulo_dividend_placeholder: 'Enter dividend',
        modulo_divisor_placeholder: 'Enter divisor',
        modulo_calculate: 'Calculate',
        modulo_result_label: 'Result:',
        modulo_examples: 'Common Examples:',
        modulo_example_1: '(10 divided by 3 remainder 1)',
        modulo_example_2: '(17 divided by 5 remainder 2)',
        modulo_example_3: '(100 divided by 7 remainder 2)',
        modulo_example_4: '(256 is divisible by 16)',
        modulo_error_dividend: 'Please enter dividend',
        modulo_error_divisor: 'Please enter divisor',
        modulo_error_zero: 'Divisor cannot be 0',

        // ASCII Art Tool
        ascii_title: 'ASCII Art Generator',
        ascii_input_label: 'Input Text (English characters only)',
        ascii_input_placeholder: 'Enter your text here...',
        ascii_font_label: 'Select Font Style',
        ascii_font_standard: 'Standard',
        ascii_font_banner: 'Banner',
        ascii_font_block: 'Block',
        ascii_font_slant: 'Slant',
        ascii_font_small: 'Small',
        ascii_font_big: 'Big',
        ascii_generate: 'Generate',
        ascii_output_placeholder: 'ASCII art will be displayed here...',
        ascii_info_title: 'Usage Instructions',
        ascii_info_1: '• Only English letters, numbers and common symbols are supported',
        ascii_info_2: '• Recommended text length is no more than 20 characters for best display',
        ascii_info_3: '• Different font styles have different visual effects, try multiple styles',
        ascii_info_4: '• Generated ASCII art can be copied directly to text editors or social media',

        // Color Picker Tool
        color_title: 'Color Picker',
        color_picker_label: 'Color Picker',
        color_rgb_sliders: 'RGB Sliders',
        color_values_title: 'Color Values (Click to Copy)',
        color_presets: 'Common Colors',

        // IP Address Lookup Tool
        ip_get_my_ip: 'Get IP',
        ip_query: 'Query',
        ip_get_button: 'Get',
        ip_input_label: 'Input IP Address:',
        ip_input_placeholder: 'Input IP Address',
        ip_query_button: 'Query',
        ip_your_ip_info: 'Your IP Info:',
        ip_query_result: 'Query Result:',
        ip_query_desc: 'Query IP address location information.',
        ip_click_query: 'Click "Query" button to start',
        ip_loading: 'Getting IP address',
        ip_get_failed: 'Failed to get IP, please try again later',
        ip_input_required: 'Please input IP address',
        ip_querying: 'Querying IP information',
        ip_address: 'IP Address:',
        ip_copy: 'Copy',

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
        error_no_input: 'Please input data',
        error_no_input_json: 'Please input JSON data',
        error_no_input_xml: 'Please input XML data',
        error_no_input_url: 'Please input URL or text',
        error_no_input_base64: 'Please input text to encode',
        error_no_input_md5: 'Please input text to encrypt',
        error_no_input_text: 'Please input text',
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
        error_decode_failed: 'URL decode failed',

        // Text Encryption
        encryption_title: 'Text Encryption & Decryption Tool',
        encryption_input_label: 'Input Text:',
        encryption_input_placeholder: 'Enter text to encrypt or decrypt...',
        encryption_password_label: 'Password:',
        encryption_password_placeholder: 'Enter password for encryption/decryption',
        encryption_output_label: 'Result:',
        encryption_output_placeholder: 'Encrypted or decrypted result will be displayed here',
        encrypt_btn: 'Encrypt',
        decrypt_btn: 'Decrypt',
        show_password: 'Show Password',
        error_encryption_no_input: 'Please enter text to encrypt',
        error_encryption_no_password: 'Please enter password',
        error_decryption_failed: 'Decryption failed, please check if password is correct',
        success_encrypted: 'Encryption successful',
        success_decrypted: 'Decryption successful',

        // Base64 Encoding
        base64_title: 'Base64 Encoding Tool',
        base64_input_label: 'Input Text:',
        base64_input_placeholder: 'Enter text to encode or decode...',
        base64_file_label: 'Or Upload File:',
        base64_file_hint: 'Max file size: 10MB',
        base64_output_label: 'Result:',
        base64_output_placeholder: 'Encoded or decoded result will be displayed here',
        base64_encode_btn: 'Encode',
        base64_decode_btn: 'Decode',
        error_base64_encode_failed: 'Base64 encoding failed',
        error_base64_decode_failed: 'Base64 decoding failed, please check if input is valid Base64 string',
        error_file_too_large: 'File is too large, please select a file smaller than 10MB',
        error_file_read_failed: 'File read failed',

        // MD5 Encryption
        md5_title: 'MD5 Encryption Tool',
        md5_input_label: 'Input Text:',
        md5_input_placeholder: 'Enter text to convert to MD5...',
        md5_output_label: 'Result:',
        md5_output_placeholder: 'MD5 hash result will be displayed here',
        md5_compute_btn: 'Compute',
        md5_lowercase: 'Lowercase',
        md5_uppercase: 'Uppercase',
        md5_32bit: '32-bit',
        md5_16bit: '16-bit',
        error_md5_compute_failed: 'MD5 computation failed',

        // JWT Token Generator & Parser
        jwt_title: 'JWT Token Generator & Parser',
        jwt_generate_btn: 'Generate',
        jwt_parse_btn: 'Parse',
        jwt_generate_mode: 'Generate Mode',
        jwt_parse_mode: 'Parse Mode',
        jwt_input_label: 'Input',
        jwt_output_label: 'Output',
        jwt_header_label: 'Header:',
        jwt_payload_label: 'Payload:',
        jwt_secret_label: 'Secret Key:',
        jwt_algorithm_label: 'Algorithm:',
        jwt_token_label: 'JWT Token:',
        jwt_input_token_label: 'Input Token:',
        jwt_signature_label: 'Signature:',
        error_jwt_invalid_json: 'Invalid JSON format',
        error_jwt_invalid_token: 'Invalid token format',
        error_jwt_verification_failed: 'Token verification failed',
        success_jwt_generated: 'JWT Token generated successfully',
        success_jwt_parsed: 'JWT Token parsed successfully',

        // RSA Key Pair Generator
        rsa_title: 'RSA Key Pair Generator',
        rsa_generate_btn: 'Generate',
        rsa_copy_public_btn: 'Copy Public',
        rsa_copy_private_btn: 'Copy Private',
        rsa_config_label: 'Configuration',
        rsa_output_label: 'Output',
        rsa_key_length_label: 'Key Length:',
        rsa_format_label: 'Format:',
        rsa_public_key_label: 'Public Key:',
        rsa_private_key_label: 'Private Key:',
        rsa_info_title: 'Info:',
        rsa_info_1: '1024 bits: Fast generation, suitable for testing',
        rsa_info_2: '2048 bits: Recommended for general use',
        rsa_info_3: '4096 bits: High security, slower generation',
        error_rsa_generate_failed: 'RSA key generation failed',
        success_rsa_generated: 'RSA key pair generated successfully',

        // YAML-Properties Converter
        yaml_title: 'YAML-Properties Converter',
        yaml_to_properties_btn: 'YAML → Properties',
        properties_to_yaml_btn: 'Properties → YAML',
        yaml_input_label: 'Input:',
        yaml_output_label: 'Output:',
        yaml_input_placeholder: 'Paste YAML or Properties format data...',
        yaml_output_placeholder: 'Converted result will appear here',
        error_yaml_invalid: 'Invalid YAML format',
        error_properties_invalid: 'Invalid Properties format',
        success_yaml_converted: 'YAML converted successfully',
        success_properties_converted: 'Properties converted successfully',

        // SQL Formatter
        sql_format_title: 'SQL Formatter',
        sql_input_label: 'Input:',
        sql_output_label: 'Output:',
        sql_input_placeholder: 'Paste SQL statement...',
        sql_output_placeholder: 'Formatted SQL will appear here',
        error_sql_invalid: 'Invalid SQL format',

        // SQL Validator
        sql_validator_title: 'SQL Validator',
        sql_validator_input_placeholder: 'Paste SQL DDL statement here...',
        sql_validator_output_placeholder: 'Validation result will appear here',
        validate_btn: 'Validate',
        db_mysql: 'MySQL',
        db_postgresql: 'PostgreSQL',
        db_sqlserver: 'SQL Server',
        db_oracle: 'Oracle',
        db_sqlite: 'SQLite',
        validation_success: 'SQL validation passed',
        validation_error: 'SQL validation failed',
        validation_warning: 'SQL validation warning',
        error_sql_syntax: 'SQL syntax error',
        error_sql_reserved_word: 'Reserved word used incorrectly',
        error_sql_invalid_type: 'Invalid data type',
        error_sql_missing_constraint: 'Missing constraint definition',

        // CSS Formatter
        css_title: 'CSS Formatter',
        css_input_label: 'Input:',
        css_output_label: 'Output:',
        css_input_placeholder: 'Paste CSS code here...',
        css_output_placeholder: 'Formatted or compressed CSS will appear here',
        error_css_invalid: 'Invalid CSS format',

        // Naming Converter
        naming_title: 'Naming Converter',
        naming_input_label: 'Input:',
        naming_output_label: 'Output:',
        naming_input_placeholder: 'Enter naming text (supports camelCase, snake_case, etc.)...',
        convert_btn: 'Convert',
        error_naming_invalid: 'Invalid naming format',

        // Unicode Converter
        unicode_title: 'Unicode Converter',
        unicode_input_label: 'Input:',
        unicode_output_label: 'Output:',
        unicode_input_placeholder: 'Enter Chinese text or Unicode encoding...',
        unicode_output_placeholder: 'Conversion result will appear here',
        to_unicode_btn: 'To Unicode',
        from_unicode_btn: 'From Unicode',
        unicode_info_title: 'Unicode Format Examples:',
        error_unicode_invalid: 'Invalid Unicode format',

        // Simple Calculator
        history: 'Calculation History',
        history_empty: 'No history records',

        // Simple Timer
        timer_stopwatch: 'Stopwatch',
        timer_stopwatch_label: 'Stopwatch',
        timer_countdown: 'Countdown',
        timer_countdown_label: 'Countdown',
        timer_hours: 'Hours',
        timer_minutes: 'Minutes',
        timer_seconds: 'Seconds',
        timer_start: 'Start',
        timer_pause: 'Pause',
        timer_reset: 'Reset',

        // Character Counter
        char_counter_input_placeholder: 'Enter or paste text content...',
        char_counter_characters: 'Characters',
        char_counter_words: 'Words',
        char_counter_lines: 'Lines',
        char_counter_spaces: 'Spaces',
        char_counter_info_title: 'Statistics Explanation',
        char_counter_info_1: '• Characters: Includes all characters (including spaces, punctuation, etc.)',
        char_counter_info_2: '• Words: Number of words separated by spaces',
        char_counter_info_3: '• Lines: Number of lines separated by line breaks',
        char_counter_info_4: '• Spaces: Number of spaces in the text',

        // UUID Generator
        uuid_generate_settings: 'Generate Settings',
        uuid_results: 'Generation Results',
        uuid_info_title: 'UUID Version Information',
        uuid_info_v1: '• UUID v1: Time-based UUID with MAC address, has time ordering',
        uuid_info_v3: '• UUID v3: MD5-based namespace UUID, deterministic generation',
        uuid_info_v4: '• UUID v4: Random-based UUID, most commonly used version',
        uuid_info_v5: '• UUID v5: SHA-1-based namespace UUID, deterministic generation',
        uuid_info_nil: '• UUID NIL: All-zero UUID (00000000-0000-0000-0000-000000000000)',
        uuid_validate_title: 'UUID Validation',
        uuid_validate_desc: 'Validate whether the input string is a valid UUID',
        uuid_validate_placeholder: 'Enter UUID to validate',
        uuid_value: 'UUID:',
        uuid_version: 'Version:',
        uuid_type: 'Type:',
        uuid_input_required: 'Please enter UUID',
        uuid_invalid: 'Invalid UUID format',
        uuid_copy_all: 'Copy All',
        uuid_download: 'Download',

        // Password Generator
        password_generate_settings: 'Generate Settings',
        password_length_placeholder: 'Password Length',
        password_uppercase: 'Uppercase Letters (A-Z)',
        password_lowercase: 'Lowercase Letters (a-z)',
        password_numbers: 'Numbers (0-9)',
        password_special: 'Special Characters (!@#$%^&*)',
        password_results: 'Generation Results',
        password_info_title: 'Password Generation Information',
        password_info_desc: '• Support custom password length (4-128 characters)',
        password_info_chars: '• Choose to include uppercase letters, lowercase letters, numbers and special characters',
        password_info_secure: '• Generated passwords are completely random, all processing is done locally in your browser',
        password_error_length: 'Password length must be between 4 and 128',
        password_error_no_options: 'Please select at least one character type',
        password_copy_success: 'Password copied to clipboard',
        validate_btn: 'Validate',

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

    // 文字数カウンター
    char_counter_input_placeholder: 'テキストを入力または貼り付けてください...',
    char_counter_characters: '文字数',
    char_counter_words: '単語数',
    char_counter_lines: '行数',
    char_counter_spaces: 'スペース数',
    char_counter_info_title: '統計説明',
    char_counter_info_1: '• 文字数：すべての文字を含む（スペース、句読点など）',
    char_counter_info_2: '• 単語数：スペースで区切られた単語の数',
    char_counter_info_3: '• 行数：改行で区切られた行の数',
    char_counter_info_4: '• スペース数：テキスト内のスペースの数',

    // UUID生成器
    uuid_generate_settings: '生成設定',
    uuid_results: '生成結果',
    uuid_info_title: 'UUIDバージョン情報',
    uuid_info_v1: '• UUID v1: タイムスタンプとMACアドレスベースのUUID、時間順序性あり',
    uuid_info_v3: '• UUID v3: MD5ハッシュベースの名前空間UUID、決定論的生成',
    uuid_info_v4: '• UUID v4: ランダムベースのUUID、最も一般的なバージョン',
    uuid_info_v5: '• UUID v5: SHA-1ハッシュベースの名前空間UUID、決定論的生成',
    uuid_info_nil: '• UUID NIL: 全ゼロUUID (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'UUID検証',
    uuid_validate_desc: '入力文字列が有効なUUIDであるかを検証',
    uuid_validate_placeholder: 'UUIDを入力して検証',
    uuid_value: 'UUID:',
    uuid_version: 'バージョン:',
    uuid_type: 'タイプ:',
    uuid_input_required: 'UUIDを入力してください',
    uuid_invalid: '無効なUUID形式',
    uuid_copy_all: 'すべてコピー',
    uuid_download: 'ダウンロード',

    // パスワード生成器
    password_generate_settings: '生成設定',
    password_length_placeholder: 'パスワード長',
    password_uppercase: '大文字 (A-Z)',
    password_lowercase: '小文字 (a-z)',
    password_numbers: '数字 (0-9)',
    password_special: '特殊文字 (!@#$%^&*)',
    password_results: '生成結果',
    password_info_title: 'パスワード生成情報',
    password_info_desc: '• カスタムパスワード長をサポート（4-128文字）',
    password_info_chars: '• 大文字、小文字、数字、特殊文字を含めることを選択できます',
    password_info_secure: '• 生成されたパスワードは完全にランダムで、すべての処理はブラウザで行われます',
    password_error_length: 'パスワード長は4〜128の間である必要があります',
    password_error_no_options: '少なくとも1つの文字タイプを選択してください',
    password_copy_success: 'パスワードをクリップボードにコピーしました',
    validate_btn: '検証',

    // モジュロ計算機
    modulo_title: 'モジュロ計算機',
    modulo_dividend: '被除数 (Dividend)',
    modulo_divisor: '除数 (Divisor)',
    modulo_dividend_placeholder: '被除数を入力',
    modulo_divisor_placeholder: '除数を入力',
    modulo_calculate: '計算',
    modulo_result_label: '計算結果:',
    modulo_examples: '一般的な例:',
    modulo_example_1: '(10 を 3 で割った余りは 1)',
    modulo_example_2: '(17 を 5 で割った余りは 2)',
    modulo_example_3: '(100 を 7 で割った余りは 2)',
    modulo_example_4: '(256 は 16 で割り切れる)',
    modulo_error_dividend: '被除数を入力してください',
    modulo_error_divisor: '除数を入力してください',
    modulo_error_zero: '除数は 0 にできません',

    // ASCIIアートツール
    ascii_title: 'ASCIIアートジェネレーター',
    ascii_input_label: 'テキスト入力 (英字のみ)',
    ascii_input_placeholder: 'ここにテキストを入力...',
    ascii_font_label: 'フォントスタイルを選択',
    ascii_font_standard: '標準',
    ascii_font_banner: 'バナー',
    ascii_font_block: 'ブロック',
    ascii_font_slant: 'スラント',
    ascii_font_small: '小',
    ascii_font_big: '大',
    ascii_generate: '生成',
    ascii_output_placeholder: 'ASCIIアートがここに表示されます...',
    ascii_info_title: '使用方法',
    ascii_info_1: '• 英字、数字、一般的な記号のみサポート',
    ascii_info_2: '• 最適な表示のため、テキスト長は20文字以下を推奨',
    ascii_info_3: '• フォントスタイルによって異なる視覚効果があります',
    ascii_info_4: '• 生成されたASCIIアートはテキストエディタやSNSに直接コピー可能',

    // カラーピッカーツール
    color_title: 'カラーピッカー',
    color_picker_label: 'カラーピッカー',
    color_rgb_sliders: 'RGB スライダー',
    color_values_title: 'カラー値 (クリックしてコピー)',
    color_presets: '一般的な色',

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
    error_no_input_json: 'JSONデータを入力してください',
    error_no_input_xml: 'XMLデータを入力してください',
    error_no_input_url: 'URLまたはテキストを入力してください',
    error_no_input_base64: 'エンコードするテキストを入力してください',
    error_no_input_md5: '暗号化するテキストを入力してください',
    error_no_input_text: 'テキストを入力してください',
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
    error_decode_failed: 'URLデコードに失敗しました',

    // テキスト暗号化
    encryption_title: 'テキスト暗号化・復号化ツール',
    encryption_input_label: '入力テキスト:',
    encryption_input_placeholder: '暗号化または復号化するテキストを入力...',
    encryption_password_label: 'パスワード:',
    encryption_password_placeholder: '暗号化/復号化用パスワードを入力',
    encryption_output_label: '結果:',
    encryption_output_placeholder: '暗号化または復号化された結果がここに表示されます',
    encrypt_btn: '暗号化',
    decrypt_btn: '復号化',
    show_password: 'パスワードを表示',
    error_encryption_no_input: '暗号化するテキストを入力してください',
    error_encryption_no_password: 'パスワードを入力してください',
    error_decryption_failed: '復号化に失敗しました。パスワードが正しいか確認してください',
    success_encrypted: '暗号化成功',
    success_decrypted: '復号化成功',

    // Base64エンコーディング
    base64_title: 'Base64エンコーディングツール',
    base64_input_label: '入力テキスト:',
    base64_input_placeholder: 'エンコードまたはデコードするテキストを入力...',
    base64_file_label: 'またはファイルをアップロード:',
    base64_file_hint: '最大ファイルサイズ: 10MB',
    base64_output_label: '結果:',
    base64_output_placeholder: 'エンコードまたはデコードされた結果がここに表示されます',
    base64_encode_btn: 'エンコード',
    base64_decode_btn: 'デコード',
    error_base64_encode_failed: 'Base64エンコードに失敗しました',
    error_base64_decode_failed: 'Base64デコードに失敗しました。入力が有効なBase64文字列であるか確認してください',
    error_file_too_large: 'ファイルが大きすぎます。10MB未満のファイルを選択してください',
    error_file_read_failed: 'ファイルの読み込みに失敗しました',

    // MD5暗号化
    md5_title: 'MD5暗号化ツール',
    md5_input_label: '入力テキスト:',
    md5_input_placeholder: 'MD5に変換するテキストを入力...',
    md5_output_label: '結果:',
    md5_output_placeholder: 'MD5ハッシュ結果がここに表示されます',
    md5_compute_btn: '計算',
    md5_lowercase: '小文字',
    md5_uppercase: '大文字',
    md5_32bit: '32ビット',
    md5_16bit: '16ビット',
    error_md5_compute_failed: 'MD5計算に失敗しました',

    // JWT Token生成とパーサー
    jwt_title: 'JWT Token生成とパーサーツール',
    jwt_generate_btn: '生成',
    jwt_parse_btn: '解析',
    jwt_generate_mode: '生成モード',
    jwt_parse_mode: '解析モード',
    jwt_input_label: '入力',
    jwt_output_label: '出力',
    jwt_header_label: 'ヘッダー:',
    jwt_payload_label: 'ペイロード:',
    jwt_secret_label: 'シークレットキー:',
    jwt_algorithm_label: 'アルゴリズム:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: '入力Token:',
    jwt_signature_label: '署名:',
    error_jwt_invalid_json: '無効なJSON形式',
    error_jwt_invalid_token: '無効なトークン形式',
    error_jwt_verification_failed: 'トークン検証に失敗しました',
    success_jwt_generated: 'JWT Tokenが正常に生成されました',
    success_jwt_parsed: 'JWT Tokenが正常に解析されました',

    // RSA鍵ペア生成
    rsa_title: 'RSA鍵ペア生成ツール',
    rsa_generate_btn: '生成',
    rsa_copy_public_btn: '公開鍵をコピー',
    rsa_copy_private_btn: '秘密鍵をコピー',
    rsa_config_label: '設定',
    rsa_output_label: '出力',
    rsa_key_length_label: '鍵長:',
    rsa_format_label: 'フォーマット:',
    rsa_public_key_label: '公開鍵:',
    rsa_private_key_label: '秘密鍵:',
    rsa_info_title: '情報:',
    rsa_info_1: '1024ビット: 高速生成、テストに適している',
    rsa_info_2: '2048ビット: 一般的な用途に推奨',
    rsa_info_3: '4096ビット: 高セキュリティ、生成が遅い',
    error_rsa_generate_failed: 'RSA鍵生成に失敗しました',
    success_rsa_generated: 'RSA鍵ペア生成成功',

    // YAML-Properties変換
    yaml_title: 'YAML-Properties変換ツール',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: '入力:',
    yaml_output_label: '出力:',
    yaml_input_placeholder: 'YAMLまたはPropertiesフォーマットデータを貼り付けてください...',
    yaml_output_placeholder: '変換結果がここに表示されます',
    error_yaml_invalid: '無効なYAMLフォーマット',
    error_properties_invalid: '無効なPropertiesフォーマット',
    success_yaml_converted: 'YAML変換成功',
    success_properties_converted: 'Properties変換成功',

    // SQL フォーマッター
    sql_format_title: 'SQL フォーマッター',
    sql_input_label: '入力:',
    sql_output_label: '出力:',
    sql_input_placeholder: 'SQL ステートメントを貼り付けてください...',
    sql_output_placeholder: 'フォーマットされた SQL がここに表示されます',
    error_sql_invalid: '無効な SQL フォーマット',

    // SQL バリデーター
    sql_validator_title: 'SQL バリデーター',
    sql_validator_input_placeholder: 'SQL DDL ステートメントを貼り付けてください...',
    sql_validator_output_placeholder: '検証結果がここに表示されます',
    validate_btn: '検証',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'SQL 検証に成功しました',
    validation_error: 'SQL 検証に失敗しました',
    validation_warning: 'SQL 検証警告',
    error_sql_syntax: 'SQL 構文エラー',
    error_sql_reserved_word: '予約語の使用が不適切です',
    error_sql_invalid_type: '無効なデータ型',
    error_sql_missing_constraint: '制約定義がありません',

    // CSS フォーマッター
    css_title: 'CSS フォーマッター',
    css_input_label: '入力:',
    css_output_label: '出力:',
    css_input_placeholder: 'CSS コードを貼り付けてください...',
    css_output_placeholder: 'フォーマットまたは圧縮された CSS がここに表示されます',
    error_css_invalid: '無効な CSS フォーマット',

    // 命名規則変換
    naming_title: '命名規則変換ツール',
    naming_input_label: '入力:',
    naming_output_label: '出力:',
    naming_input_placeholder: '命名テキストを入力してください（キャメルケース、スネークケースなど対応）...',
    convert_btn: '変換',
    error_naming_invalid: '無効な命名フォーマット',

    // Unicode 変換
    unicode_title: 'Unicode 変換ツール',
    unicode_input_label: '入力:',
    unicode_output_label: '出力:',
    unicode_input_placeholder: '中国語テキストまたは Unicode エンコーディングを入力してください...',
    unicode_output_placeholder: '変換結果がここに表示されます',
    to_unicode_btn: 'Unicode に変換',
    from_unicode_btn: 'Unicode から変換',
    unicode_info_title: 'Unicode フォーマット例:',
    error_unicode_invalid: '無効な Unicode フォーマット',

    // シンプル計算機
    history: '計算履歴',
    history_empty: '履歴記録なし',

    // シンプルタイマー
    timer_stopwatch: 'ストップウォッチ',
    timer_stopwatch_label: 'ストップウォッチ',
    timer_countdown: 'カウントダウン',
    timer_countdown_label: 'カウントダウン',
    timer_hours: '時間',
    timer_minutes: '分',
    timer_seconds: '秒',
    timer_start: '開始',
    timer_pause: '一時停止',
    timer_reset: 'リセット',

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

    // UUID 생성기
    uuid_generate_settings: '생성 설정',
    uuid_results: '생성 결과',
    uuid_info_title: 'UUID 버전 정보',
    uuid_info_v1: '• UUID v1: 타임스탬프 및 MAC 주소 기반, 시간 순서 있음',
    uuid_info_v3: '• UUID v3: MD5 해시 기반 네임스페이스 UUID, 결정론적 생성',
    uuid_info_v4: '• UUID v4: 무작위 기반 UUID, 가장 일반적인 버전',
    uuid_info_v5: '• UUID v5: SHA-1 해시 기반 네임스페이스 UUID, 결정론적 생성',
    uuid_info_nil: '• UUID NIL: 모두 0인 UUID (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'UUID 검증',
    uuid_validate_desc: '입력 문자열이 유효한 UUID인지 검증',
    uuid_validate_placeholder: 'UUID를 입력하여 검증',
    uuid_value: 'UUID:',
    uuid_version: '버전:',
    uuid_type: '유형:',
    uuid_input_required: 'UUID를 입력하세요',
    uuid_invalid: '잘못된 UUID 형식',
    uuid_copy_all: '모두 복사',
    uuid_download: '다운로드',

    // 비밀번호 생성기
    password_generate_settings: '생성 설정',
    password_length_placeholder: '비밀번호 길이',
    password_uppercase: '대문자 (A-Z)',
    password_lowercase: '소문자 (a-z)',
    password_numbers: '숫자 (0-9)',
    password_special: '특수 문자 (!@#$%^&*)',
    password_results: '생성 결과',
    password_info_title: '비밀번호 생성 정보',
    password_info_desc: '• 사용자 정의 비밀번호 길이 지원 (4-128 문자)',
    password_info_chars: '• 대문자, 소문자, 숫자 및 특수 문자 포함 선택 가능',
    password_info_secure: '• 생성된 비밀번호는 완전히 무작위이며 모든 처리는 브라우저에서 수행됩니다',
    password_error_length: '비밀번호 길이는 4에서 128 사이여야 합니다',
    password_error_no_options: '최소 1개의 문자 유형을 선택하세요',
    password_copy_success: '비밀번호가 클립보드에 복사되었습니다',

    // 모듈로 계산기
    modulo_title: '모듈로 계산기',
    modulo_dividend: '피제수 (Dividend)',
    modulo_divisor: '제수 (Divisor)',
    modulo_dividend_placeholder: '피제수 입력',
    modulo_divisor_placeholder: '제수 입력',
    modulo_calculate: '계산',
    modulo_result_label: '계산 결과:',
    modulo_examples: '일반적인 예:',
    modulo_example_1: '(10을 3으로 나눈 나머지는 1)',
    modulo_example_2: '(17을 5로 나눈 나머지는 2)',
    modulo_example_3: '(100을 7로 나눈 나머지는 2)',
    modulo_example_4: '(256은 16으로 나누어떨어짐)',
    modulo_error_dividend: '피제수를 입력하세요',
    modulo_error_divisor: '제수를 입력하세요',
    modulo_error_zero: '제수는 0이 될 수 없습니다',

    // ASCII 아트 도구
    ascii_title: 'ASCII 아트 생성기',
    ascii_input_label: '텍스트 입력 (영문만 지원)',
    ascii_input_placeholder: '여기에 텍스트를 입력하세요...',
    ascii_font_label: '글꼴 스타일 선택',
    ascii_font_standard: '표준',
    ascii_font_banner: '배너',
    ascii_font_block: '블록',
    ascii_font_slant: '기울임',
    ascii_font_small: '작게',
    ascii_font_big: '크게',
    ascii_generate: '생성',
    ascii_output_placeholder: 'ASCII 아트가 여기에 표시됩니다...',
    ascii_info_title: '사용 방법',
    ascii_info_1: '• 영문자, 숫자 및 일반 기호만 지원',
    ascii_info_2: '• 최적의 표시를 위해 텍스트 길이는 20자 이하 권장',
    ascii_info_3: '• 글꼴 스타일에 따라 다른 시각 효과가 있습니다',
    ascii_info_4: '• 생성된 ASCII 아트는 텍스트 편집기나 소셜 미디어에 직접 복사 가능',

    // 컬러 피커 도구
    color_title: '컬러 피커',
    color_picker_label: '컬러 피커',
    color_rgb_sliders: 'RGB 슬라이더',
    color_values_title: '색상 값 (클릭하여 복사)',
    color_presets: '일반 색상',

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
    error_no_input_json: 'JSON 데이터를 입력하세요',
    error_no_input_xml: 'XML 데이터를 입력하세요',
    error_no_input_url: 'URL 또는 텍스트를 입력하세요',
    error_no_input_base64: '인코딩할 텍스트를 입력하세요',
    error_no_input_md5: '암호화할 텍스트를 입력하세요',
    error_no_input_text: '텍스트를 입력하세요',
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
    error_decode_failed: 'URL 디코드 실패',

    // 텍스트 암호화
    encryption_title: '텍스트 암호화 및 복호화 도구',
    encryption_input_label: '입력 텍스트:',
    encryption_input_placeholder: '암호화 또는 복호화할 텍스트 입력...',
    encryption_password_label: '비밀번호:',
    encryption_password_placeholder: '암호화/복호화 비밀번호 입력',
    encryption_output_label: '결과:',
    encryption_output_placeholder: '암호화 또는 복호화된 결과가 여기에 표시됩니다',
    encrypt_btn: '암호화',
    decrypt_btn: '복호화',
    show_password: '비밀번호 표시',
    error_encryption_no_input: '암호화할 텍스트를 입력하세요',
    error_encryption_no_password: '비밀번호를 입력하세요',
    error_decryption_failed: '복호화 실패, 비밀번호가 올바른지 확인하세요',
    success_encrypted: '암호화 성공',
    success_decrypted: '복호화 성공',

    // Base64 인코딩
    base64_title: 'Base64 인코딩 도구',
    base64_input_label: '입력 텍스트:',
    base64_input_placeholder: '인코드 또는 디코드할 텍스트 입력...',
    base64_file_label: '또는 파일 업로드:',
    base64_file_hint: '최대 파일 크기: 10MB',
    base64_output_label: '결과:',
    base64_output_placeholder: '인코드 또는 디코드된 결과가 여기에 표시됩니다',
    base64_encode_btn: '인코드',
    base64_decode_btn: '디코드',
    error_base64_encode_failed: 'Base64 인코딩 실패',
    error_base64_decode_failed: 'Base64 디코딩 실패, 입력이 유효한 Base64 문자열인지 확인하세요',
    error_file_too_large: '파일이 너무 큽니다. 10MB 미만의 파일을 선택하세요',
    error_file_read_failed: '파일 읽기 실패',

    // MD5 암호화
    md5_title: 'MD5 암호화 도구',
    md5_input_label: '입력 텍스트:',
    md5_input_placeholder: 'MD5로 변환할 텍스트 입력...',
    md5_output_label: '결과:',
    md5_output_placeholder: 'MD5 해시 결과가 여기에 표시됩니다',
    md5_compute_btn: '계산',
    md5_lowercase: '소문자',
    md5_uppercase: '대문자',
    md5_32bit: '32비트',
    md5_16bit: '16비트',
    error_md5_compute_failed: 'MD5 계산 실패',

    // JWT Token 생성 및 파서
    jwt_title: 'JWT Token 생성 및 파서 도구',
    jwt_generate_btn: '생성',
    jwt_parse_btn: '파싱',
    jwt_generate_mode: '생성 모드',
    jwt_parse_mode: '파싱 모드',
    jwt_input_label: '입력',
    jwt_output_label: '출력',
    jwt_header_label: '헤더:',
    jwt_payload_label: '페이로드:',
    jwt_secret_label: '비밀 키:',
    jwt_algorithm_label: '알고리즘:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: '입력 Token:',
    jwt_signature_label: '서명:',
    error_jwt_invalid_json: '잘못된 JSON 형식',
    error_jwt_invalid_token: '잘못된 토큰 형식',
    error_jwt_verification_failed: '토큰 검증 실패',
    success_jwt_generated: 'JWT Token이 성공적으로 생성되었습니다',
    success_jwt_parsed: 'JWT Token이 성공적으로 파싱되었습니다',

    // RSA 키 쌍 생성
    rsa_title: 'RSA 키 쌍 생성 도구',
    rsa_generate_btn: '생성',
    rsa_copy_public_btn: '공개 키 복사',
    rsa_copy_private_btn: '개인 키 복사',
    rsa_config_label: '설정',
    rsa_output_label: '출력',
    rsa_key_length_label: '키 길이:',
    rsa_format_label: '형식:',
    rsa_public_key_label: '공개 키:',
    rsa_private_key_label: '개인 키:',
    rsa_info_title: '정보:',
    rsa_info_1: '1024비트: 빠른 생성, 테스트에 적합',
    rsa_info_2: '2048비트: 일반 용도에 권장',
    rsa_info_3: '4096비트: 높은 보안, 생성 속도 느림',
    error_rsa_generate_failed: 'RSA 키 생성 실패',
    success_rsa_generated: 'RSA 키 쌍이 성공적으로 생성되었습니다',

    // YAML-Properties 변환
    yaml_title: 'YAML-Properties 변환 도구',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: '입력:',
    yaml_output_label: '출력:',
    yaml_input_placeholder: 'YAML 또는 Properties 형식 데이터를 붙여넣으세요...',
    yaml_output_placeholder: '변환 결과가 여기에 표시됩니다',
    error_yaml_invalid: '잘못된 YAML 형식',
    error_properties_invalid: '잘못된 Properties 형식',
    success_yaml_converted: 'YAML 변환 성공',
    success_properties_converted: 'Properties 변환 성공',

    // SQL 포맷터
    sql_format_title: 'SQL 포맷터',
    sql_input_label: '입력:',
    sql_output_label: '출력:',
    sql_input_placeholder: 'SQL 문을 붙여넣으세요...',
    sql_output_placeholder: '포맷된 SQL이 여기에 표시됩니다',
    error_sql_invalid: '잘못된 SQL 형식',

    // SQL 검증기
    sql_validator_title: 'SQL 검증기',
    sql_validator_input_placeholder: 'SQL DDL 문을 붙여넣으세요...',
    sql_validator_output_placeholder: '검증 결과가 여기에 표시됩니다',
    validate_btn: '검증',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'SQL 검증 통과',
    validation_error: 'SQL 검증 실패',
    validation_warning: 'SQL 검증 경고',
    error_sql_syntax: 'SQL 구문 오류',
    error_sql_reserved_word: '예약어 사용 오류',
    error_sql_invalid_type: '잘못된 데이터 유형',
    error_sql_missing_constraint: '제약 조건 정의 누락',

    // CSS 포맷터
    css_title: 'CSS 포맷터',
    css_input_label: '입력:',
    css_output_label: '출력:',
    css_input_placeholder: 'CSS 코드를 붙여넣으세요...',
    css_output_placeholder: '포맷되거나 압축된 CSS가 여기에 표시됩니다',
    error_css_invalid: '잘못된 CSS 형식',

    // 명명 규칙 변환
    naming_title: '명명 규칙 변환 도구',
    naming_input_label: '입력:',
    naming_output_label: '출력:',
    naming_input_placeholder: '명명 텍스트를 입력하세요 (camelCase, snake_case 등 지원)...',
    convert_btn: '변환',
    error_naming_invalid: '잘못된 명명 형식',

    // Unicode 변환
    unicode_title: 'Unicode 변환 도구',
    unicode_input_label: '입력:',
    unicode_output_label: '출력:',
    unicode_input_placeholder: '중국어 텍스트 또는 Unicode 인코딩을 입력하세요...',
    unicode_output_placeholder: '변환 결과가 여기에 표시됩니다',
    to_unicode_btn: 'Unicode로 변환',
    from_unicode_btn: 'Unicode에서 변환',
    unicode_info_title: 'Unicode 형식 예:',
    error_unicode_invalid: '잘못된 Unicode 형식',


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

    // Generador UUID
    uuid_generate_settings: 'Configuración de Generación',
    uuid_results: 'Resultados de Generación',
    uuid_info_title: 'Información de Versión UUID',
    uuid_info_v1: '• UUID v1: UUID basado en marca de tiempo y dirección MAC, con orden temporal',
    uuid_info_v3: '• UUID v3: UUID de espacio de nombres basado en MD5, generación determinista',
    uuid_info_v4: '• UUID v4: UUID basado en aleatorio, versión más comúnmente utilizada',
    uuid_info_v5: '• UUID v5: UUID de espacio de nombres basado en SHA-1, generación determinista',
    uuid_info_nil: '• UUID NIL: UUID todo ceros (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'Validación UUID',
    uuid_validate_desc: 'Validar si la cadena de entrada es un UUID válido',
    uuid_validate_placeholder: 'Ingrese UUID para validar',
    uuid_value: 'UUID:',
    uuid_version: 'Versión:',
    uuid_type: 'Tipo:',
    uuid_input_required: 'Por favor ingrese UUID',
    uuid_invalid: 'Formato UUID inválido',
    uuid_copy_all: 'Copiar Todo',
    uuid_download: 'Descargar',

    // Generador de Contraseñas
    password_generate_settings: 'Configuración de Generación',
    password_length_placeholder: 'Longitud de Contraseña',
    password_uppercase: 'Letras Mayúsculas (A-Z)',
    password_lowercase: 'Letras Minúsculas (a-z)',
    password_numbers: 'Números (0-9)',
    password_special: 'Caracteres Especiales (!@#$%^&*)',
    password_results: 'Resultados de Generación',
    password_info_title: 'Información de Generación de Contraseña',
    password_info_desc: '• Soporta longitud de contraseña personalizada (4-128 caracteres)',
    password_info_chars: '• Elija incluir letras mayúsculas, minúsculas, números y caracteres especiales',
    password_info_secure: '• Las contraseñas generadas son completamente aleatorias, todo el procesamiento se realiza localmente en su navegador',
    password_error_length: 'La longitud de la contraseña debe estar entre 4 y 128',
    password_error_no_options: 'Por favor seleccione al menos un tipo de carácter',
    password_copy_success: 'Contraseña copiada al portapapeles',

    // Calculadora de Módulo
    modulo_title: 'Calculadora de Módulo',
    modulo_dividend: 'Dividendo',
    modulo_divisor: 'Divisor',
    modulo_dividend_placeholder: 'Ingresar dividendo',
    modulo_divisor_placeholder: 'Ingresar divisor',
    modulo_calculate: 'Calcular',
    modulo_result_label: 'Resultado:',
    modulo_examples: 'Ejemplos Comunes:',
    modulo_example_1: '(10 dividido por 3 resto 1)',
    modulo_example_2: '(17 dividido por 5 resto 2)',
    modulo_example_3: '(100 dividido por 7 resto 2)',
    modulo_example_4: '(256 es divisible por 16)',
    modulo_error_dividend: 'Por favor ingrese el dividendo',
    modulo_error_divisor: 'Por favor ingrese el divisor',
    modulo_error_zero: 'El divisor no puede ser 0',

    // Herramienta de Arte ASCII
    ascii_title: 'Generador de Arte ASCII',
    ascii_input_label: 'Ingresar Texto (solo caracteres en inglés)',
    ascii_input_placeholder: 'Ingrese su texto aquí...',
    ascii_font_label: 'Seleccionar Estilo de Fuente',
    ascii_font_standard: 'Estándar',
    ascii_font_banner: 'Banner',
    ascii_font_block: 'Bloque',
    ascii_font_slant: 'Inclinado',
    ascii_font_small: 'Pequeño',
    ascii_font_big: 'Grande',
    ascii_generate: 'Generar',
    ascii_output_placeholder: 'El arte ASCII se mostrará aquí...',
    ascii_info_title: 'Instrucciones de Uso',
    ascii_info_1: '• Solo se admiten letras en inglés, números y símbolos comunes',
    ascii_info_2: '• Se recomienda una longitud de texto no mayor a 20 caracteres para mejor visualización',
    ascii_info_3: '• Diferentes estilos de fuente tienen diferentes efectos visuales',
    ascii_info_4: '• El arte ASCII generado se puede copiar directamente a editores de texto o redes sociales',

    // Herramienta de Selector de Color
    color_title: 'Selector de Color',
    color_picker_label: 'Selector de Color',
    color_rgb_sliders: 'Deslizadores RGB',
    color_values_title: 'Valores de Color (Clic para Copiar)',
    color_presets: 'Colores Comunes',

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
    error_no_input_json: 'Por favor ingrese datos JSON',
    error_no_input_xml: 'Por favor ingrese datos XML',
    error_no_input_url: 'Por favor ingrese URL o texto',
    error_no_input_base64: 'Por favor ingrese texto para codificar',
    error_no_input_md5: 'Por favor ingrese texto para encriptar',
    error_no_input_text: 'Por favor ingrese texto',
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
    error_decode_failed: 'Error al decodificar URL',

    // Cifrado de Texto
    encryption_title: 'Herramienta de Cifrado y Descifrado de Texto',
    encryption_input_label: 'Texto de Entrada:',
    encryption_input_placeholder: 'Ingrese texto para cifrar o descifrar...',
    encryption_password_label: 'Contraseña:',
    encryption_password_placeholder: 'Ingrese contraseña para cifrado/descifrado',
    encryption_output_label: 'Resultado:',
    encryption_output_placeholder: 'El resultado cifrado o descifrado se mostrará aquí',
    encrypt_btn: 'Cifrar',
    decrypt_btn: 'Descifrar',
    show_password: 'Mostrar Contraseña',
    error_encryption_no_input: 'Por favor ingrese texto para cifrar',
    error_encryption_no_password: 'Por favor ingrese contraseña',
    error_decryption_failed: 'Error al descifrar, verifique si la contraseña es correcta',
    success_encrypted: 'Cifrado exitoso',
    success_decrypted: 'Descifrado exitoso',

    // Codificación Base64
    base64_title: 'Herramienta de Codificación Base64',
    base64_input_label: 'Texto de Entrada:',
    base64_input_placeholder: 'Ingrese texto para codificar o decodificar...',
    base64_file_label: 'O Cargar Archivo:',
    base64_file_hint: 'Tamaño máximo de archivo: 10MB',
    base64_output_label: 'Resultado:',
    base64_output_placeholder: 'El resultado codificado o decodificado se mostrará aquí',
    base64_encode_btn: 'Codificar',
    base64_decode_btn: 'Decodificar',
    error_base64_encode_failed: 'Error al codificar Base64',
    error_base64_decode_failed: 'Error al decodificar Base64, verifique si la entrada es una cadena Base64 válida',
    error_file_too_large: 'El archivo es demasiado grande, seleccione un archivo menor a 10MB',
    error_file_read_failed: 'Error al leer el archivo',

    // Cifrado MD5
    md5_title: 'Herramienta de Cifrado MD5',
    md5_input_label: 'Texto de Entrada:',
    md5_input_placeholder: 'Ingrese texto para convertir a MD5...',
    md5_output_label: 'Resultado:',
    md5_output_placeholder: 'El resultado del hash MD5 se mostrará aquí',
    md5_compute_btn: 'Calcular',
    md5_lowercase: 'Minúsculas',
    md5_uppercase: 'Mayúsculas',
    md5_32bit: '32 bits',
    md5_16bit: '16 bits',
    error_md5_compute_failed: 'Error al calcular MD5',

    // Generador y Analizador de JWT Token
    jwt_title: 'Generador y Analizador de JWT Token',
    jwt_generate_btn: 'Generar',
    jwt_parse_btn: 'Analizar',
    jwt_generate_mode: 'Modo Generar',
    jwt_parse_mode: 'Modo Analizar',
    jwt_input_label: 'Entrada',
    jwt_output_label: 'Salida',
    jwt_header_label: 'Encabezado:',
    jwt_payload_label: 'Carga Útil:',
    jwt_secret_label: 'Clave Secreta:',
    jwt_algorithm_label: 'Algoritmo:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: 'Token de Entrada:',
    jwt_signature_label: 'Firma:',
    error_jwt_invalid_json: 'Formato JSON inválido',
    error_jwt_invalid_token: 'Formato de token inválido',
    error_jwt_verification_failed: 'Falló la verificación del token',
    success_jwt_generated: 'JWT Token generado exitosamente',
    success_jwt_parsed: 'JWT Token analizado exitosamente',

    // Generador de Pares de Claves RSA
    rsa_title: 'Generador de Pares de Claves RSA',
    rsa_generate_btn: 'Generar',
    rsa_copy_public_btn: 'Copiar Clave Pública',
    rsa_copy_private_btn: 'Copiar Clave Privada',
    rsa_config_label: 'Configuración',
    rsa_output_label: 'Salida',
    rsa_key_length_label: 'Longitud de Clave:',
    rsa_format_label: 'Formato:',
    rsa_public_key_label: 'Clave Pública:',
    rsa_private_key_label: 'Clave Privada:',
    rsa_info_title: 'Información:',
    rsa_info_1: '1024 bits: Generación rápida, adecuado para pruebas',
    rsa_info_2: '2048 bits: Recomendado para uso general',
    rsa_info_3: '4096 bits: Alta seguridad, generación más lenta',
    error_rsa_generate_failed: 'Error al generar claves RSA',
    success_rsa_generated: 'Par de claves RSA generado exitosamente',

    // Conversor YAML-Properties
    yaml_title: 'Conversor YAML-Properties',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: 'Entrada:',
    yaml_output_label: 'Salida:',
    yaml_input_placeholder: 'Pegue datos en formato YAML o Properties...',
    yaml_output_placeholder: 'El resultado convertido aparecerá aquí',
    error_yaml_invalid: 'Formato YAML inválido',
    error_properties_invalid: 'Formato Properties inválido',
    success_yaml_converted: 'YAML convertido exitosamente',
    success_properties_converted: 'Properties convertido exitosamente',

    // Formateador SQL
    sql_format_title: 'Formateador SQL',
    sql_input_label: 'Entrada:',
    sql_output_label: 'Salida:',
    sql_input_placeholder: 'Pegue la declaración SQL...',
    sql_output_placeholder: 'El SQL formateado aparecerá aquí',
    error_sql_invalid: 'Formato SQL inválido',

    // Validador SQL
    sql_validator_title: 'Validador SQL',
    sql_validator_input_placeholder: 'Pegue la declaración SQL DDL...',
    sql_validator_output_placeholder: 'El resultado de validación aparecerá aquí',
    validate_btn: 'Validar',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'Validación SQL exitosa',
    validation_error: 'Validación SQL fallida',
    validation_warning: 'Advertencia de validación SQL',
    error_sql_syntax: 'Error de sintaxis SQL',
    error_sql_reserved_word: 'Uso incorrecto de palabra reservada',
    error_sql_invalid_type: 'Tipo de dato inválido',
    error_sql_missing_constraint: 'Definición de restricción faltante',

    // Formateador CSS
    css_title: 'Formateador CSS',
    css_input_label: 'Entrada:',
    css_output_label: 'Salida:',
    css_input_placeholder: 'Pegue código CSS aquí...',
    css_output_placeholder: 'El CSS formateado o comprimido aparecerá aquí',
    error_css_invalid: 'Formato CSS inválido',

    // Convertidor de Nombres
    naming_title: 'Convertidor de Nombres',
    naming_input_label: 'Entrada:',
    naming_output_label: 'Salida:',
    naming_input_placeholder: 'Ingrese texto de nombres (soporta camelCase, snake_case, etc.)...',
    convert_btn: 'Convertir',
    error_naming_invalid: 'Formato de nombre inválido',

    // Convertidor Unicode
    unicode_title: 'Convertidor Unicode',
    unicode_input_label: 'Entrada:',
    unicode_output_label: 'Salida:',
    unicode_input_placeholder: 'Ingrese texto chino o codificación Unicode...',
    unicode_output_placeholder: 'El resultado de la conversión aparecerá aquí',
    to_unicode_btn: 'A Unicode',
    from_unicode_btn: 'Desde Unicode',
    unicode_info_title: 'Ejemplos de Formato Unicode:',
    error_unicode_invalid: 'Formato Unicode inválido',


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

    // Générateur UUID
    uuid_generate_settings: 'Paramètres de Génération',
    uuid_results: 'Résultats de Génération',
    uuid_info_title: 'Informations sur la Version UUID',
    uuid_info_v1: '• UUID v1: UUID basé sur l\'horodatage et l\'adresse MAC, avec ordre temporel',
    uuid_info_v3: '• UUID v3: UUID d\'espace de noms basé sur MD5, génération déterministe',
    uuid_info_v4: '• UUID v4: UUID basé sur aléatoire, version la plus couramment utilisée',
    uuid_info_v5: '• UUID v5: UUID d\'espace de noms basé sur SHA-1, génération déterministe',
    uuid_info_nil: '• UUID NIL: UUID tout zéro (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'Validation UUID',
    uuid_validate_desc: 'Valider si la chaîne d\'entrée est un UUID valide',
    uuid_validate_placeholder: 'Saisir UUID pour valider',
    uuid_value: 'UUID:',
    uuid_version: 'Version:',
    uuid_type: 'Type:',
    uuid_input_required: 'Veuillez saisir UUID',
    uuid_invalid: 'Format UUID invalide',
    uuid_copy_all: 'Copier Tout',
    uuid_download: 'Télécharger',

    // Générateur de Mot de Passe
    password_generate_settings: 'Paramètres de Génération',
    password_length_placeholder: 'Longueur du Mot de Passe',
    password_uppercase: 'Lettres Majuscules (A-Z)',
    password_lowercase: 'Lettres Minuscules (a-z)',
    password_numbers: 'Chiffres (0-9)',
    password_special: 'Caractères Spéciaux (!@#$%^&*)',
    password_results: 'Résultats de Génération',
    password_info_title: 'Informations sur la Génération de Mot de Passe',
    password_info_desc: '• Supporte la longueur de mot de passe personnalisée (4-128 caractères)',
    password_info_chars: '• Choisissez d\'inclure des lettres majuscules, minuscules, des chiffres et des caractères spéciaux',
    password_info_secure: '• Les mots de passe générés sont complètement aléatoires, tout le traitement est effectué localement dans votre navigateur',
    password_error_length: 'La longueur du mot de passe doit être entre 4 et 128',
    password_error_no_options: 'Veuillez sélectionner au moins un type de caractère',
    password_copy_success: 'Mot de passe copié dans le presse-papiers',

    // Calculatrice de Modulo
    modulo_title: 'Calculatrice de Modulo',
    modulo_dividend: 'Dividende',
    modulo_divisor: 'Diviseur',
    modulo_dividend_placeholder: 'Entrer le dividende',
    modulo_divisor_placeholder: 'Entrer le diviseur',
    modulo_calculate: 'Calculer',
    modulo_result_label: 'Résultat:',
    modulo_examples: 'Exemples Courants:',
    modulo_example_1: '(10 divisé par 3 reste 1)',
    modulo_example_2: '(17 divisé par 5 reste 2)',
    modulo_example_3: '(100 divisé par 7 reste 2)',
    modulo_example_4: '(256 est divisible par 16)',
    modulo_error_dividend: 'Veuillez entrer le dividende',
    modulo_error_divisor: 'Veuillez entrer le diviseur',
    modulo_error_zero: 'Le diviseur ne peut pas être 0',

    // Outil d'Art ASCII
    ascii_title: 'Générateur d\'Art ASCII',
    ascii_input_label: 'Saisir le Texte (caractères anglais uniquement)',
    ascii_input_placeholder: 'Entrez votre texte ici...',
    ascii_font_label: 'Sélectionner le Style de Police',
    ascii_font_standard: 'Standard',
    ascii_font_banner: 'Bannière',
    ascii_font_block: 'Bloc',
    ascii_font_slant: 'Incliné',
    ascii_font_small: 'Petit',
    ascii_font_big: 'Grand',
    ascii_generate: 'Générer',
    ascii_output_placeholder: 'L\'art ASCII sera affiché ici...',
    ascii_info_title: 'Instructions d\'Utilisation',
    ascii_info_1: '• Seuls les lettres anglaises, chiffres et symboles courants sont pris en charge',
    ascii_info_2: '• Longueur de texte recommandée de 20 caractères maximum pour un meilleur affichage',
    ascii_info_3: '• Différents styles de police ont différents effets visuels',
    ascii_info_4: '• L\'art ASCII généré peut être copié directement dans des éditeurs de texte ou réseaux sociaux',

    // Outil de Sélecteur de Couleur
    color_title: 'Sélecteur de Couleur',
    color_picker_label: 'Sélecteur de Couleur',
    color_rgb_sliders: 'Curseurs RGB',
    color_values_title: 'Valeurs de Couleur (Cliquer pour Copier)',
    color_presets: 'Couleurs Courantes',

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
    error_no_input_json: 'Veuillez saisir des données JSON',
    error_no_input_xml: 'Veuillez saisir des données XML',
    error_no_input_url: 'Veuillez saisir une URL ou du texte',
    error_no_input_base64: 'Veuillez saisir le texte à encoder',
    error_no_input_md5: 'Veuillez saisir le texte à chiffrer',
    error_no_input_text: 'Veuillez saisir du texte',
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
    error_decode_failed: 'Échec du décodage URL',

    // Chiffrement de Texte
    encryption_title: 'Outil de Chiffrement et Déchiffrement de Texte',
    encryption_input_label: 'Texte d\'Entrée:',
    encryption_input_placeholder: 'Entrez le texte à chiffrer ou déchiffrer...',
    encryption_password_label: 'Mot de Passe:',
    encryption_password_placeholder: 'Entrez le mot de passe pour chiffrement/déchiffrement',
    encryption_output_label: 'Résultat:',
    encryption_output_placeholder: 'Le résultat chiffré ou déchiffré s\'affichera ici',
    encrypt_btn: 'Chiffrer',
    decrypt_btn: 'Déchiffrer',
    show_password: 'Afficher le Mot de Passe',
    error_encryption_no_input: 'Veuillez entrer le texte à chiffrer',
    error_encryption_no_password: 'Veuillez entrer le mot de passe',
    error_decryption_failed: 'Échec du déchiffrement, veuillez vérifier si le mot de passe est correct',
    success_encrypted: 'Chiffrement réussi',
    success_decrypted: 'Déchiffrement réussi',

    // Encodage Base64
    base64_title: 'Outil d\'Encodage Base64',
    base64_input_label: 'Texte d\'Entrée:',
    base64_input_placeholder: 'Entrez le texte à encoder ou décoder...',
    base64_file_label: 'Ou Télécharger un Fichier:',
    base64_file_hint: 'Taille maximale du fichier: 10MB',
    base64_output_label: 'Résultat:',
    base64_output_placeholder: 'Le résultat encodé ou décodé s\'affichera ici',
    base64_encode_btn: 'Encoder',
    base64_decode_btn: 'Décoder',
    error_base64_encode_failed: 'Échec de l\'encodage Base64',
    error_base64_decode_failed: 'Échec du décodage Base64, veuillez vérifier si l\'entrée est une chaîne Base64 valide',
    error_file_too_large: 'Le fichier est trop volumineux, sélectionnez un fichier inférieur à 10MB',
    error_file_read_failed: 'Échec de la lecture du fichier',

    // Chiffrement MD5
    md5_title: 'Outil de Chiffrement MD5',
    md5_input_label: 'Texte d\'Entrée:',
    md5_input_placeholder: 'Entrez le texte à convertir en MD5...',
    md5_output_label: 'Résultat:',
    md5_output_placeholder: 'Le résultat du hash MD5 s\'affichera ici',
    md5_compute_btn: 'Calculer',
    md5_lowercase: 'Minuscules',
    md5_uppercase: 'Majuscules',
    md5_32bit: '32 bits',
    md5_16bit: '16 bits',
    error_md5_compute_failed: 'Échec du calcul MD5',

    // Générateur et Analyseur de JWT Token
    jwt_title: 'Générateur et Analyseur de JWT Token',
    jwt_generate_btn: 'Générer',
    jwt_parse_btn: 'Analyser',
    jwt_generate_mode: 'Mode Génération',
    jwt_parse_mode: 'Mode Analyse',
    jwt_input_label: 'Entrée',
    jwt_output_label: 'Sortie',
    jwt_header_label: 'En-tête:',
    jwt_payload_label: 'Charge Utile:',
    jwt_secret_label: 'Clé Secrète:',
    jwt_algorithm_label: 'Algorithme:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: 'Token d\'Entrée:',
    jwt_signature_label: 'Signature:',
    error_jwt_invalid_json: 'Format JSON invalide',
    error_jwt_invalid_token: 'Format de token invalide',
    error_jwt_verification_failed: 'Échec de la vérification du token',
    success_jwt_generated: 'JWT Token généré avec succès',
    success_jwt_parsed: 'JWT Token analysé avec succès',

    // Générateur de Paires de Clés RSA
    rsa_title: 'Générateur de Paires de Clés RSA',
    rsa_generate_btn: 'Générer',
    rsa_copy_public_btn: 'Copier la Clé Publique',
    rsa_copy_private_btn: 'Copier la Clé Privée',
    rsa_config_label: 'Configuration',
    rsa_output_label: 'Sortie',
    rsa_key_length_label: 'Longueur de Clé:',
    rsa_format_label: 'Format:',
    rsa_public_key_label: 'Clé Publique:',
    rsa_private_key_label: 'Clé Privée:',
    rsa_info_title: 'Information:',
    rsa_info_1: '1024 bits: Génération rapide, adapté aux tests',
    rsa_info_2: '2048 bits: Recommandé pour un usage général',
    rsa_info_3: '4096 bits: Haute sécurité, génération plus lente',
    error_rsa_generate_failed: 'Échec de la génération des clés RSA',
    success_rsa_generated: 'Paire de clés RSA générée avec succès',

    // Convertisseur YAML-Properties
    yaml_title: 'Convertisseur YAML-Properties',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: 'Entrée:',
    yaml_output_label: 'Sortie:',
    yaml_input_placeholder: 'Collez les données au format YAML ou Properties...',
    yaml_output_placeholder: 'Le résultat converti apparaîtra ici',
    error_yaml_invalid: 'Format YAML invalide',
    error_properties_invalid: 'Format Properties invalide',
    success_yaml_converted: 'YAML converti avec succès',
    success_properties_converted: 'Properties converti avec succès',

    // Formateur SQL
    sql_format_title: 'Formateur SQL',
    sql_input_label: 'Entrée:',
    sql_output_label: 'Sortie:',
    sql_input_placeholder: 'Collez la déclaration SQL...',
    sql_output_placeholder: 'Le SQL formaté apparaîtra ici',
    error_sql_invalid: 'Format SQL invalide',

    // Validateur SQL
    sql_validator_title: 'Validateur SQL',
    sql_validator_input_placeholder: 'Collez la déclaration SQL DDL...',
    sql_validator_output_placeholder: 'Le résultat de validation apparaîtra ici',
    validate_btn: 'Valider',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'Validation SQL réussie',
    validation_error: 'Validation SQL échouée',
    validation_warning: 'Avertissement de validation SQL',
    error_sql_syntax: 'Erreur de syntaxe SQL',
    error_sql_reserved_word: 'Utilisation incorrecte du mot réservé',
    error_sql_invalid_type: 'Type de données invalide',
    error_sql_missing_constraint: 'Définition de contrainte manquante',

    // Formateur CSS
    css_title: 'Formateur CSS',
    css_input_label: 'Entrée:',
    css_output_label: 'Sortie:',
    css_input_placeholder: 'Collez le code CSS ici...',
    css_output_placeholder: 'Le CSS formaté ou compressé apparaîtra ici',
    error_css_invalid: 'Format CSS invalide',

    // Convertisseur de Noms
    naming_title: 'Convertisseur de Noms',
    naming_input_label: 'Entrée:',
    naming_output_label: 'Sortie:',
    naming_input_placeholder: 'Entrez le texte de noms (supporte camelCase, snake_case, etc.)...',
    convert_btn: 'Convertir',
    error_naming_invalid: 'Format de nom invalide',

    // Convertisseur Unicode
    unicode_title: 'Convertisseur Unicode',
    unicode_input_label: 'Entrée:',
    unicode_output_label: 'Sortie:',
    unicode_input_placeholder: 'Entrez le texte chinois ou l\'encodage Unicode...',
    unicode_output_placeholder: 'Le résultat de la conversion apparaîtra ici',
    to_unicode_btn: 'Vers Unicode',
    from_unicode_btn: 'Depuis Unicode',
    unicode_info_title: 'Exemples de Format Unicode:',
    error_unicode_invalid: 'Format Unicode invalide',


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

    // UUID-Generator
    uuid_generate_settings: 'Generierungseinstellungen',
    uuid_results: 'Generierungsergebnisse',
    uuid_info_title: 'UUID-Versionsinformationen',
    uuid_info_v1: '• UUID v1: Zeitstempel- und MAC-Adressen-basierte UUID mit zeitlicher Reihenfolge',
    uuid_info_v3: '• UUID v3: MD5-Hash-basierte Namespace-UUID, deterministische Generierung',
    uuid_info_v4: '• UUID v4: Zufallsbasierte UUID, am häufigsten verwendete Version',
    uuid_info_v5: '• UUID v5: SHA-1-Hash-basierte Namespace-UUID, deterministische Generierung',
    uuid_info_nil: '• UUID NIL: Alle-Null-UUID (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'UUID-Validierung',
    uuid_validate_desc: 'Überprüfen Sie, ob die Eingabezeichenfolge eine gültige UUID ist',
    uuid_validate_placeholder: 'UUID zur Validierung eingeben',
    uuid_value: 'UUID:',
    uuid_version: 'Version:',
    uuid_type: 'Typ:',
    uuid_input_required: 'Bitte geben Sie UUID ein',
    uuid_invalid: 'Ungültiges UUID-Format',
    uuid_copy_all: 'Alles kopieren',
    uuid_download: 'Herunterladen',

    // Passwort-Generator
    password_generate_settings: 'Generierungseinstellungen',
    password_length_placeholder: 'Passwortlänge',
    password_uppercase: 'Großbuchstaben (A-Z)',
    password_lowercase: 'Kleinbuchstaben (a-z)',
    password_numbers: 'Zahlen (0-9)',
    password_special: 'Sonderzeichen (!@#$%^&*)',
    password_results: 'Generierungsergebnisse',
    password_info_title: 'Passwortgenerierungsinformationen',
    password_info_desc: '• Unterstützt benutzerdefinierte Passwortlänge (4-128 Zeichen)',
    password_info_chars: '• Wählen Sie, ob Sie Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen einbeziehen möchten',
    password_info_secure: '• Generierte Passwörter sind vollständig zufällig, alle Verarbeitung erfolgt lokal in Ihrem Browser',
    password_error_length: 'Die Passwortlänge muss zwischen 4 und 128 liegen',
    password_error_no_options: 'Bitte wählen Sie mindestens einen Zeichentyp',
    password_copy_success: 'Passwort in die Zwischenablage kopiert',

    // Modulo-Rechner
    modulo_title: 'Modulo-Rechner',
    modulo_dividend: 'Dividend',
    modulo_divisor: 'Divisor',
    modulo_dividend_placeholder: 'Dividend eingeben',
    modulo_divisor_placeholder: 'Divisor eingeben',
    modulo_calculate: 'Berechnen',
    modulo_result_label: 'Ergebnis:',
    modulo_examples: 'Häufige Beispiele:',
    modulo_example_1: '(10 geteilt durch 3 Rest 1)',
    modulo_example_2: '(17 geteilt durch 5 Rest 2)',
    modulo_example_3: '(100 geteilt durch 7 Rest 2)',
    modulo_example_4: '(256 ist durch 16 teilbar)',
    modulo_error_dividend: 'Bitte Dividend eingeben',
    modulo_error_divisor: 'Bitte Divisor eingeben',
    modulo_error_zero: 'Divisor kann nicht 0 sein',

    // ASCII-Kunst-Tool
    ascii_title: 'ASCII-Kunst-Generator',
    ascii_input_label: 'Text Eingeben (nur englische Zeichen)',
    ascii_input_placeholder: 'Geben Sie Ihren Text hier ein...',
    ascii_font_label: 'Schriftstil Auswählen',
    ascii_font_standard: 'Standard',
    ascii_font_banner: 'Banner',
    ascii_font_block: 'Block',
    ascii_font_slant: 'Schräg',
    ascii_font_small: 'Klein',
    ascii_font_big: 'Groß',
    ascii_generate: 'Generieren',
    ascii_output_placeholder: 'ASCII-Kunst wird hier angezeigt...',
    ascii_info_title: 'Nutzungshinweise',
    ascii_info_1: '• Nur englische Buchstaben, Zahlen und gängige Symbole werden unterstützt',
    ascii_info_2: '• Empfohlene Textlänge von maximal 20 Zeichen für beste Anzeige',
    ascii_info_3: '• Verschiedene Schriftstile haben unterschiedliche visuelle Effekte',
    ascii_info_4: '• Generierte ASCII-Kunst kann direkt in Texteditoren oder soziale Medien kopiert werden',

    // Farbwähler-Tool
    color_title: 'Farbwähler',
    color_picker_label: 'Farbwähler',
    color_rgb_sliders: 'RGB-Schieberegler',
    color_values_title: 'Farbwerte (Klicken zum Kopieren)',
    color_presets: 'Häufige Farben',

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
    error_no_input_json: 'Bitte JSON-Daten eingeben',
    error_no_input_xml: 'Bitte XML-Daten eingeben',
    error_no_input_url: 'Bitte URL oder Text eingeben',
    error_no_input_base64: 'Bitte Text zum Kodieren eingeben',
    error_no_input_md5: 'Bitte Text zum Verschlüsseln eingeben',
    error_no_input_text: 'Bitte Text eingeben',
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
    error_decode_failed: 'URL-Decodierung fehlgeschlagen',

    // Textverschlüsselung
    encryption_title: 'Text-Verschlüsselungs- und Entschlüsselungstool',
    encryption_input_label: 'Eingabetext:',
    encryption_input_placeholder: 'Geben Sie Text zum Verschlüsseln oder Entschlüsseln ein...',
    encryption_password_label: 'Passwort:',
    encryption_password_placeholder: 'Geben Sie das Passwort für Verschlüsselung/Entschlüsselung ein',
    encryption_output_label: 'Ergebnis:',
    encryption_output_placeholder: 'Das verschlüsselte oder entschlüsselte Ergebnis wird hier angezeigt',
    encrypt_btn: 'Verschlüsseln',
    decrypt_btn: 'Entschlüsseln',
    show_password: 'Passwort anzeigen',
    error_encryption_no_input: 'Bitte geben Sie Text zum Verschlüsseln ein',
    error_encryption_no_password: 'Bitte geben Sie ein Passwort ein',
    error_decryption_failed: 'Entschlüsselung fehlgeschlagen, bitte überprüfen Sie das Passwort',
    success_encrypted: 'Verschlüsselung erfolgreich',
    success_decrypted: 'Entschlüsselung erfolgreich',

    // Base64-Kodierung
    base64_title: 'Base64-Kodierungstool',
    base64_input_label: 'Eingabetext:',
    base64_input_placeholder: 'Geben Sie Text zum Codieren oder Decodieren ein...',
    base64_file_label: 'Oder Datei hochladen:',
    base64_file_hint: 'Maximale Dateigröße: 10MB',
    base64_output_label: 'Ergebnis:',
    base64_output_placeholder: 'Das codierte oder decodierte Ergebnis wird hier angezeigt',
    base64_encode_btn: 'Codieren',
    base64_decode_btn: 'Decodieren',
    error_base64_encode_failed: 'Base64-Codierung fehlgeschlagen',
    error_base64_decode_failed: 'Base64-Decodierung fehlgeschlagen, bitte überprüfen Sie, ob die Eingabe eine gültige Base64-Zeichenkette ist',
    error_file_too_large: 'Datei ist zu groß, wählen Sie eine Datei kleiner als 10MB',
    error_file_read_failed: 'Dateilesefehler',

    // MD5-Verschlüsselung
    md5_title: 'MD5-Verschlüsselungstool',
    md5_input_label: 'Eingabetext:',
    md5_input_placeholder: 'Geben Sie Text ein, um ihn in MD5 umzuwandeln...',
    md5_output_label: 'Ergebnis:',
    md5_output_placeholder: 'Das MD5-Hash-Ergebnis wird hier angezeigt',
    md5_compute_btn: 'Berechnen',
    md5_lowercase: 'Kleinbuchstaben',
    md5_uppercase: 'Großbuchstaben',
    md5_32bit: '32-Bit',
    md5_16bit: '16-Bit',
    error_md5_compute_failed: 'MD5-Berechnung fehlgeschlagen',

    // JWT Token Generator und Parser
    jwt_title: 'JWT Token Generator und Parser',
    jwt_generate_btn: 'Generieren',
    jwt_parse_btn: 'Analysieren',
    jwt_generate_mode: 'Generierungsmodus',
    jwt_parse_mode: 'Analysemodus',
    jwt_input_label: 'Eingabe',
    jwt_output_label: 'Ausgabe',
    jwt_header_label: 'Kopfzeile:',
    jwt_payload_label: 'Nutzlast:',
    jwt_secret_label: 'Geheimer Schlüssel:',
    jwt_algorithm_label: 'Algorithmus:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: 'Eingabe-Token:',
    jwt_signature_label: 'Signatur:',
    error_jwt_invalid_json: 'Ungültiges JSON-Format',
    error_jwt_invalid_token: 'Ungültiges Token-Format',
    error_jwt_verification_failed: 'Token-Verifizierung fehlgeschlagen',
    success_jwt_generated: 'JWT Token erfolgreich generiert',
    success_jwt_parsed: 'JWT Token erfolgreich analysiert',

    // RSA-Schlüsselpaar-Generator
    rsa_title: 'RSA-Schlüsselpaar-Generator',
    rsa_generate_btn: 'Generieren',
    rsa_copy_public_btn: 'Öffentlichen Schlüssel kopieren',
    rsa_copy_private_btn: 'Privaten Schlüssel kopieren',
    rsa_config_label: 'Konfiguration',
    rsa_output_label: 'Ausgabe',
    rsa_key_length_label: 'Schlüssellänge:',
    rsa_format_label: 'Format:',
    rsa_public_key_label: 'Öffentlicher Schlüssel:',
    rsa_private_key_label: 'Privater Schlüssel:',
    rsa_info_title: 'Information:',
    rsa_info_1: '1024 Bit: Schnelle Generierung, geeignet zum Testen',
    rsa_info_2: '2048 Bit: Empfohlen für allgemeine Verwendung',
    rsa_info_3: '4096 Bit: Hohe Sicherheit, langsamere Generierung',
    error_rsa_generate_failed: 'RSA-Schlüsselgenerierung fehlgeschlagen',
    success_rsa_generated: 'RSA-Schlüsselpaar erfolgreich generiert',

    // YAML-Properties-Konverter
    yaml_title: 'YAML-Properties-Konverter',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: 'Eingabe:',
    yaml_output_label: 'Ausgabe:',
    yaml_input_placeholder: 'Fügen Sie YAML- oder Properties-Formatdaten ein...',
    yaml_output_placeholder: 'Das konvertierte Ergebnis wird hier angezeigt',
    error_yaml_invalid: 'Ungültiges YAML-Format',
    error_properties_invalid: 'Ungültiges Properties-Format',
    success_yaml_converted: 'YAML erfolgreich konvertiert',
    success_properties_converted: 'Properties erfolgreich konvertiert',

    // SQL-Formatierer
    sql_format_title: 'SQL-Formatierer',
    sql_input_label: 'Eingabe:',
    sql_output_label: 'Ausgabe:',
    sql_input_placeholder: 'Fügen Sie SQL-Anweisung ein...',
    sql_output_placeholder: 'Die formatierte SQL wird hier angezeigt',
    error_sql_invalid: 'Ungültiges SQL-Format',

    // SQL-Validator
    sql_validator_title: 'SQL-Validator',
    sql_validator_input_placeholder: 'Fügen Sie SQL-DDL-Anweisung ein...',
    sql_validator_output_placeholder: 'Das Validierungsergebnis wird hier angezeigt',
    validate_btn: 'Validieren',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'SQL-Validierung erfolgreich',
    validation_error: 'SQL-Validierung fehlgeschlagen',
    validation_warning: 'SQL-Validierungswarnung',
    error_sql_syntax: 'SQL-Syntaxfehler',
    error_sql_reserved_word: 'Falsche Verwendung des reservierten Wortes',
    error_sql_invalid_type: 'Ungültiger Datentyp',
    error_sql_missing_constraint: 'Fehlende Constraint-Definition',

    // CSS-Formatierer
    css_title: 'CSS-Formatierer',
    css_input_label: 'Eingabe:',
    css_output_label: 'Ausgabe:',
    css_input_placeholder: 'CSS-Code hier einfügen...',
    css_output_placeholder: 'Formatierter oder komprimierter CSS wird hier angezeigt',
    error_css_invalid: 'Ungültiges CSS-Format',

    // Namenskonverter
    naming_title: 'Namenskonverter',
    naming_input_label: 'Eingabe:',
    naming_output_label: 'Ausgabe:',
    naming_input_placeholder: 'Geben Sie Namenstext ein (unterstützt camelCase, snake_case, etc.)...',
    convert_btn: 'Konvertieren',
    error_naming_invalid: 'Ungültiges Namensformat',

    // Unicode-Konverter
    unicode_title: 'Unicode-Konverter',
    unicode_input_label: 'Eingabe:',
    unicode_output_label: 'Ausgabe:',
    unicode_input_placeholder: 'Geben Sie chinesischen Text oder Unicode-Kodierung ein...',
    unicode_output_placeholder: 'Das Konvertierungsergebnis wird hier angezeigt',
    to_unicode_btn: 'Zu Unicode',
    from_unicode_btn: 'Von Unicode',
    unicode_info_title: 'Unicode-Formatbeispiele:',
    error_unicode_invalid: 'Ungültiges Unicode-Format',


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

    // Gerador UUID
    uuid_generate_settings: 'Configurações de Geração',
    uuid_results: 'Resultados de Geração',
    uuid_info_title: 'Informações de Versão UUID',
    uuid_info_v1: '• UUID v1: UUID baseado em timestamp e endereço MAC, com ordem temporal',
    uuid_info_v3: '• UUID v3: UUID de namespace baseado em MD5, geração determinística',
    uuid_info_v4: '• UUID v4: UUID baseado em aleatório, versão mais comumente usada',
    uuid_info_v5: '• UUID v5: UUID de namespace baseado em SHA-1, geração determinística',
    uuid_info_nil: '• UUID NIL: UUID todo zero (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'Validação UUID',
    uuid_validate_desc: 'Validar se a string de entrada é um UUID válido',
    uuid_validate_placeholder: 'Digite UUID para validar',
    uuid_value: 'UUID:',
    uuid_version: 'Versão:',
    uuid_type: 'Tipo:',
    uuid_input_required: 'Por favor, digite UUID',
    uuid_invalid: 'Formato UUID inválido',
    uuid_copy_all: 'Copiar Tudo',
    uuid_download: 'Baixar',

    // Gerador de Senha
    password_generate_settings: 'Configurações de Geração',
    password_length_placeholder: 'Comprimento da Senha',
    password_uppercase: 'Letras Maiúsculas (A-Z)',
    password_lowercase: 'Letras Minúsculas (a-z)',
    password_numbers: 'Números (0-9)',
    password_special: 'Caracteres Especiais (!@#$%^&*)',
    password_results: 'Resultados de Geração',
    password_info_title: 'Informações de Geração de Senha',
    password_info_desc: '• Suporta comprimento de senha personalizado (4-128 caracteres)',
    password_info_chars: '• Escolha incluir letras maiúsculas, minúsculas, números e caracteres especiais',
    password_info_secure: '• As senhas geradas são completamente aleatórias, todo o processamento é feito localmente no seu navegador',
    password_error_length: 'O comprimento da senha deve estar entre 4 e 128',
    password_error_no_options: 'Por favor, selecione pelo menos um tipo de caractere',
    password_copy_success: 'Senha copiada para a área de transferência',

    // Calculadora de Módulo
    modulo_title: 'Calculadora de Módulo',
    modulo_dividend: 'Dividendo',
    modulo_divisor: 'Divisor',
    modulo_dividend_placeholder: 'Inserir dividendo',
    modulo_divisor_placeholder: 'Inserir divisor',
    modulo_calculate: 'Calcular',
    modulo_result_label: 'Resultado:',
    modulo_examples: 'Exemplos Comuns:',
    modulo_example_1: '(10 dividido por 3 resto 1)',
    modulo_example_2: '(17 dividido por 5 resto 2)',
    modulo_example_3: '(100 dividido por 7 resto 2)',
    modulo_example_4: '(256 é divisível por 16)',
    modulo_error_dividend: 'Por favor, insira o dividendo',
    modulo_error_divisor: 'Por favor, insira o divisor',
    modulo_error_zero: 'O divisor não pode ser 0',

    // Ferramenta de Arte ASCII
    ascii_title: 'Gerador de Arte ASCII',
    ascii_input_label: 'Inserir Texto (apenas caracteres em inglês)',
    ascii_input_placeholder: 'Digite seu texto aqui...',
    ascii_font_label: 'Selecionar Estilo de Fonte',
    ascii_font_standard: 'Padrão',
    ascii_font_banner: 'Banner',
    ascii_font_block: 'Bloco',
    ascii_font_slant: 'Inclinado',
    ascii_font_small: 'Pequeno',
    ascii_font_big: 'Grande',
    ascii_generate: 'Gerar',
    ascii_output_placeholder: 'A arte ASCII será exibida aqui...',
    ascii_info_title: 'Instruções de Uso',
    ascii_info_1: '• Apenas letras em inglês, números e símbolos comuns são suportados',
    ascii_info_2: '• Comprimento de texto recomendado de no máximo 20 caracteres para melhor exibição',
    ascii_info_3: '• Diferentes estilos de fonte têm diferentes efeitos visuais',
    ascii_info_4: '• A arte ASCII gerada pode ser copiada diretamente para editores de texto ou redes sociais',

    // Ferramenta de Seletor de Cores
    color_title: 'Seletor de Cores',
    color_picker_label: 'Seletor de Cores',
    color_rgb_sliders: 'Controles Deslizantes RGB',
    color_values_title: 'Valores de Cor (Clique para Copiar)',
    color_presets: 'Cores Comuns',

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
    error_no_input_json: 'Por favor, insira dados JSON',
    error_no_input_xml: 'Por favor, insira dados XML',
    error_no_input_url: 'Por favor, insira URL ou texto',
    error_no_input_base64: 'Por favor, insira texto para codificar',
    error_no_input_md5: 'Por favor, insira texto para criptografar',
    error_no_input_text: 'Por favor, insira texto',
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
    error_decode_failed: 'Falha na decodificação de URL',

    // Criptografia de Texto
    encryption_title: 'Ferramenta de Criptografia e Descriptografia de Texto',
    encryption_input_label: 'Texto de Entrada:',
    encryption_input_placeholder: 'Digite o texto para criptografar ou descriptografar...',
    encryption_password_label: 'Senha:',
    encryption_password_placeholder: 'Digite a senha para criptografia/descriptografia',
    encryption_output_label: 'Resultado:',
    encryption_output_placeholder: 'O resultado criptografado ou descriptografado será exibido aqui',
    encrypt_btn: 'Criptografar',
    decrypt_btn: 'Descriptografar',
    show_password: 'Mostrar Senha',
    error_encryption_no_input: 'Por favor, digite o texto para criptografar',
    error_encryption_no_password: 'Por favor, digite a senha',
    error_decryption_failed: 'Falha na descriptografia, verifique se a senha está correta',
    success_encrypted: 'Criptografia bem-sucedida',
    success_decrypted: 'Descriptografia bem-sucedida',

    // Codificação Base64
    base64_title: 'Ferramenta de Codificação Base64',
    base64_input_label: 'Texto de Entrada:',
    base64_input_placeholder: 'Digite o texto para codificar ou decodificar...',
    base64_file_label: 'Ou Carregar Arquivo:',
    base64_file_hint: 'Tamanho máximo do arquivo: 10MB',
    base64_output_label: 'Resultado:',
    base64_output_placeholder: 'O resultado codificado ou decodificado será exibido aqui',
    base64_encode_btn: 'Codificar',
    base64_decode_btn: 'Decodificar',
    error_base64_encode_failed: 'Falha na codificação Base64',
    error_base64_decode_failed: 'Falha na decodificação Base64, verifique se a entrada é uma string Base64 válida',
    error_file_too_large: 'O arquivo é muito grande, selecione um arquivo menor que 10MB',
    error_file_read_failed: 'Falha na leitura do arquivo',

    // Criptografia MD5
    md5_title: 'Ferramenta de Criptografia MD5',
    md5_input_label: 'Texto de Entrada:',
    md5_input_placeholder: 'Digite o texto para converter em MD5...',
    md5_output_label: 'Resultado:',
    md5_output_placeholder: 'O resultado do hash MD5 será exibido aqui',
    md5_compute_btn: 'Calcular',
    md5_lowercase: 'Minúsculas',
    md5_uppercase: 'Maiúsculas',
    md5_32bit: '32 bits',
    md5_16bit: '16 bits',
    error_md5_compute_failed: 'Falha no cálculo MD5',

    // Gerador e Analisador de JWT Token
    jwt_title: 'Gerador e Analisador de JWT Token',
    jwt_generate_btn: 'Gerar',
    jwt_parse_btn: 'Analisar',
    jwt_generate_mode: 'Modo Geração',
    jwt_parse_mode: 'Modo Análise',
    jwt_input_label: 'Entrada',
    jwt_output_label: 'Saída',
    jwt_header_label: 'Cabeçalho:',
    jwt_payload_label: 'Carga Útil:',
    jwt_secret_label: 'Chave Secreta:',
    jwt_algorithm_label: 'Algoritmo:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: 'Token de Entrada:',
    jwt_signature_label: 'Assinatura:',
    error_jwt_invalid_json: 'Formato JSON inválido',
    error_jwt_invalid_token: 'Formato de token inválido',
    error_jwt_verification_failed: 'Falha na verificação do token',
    success_jwt_generated: 'JWT Token gerado com sucesso',
    success_jwt_parsed: 'JWT Token analisado com sucesso',

    // Gerador de Pares de Chaves RSA
    rsa_title: 'Gerador de Pares de Chaves RSA',
    rsa_generate_btn: 'Gerar',
    rsa_copy_public_btn: 'Copiar Chave Pública',
    rsa_copy_private_btn: 'Copiar Chave Privada',
    rsa_config_label: 'Configuração',
    rsa_output_label: 'Saída',
    rsa_key_length_label: 'Comprimento da Chave:',
    rsa_format_label: 'Formato:',
    rsa_public_key_label: 'Chave Pública:',
    rsa_private_key_label: 'Chave Privada:',
    rsa_info_title: 'Informação:',
    rsa_info_1: '1024 bits: Geração rápida, adequado para testes',
    rsa_info_2: '2048 bits: Recomendado para uso geral',
    rsa_info_3: '4096 bits: Alta segurança, geração mais lenta',
    error_rsa_generate_failed: 'Falha na geração de chaves RSA',
    success_rsa_generated: 'Par de chaves RSA gerado com sucesso',

    // Conversor YAML-Properties
    yaml_title: 'Conversor YAML-Properties',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: 'Entrada:',
    yaml_output_label: 'Saída:',
    yaml_input_placeholder: 'Cole dados em formato YAML ou Properties...',
    yaml_output_placeholder: 'O resultado convertido aparecerá aqui',
    error_yaml_invalid: 'Formato YAML inválido',
    error_properties_invalid: 'Formato Properties inválido',
    success_yaml_converted: 'YAML convertido com sucesso',
    success_properties_converted: 'Properties convertido com sucesso',

    // Formatador SQL
    sql_format_title: 'Formatador SQL',
    sql_input_label: 'Entrada:',
    sql_output_label: 'Saída:',
    sql_input_placeholder: 'Cole a declaração SQL...',
    sql_output_placeholder: 'O SQL formatado aparecerá aqui',
    error_sql_invalid: 'Formato SQL inválido',

    // Validador SQL
    sql_validator_title: 'Validador SQL',
    sql_validator_input_placeholder: 'Cole a declaração SQL DDL...',
    sql_validator_output_placeholder: 'O resultado da validação aparecerá aqui',
    validate_btn: 'Validar',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'Validação SQL bem-sucedida',
    validation_error: 'Validação SQL falhou',
    validation_warning: 'Aviso de validação SQL',
    error_sql_syntax: 'Erro de sintaxe SQL',
    error_sql_reserved_word: 'Uso incorreto de palavra reservada',
    error_sql_invalid_type: 'Tipo de dados inválido',
    error_sql_missing_constraint: 'Definição de restrição ausente',

    // Formatador CSS
    css_title: 'Formatador CSS',
    css_input_label: 'Entrada:',
    css_output_label: 'Saída:',
    css_input_placeholder: 'Cole código CSS aqui...',
    css_output_placeholder: 'CSS formatado ou comprimido aparecerá aqui',
    error_css_invalid: 'Formato CSS inválido',

    // Conversor de Nomes
    naming_title: 'Conversor de Nomes',
    naming_input_label: 'Entrada:',
    naming_output_label: 'Saída:',
    naming_input_placeholder: 'Digite o texto de nomes (suporta camelCase, snake_case, etc.)...',
    convert_btn: 'Converter',
    error_naming_invalid: 'Formato de nome inválido',

    // Conversor Unicode
    unicode_title: 'Conversor Unicode',
    unicode_input_label: 'Entrada:',
    unicode_output_label: 'Saída:',
    unicode_input_placeholder: 'Digite texto chinês ou codificação Unicode...',
    unicode_output_placeholder: 'O resultado da conversão aparecerá aqui',
    to_unicode_btn: 'Para Unicode',
    from_unicode_btn: 'De Unicode',
    unicode_info_title: 'Exemplos de Formato Unicode:',
    error_unicode_invalid: 'Formato Unicode inválido',


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

    // Генератор UUID
    uuid_generate_settings: 'Параметры Генерации',
    uuid_results: 'Результаты Генерации',
    uuid_info_title: 'Информация о Версии UUID',
    uuid_info_v1: '• UUID v1: UUID на основе временной метки и MAC-адреса, с временным порядком',
    uuid_info_v3: '• UUID v3: UUID пространства имен на основе MD5, детерминированное создание',
    uuid_info_v4: '• UUID v4: UUID на основе случайных чисел, наиболее часто используемая версия',
    uuid_info_v5: '• UUID v5: UUID пространства имен на основе SHA-1, детерминированное создание',
    uuid_info_nil: '• UUID NIL: UUID со всеми нулями (00000000-0000-0000-0000-000000000000)',
    uuid_validate_title: 'Проверка UUID',
    uuid_validate_desc: 'Проверить, является ли входная строка действительным UUID',
    uuid_validate_placeholder: 'Введите UUID для проверки',
    uuid_value: 'UUID:',
    uuid_version: 'Версия:',
    uuid_type: 'Тип:',
    uuid_input_required: 'Пожалуйста, введите UUID',
    uuid_invalid: 'Неверный формат UUID',
    uuid_copy_all: 'Копировать Все',
    uuid_download: 'Скачать',

    // Генератор Паролей
    password_generate_settings: 'Параметры Генерации',
    password_length_placeholder: 'Длина Пароля',
    password_uppercase: 'Прописные Буквы (A-Z)',
    password_lowercase: 'Строчные Буквы (a-z)',
    password_numbers: 'Цифры (0-9)',
    password_special: 'Специальные Символы (!@#$%^&*)',
    password_results: 'Результаты Генерации',
    password_info_title: 'Информация о Генерации Пароля',
    password_info_desc: '• Поддерживает пользовательскую длину пароля (4-128 символов)',
    password_info_chars: '• Выберите включение прописных букв, строчных букв, цифр и специальных символов',
    password_info_secure: '• Сгенерированные пароли полностью случайны, вся обработка выполняется локально в вашем браузере',
    password_error_length: 'Длина пароля должна быть от 4 до 128',
    password_error_no_options: 'Пожалуйста, выберите хотя бы один тип символа',
    password_copy_success: 'Пароль скопирован в буфер обмена',

    // Калькулятор Модуля
    modulo_title: 'Калькулятор Модуля',
    modulo_dividend: 'Делимое',
    modulo_divisor: 'Делитель',
    modulo_dividend_placeholder: 'Введите делимое',
    modulo_divisor_placeholder: 'Введите делитель',
    modulo_calculate: 'Вычислить',
    modulo_result_label: 'Результат:',
    modulo_examples: 'Общие Примеры:',
    modulo_example_1: '(10 делить на 3 остаток 1)',
    modulo_example_2: '(17 делить на 5 остаток 2)',
    modulo_example_3: '(100 делить на 7 остаток 2)',
    modulo_example_4: '(256 делится на 16 без остатка)',
    modulo_error_dividend: 'Пожалуйста, введите делимое',
    modulo_error_divisor: 'Пожалуйста, введите делитель',
    modulo_error_zero: 'Делитель не может быть 0',

    // Инструмент ASCII Искусства
    ascii_title: 'Генератор ASCII Искусства',
    ascii_input_label: 'Введите Текст (только английские символы)',
    ascii_input_placeholder: 'Введите ваш текст здесь...',
    ascii_font_label: 'Выберите Стиль Шрифта',
    ascii_font_standard: 'Стандартный',
    ascii_font_banner: 'Баннер',
    ascii_font_block: 'Блок',
    ascii_font_slant: 'Наклонный',
    ascii_font_small: 'Маленький',
    ascii_font_big: 'Большой',
    ascii_generate: 'Генерировать',
    ascii_output_placeholder: 'ASCII искусство будет отображено здесь...',
    ascii_info_title: 'Инструкции по Использованию',
    ascii_info_1: '• Поддерживаются только английские буквы, цифры и общие символы',
    ascii_info_2: '• Рекомендуемая длина текста не более 20 символов для лучшего отображения',
    ascii_info_3: '• Разные стили шрифтов имеют разные визуальные эффекты',
    ascii_info_4: '• Сгенерированное ASCII искусство можно скопировать напрямую в текстовые редакторы или социальные сети',

    // Инструмент Выбора Цвета
    color_title: 'Выбор Цвета',
    color_picker_label: 'Выбор Цвета',
    color_rgb_sliders: 'RGB Ползунки',
    color_values_title: 'Значения Цвета (Нажмите для Копирования)',
    color_presets: 'Общие Цвета',

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
    error_no_input_json: 'Пожалуйста, введите данные JSON',
    error_no_input_xml: 'Пожалуйста, введите данные XML',
    error_no_input_url: 'Пожалуйста, введите URL или текст',
    error_no_input_base64: 'Пожалуйста, введите текст для кодирования',
    error_no_input_md5: 'Пожалуйста, введите текст для шифрования',
    error_no_input_text: 'Пожалуйста, введите текст',
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
    error_decode_failed: 'Ошибка при декодировании URL',

    // Шифрование Текста
    encryption_title: 'Инструмент шифрования и расшифровки текста',
    encryption_input_label: 'Входной текст:',
    encryption_input_placeholder: 'Введите текст для шифрования или расшифровки...',
    encryption_password_label: 'Пароль:',
    encryption_password_placeholder: 'Введите пароль для шифрования/расшифровки',
    encryption_output_label: 'Результат:',
    encryption_output_placeholder: 'Зашифрованный или расшифрованный результат будет отображен здесь',
    encrypt_btn: 'Зашифровать',
    decrypt_btn: 'Расшифровать',
    show_password: 'Показать пароль',
    error_encryption_no_input: 'Пожалуйста, введите текст для шифрования',
    error_encryption_no_password: 'Пожалуйста, введите пароль',
    error_decryption_failed: 'Ошибка при расшифровке, проверьте правильность пароля',
    success_encrypted: 'Шифрование успешно',
    success_decrypted: 'Расшифровка успешна',

    // Кодирование Base64
    base64_title: 'Инструмент кодирования Base64',
    base64_input_label: 'Входной текст:',
    base64_input_placeholder: 'Введите текст для кодирования или декодирования...',
    base64_file_label: 'Или загрузить файл:',
    base64_file_hint: 'Максимальный размер файла: 10MB',
    base64_output_label: 'Результат:',
    base64_output_placeholder: 'Закодированный или декодированный результат будет отображен здесь',
    base64_encode_btn: 'Кодировать',
    base64_decode_btn: 'Декодировать',
    error_base64_encode_failed: 'Ошибка при кодировании Base64',
    error_base64_decode_failed: 'Ошибка при декодировании Base64, проверьте, является ли входные данные действительной строкой Base64',
    error_file_too_large: 'Файл слишком большой, выберите файл размером менее 10MB',
    error_file_read_failed: 'Ошибка при чтении файла',

    // Шифрование MD5
    md5_title: 'Инструмент шифрования MD5',
    md5_input_label: 'Входной текст:',
    md5_input_placeholder: 'Введите текст для преобразования в MD5...',
    md5_output_label: 'Результат:',
    md5_output_placeholder: 'Результат хеша MD5 будет отображен здесь',
    md5_compute_btn: 'Вычислить',
    md5_lowercase: 'Строчные буквы',
    md5_uppercase: 'Прописные буквы',
    md5_32bit: '32-бит',
    md5_16bit: '16-бит',
    error_md5_compute_failed: 'Ошибка при вычислении MD5',

    // Генератор и Анализатор JWT Token
    jwt_title: 'Генератор и Анализатор JWT Token',
    jwt_generate_btn: 'Генерировать',
    jwt_parse_btn: 'Анализировать',
    jwt_generate_mode: 'Режим генерации',
    jwt_parse_mode: 'Режим анализа',
    jwt_input_label: 'Вход',
    jwt_output_label: 'Выход',
    jwt_header_label: 'Заголовок:',
    jwt_payload_label: 'Полезная нагрузка:',
    jwt_secret_label: 'Секретный ключ:',
    jwt_algorithm_label: 'Алгоритм:',
    jwt_token_label: 'JWT Token:',
    jwt_input_token_label: 'Входной Token:',
    jwt_signature_label: 'Подпись:',
    error_jwt_invalid_json: 'Неверный формат JSON',
    error_jwt_invalid_token: 'Неверный формат токена',
    error_jwt_verification_failed: 'Ошибка при проверке токена',
    success_jwt_generated: 'JWT Token успешно сгенерирован',
    success_jwt_parsed: 'JWT Token успешно проанализирован',

    // Генератор пар ключей RSA
    rsa_title: 'Генератор пар ключей RSA',
    rsa_generate_btn: 'Генерировать',
    rsa_copy_public_btn: 'Копировать открытый ключ',
    rsa_copy_private_btn: 'Копировать закрытый ключ',
    rsa_config_label: 'Конфигурация',
    rsa_output_label: 'Выход',
    rsa_key_length_label: 'Длина ключа:',
    rsa_format_label: 'Формат:',
    rsa_public_key_label: 'Открытый ключ:',
    rsa_private_key_label: 'Закрытый ключ:',
    rsa_info_title: 'Информация:',
    rsa_info_1: '1024 бит: Быстрое создание, подходит для тестирования',
    rsa_info_2: '2048 бит: Рекомендуется для общего использования',
    rsa_info_3: '4096 бит: Высокая безопасность, медленное создание',
    error_rsa_generate_failed: 'Ошибка при генерации ключей RSA',
    success_rsa_generated: 'Пара ключей RSA успешно сгенерирована',

    // Конвертер YAML-Properties
    yaml_title: 'Конвертер YAML-Properties',
    yaml_to_properties_btn: 'YAML → Properties',
    properties_to_yaml_btn: 'Properties → YAML',
    yaml_input_label: 'Вход:',
    yaml_output_label: 'Выход:',
    yaml_input_placeholder: 'Вставьте данные в формате YAML или Properties...',
    yaml_output_placeholder: 'Результат преобразования будет отображен здесь',
    error_yaml_invalid: 'Неверный формат YAML',
    error_properties_invalid: 'Неверный формат Properties',
    success_yaml_converted: 'YAML успешно преобразован',
    success_properties_converted: 'Properties успешно преобразован',

    // Форматер SQL
    sql_format_title: 'Форматер SQL',
    sql_input_label: 'Вход:',
    sql_output_label: 'Выход:',
    sql_input_placeholder: 'Вставьте SQL-оператор...',
    sql_output_placeholder: 'Отформатированный SQL будет отображен здесь',
    error_sql_invalid: 'Неверный формат SQL',

    // Валидатор SQL
    sql_validator_title: 'Валидатор SQL',
    sql_validator_input_placeholder: 'Вставьте SQL DDL оператор...',
    sql_validator_output_placeholder: 'Результат валидации будет отображен здесь',
    validate_btn: 'Валидировать',
    db_mysql: 'MySQL',
    db_postgresql: 'PostgreSQL',
    db_sqlserver: 'SQL Server',
    db_oracle: 'Oracle',
    db_sqlite: 'SQLite',
    validation_success: 'Валидация SQL успешна',
    validation_error: 'Валидация SQL не удалась',
    validation_warning: 'Предупреждение валидации SQL',
    error_sql_syntax: 'Ошибка синтаксиса SQL',
    error_sql_reserved_word: 'Неправильное использование зарезервированного слова',
    error_sql_invalid_type: 'Неверный тип данных',
    error_sql_missing_constraint: 'Отсутствует определение ограничения',

    // Форматер CSS
    css_title: 'Форматер CSS',
    css_input_label: 'Ввод:',
    css_output_label: 'Вывод:',
    css_input_placeholder: 'Вставьте CSS код здесь...',
    css_output_placeholder: 'Отформатированный или сжатый CSS будет отображен здесь',
    error_css_invalid: 'Неверный формат CSS',

    // Конвертер Имен
    naming_title: 'Конвертер Имен',
    naming_input_label: 'Вход:',
    naming_output_label: 'Выход:',
    naming_input_placeholder: 'Введите текст имен (поддерживает camelCase, snake_case и т.д.)...',
    convert_btn: 'Конвертировать',
    error_naming_invalid: 'Неверный формат имени',

    // Конвертер Unicode
    unicode_title: 'Конвертер Unicode',
    unicode_input_label: 'Вход:',
    unicode_output_label: 'Выход:',
    unicode_input_placeholder: 'Введите китайский текст или кодировку Unicode...',
    unicode_output_placeholder: 'Результат преобразования будет отображаться здесь',
    to_unicode_btn: 'В Unicode',
    from_unicode_btn: 'Из Unicode',
    unicode_info_title: 'Примеры формата Unicode:',
    error_unicode_invalid: 'Неверный формат Unicode',


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
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_json;
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
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_json;
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
        showError(errorDiv, translations[currentLang].error_no_input_xml || 'Please input XML data');
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
        showError(errorDiv, translations[currentLang].error_no_input_xml || 'Please input XML data');
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

// ==========================================
// SQL 格式化功能
// ==========================================
function formatSQL() {
    const input = document.getElementById('sql-input').value.trim();
    const output = document.getElementById('sql-output');
    const errorDiv = document.getElementById('sql-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        const formatted = formatSQLString(input);
        output.value = formatted;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_sql_invalid + ': ' + e.message;
        output.value = '';
    }
}

function compressSQL() {
    const input = document.getElementById('sql-input').value.trim();
    const output = document.getElementById('sql-output');
    const errorDiv = document.getElementById('sql-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        // 压缩 SQL：移除多余空白和换行
        const compressed = input
            .replace(/\s+/g, ' ')
            .replace(/\s*([,;()=<>])\s*/g, '$1')
            .trim();
        output.value = compressed;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_sql_invalid;
        output.value = '';
    }
}

function formatSQLString(sql) {
    // SQL 关键字列表
    const keywords = [
        'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'EXISTS',
        'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'OUTER', 'ON',
        'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC',
        'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
        'CREATE', 'TABLE', 'ALTER', 'DROP', 'ADD', 'COLUMN',
        'DISTINCT', 'LIMIT', 'OFFSET', 'UNION', 'ALL', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
        'AS', 'WITH', 'CROSS', 'USING', 'BETWEEN', 'LIKE', 'IS', 'NULL'
    ];

    // 主要关键字（需要换行）
    const mainKeywords = ['SELECT', 'FROM', 'WHERE', 'GROUP', 'HAVING', 'ORDER', 'LIMIT', 'UNION', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP'];

    // 条件关键字（在 WHERE 中需要换行）
    const conditionKeywords = ['AND', 'OR'];

    let formatted = sql;
    const tab = '  ';
    let result = '';
    let currentLine = '';
    let inWhere = false;

    // 规范化空白
    formatted = formatted.replace(/\s+/g, ' ').trim();

    // 分割 SQL 语句
    const tokens = formatted.split(/(\s+|[(),;])/);

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (!token || token === '') continue;

        const upperToken = token.toUpperCase();

        // 处理主要关键字
        if (mainKeywords.includes(upperToken)) {
            // 保存当前行
            if (currentLine.trim()) {
                result += tab + currentLine.trim() + '\n';
                currentLine = '';
            }

            result += upperToken + '\n';
            inWhere = (upperToken === 'WHERE');
        }
        // 处理条件关键字（AND, OR）
        else if (inWhere && conditionKeywords.includes(upperToken)) {
            if (currentLine.trim()) {
                result += tab + currentLine.trim() + '\n';
                currentLine = '';
            }
            result += tab + upperToken + ' ';
        }
        // 处理其他关键字
        else if (keywords.includes(upperToken)) {
            currentLine += upperToken + ' ';
        }
        // 处理括号
        else if (token === '(') {
            currentLine += '(';
        }
        else if (token === ')') {
            currentLine = currentLine.trim() + ')';
        }
        // 处理逗号
        else if (token === ',') {
            currentLine += ',\n' + tab;
        }
        // 处理分号
        else if (token === ';') {
            currentLine += ';';
        }
        // 处理其他 token
        else if (token.trim()) {
            currentLine += token.trim() + ' ';
        }
    }

    // 保存最后一行
    if (currentLine.trim()) {
        result += tab + currentLine.trim();
    }

    // 清理多余空白和换行
    result = result.replace(/\s+\n/g, '\n').replace(/\n\s+\n/g, '\n').trim();

    return result;
}

function copySQLResult() {
    const output = document.getElementById('sql-output');
    const errorDiv = document.getElementById('sql-error');

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + translations[currentLang].success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearSQLAll() {
    const input = document.getElementById('sql-input');
    const output = document.getElementById('sql-output');
    const errorDiv = document.getElementById('sql-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

// ==========================================
// SQL 验证器功能
// ==========================================
let currentDBType = 'mysql';

function updateDBType() {
    const select = document.getElementById('db-type');
    if (select) {
        currentDBType = select.value;
    }
}

function validateSQL() {
    const input = document.getElementById('sql-validator-input');
    const output = document.getElementById('sql-validator-output');
    const errorDiv = document.getElementById('sql-validator-error');
    const resultDiv = document.getElementById('sql-validator-result');
    const t = translations[currentLang];

    if (!input || !output) return;

    const sql = input.value.trim();
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    resultDiv.classList.remove('show', 'success', 'error', 'warning');

    if (!sql) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        output.value = '';
        return;
    }

    try {
        const validation = validateSQLStatement(sql, currentDBType);

        if (validation.valid) {
            output.value = formatSQLString(sql);
            resultDiv.innerHTML = `<h3>✓ ${t.validation_success}</h3>`;
            resultDiv.classList.add('show', 'success');
        } else {
            output.value = '';
            let errorHTML = `<h3>❌ ${t.validation_error}</h3><ul>`;
            validation.errors.forEach(err => {
                errorHTML += `<li>${err}</li>`;
            });
            errorHTML += '</ul>';
            resultDiv.innerHTML = errorHTML;
            resultDiv.classList.add('show', 'error');
        }

        if (validation.warnings && validation.warnings.length > 0) {
            let warningHTML = `<h3>⚠️ ${t.validation_warning}</h3><ul>`;
            validation.warnings.forEach(warn => {
                warningHTML += `<li>${warn}</li>`;
            });
            warningHTML += '</ul>';
            resultDiv.innerHTML += warningHTML;
            resultDiv.classList.add('warning');
        }
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_sql_invalid + ': ' + e.message;
        output.value = '';
    }
}

function validateSQLStatement(sql, dbType) {
    const result = {
        valid: true,
        errors: [],
        warnings: []
    };

    const t = translations[currentLang];
    const upperSQL = sql.toUpperCase();

    // 移除注释和多余空白
    let cleanSQL = sql.replace(/--.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
    let cleanUpperSQL = cleanSQL.toUpperCase();

    // 检查基本语法
    if (!cleanUpperSQL.match(/^(CREATE|ALTER|DROP|INSERT|UPDATE|DELETE|SELECT)/)) {
        result.valid = false;
        result.errors.push(t.error_sql_syntax + ': 不支持的 SQL 语句类型');
        return result;
    }

    // 检查括号匹配
    let parenCount = 0;
    for (let char of cleanSQL) {
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
        if (parenCount < 0) {
            result.valid = false;
            result.errors.push(t.error_sql_syntax + ': 括号不匹配');
            return result;
        }
    }
    if (parenCount !== 0) {
        result.valid = false;
        result.errors.push(t.error_sql_syntax + ': 括号不匹配');
        return result;
    }

    // 检查 SELECT 语句的列定义
    if (cleanUpperSQL.includes('SELECT')) {
        // 更灵活的 FROM 匹配，处理没有空格的情况
        const selectMatch = cleanSQL.match(/SELECT\s+([\s\S]*?)\s+FROM\s+/i);
        if (selectMatch) {
            const columns = selectMatch[1];
            // 检查列之间是否有逗号分隔
            const columnList = columns.split(',').map(c => c.trim());
            for (let col of columnList) {
                if (!col || col.length === 0) {
                    result.valid = false;
                    result.errors.push(t.error_sql_syntax + ': SELECT 列定义错误，检查逗号分隔');
                    return result;
                }
            }
        } else {
            // 检查是否有 FROM 但没有正确的空格
            if (cleanUpperSQL.includes('FROM')) {
                // 检查 FROM 前是否有有效的列定义
                const selectPart = cleanSQL.match(/SELECT\s+([\s\S]*?)FROM/i);
                if (selectPart) {
                    const columns = selectPart[1].trim();
                    // 检查是否缺少逗号（多个单词在一行上）
                    const words = columns.split(/\s+/);
                    if (words.length > 1) {
                        // 检查是否应该有逗号
                        const hasComma = columns.includes(',');
                        if (!hasComma && words.length > 1) {
                            result.valid = false;
                            result.errors.push(t.error_sql_syntax + ': SELECT 列定义错误，缺少逗号分隔符');
                            return result;
                        }
                    }
                }
            }
        }
    }

    // 检查 FROM 子句
    if (cleanUpperSQL.includes('FROM')) {
        // 检查 FROM 后是否有表名（处理没有空格的情况）
        const fromMatch = cleanSQL.match(/FROM\s+(\S+)/i);
        if (!fromMatch) {
            result.valid = false;
            result.errors.push(t.error_sql_syntax + ': FROM 子句缺少表名');
            return result;
        }

        // 检查 FROM 后面是否紧跟表名（没有空格）
        const fromNoSpaceMatch = cleanSQL.match(/FROM(\S)/i);
        if (fromNoSpaceMatch && fromNoSpaceMatch[1] !== ' ') {
            result.valid = false;
            result.errors.push(t.error_sql_syntax + ': FROM 后缺少空格');
            return result;
        }
    }

    // 检查 WHERE 子句的条件
    if (cleanUpperSQL.includes('WHERE')) {
        const whereMatch = cleanSQL.match(/WHERE\s+([\s\S]*?)(?:GROUP|ORDER|LIMIT|$)/i);
        if (whereMatch) {
            const conditions = whereMatch[1].trim();
            // 检查条件是否为空
            if (!conditions || conditions.length === 0) {
                result.valid = false;
                result.errors.push(t.error_sql_syntax + ': WHERE 子句缺少条件');
                return result;
            }
            // 检查 AND/OR 的使用
            const andOrPattern = /\s+(AND|OR)\s+/gi;
            const matches = conditions.match(andOrPattern);
            if (matches) {
                // 检查 AND/OR 前后是否有有效的条件
                const parts = conditions.split(/\s+(AND|OR)\s+/i);
                for (let i = 0; i < parts.length; i++) {
                    if (i % 2 === 0) { // 条件部分
                        if (!parts[i] || parts[i].trim().length === 0) {
                            result.valid = false;
                            result.errors.push(t.error_sql_syntax + ': WHERE 条件不完整');
                            return result;
                        }
                    }
                }
            }
        }
    }

    // 检查保留字使用
    const reservedWords = ['TABLE', 'DATABASE', 'USER', 'PASSWORD', 'KEY', 'INDEX'];
    reservedWords.forEach(word => {
        if (cleanUpperSQL.includes(` ${word} `) && !cleanUpperSQL.includes(`\`${word}\``)) {
            result.warnings.push(`${word} 是保留字，建议使用反引号包围`);
        }
    });

    // 检查数据类型（针对 CREATE TABLE）
    if (cleanUpperSQL.includes('CREATE TABLE')) {
        const validTypes = ['INT', 'VARCHAR', 'TEXT', 'DATETIME', 'DATE', 'TIMESTAMP', 'DECIMAL', 'FLOAT', 'DOUBLE', 'BIGINT', 'SMALLINT', 'TINYINT', 'BOOLEAN', 'JSON'];
        const typePattern = /\b(INT|VARCHAR|TEXT|DATETIME|DATE|TIMESTAMP|DECIMAL|FLOAT|DOUBLE|BIGINT|SMALLINT|TINYINT|BOOLEAN|JSON)\b/gi;
        const matches = cleanSQL.match(typePattern);
        if (!matches) {
            result.warnings.push(t.error_sql_invalid_type + ': 未找到数据类型定义');
        }
    }

    // 检查约束
    if (cleanUpperSQL.includes('CREATE TABLE') && !cleanUpperSQL.includes('PRIMARY KEY') && !cleanUpperSQL.includes('UNIQUE')) {
        result.warnings.push(t.error_sql_missing_constraint + ': 建议添加主键或唯一约束');
    }

    return result;
}

// ==========================================
// CSS 格式化功能
// ==========================================
function formatCSS() {
    const input = document.getElementById('css-input');
    const output = document.getElementById('css-output');
    const errorDiv = document.getElementById('css-error');
    const t = translations[currentLang];

    if (!input || !output) return;

    const css = input.value.trim();
    errorDiv.textContent = '';

    if (!css) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        output.value = '';
        return;
    }

    try {
        const formatted = formatCSSString(css);
        output.value = formatted;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_css_invalid + ': ' + e.message;
        output.value = '';
    }
}

function compressCSS() {
    const input = document.getElementById('css-input');
    const output = document.getElementById('css-output');
    const errorDiv = document.getElementById('css-error');
    const t = translations[currentLang];

    if (!input || !output) return;

    const css = input.value.trim();
    errorDiv.textContent = '';

    if (!css) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        output.value = '';
        return;
    }

    try {
        const compressed = compressCSSString(css);
        output.value = compressed;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_css_invalid + ': ' + e.message;
        output.value = '';
    }
}

function formatCSSString(css) {
    // 移除注释
    let result = css.replace(/\/\*[\s\S]*?\*\//g, '');

    // 添加换行和缩进
    result = result
        .replace(/\s*{\s*/g, ' {\n  ')
        .replace(/\s*}\s*/g, '\n}\n')
        .replace(/\s*;\s*/g, ';\n  ')
        .replace(/\s*,\s*/g, ',\n  ')
        .replace(/\n\s*\n/g, '\n');

    // 清理多余空白
    result = result.split('\n').map(line => {
        return line.replace(/\s+$/g, '').replace(/^\s+/, (match) => {
            return match.replace(/  /g, '  ');
        });
    }).join('\n');

    // 移除最后的空行
    result = result.replace(/\n\s*$/, '');

    return result;
}

function compressCSSString(css) {
    // 移除注释
    let result = css.replace(/\/\*[\s\S]*?\*\//g, '');

    // 移除所有空白
    result = result
        .replace(/\s+/g, ' ')
        .replace(/\s*{\s*/g, '{')
        .replace(/\s*}\s*/g, '}')
        .replace(/\s*;\s*/g, ';')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s*:\s*/g, ':')
        .replace(/;}/g, '}')
        .trim();

    return result;
}

function copyCSS() {
    const output = document.getElementById('css-output');
    const errorDiv = document.getElementById('css-error');
    const t = translations[currentLang];

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + t.success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearCSS() {
    const input = document.getElementById('css-input');
    const output = document.getElementById('css-output');
    const errorDiv = document.getElementById('css-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

// ==========================================
// 命名格式转换功能
// ==========================================
function convertNaming() {
    const input = document.getElementById('naming-input');
    const errorDiv = document.getElementById('naming-error');
    const t = translations[currentLang];

    if (!input) return;

    const text = input.value.trim();
    errorDiv.textContent = '';

    if (!text) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        clearNamingOutputs();
        return;
    }

    try {
        // 解析输入文本，识别其格式
        const formats = parseNamingFormat(text);

        // 生成所有格式的输出
        document.getElementById('naming-output-camel').value = formats.camelCase;
        document.getElementById('naming-output-pascal').value = formats.pascalCase;
        document.getElementById('naming-output-snake').value = formats.snakeCase;
        document.getElementById('naming-output-constant').value = formats.constantCase;
        document.getElementById('naming-output-kebab').value = formats.kebabCase;
        document.getElementById('naming-output-screaming').value = formats.screamingKebab;

        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_naming_invalid + ': ' + e.message;
        clearNamingOutputs();
    }
}

function parseNamingFormat(text) {
    // 移除前后空白
    text = text.trim();

    // 检测分隔符和格式
    let words = [];

    // 尝试识别格式
    if (text.includes('_')) {
        // snake_case 或 CONSTANT_CASE
        words = text.split('_').filter(w => w.length > 0);
    } else if (text.includes('-')) {
        // kebab-case 或 SCREAMING-KEBAB-CASE
        words = text.split('-').filter(w => w.length > 0);
    } else if (/[a-z][A-Z]/.test(text)) {
        // camelCase 或 PascalCase
        words = text.split(/(?=[A-Z])/).filter(w => w.length > 0);
    } else {
        // 单个单词
        words = [text];
    }

    // 转换为小写单词数组
    words = words.map(w => w.toLowerCase());

    return {
        camelCase: toCamelCase(words),
        pascalCase: toPascalCase(words),
        snakeCase: toSnakeCase(words),
        constantCase: toConstantCase(words),
        kebabCase: toKebabCase(words),
        screamingKebab: toScreamingKebab(words)
    };
}

function toCamelCase(words) {
    if (words.length === 0) return '';
    return words[0].toLowerCase() + words.slice(1).map(w => capitalize(w)).join('');
}

function toPascalCase(words) {
    return words.map(w => capitalize(w)).join('');
}

function toSnakeCase(words) {
    return words.join('_').toLowerCase();
}

function toConstantCase(words) {
    return words.join('_').toUpperCase();
}

function toKebabCase(words) {
    return words.join('-').toLowerCase();
}

function toScreamingKebab(words) {
    return words.join('-').toUpperCase();
}

function capitalize(word) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function clearNamingOutputs() {
    document.getElementById('naming-output-camel').value = '';
    document.getElementById('naming-output-pascal').value = '';
    document.getElementById('naming-output-snake').value = '';
    document.getElementById('naming-output-constant').value = '';
    document.getElementById('naming-output-kebab').value = '';
    document.getElementById('naming-output-screaming').value = '';
}

function copyNamingResult() {
    const camelOutput = document.getElementById('naming-output-camel');
    const errorDiv = document.getElementById('naming-error');
    const t = translations[currentLang];

    if (!camelOutput || !camelOutput.value) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        return;
    }

    camelOutput.select();
    document.execCommand('copy');

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + t.success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearNaming() {
    const input = document.getElementById('naming-input');
    const errorDiv = document.getElementById('naming-error');

    if (input) input.value = '';
    if (errorDiv) errorDiv.textContent = '';
    clearNamingOutputs();
}

// ==========================================
// Unicode 转换功能
// ==========================================
function toUnicode() {
    const input = document.getElementById('unicode-input');
    const output = document.getElementById('unicode-output');
    const errorDiv = document.getElementById('unicode-error');
    const t = translations[currentLang];

    if (!input || !output) return;

    const text = input.value.trim();
    errorDiv.textContent = '';

    if (!text) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        output.value = '';
        return;
    }

    try {
        const result = chineseToUnicode(text);
        output.value = result;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_unicode_invalid + ': ' + e.message;
        output.value = '';
    }
}

function fromUnicode() {
    const input = document.getElementById('unicode-input');
    const output = document.getElementById('unicode-output');
    const errorDiv = document.getElementById('unicode-error');
    const t = translations[currentLang];

    if (!input || !output) return;

    const text = input.value.trim();
    errorDiv.textContent = '';

    if (!text) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        output.value = '';
        return;
    }

    try {
        const result = unicodeToChinese(text);
        output.value = result;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + t.error_unicode_invalid + ': ' + e.message;
        output.value = '';
    }
}

function chineseToUnicode(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0);

        // 检查是否是中文字符（CJK 统一表意文字）
        if (code >= 0x4E00 && code <= 0x9FFF) {
            result += '\\u' + code.toString(16).padStart(4, '0');
        } else {
            result += char;
        }
    }
    return result;
}

function unicodeToChinese(text) {
    // 支持多种 Unicode 格式
    let result = text;

    // 处理 \uXXXX 格式
    result = result.replace(/\\u([0-9a-fA-F]{4})/g, function(match, hex) {
        return String.fromCharCode(parseInt(hex, 16));
    });

    // 处理 &#xXXXX; 格式
    result = result.replace(/&#x([0-9a-fA-F]+);/g, function(match, hex) {
        return String.fromCharCode(parseInt(hex, 16));
    });

    // 处理 &#XXXXX; 格式
    result = result.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(parseInt(dec, 10));
    });

    return result;
}

function copyUnicodeResult() {
    const output = document.getElementById('unicode-output');
    const errorDiv = document.getElementById('unicode-error');
    const t = translations[currentLang];

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + t.success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearUnicode() {
    const input = document.getElementById('unicode-input');
    const output = document.getElementById('unicode-output');
    const errorDiv = document.getElementById('unicode-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
}



function copySQLValidatorResult() {
    const output = document.getElementById('sql-validator-output');
    const errorDiv = document.getElementById('sql-validator-error');
    const t = translations[currentLang];

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + t.error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + t.success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearSQLValidator() {
    const input = document.getElementById('sql-validator-input');
    const output = document.getElementById('sql-validator-output');
    const errorDiv = document.getElementById('sql-validator-error');
    const resultDiv = document.getElementById('sql-validator-result');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
    if (resultDiv) {
        resultDiv.textContent = '';
        resultDiv.classList.remove('show', 'success', 'error', 'warning');
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

    const yamlInput = document.getElementById('yaml-input');
    if (yamlInput) {
        yamlInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                // 检测输入内容格式，自动选择转换方向
                const input = yamlInput.value.trim();
                if (input.includes('=') && !input.includes(':')) {
                    // 看起来是 Properties 格式
                    propertiesToYaml();
                } else {
                    // 默认当作 YAML 格式
                    yamlToProperties();
                }
            }
        });
    }

    const sqlInput = document.getElementById('sql-input');
    if (sqlInput) {
        sqlInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                formatSQL();
            }
        });
    }

    const sqlValidatorInput = document.getElementById('sql-validator-input');
    if (sqlValidatorInput) {
        sqlValidatorInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                validateSQL();
            }
        });
    }

    const cssInput = document.getElementById('css-input');
    if (cssInput) {
        cssInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                formatCSS();
            }
        });
    }

    const namingInput = document.getElementById('naming-input');
    if (namingInput) {
        namingInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                convertNaming();
            }
        });
    }

    const unicodeInput = document.getElementById('unicode-input');
    if (unicodeInput) {
        unicodeInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                toUnicode();
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
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_url;
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
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_url;
        return;
    }

    try {
        errorDiv.textContent = '';
        const decoded = decodeURIComponent(text);
        result.value = decoded;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_decode_failed;
    }
}

// ==========================================
// 文本加解密功能
// ==========================================
function encryptText() {
    const input = document.getElementById('encryption-input');
    const password = document.getElementById('encryption-password');
    const output = document.getElementById('encryption-output');
    const errorDiv = document.getElementById('encryption-error');

    const text = input.value.trim();
    const pwd = password.value.trim();

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_encryption_no_input;
        return;
    }

    if (!pwd) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_encryption_no_password;
        return;
    }

    try {
        errorDiv.textContent = '';
        // 使用 CryptoJS 进行 AES 加密
        const encrypted = CryptoJS.AES.encrypt(text, pwd).toString();
        output.value = encrypted;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_encryption_no_input;
    }
}

function decryptText() {
    const input = document.getElementById('encryption-input');
    const password = document.getElementById('encryption-password');
    const output = document.getElementById('encryption-output');
    const errorDiv = document.getElementById('encryption-error');

    const text = input.value.trim();
    const pwd = password.value.trim();

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_encryption_no_input;
        return;
    }

    if (!pwd) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_encryption_no_password;
        return;
    }

    try {
        errorDiv.textContent = '';
        // 使用 CryptoJS 进行 AES 解密
        const decrypted = CryptoJS.AES.decrypt(text, pwd).toString(CryptoJS.enc.Utf8);

        if (!decrypted) {
            errorDiv.textContent = '❌ ' + translations[currentLang].error_decryption_failed;
            return;
        }

        output.value = decrypted;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_decryption_failed;
    }
}

function clearEncryption() {
    document.getElementById('encryption-input').value = '';
    document.getElementById('encryption-password').value = '';
    document.getElementById('encryption-output').value = '';
    document.getElementById('encryption-error').textContent = '';
}

function copyEncryption() {
    const output = document.getElementById('encryption-output');

    if (!output.value) {
        alert(translations[currentLang].error_no_input);
        return;
    }

    output.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const originalText = '复制';
    const successText = '✓ ' + translations[currentLang].success_copied;

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(output.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
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

// ==========================================
// Base64 编码解码功能
// ==========================================
function encodeBase64() {
    const input = document.getElementById('base64-input');
    const output = document.getElementById('base64-output');
    const errorDiv = document.getElementById('base64-error');

    if (!input || !output) return;

    const text = input.value.trim();

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_base64;
        return;
    }

    try {
        errorDiv.textContent = '';
        const encoded = btoa(unescape(encodeURIComponent(text)));
        output.value = encoded;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_base64_encode_failed;
    }
}

function decodeBase64() {
    const input = document.getElementById('base64-input');
    const output = document.getElementById('base64-output');
    const errorDiv = document.getElementById('base64-error');

    if (!input || !output) return;

    const text = input.value.trim();

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_base64;
        return;
    }

    try {
        errorDiv.textContent = '';
        const decoded = decodeURIComponent(escape(atob(text)));
        output.value = decoded;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_base64_decode_failed;
    }
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    const input = document.getElementById('base64-input');
    const errorDiv = document.getElementById('base64-error');

    if (!file) return;

    // 检查文件大小（10MB）
    if (file.size > 10 * 1024 * 1024) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_file_too_large;
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            errorDiv.textContent = '';
            input.value = e.target.result;
        } catch (error) {
            errorDiv.textContent = '❌ ' + translations[currentLang].error_file_read_failed;
        }
    };
    reader.onerror = function() {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_file_read_failed;
    };
    reader.readAsDataURL(file);
}

function clearBase64() {
    const input = document.getElementById('base64-input');
    const output = document.getElementById('base64-output');
    const fileInput = document.getElementById('base64-file');
    const errorDiv = document.getElementById('base64-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (fileInput) fileInput.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

function copyBase64() {
    const output = document.getElementById('base64-output');
    const errorDiv = document.getElementById('base64-error');

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(output.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
    }
}

// ==========================================
// MD5 加密功能
// ==========================================
function computeMD5() {
    const input = document.getElementById('md5-input');
    const output = document.getElementById('md5-output');
    const errorDiv = document.getElementById('md5-error');

    if (!input || !output) return;

    const text = input.value.trim();

    if (!text) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input_md5;
        return;
    }

    try {
        errorDiv.textContent = '';
        // 使用 CryptoJS 计算 MD5
        let hash = CryptoJS.MD5(text).toString();

        // 获取大小写选择
        const caseOption = document.querySelector('input[name="md5-case"]:checked');
        const caseValue = caseOption ? caseOption.value : 'lowercase';

        // 获取长度选择
        const lengthOption = document.querySelector('input[name="md5-length"]:checked');
        const lengthValue = lengthOption ? lengthOption.value : '32';

        // 根据大小写选择转换
        if (caseValue === 'uppercase') {
            hash = hash.toUpperCase();
        } else {
            hash = hash.toLowerCase();
        }

        // 根据长度选择转换（16位是中间32位）
        if (lengthValue === '16') {
            hash = hash.substring(8, 24);
        }

        output.value = hash;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_md5_compute_failed;
    }
}

function clearMD5() {
    const input = document.getElementById('md5-input');
    const output = document.getElementById('md5-output');
    const errorDiv = document.getElementById('md5-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

function copyMD5() {
    const output = document.getElementById('md5-output');
    const errorDiv = document.getElementById('md5-error');

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(output.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
    }
}

// ==========================================
// JWT Token 生成与解析功能
// ==========================================
function generateJWT() {
    const headerInput = document.getElementById('jwt-header');
    const payloadInput = document.getElementById('jwt-payload');
    const secretInput = document.getElementById('jwt-secret');
    const tokenOutput = document.getElementById('jwt-token');
    const errorDiv = document.getElementById('jwt-error');
    const successDiv = document.getElementById('jwt-success');

    if (!headerInput || !payloadInput || !secretInput || !tokenOutput) return;

    try {
        errorDiv.textContent = '';
        successDiv.textContent = '';

        // 解析 Header 和 Payload
        const header = JSON.parse(headerInput.value || '{"alg":"HS256","typ":"JWT"}');
        const payload = JSON.parse(payloadInput.value || '{}');
        const secret = secretInput.value || '';

        // 获取选择的算法
        const algorithmOption = document.querySelector('input[name="jwt-algorithm"]:checked');
        const algorithm = algorithmOption ? algorithmOption.value : 'HS256';

        // 更新 header 中的算法
        header.alg = algorithm;

        // Base64 编码
        const headerEncoded = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        const payloadEncoded = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

        // 创建签名
        const message = headerEncoded + '.' + payloadEncoded;
        let signature = '';

        if (algorithm === 'HS256') {
            signature = CryptoJS.HmacSHA256(message, secret).toString();
        } else if (algorithm === 'HS384') {
            signature = CryptoJS.HmacSHA384(message, secret).toString();
        } else if (algorithm === 'HS512') {
            signature = CryptoJS.HmacSHA512(message, secret).toString();
        }

        // Base64 编码签名
        const signatureEncoded = btoa(signature).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

        // 生成 JWT
        const jwt = message + '.' + signatureEncoded;
        tokenOutput.value = jwt;

        successDiv.textContent = '✅ ' + translations[currentLang].success_jwt_generated;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_jwt_invalid_json;
    }
}

function parseJWT() {
    // 支持从 jwt-token 或 jwt-input-token 读取
    let tokenInput = document.getElementById('jwt-token');
    if (!tokenInput || !tokenInput.value) {
        tokenInput = document.getElementById('jwt-input-token');
    }

    const secretInput = document.getElementById('jwt-secret');
    const headerOutput = document.getElementById('jwt-parsed-header');
    const payloadOutput = document.getElementById('jwt-parsed-payload');
    const signatureOutput = document.getElementById('jwt-parsed-signature');
    const errorDiv = document.getElementById('jwt-error');
    const successDiv = document.getElementById('jwt-success');

    if (!tokenInput || !headerOutput || !payloadOutput || !signatureOutput) return;

    try {
        errorDiv.textContent = '';
        successDiv.textContent = '';

        const token = tokenInput.value.trim();
        if (!token) {
            errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
            return;
        }

        // 分割 JWT
        const parts = token.split('.');
        if (parts.length !== 3) {
            errorDiv.textContent = '❌ ' + translations[currentLang].error_jwt_invalid_token;
            return;
        }

        // Base64 解码
        const headerDecoded = JSON.parse(atob(parts[0]));
        const payloadDecoded = JSON.parse(atob(parts[1]));

        headerOutput.value = JSON.stringify(headerDecoded, null, 2);
        payloadOutput.value = JSON.stringify(payloadDecoded, null, 2);
        signatureOutput.value = parts[2];

        // 验证签名（如果提供了密钥）
        if (secretInput && secretInput.value) {
            const secret = secretInput.value;
            const message = parts[0] + '.' + parts[1];
            const algorithm = headerDecoded.alg || 'HS256';

            let expectedSignature = '';
            if (algorithm === 'HS256') {
                expectedSignature = CryptoJS.HmacSHA256(message, secret).toString();
            } else if (algorithm === 'HS384') {
                expectedSignature = CryptoJS.HmacSHA384(message, secret).toString();
            } else if (algorithm === 'HS512') {
                expectedSignature = CryptoJS.HmacSHA512(message, secret).toString();
            }

            // 比较签名
            const expectedSignatureEncoded = btoa(expectedSignature).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
            if (expectedSignatureEncoded !== parts[2]) {
                errorDiv.textContent = '⚠️ ' + translations[currentLang].error_jwt_verification_failed;
            } else {
                successDiv.textContent = '✅ ' + translations[currentLang].success_jwt_parsed;
            }
        } else {
            successDiv.textContent = '✅ ' + translations[currentLang].success_jwt_parsed;
        }
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_jwt_invalid_token;
    }
}

function clearJWT() {
    const elements = [
        'jwt-header', 'jwt-payload', 'jwt-secret', 'jwt-token',
        'jwt-input-token', 'jwt-parse-secret',
        'jwt-parsed-header', 'jwt-parsed-payload', 'jwt-parsed-signature',
        'jwt-error', 'jwt-success'
    ];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.value = '';
            } else {
                element.textContent = '';
            }
        }
    });
}

function copyJWT() {
    const tokenOutput = document.getElementById('jwt-token');
    const errorDiv = document.getElementById('jwt-error');

    if (!tokenOutput || !tokenOutput.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    tokenOutput.select();
    document.execCommand('copy');

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(tokenOutput.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
    }
}

// ==========================================
// RSA 公私钥生成功能
// ==========================================
function generateRSAKeys() {
    const keyLengthOption = document.querySelector('input[name="rsa-key-length"]:checked');
    const formatOption = document.querySelector('input[name="rsa-format"]:checked');
    const publicKeyOutput = document.getElementById('rsa-public-key');
    const privateKeyOutput = document.getElementById('rsa-private-key');
    const errorDiv = document.getElementById('rsa-error');
    const successDiv = document.getElementById('rsa-success');

    if (!keyLengthOption || !formatOption || !publicKeyOutput || !privateKeyOutput) return;

    try {
        errorDiv.textContent = '';
        successDiv.textContent = '';

        const keyLength = parseInt(keyLengthOption.value);
        const format = formatOption.value;

        // 使用 JSEncrypt 库生成 RSA 密钥对
        const encrypt = new JSEncrypt({ default_key_size: keyLength });

        // 获取公钥和私钥
        const publicKey = encrypt.getPublicKey();
        const privateKey = encrypt.getPrivateKey();

        // 显示密钥
        publicKeyOutput.value = publicKey;
        privateKeyOutput.value = privateKey;

        successDiv.textContent = '✅ ' + translations[currentLang].success_rsa_generated;
    } catch (error) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_rsa_generate_failed;
    }
}

function clearRSA() {
    const publicKeyOutput = document.getElementById('rsa-public-key');
    const privateKeyOutput = document.getElementById('rsa-private-key');
    const errorDiv = document.getElementById('rsa-error');
    const successDiv = document.getElementById('rsa-success');

    if (publicKeyOutput) publicKeyOutput.value = '';
    if (privateKeyOutput) privateKeyOutput.value = '';
    if (errorDiv) errorDiv.textContent = '';
    if (successDiv) successDiv.textContent = '';
}

function copyRSAPublic() {
    const publicKeyOutput = document.getElementById('rsa-public-key');
    const errorDiv = document.getElementById('rsa-error');

    if (!publicKeyOutput || !publicKeyOutput.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    publicKeyOutput.select();
    document.execCommand('copy');

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(publicKeyOutput.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
    }
}

function copyRSAPrivate() {
    const privateKeyOutput = document.getElementById('rsa-private-key');
    const errorDiv = document.getElementById('rsa-error');

    if (!privateKeyOutput || !privateKeyOutput.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    privateKeyOutput.select();
    document.execCommand('copy');

    // 使用 Clipboard API 如果可用
    if (navigator.clipboard) {
        navigator.clipboard.writeText(privateKeyOutput.value).then(() => {
            // 成功
        }).catch(() => {
            // 失败
        });
    }
}

// ==========================================
// YAML-Properties 转换功能
// ==========================================

// 将 YAML 转换为 Properties
function yamlToProperties() {
    const input = document.getElementById('yaml-input').value.trim();
    const output = document.getElementById('yaml-output');
    const errorDiv = document.getElementById('yaml-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        const properties = convertYamlToProperties(input);
        output.value = properties;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_yaml_invalid + ': ' + e.message;
        output.value = '';
    }
}

// 将 Properties 转换为 YAML
function propertiesToYaml() {
    const input = document.getElementById('yaml-input').value.trim();
    const output = document.getElementById('yaml-output');
    const errorDiv = document.getElementById('yaml-error');

    errorDiv.textContent = '';

    if (!input) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        output.value = '';
        return;
    }

    try {
        const yaml = convertPropertiesToYaml(input);
        output.value = yaml;
        errorDiv.textContent = '';
    } catch (e) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_properties_invalid + ': ' + e.message;
        output.value = '';
    }
}

// YAML 转 Properties 的核心逻辑
function convertYamlToProperties(yamlStr) {
    const lines = yamlStr.split('\n');
    const properties = [];
    let currentPath = [];

    for (let line of lines) {
        const trimmed = line.trim();

        // 跳过空行和注释
        if (!trimmed || trimmed.startsWith('#')) continue;

        // 计算缩进级别
        const indent = line.search(/\S/);
        const indentLevel = Math.floor(indent / 2);

        // 调整当前路径
        currentPath = currentPath.slice(0, indentLevel);

        // 解析键值对
        if (trimmed.includes(':')) {
            const [key, ...valueParts] = trimmed.split(':');
            const value = valueParts.join(':').trim();

            currentPath.push(key.trim());
            const fullKey = currentPath.join('.');

            if (value) {
                properties.push(`${fullKey}=${value}`);
            }
        }
    }

    return properties.join('\n');
}

// Properties 转 YAML 的核心逻辑
function convertPropertiesToYaml(propertiesStr) {
    const lines = propertiesStr.split('\n');
    const yamlObj = {};

    for (let line of lines) {
        const trimmed = line.trim();

        // 跳过空行和注释
        if (!trimmed || trimmed.startsWith('#')) continue;

        // 解析键值对
        if (trimmed.includes('=')) {
            const [key, ...valueParts] = trimmed.split('=');
            const value = valueParts.join('=').trim();
            const keys = key.trim().split('.');

            // 构建嵌套对象
            let current = yamlObj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
        }
    }

    return objectToYaml(yamlObj);
}

// 将对象转换为 YAML 格式
function objectToYaml(obj, indent = 0) {
    let yaml = '';
    const indentStr = '  '.repeat(indent);

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
            yaml += `${indentStr}${key}:\n`;
            yaml += objectToYaml(value, indent + 1);
        } else {
            yaml += `${indentStr}${key}: ${value}\n`;
        }
    }

    return yaml;
}

function copyYamlResult() {
    const output = document.getElementById('yaml-output');
    const errorDiv = document.getElementById('yaml-error');

    if (!output || !output.value) {
        errorDiv.textContent = '❌ ' + translations[currentLang].error_no_input;
        return;
    }

    output.select();
    document.execCommand('copy');

    // 显示复制成功提示
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + translations[currentLang].success_copied;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function clearYamlAll() {
    const input = document.getElementById('yaml-input');
    const output = document.getElementById('yaml-output');
    const errorDiv = document.getElementById('yaml-error');

    if (input) input.value = '';
    if (output) output.value = '';
    if (errorDiv) errorDiv.textContent = '';
}

// ==========================================
// 密码生成器
// ==========================================
function generatePassword() {
    const lengthInput = document.getElementById('password-length');
    const includeUppercase = document.getElementById('include-uppercase');
    const includeLowercase = document.getElementById('include-lowercase');
    const includeNumbers = document.getElementById('include-numbers');
    const includeSpecial = document.getElementById('include-special');
    const resultsDiv = document.getElementById('password-results');

    // 验证长度
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length < 4 || length > 128) {
        resultsDiv.innerHTML = '<div style="color: #f56c6c; padding: 12px; background: #fef0f0; border-radius: 6px;">❌ ' + translations[currentLang].password_error_length + '</div>';
        return;
    }

    // 检查是否至少选择了一种字符类型
    if (!includeUppercase.checked && !includeLowercase.checked && !includeNumbers.checked && !includeSpecial.checked) {
        resultsDiv.innerHTML = '<div style="color: #f56c6c; padding: 12px; background: #fef0f0; border-radius: 6px;">❌ ' + translations[currentLang].password_error_no_options + '</div>';
        return;
    }

    // 定义字符集
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase.checked) chars += uppercase;
    if (includeLowercase.checked) chars += lowercase;
    if (includeNumbers.checked) chars += numbers;
    if (includeSpecial.checked) chars += special;

    // 生成密码
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // 显示结果
    displayPasswordResult(password);
}

function displayPasswordResult(password) {
    const resultsDiv = document.getElementById('password-results');

    const resultHTML = `
        <div class="password-result-box">
            <div class="password-result-item">
                <div class="password-result-label">${translations[currentLang].password_results}:</div>
                <div class="password-result-value large" id="generated-password">${password}</div>
            </div>
            <div style="display: flex; gap: 8px; margin-top: 16px;">
                <button class="password-button" onclick="copyPasswordToClipboard()" style="flex: 1;">${translations[currentLang].copy_btn}</button>
                <button class="password-button secondary" onclick="generatePassword()" style="flex: 1;">${translations[currentLang].generate_btn}</button>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = resultHTML;
}

function copyPasswordToClipboard() {
    const passwordElement = document.getElementById('generated-password');
    if (!passwordElement) return;

    const password = passwordElement.textContent;

    // 使用现代 Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(password).then(() => {
            showCopySuccess();
        }).catch(() => {
            // 降级到旧方法
            fallbackCopyToClipboard(password);
        });
    } else {
        // 降级到旧方法
        fallbackCopyToClipboard(password);
    }
}

function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showCopySuccess();
}

function showCopySuccess() {
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ ' + translations[currentLang].password_copy_success;
    btn.style.background = '#67c23a';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
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
