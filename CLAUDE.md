# CLAUDE.md
 

## 概要

**Zographia** — React 用の汎用 UI コンポーネントライブラリ (npm パッケージ名 `zographia`)。
[ZpDIC Online](https://github.com/Ziphil/ZpdicOnlineNova) などの Web アプリケーションで利用することを想定している。

コンポーネントカタログ (Storybook) は `https://ziphil.github.io/Zographia/` にデプロイされています。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run develop` | Storybook を開発モードで起動 (`localhost:6006`) |
| `npm run build` | webpack で `dist/` にビルド後に `tsc-alias` でパスエイリアスを解決 |
| `npm run build:storybook` | Storybook を `docs/` に静的ビルド (GitHub Pages 公開用) |
| `npm run lint` | `source/` 以下の .ts ファイルと .tsx ファイルを ESLint でチェック |
| `npm run lint:fix` | ESLint で自動修正 |

動作テストは Storybook で行います。
`npm run develop` で開発サーバーを起動して、ブラウザでは `http://localhost:6006` を開いてください。
**テストランナーは現状ありません**。

**Font Awesome Pro が必要**。
インストールにはリポジトリトップの `.npmrc` に Font Awesome のトークン設定が必要 (詳細は README.md)。

Node のバージョンは Volta で 20.18.0 に固定。

## ディレクトリ構成
- **`source/component/`** — UI。粒度別に分類される。
  - **`atom/`** — 最小部品 (各種コントロール, ボタン等)。
  - **`compound/`** — 複合コンポーネント。シンプルな UI 部品以外は基本的にここに格納する。
  - **`create.ts`** — `create`, `createWithRef` ヘルパー。全コンポーネントの基盤。
  - 各コンポーネントは `xxx.tsx` (実装) + `xxx.scss` (スタイル) + `index.ts` (re-export) で構成される。サブコンポーネントがある場合は `xxx-<sub>.tsx` として同ディレクトリに置き、外部から参照される者である場合に限り `index.ts` から併せて export する。
- **`source/hook/`** — 汎用 React フック。
- **`source/module/`** — ユーティリティ関数。外部に公開される。
- **`source/intl/`** — 国際化用の処理 (日付・複数形)。
- **`source/message/`** — 国際化用の翻訳メッセージ。
- **`source/util/`** — 内部向けユーティリティ関数。外部には公開されない。
- **`source/story/`** — Storybook ストーリー。`atom/`, `compound/` が `source/component/` をミラーする。
- **`loader/`** — webpack カスタムローダー (単位変換など)。
- **`.storybook/`** — Storybook の設定。

## コンポーネントの規約
新しいコンポーネントを作成する際は、既存のもの (例: `source/component/atom/button/`) を手本にする。

**注意点等**:
- **`create()`, `createWithRef()` で生成する**。
  第 1 引数に `require("./xxx.scss")` で SCSS モジュールを渡し、第 2 引数に表示名 (PascalCase) を渡す。
  `ref` を転送する場合は `createWithRef`。
- **props は独立した `interface` を作らず**、関数引数にインラインのオブジェクト型リテラルで書く。
  デフォルト値は分割代入で与える。
- **`...rest` を受け取り、`AdditionalProps` 型を交差させる**。
  これで `data-*` / `aria-*` / `style` を透過できる。
- **内部要素のスタイル指定は `className` ではなく `styleName`** (react-css-modules)。
  `allowMultiple` が有効なので空白区切りで複数指定可。
- **`data-*` / `aria-*` 属性は `source/module/data.ts` の `data()`, `aria()` ヘルパーで生成する**。
  キーは camelCase で渡すと kebab-case に変換される。
  SCSS 側では `&[data-variant="solid"]` のようにこの属性でスタイルを出し分ける。
- 色は `LeveledColorScheme` (`source/module/color`) を使い、`scheme` prop として受け取る。
  SCSS 側は `function.scss` の `schemify`, `leveled-color`, `theme` ミックスインでテーマ・スキームを展開する。
- インポートは原則として `/source/...` の絶対エイリアスを使う (相対パスの `../../` は避ける)。
  ただし、**同一コンポーネント内は `./` 相対パスを用いる**。

## コーディングスタイル
詳細な規約は `.claude/rules/` に定義されており、**Claude Code はこれらを必ず守る**こと:

- @.claude/rules/typescript.md — 命名規則・TypeScript 共通スタイル (`*.ts`, `*.tsx`)
- @.claude/rules/react.md — React 関連スタイル (`*.tsx`, `*.yml`)
- @.claude/rules/css.md — SCSS スタイル (`*.scss`)

## ストーリー
実装を追加・変更したら、`source/story/atom|compound/<name>.tsx` にストーリーを追加・更新する。
既存のもの (例: `source/story/atom/button.tsx`) を手本にすると良い。

## 注意
- **生成物 (`dist/`, `docs/`, `node_modules/`) は直接編集しない**。
- `package.json` の `version` はリリース時に手動で上げる運用 (git ログ参照)。バージョン変更は指示があったときのみ。
- `variable.env` (Font Awesome トークン等) は環境依存でコミットしない。
