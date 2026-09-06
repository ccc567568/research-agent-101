# Research Agent 101

从认识电脑，到使用 Agent 独立完成科研任务 — 面向研究生的 AI 时代科研计算入门课程。

## 技术栈

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- MDX（课程内容）
- shadcn/ui 风格组件 + Lucide Icons
- 静态导出（`output: 'export'`）

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态站点
npm run build
```

> 开发与构建均使用 `--webpack`，以支持 MDX 的 GFM 表格语法（`remark-gfm`）。Next.js 16 默认的 Turbopack 无法序列化 MDX loader 的 remark 插件选项。

开发服务器默认运行在 [http://localhost:3000](http://localhost:3000)。

构建产物在 `out/` 目录，可部署到任意静态托管服务。

## 编写课程内容

所有课程正文放在 `content/` 目录下的 MDX 文件中：

```
content/
├── 00-start/
│   └── where-to-begin.mdx
├── 01-computer/
│   ├── computer-basics.mdx
│   ├── files-and-paths.mdx
│   ├── os-and-programs.mdx
│   └── network-ssh.mdx
└── ...
```

### 新增一章的步骤

1. 在 `content/` 下创建 MDX 文件，使用统一的 10 段 `LessonSection` 模板
2. 在 `lib/course.ts` 中添加章节元数据（标题、难度、前置等）
3. 在 `lib/lesson-content.tsx` 中 import 并注册 MDX 组件
4. 将 `available` 设为 `true`

### MDX 可用组件

- `<LessonSection number="01" title="..." id="section-01">` — 课程段落
- `<Warning>` / `<Tip>` / `<Callout>` — 提示框
- `<Diagram>` — 等宽字符图示
- `<CodeBlock title="..." language="bash">` — 代码块
- `<Checklist items={[...]} />` — 自检清单

## 功能说明

- **学习进度**：通过 localStorage 记录已完成章节和主题偏好
- **搜索**：`⌘K` / `Ctrl+K` 打开命令面板，搜索课程索引
- **主题切换**：浅色 / 深色，存储在 localStorage

## 项目结构

```
research-agent-101/
├── app/              # Next.js 页面路由
├── content/          # MDX 课程内容（Git 管理）
├── components/       # React 组件
│   ├── article/      # 文档布局、侧边栏、TOC
│   ├── learning/     # 进度、搜索、主题
│   ├── mdx/          # MDX 自定义组件
│   └── ui/           # shadcn/ui 基础组件
├── lib/              # 课程数据、进度工具
└── public/
```

## 课程范围（当前版本）

- ✅ 首页
- ✅ Start Here
- ✅ Part I：第 01–04 章（完整内容）
- 🔜 Part II–VI：侧边栏可见，占位页面
