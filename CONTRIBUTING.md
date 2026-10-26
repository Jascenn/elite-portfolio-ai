# 贡献指南 Contributing

`Elite Portfolio AI`：使用 React、Vite、Tailwind CSS 和 Google Gemini 构建的个人作品集站点。 小改动可以直接提 PR；涉及对外行为、数据结构、发布流程或批量重构时，请先开 Issue 对齐范围。

## 本地验证

```bash
npm ci
npm run build
```

如果 README 的安装步骤无法照做，请把它当作 bug 提交。不要把“在我机器上能跑”当作验证完成。

## 分支与提交

- 分支名使用 `feat/`、`fix/`、`docs/`、`refactor/`、`chore/` 前缀和 kebab-case 描述。
- `main` 只接受 PR；不要直接推送，也不要 force push 已共享的分支。
- 提交标题使用 Conventional Commits，例如 `fix(cli): preserve backup before overwrite`。
- 一个 PR 只解决一个问题。行为变化、格式化、依赖升级不要混在同一次提交里。
- 默认建议 squash merge，让一个 PR 对应 `main` 上的一条可回溯记录。

## 本项目的安全边界

- 不要把 `VITE_GEMINI_API_KEY`、Cloudflare token、账号 ID 或其他真实凭据写进源码、示例或提交历史。
- 前端变量会进入构建产物；任何以 `VITE_` 开头的值都必须视为可公开信息。
- 改动页面、字体、图片或双语文案时，必须附桌面与移动端截图，并确认原有图片没有被压缩、裁切或替换。
- `main` 当前会触发 Cloudflare Pages 部署；涉及部署配置、环境变量或路由的改动必须单独审查并提供回滚说明。

## PR 最少要写什么

1. 为什么需要改，关联的 Issue 或具体问题。
2. 改了什么，以及明确没有改什么。
3. 陌生人能照着执行的验证命令和结果。
4. 影响面与回滚方式；涉及页面时附桌面和移动端截图。

## 审查与合并

单人维护时，PR 的价值是给未来的自己留下“当时为什么这样做”。评论建议标注 `【阻塞】`、`【建议】` 或 `【nit】`。安全漏洞不要开公开 Issue，请按 [SECURITY.md](SECURITY.md) 私下报告。

## 范围

本项目主要覆盖：React 页面、数字分身对话、双语内容、静态资源、Gemini 集成和 Cloudflare Pages 部署。
