# 贡献与提交规范

## 流程

1. 从 `main` 拉分支，分支名 `type/kebab-topic`，如 `feat/friend-link-dnui-survive`。
2. 改完开 PR 到 `main`，按模板逐项自查。
3. 合并方式不限。PR 标题和提交信息用同一套格式。
4. 合并到 `main` 即自动上线（见 README「部署」一节）。
5. 只想报个问题或提个想法，不用改代码：直接开 Issue，用「网站出问题了」或「想要一个新东西」模板；不确定算不算问题也欢迎先开。

## 提交信息

格式：`type(dalian-nailong): 做了什么`

| type | 用于 |
|---|---|
| `feat` | 用户能看到的新内容或新功能：新板块、新友链、新交互 |
| `fix` | 修线上的问题：样式错位、交互失效、文案错字 |
| `perf` | 变快或变小：压缩图片、减少请求 |
| `chore` | 用户看不到的改动：README、部署流程、删无用文件 |

`scope` 固定写 `dalian-nailong`。

**描述写效果，不写动作。** 写清楚改完之后用户看到了什么变化、改动的范围有多大：

| 好 | 不好 |
|---|---|
| `chore(dalian-nailong): 删掉没有页面引用的 campus-train.webp，线上少 249KB` | `chore: 删除图片` |
| `feat(dalian-nailong): 顶部条加友链 DNUIer 的生存指南和 GitHub 仓库入口，手机上隐藏标语、链接排成两行` | `feat: update index.html` |

## 改动自查

线上有 CSP 和 CDN 缓存，下面几条本地预览时看不出问题，上线后才会出错：

- **CSP**：不写内联 `<script>` / `<style>` / `style=""` / `onclick=`，不引用外部 CDN 资源。细则见 README「内容安全策略」。
- **缓存版本号**：改了 `styles.css` 或 `app.js`，就要把**全部 10 个页面**（含 `404.html`）里对应的 `?v=N` 加 1，并保持一致。`404.html` 的站内链接和本站资源写的是根绝对路径（`/styles.css`、`/index.html#about`），因为它会在任意深度被访问；其余页面的顶栏、页脚用的是相对路径，改导航时两边都要改。
- **404 页要生效需服务器配置**：nginx 上要有 `error_page 404 /404.html;`，只提交文件不会自动生效。
- **新增学院**：`app.js` 的 `colleges`、`#colleges` 卡片、`#student-college` 的 `<option>`，三处都要改。
- **新增或删除图片**：同步更新 README 的目录结构。
- **新增不上线的文件**（文档、配置）：在 `.gitattributes` 中标 `export-ignore`；如果只改它不需要重新部署，再加进 `deploy.yml` 的 `paths-ignore`。
