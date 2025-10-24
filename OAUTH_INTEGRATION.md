# OAuth 2.0 集成指南

## 概述
本项目已成功集成了 DataTail OAuth 2.0 认证服务，用户可以通过 DataTail 账户登录到应用。

## 环境变量配置

在项目根目录创建 `.env.local` 文件，并添加以下配置：

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DATAIL_CLIENT_ID=8b2bbb91da9609df2750
DATAIL_CLIENT_SECRET=your-client-secret-from-datail
```

### 环境变量说明：
- `NEXTAUTH_URL`: 应用的URL地址
- `NEXTAUTH_SECRET`: NextAuth.js的加密密钥，用于保护会话和CSRF令牌
- `DATAIL_CLIENT_ID`: DataTail OAuth应用的客户端ID
- `DATAIL_CLIENT_SECRET`: DataTail OAuth应用的客户端密钥

## 功能特性

### 1. 登录功能
- 用户点击Header中的"Login"或"Sign Up"按钮
- 重定向到DataTail OAuth授权页面
- 授权成功后返回应用并完成登录

### 2. 用户状态显示
- 登录后显示用户头像和用户名
- 提供登出功能
- 移动端适配（用户名在小屏幕上隐藏）

### 3. 受保护的路由
- `/dashboard` 页面需要登录才能访问
- 未登录用户会自动重定向到登录页面

### 4. 错误处理
- 提供专门的错误页面处理认证失败情况
- 支持多种错误类型的友好提示

## 页面结构

```
app/
├── api/auth/[...nextauth]/route.ts    # OAuth配置
├── providers/SessionProvider.tsx      # 会话提供者
├── auth/
│   ├── signin/page.tsx               # 登录页面
│   └── error/page.tsx                # 错误页面
├── dashboard/page.tsx                 # 仪表板页面
└── layout.tsx                         # 根布局
```

## 使用方法

### 1. 启动开发服务器
```bash
npm run dev
```

### 2. 访问应用
打开浏览器访问 `http://localhost:3000`

### 3. 测试登录流程
1. 点击Header中的"Login"按钮
2. 重定向到DataTail OAuth页面
3. 完成授权后返回应用
4. 查看仪表板页面显示用户信息

## 移动端适配

Header组件已针对移动端进行了优化：
- 用户名在小屏幕上自动隐藏
- 保持原有的响应式设计
- 登录/登出按钮在移动端正常显示

## 样式保持

所有新增的OAuth功能都严格遵循原有的设计风格：
- 使用相同的颜色方案（黑色主题）
- 保持一致的按钮样式和过渡效果
- 维持原有的布局和间距

## 注意事项

1. 确保DataTail OAuth应用配置正确
2. 设置正确的回调URL
3. 在生产环境中使用强密钥
4. 定期更新依赖包以确保安全性

## 故障排除

### 常见问题：
1. **认证失败**: 检查环境变量配置是否正确
2. **重定向错误**: 确认回调URL配置
3. **样式问题**: 确保没有覆盖原有的CSS类

### 调试建议：
- 检查浏览器控制台的错误信息
- 验证环境变量是否正确加载
- 确认OAuth服务配置是否正确
