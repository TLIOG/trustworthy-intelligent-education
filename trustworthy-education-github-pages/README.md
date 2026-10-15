# Trustworthy Intelligent Education — 论文网站

独立静态网站，可部署到 GitHub Pages。无需 Node.js、安装依赖、API Key 或构建步骤。

## 本地查看

解压后双击 `index.html` 即可查看。图表放大、维度切换和导航可本地使用；复制引用在 HTTPS 部署后使用剪贴板 API，本地受限制时会自动选择文字供手动复制。

## 方法一：GitHub 网页上传（推荐）

1. 登录 GitHub，选择 New repository。
2. 仓库名填写 `trustworthy-education`，选择 Public，勾选 Add a README file，创建仓库。
3. 选择 Add file → Upload files。解压此文件包，将其中的文件和 `assets` 文件夹拖入上传区域。
4. 重点：仓库首页必须直接看到 `index.html`、`style.css`、`app.js` 和 `assets/`。不要只上传 ZIP，也不要把它们放进额外的外层文件夹。提交 Commit changes。可用本包的 README 替换默认 README。
5. 打开仓库 Settings → Pages。
6. Build and deployment → Source 选择 Deploy from a branch。
7. Branch 选择 `main`，文件夹选择 `/ (root)`，点击 Save。
8. 等待部署完成，回到 Settings → Pages 点击 Visit site。

网址形式：

`https://你的GitHub用户名.github.io/trustworthy-education/`

请将“你的GitHub用户名”替换为实际用户名。示例仓库名可以自行修改，网址尾部会随之改变。

说明：压缩包含 `.nojekyll`，用于跳过 Jekyll。Mac Finder 可能隐藏它；本网站没有必须绕过 Jekyll 的下划线资源，即使网页上传漏掉此文件，现有页面也可发布。使用下面的 Git 命令会一并上传它。

## 方法二：使用 Git 命令

先创建同名空白仓库（不要初始化 README），然后在解压后的、能直接看到 `index.html` 的目录打开终端：

```bash
git init
git add .
git commit -m "Add paper project website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trustworthy-education.git
git push -u origin main
```

将 `YOUR_USERNAME` 换成你的 GitHub 用户名，再按方法一第 5–8 步开启 Pages。GitHub 身份认证按你自己的账户设置完成，不要把访问令牌写进网站文件。

## 想要没有仓库后缀的网址？

- `https://YOUR_USERNAME.github.io/`：仓库必须命名为 `YOUR_USERNAME.github.io`。如果已有个人主页，建议使用上述项目仓库，避免覆盖个人主页。
- `https://trustworthy-education.github.io/`：需要拥有名为 `trustworthy-education` 的 GitHub 账户或组织，并在其中创建 `trustworthy-education.github.io` 仓库。仅把普通仓库命名为这个名字，并不会获得该域名。账户或组织名称需实际可用。

## 日后如何修改

- 文字、作者、按钮链接：`index.html`
- 配色、字体、布局、手机适配：`style.css`
- 导航、图表放大、切换面板、复制引用：`app.js`
- 原图与 favicon：`assets/`
- 引用文件：`citation.bib`。修改引用时请同时更新 `index.html` 内的 BibTeX。

提交到发布分支后，GitHub Pages 会自动重新部署。网站全部使用相对资源路径，支持项目子路径部署。

## 排查

- 404：确认 Pages 已启用、发布源为 main/root，且 index.html 位于仓库根目录；项目网址需包含仓库名。
- 无样式或无图片：确认 style.css、app.js、assets/ 均已上传，保留文件名大小写和目录关系。
- 部署失败：检查仓库 Actions 中的 pages build and deployment 日志。
- 新内容没出现：等部署完成后强制刷新浏览器。

## 内容与素材

论文：Trustworthy Intelligent Education: A Systematic Perspective on Progress, Challenges, and Future Directions
作者：Xiaoshan Yu, Shangshang Yang, Ziwen Wang, Haiping Ma, Xingyi Zhang
arXiv：https://arxiv.org/abs/2601.21837

三个图表来自论文；图 1 从 PDF 原图截取。网页按论文元数据列出作者单位，仅修正了原文 Artificial 的拼写。未添加未经核实的会议、录用或代码发布信息。
设计参考：https://long-horizon-agents.github.io/

GitHub 官方说明：
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

交付检查：本地资源、内部锚点、JavaScript 语法、图像文件及压缩包结构均已检查。当前环境未进行浏览器视觉与交互实测，GitHub 发布需由仓库拥有者完成。
