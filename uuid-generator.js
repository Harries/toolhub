// UUID 生成器
class UUIDGenerator {
    // UUID v4 - 基于随机数
    static generateV4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // UUID v1 - 基于时间戳和 MAC 地址
    static generateV1() {
        const now = Date.now();
        const timestamp = ((now + 12219292800000) * 10000).toString(16);
        const clockSeq = Math.floor(Math.random() * 0x4000 | 0x8000).toString(16);
        const node = Array.from({length: 6}, () => 
            Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
        ).join('');
        
        return [
            timestamp.slice(-8),
            timestamp.slice(-12, -8),
            '1' + timestamp.slice(-15, -12),
            clockSeq.slice(-4),
            node
        ].join('-');
    }

    // UUID NIL - 全零 UUID
    static generateNIL() {
        return '00000000-0000-0000-0000-000000000000';
    }

    // UUID v3 - 基于 MD5 的命名空间 UUID
    static generateV3(namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8', name = 'example') {
        // 简化版本：使用 MD5 哈希
        const md5Hash = this.md5(namespace + name);
        const hash = md5Hash.substring(0, 32);
        
        return [
            hash.substring(0, 8),
            hash.substring(8, 12),
            '3' + hash.substring(13, 16),
            ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, '0') + hash.substring(18, 20),
            hash.substring(20, 32)
        ].join('-');
    }

    // UUID v5 - 基于 SHA-1 的命名空间 UUID
    static generateV5(namespace = '6ba7b811-9dad-11d1-80b4-00c04fd430c8', name = 'example') {
        // 简化版本：使用 SHA-1 哈希
        const sha1Hash = this.sha1(namespace + name);
        const hash = sha1Hash.substring(0, 32);
        
        return [
            hash.substring(0, 8),
            hash.substring(8, 12),
            '5' + hash.substring(13, 16),
            ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, '0') + hash.substring(18, 20),
            hash.substring(20, 32)
        ].join('-');
    }

    // 简单的 MD5 实现（用于演示）
    static md5(str) {
        // 使用 Web Crypto API 或 CryptoJS 的替代方案
        // 这里使用一个简化的哈希函数
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16).padStart(32, '0').substring(0, 32);
    }

    // 简单的 SHA-1 实现（用于演示）
    static sha1(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16).padStart(40, '0').substring(0, 40);
    }

    // 验证 UUID 格式
    static isValidUUID(uuid) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(uuid);
    }

    // 获取 UUID 版本
    static getUUIDVersion(uuid) {
        if (!this.isValidUUID(uuid)) return null;
        const version = uuid.charAt(14);
        return version;
    }

    // 获取 UUID 信息
    static getUUIDInfo(uuid) {
        if (!this.isValidUUID(uuid)) {
            return { valid: false };
        }

        const version = this.getUUIDVersion(uuid);
        const versionNames = {
            '1': 'UUID v1 (Time-based)',
            '3': 'UUID v3 (MD5 Namespace)',
            '4': 'UUID v4 (Random)',
            '5': 'UUID v5 (SHA-1 Namespace)',
            '0': 'UUID NIL'
        };

        return {
            valid: true,
            uuid: uuid,
            version: version,
            versionName: versionNames[version] || 'Unknown',
            isNIL: uuid === '00000000-0000-0000-0000-000000000000'
        };
    }
}

// 生成 UUID
function generateUUIDs() {
    const version = document.getElementById('uuid-version').value;
    const count = parseInt(document.getElementById('uuid-count').value) || 1;
    const resultsDiv = document.getElementById('uuid-results');

    if (count < 1 || count > 100) {
        resultsDiv.innerHTML = '<div class="ip-error">请输入 1 到 100 之间的数量</div>';
        return;
    }

    let html = '<div class="uuid-list">';
    const uuids = [];

    for (let i = 0; i < count; i++) {
        let uuid;
        switch (version) {
            case 'v1':
                uuid = UUIDGenerator.generateV1();
                break;
            case 'v3':
                uuid = UUIDGenerator.generateV3();
                break;
            case 'v5':
                uuid = UUIDGenerator.generateV5();
                break;
            case 'nil':
                uuid = UUIDGenerator.generateNIL();
                break;
            case 'v4':
            default:
                uuid = UUIDGenerator.generateV4();
        }
        uuids.push(uuid);

        html += `<div class="uuid-list-item">
            <span class="uuid-list-item-value">${uuid}</span>
            <div class="uuid-list-item-actions">
                <button class="copy-btn" onclick="copyToClipboard('${uuid}')" data-i18n="copy_btn">复制</button>
            </div>
        </div>`;
    }

    html += '</div>';

    if (count > 1) {
        html += `<div style="margin-top: 16px; text-align: right;">
            <button class="uuid-button secondary" onclick="copyAllUUIDs()" data-i18n="uuid_copy_all">复制全部</button>
            <button class="uuid-button secondary" onclick="downloadUUIDs()" data-i18n="uuid_download">下载</button>
        </div>`;
    }

    resultsDiv.innerHTML = html;
    window.lastUUIDs = uuids;

    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
}

// 验证 UUID
function validateUUID() {
    const uuid = document.getElementById('validate-uuid').value.trim();
    const resultDiv = document.getElementById('validate-result');

    if (!uuid) {
        resultDiv.innerHTML = '<div class="ip-error" data-i18n="uuid_input_required">请输入 UUID</div>';
        return;
    }

    const info = UUIDGenerator.getUUIDInfo(uuid);

    if (!info.valid) {
        resultDiv.innerHTML = '<div class="ip-error" data-i18n="uuid_invalid">无效的 UUID 格式</div>';
        return;
    }

    let html = '<div class="uuid-result-box" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 1px solid #bae6fd;">';
    html += '<div class="uuid-result-item">';
    html += '<span class="uuid-result-label" data-i18n="uuid_value">UUID:</span>';
    html += '<span class="uuid-result-value large">' + info.uuid + '</span>';
    html += '</div>';

    html += '<div class="uuid-result-item">';
    html += '<span class="uuid-result-label" data-i18n="uuid_version">版本:</span>';
    html += '<span class="uuid-result-value">' + info.versionName + '</span>';
    html += '</div>';

    if (info.isNIL) {
        html += '<div class="uuid-result-item">';
        html += '<span class="uuid-result-label" data-i18n="uuid_type">类型:</span>';
        html += '<span class="uuid-result-value">NIL UUID (全零)</span>';
        html += '</div>';
    }

    html += '</div>';
    resultDiv.innerHTML = html;

    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 复制所有 UUID
function copyAllUUIDs() {
    if (window.lastUUIDs && window.lastUUIDs.length > 0) {
        const text = window.lastUUIDs.join('\n');
        navigator.clipboard.writeText(text).then(() => {
            alert('已复制所有 UUID 到剪贴板');
        }).catch(err => {
            console.error('复制失败:', err);
        });
    }
}

// 下载 UUID
function downloadUUIDs() {
    if (window.lastUUIDs && window.lastUUIDs.length > 0) {
        const text = window.lastUUIDs.join('\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'uuids.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

