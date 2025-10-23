# JWT Token 生成与解析工具 - 快速开始指南

## 🚀 快速开始

### 1. 打开工具
- 在浏览器中打开 `jwt.html`
- 或从主页 `index.html` 点击"JWT Token 生成"卡片

### 2. 生成 JWT Token
```
步骤:
1. 在"Header"框中输入 JSON（可选）
   默认: {"alg":"HS256","typ":"JWT"}
2. 在"Payload"框中输入 JSON（可选）
   示例: {"sub":"1234567890","name":"John Doe","iat":1516239022}
3. 输入密钥 (Secret Key)
4. 选择算法 (HS256/HS384/HS512)
5. 点击"生成"按钮
6. JWT Token 将显示在"JWT Token"框中
7. 点击"复制"按钮复制 Token
```

### 3. 解析 JWT Token
```
步骤:
1. 在"输入 Token"框中粘贴 JWT Token
2. 输入密钥（可选，用于验证签名）
3. 点击"解析"按钮
4. Header、Payload 和 Signature 将显示在下方
5. 如果提供了密钥，系统会自动验证签名
```

## 💡 使用技巧

### 快速操作
- 点击"清空"按钮快速清空所有内容
- 点击"复制"按钮一键复制 Token
- 支持 Ctrl+A 全选文本

### 算法说明

#### HS256 (SHA-256) - 默认
- 最常用的 JWT 算法
- 安全性高
- 兼容性好

#### HS384 (SHA-384)
- 比 HS256 更强的安全性
- 签名更长
- 计算稍慢

#### HS512 (SHA-512)
- 最强的安全性
- 签名最长
- 计算最慢

### 多语言
- 点击页面右上角的语言选择器
- 支持 10 种语言
- 语言偏好会自动保存

## 📋 常见问题

### Q: JWT 是什么？
A: JWT (JSON Web Token) 是一种开放标准 (RFC 7519)，用于在网络上安全地传输信息。它由三部分组成：Header、Payload 和 Signature。

### Q: Header 中的 "alg" 是什么？
A: "alg" 是算法的缩写，指定用于签名的算法。常见的有 HS256、HS384、HS512 等。

### Q: Payload 中可以放什么？
A: Payload 可以包含任何 JSON 数据，通常包含用户信息、权限等。常见的字段有：
- `sub` - 主题（通常是用户 ID）
- `name` - 用户名
- `iat` - 签发时间
- `exp` - 过期时间

### Q: 密钥有什么作用？
A: 密钥用于生成签名和验证 JWT 的真实性。只有知道密钥的人才能生成或验证有效的 JWT。

### Q: 签名验证失败是什么意思？
A: 这意味着 JWT 的签名与使用提供的密钥重新计算的签名不匹配，可能是：
- 密钥错误
- JWT 被篡改
- 算法不匹配

### Q: 支持离线使用吗？
A: 完全支持离线使用。

### Q: 数据会被保存吗？
A: 不会。所有数据在本地处理，不上传服务器。

## 🔒 安全建议

### 使用场景
- ✅ 生成 JWT Token 用于身份验证
- ✅ 验证 JWT Token 的真实性
- ✅ 学习和理解 JWT 原理
- ✅ 测试 JWT 实现

### 安全提示
- 所有计算在本地完成，不上传服务器
- 不要在公共网络上处理敏感数据
- 定期清空浏览器缓存
- 使用强密钥（至少 32 个字符）

## 📚 JWT 结构说明

### 完整的 JWT 格式
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### 三部分说明
1. **Header** (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9)
   - Base64 编码的 JSON
   - 包含算法和类型信息

2. **Payload** (eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ)
   - Base64 编码的 JSON
   - 包含声明（claims）

3. **Signature** (SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)
   - Base64 编码的签名
   - 使用密钥和算法生成

## 🎯 使用场景

### 个人使用
- 学习 JWT 原理
- 测试 JWT 实现
- 生成测试 Token

### 工作使用
- 验证 API Token
- 调试身份验证问题
- 测试 JWT 集成

### 开发使用
- 快速生成测试 Token
- 验证 Token 内容
- 检查签名有效性

## 📞 获取帮助

### 常见问题
- 查看本文档的"常见问题"部分
- 查看 `JWT_TOOL_SUMMARY.md` 了解更多细节

### 报告问题
- 检查浏览器控制台是否有错误
- 确保使用最新版本的浏览器
- 尝试清除浏览器缓存

---

**版本**: 1.0
**最后更新**: 2025-10-23
**状态**: ✅ 可用

