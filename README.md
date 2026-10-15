# 大连奶龙大学

> 代码写向未来，快乐交给奶龙。

线上地址：[大连奶龙大学.com](https://xn--pssa0vz4e155inzt.com/)（Punycode：`xn--pssa0vz4e155inzt.com`）

以大连东软信息学院校园为灵感的**非官方趣味创作**单页站点。所设学院、课程、新闻均为虚构，不提供任何真实招生、缴费、学籍或学位服务，与大连东软信息学院及奶龙角色版权方无隶属关系。

## 页面内容

| 板块 | 锚点 | 说明 |
|---|---|---|
| 首屏 | `#home` | 主视觉、两个入口按钮、校园快讯条 |
| 学校概况 | `#about` | 灵感来源介绍、趣味校训「精勤博学，吃饱再学」 |
| 学院设置 | `#colleges` | 六大脑洞学院卡片，点击弹出学院详情 |
| 校园生活 | `#campus` | 三张校园漫游卡片，点击弹出图文导览 |
| 奶龙要闻 | `#news` | 四条趣味新闻，可按「校园动态 / 学术脑洞 / 生活灵感」筛选 |
| 入学指南 | `#join` | 入学纪念卡预览与领取入口 |
| 常见问题 | — | 三条 FAQ（`<details>` 折叠） |

## 功能

- **入学纪念卡**：填写昵称（≤12 字）并选择学院，在浏览器本地生成纪念卡，可生成高清 PNG 图片（2240 × 1360）并预览、下载，同时保留 SVG 下载。生成完成后会自动滚动到图片；手机浏览器也可尝试长按图片保存，具体保存行为由浏览器决定。图片转换失败可重试或下载 SVG。卡号格式 `DNLU-xxxxxx-xxxx`，由时间戳加 `crypto.getRandomValues` 随机数组成。昵称不上传、不存储，嵌入 SVG 前经过 XML 转义。
- **详情弹窗**：学院、要闻、校园导览共用原生 `<dialog>`，关闭后焦点回到触发按钮。
- **新闻筛选**：按 `data-category` 过滤，按钮状态用 `aria-pressed` 标记。
- **移动端导航**：汉堡菜单，760px 以下启用。
- **回到顶部**：滚动超过 600px 后出现。
- 系统开启「减少动态效果」（`prefers-reduced-motion`）时，关闭平滑滚动和动画。

站点没有任何网络请求、Cookie、`localStorage` 和第三方统计脚本。

## 目录结构

```
.
├── index.html        # 页面结构与全部静态文案
├── app.js            # 交互逻辑与弹窗内容数据（原生 JS，无依赖）
├── styles.css        # 全部样式（已压缩）
├── assets/
│   ├── hero-campus.webp      # 首屏主视觉（AI 创作）
│   ├── campus-overview.webp  # 学校概况配图；「漫游校园」导览弹窗配图
│   ├── campus-autumn.webp    # 校园生活卡片 · 漫游校园
│   ├── campus-life.webp      # 校园生活卡片 · SOVO；SOVO 导览弹窗配图
│   ├── campus-seasons.webp   # 校园生活卡片 · 四季；四季导览弹窗配图
│   └── seal.svg              # 趣味校徽，同时作为 favicon
├── robots.txt
└── sitemap.xml
```

没有构建步骤，仓库里的文件就是线上部署的产物，改完可以直接发布。

## 本地预览

在仓库根目录起一个静态服务器即可：

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

## 修改指南

**改文案**

- 首页上直接可见的文字都写在 `index.html` 里。
- 弹窗里的长文案在 `app.js` 顶部的三个数据对象中：

  | 对象 | 对应弹窗 | key（需与 HTML 中的 `data-*` 属性一致） |
  |---|---|---|
  | `colleges` | 学院详情、纪念卡上的学院名 | `code` `ai` `design` `business` `language` `health` → `data-college` |
  | `stories` | 奶龙要闻 | `welcome` `debug` `canteen` `society` → `data-story` |
  | `tours` | 校园导览 | `campus` `sovo` `seasons` → `data-tour` |

  新增学院时，需要同步修改三处：`colleges` 对象、`#colleges` 中的卡片、纪念卡表单里 `#student-college` 的 `<option>`。

**缓存版本号**

`index.html` 引用 `styles.css`、`app.js` 时带了版本参数 `?v=N`。线上静态资源有 1 小时缓存，修改 CSS/JS 后要把对应的 `N` 加 1，否则用户可能拿到旧文件。`index.html` 本身不缓存。

**内容安全策略（CSP）**

线上响应头带有如下 CSP，**改代码时必须遵守**，否则功能会在线上静默失效（本地预览不会报错）：

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:;
font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'self'
```

这意味着：

- 不能写内联 `<script>` 或 `onclick=` 这类内联事件，脚本只能放在 `app.js` 里。
- 不能写内联 `<style>` 或 `style=""` 属性，样式只能放在 `styles.css` 里。
- 不能引用外部 CDN 的脚本、样式、字体或图片，所有资源都要放进本仓库。
- 表单不能提交到任何地址（`form-action 'none'`），纪念卡表单靠 JS 拦截 `submit` 来处理。

## 部署

**推送到 `main` 即自动上线**，约 1 分钟生效，由 `.github/workflows/deploy.yml` 完成：

1. GitHub Actions 用 `git archive` 打包。`.gitattributes` 中标了 `export-ignore` 的文件（README、CONTRIBUTING、`.github` 等）不会进入线上。
2. 通过 SSH 把包交给服务器上的发布脚本。部署账号的密钥被限定为只能执行这个脚本：拿不到 shell，也不能做端口转发。
3. 发布脚本校验包：拒收软链、绝对路径、`..` 路径、缺少 `index.html` 的包，以及超过 50MB 的包。
4. 校验通过后，解压到新的版本目录，以 `日期-序号` 命名，如 `20261015-01`；目录里的 `.revision` 记录对应的提交号，对外不可访问。然后原子切换 `current` 软链。
5. 切换后请求一次源站首页，核对内容。**不一致或打不开，就自动切回上一版**，并删除这个失败的版本。
6. 只保留最近 5 个版本，更早的自动清理。

其他说明：

- 只改 `README.md`、`CONTRIBUTING.md`、PR 模板的推送不触发部署。需要重新发布时，可以在 Actions 页面手动运行「部署到线上」。
- 同一时间只会有一个部署在跑，后来的排队等候。
- 想回滚到更早的版本，需要登录服务器手动切换 `current` 软链。
- 部署用到的 Secrets：`DEPLOY_SSH_KEY`、`DEPLOY_HOST`、`DEPLOY_KNOWN_HOSTS`。服务器地址和密钥都不在代码里。

站点前面有 CDN，HTTPS 由 CDN 终止。发布后如果线上没更新，需要刷新 CDN 缓存。修改 CSS/JS 时记得递增 `?v=`。

服务器还需要配置这些响应头：上节的 CSP、`X-Content-Type-Options: nosniff`、`Referrer-Policy: strict-origin-when-cross-origin`、`X-Frame-Options: SAMEORIGIN`。缓存规则是：`index.html` 设为 `no-store`，静态资源缓存 1 小时。

## 参与修改

分支、提交信息、PR 的约定和改动自查项见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 素材与版权

- 校园实景图片来自[大连东软信息学院官网](https://www.neusoft.edu.cn/)，主题校园图为 AI 创作，相关素材权利归原权利人所有。
- 页面风格参考 [奶龙大学](https://www.milkdragonuniversity.me/)。
- 「奶龙」角色版权归其版权方所有，本站为非商业趣味创作。
