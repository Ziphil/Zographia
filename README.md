<div align="center">
<h1>Zographia UI</h1>
</div>

![](https://img.shields.io/github/package-json/v/Ziphil/Zographia)
![](https://img.shields.io/github/commit-activity/y/Ziphil/Zographia?label=commits)


## 概要
React の汎用コンポーネントライブラリです。
[ZpDIC Online](https://github.com/Ziphil/ZpdicOnlineNova) や [ZpDIC for Shaleian](https://github.com/Ziphil/ZpdicShaleian) などの Web ベースのアプリケーションで利用していく予定です。

以下のページで、このライブラリが提供するコンポーネントを一覧することができます。
- [コンポーネントカタログ](https://ziphil.github.io/Zographia/)

## インストール
このコンポーネントライブラリは、各種アイコンを表示するのに [Font Awesome](https://fontawesome.com/) の Pro プランを利用しています。
そのため、あらかじめ Font Awesome のトークンの設定をしておく必要があります。

Font Awesome のトークンの設定方法は[公式ドキュメント](https://fontawesome.com/docs/web/setup/packages)を参考にしてください。最も簡単にセットアップするには、リポジトリトップに `.npmrc` ファイルを作成し、以下の内容を書き込んでください。
```
@fortawesome:registry=https://npm.fontawesome.com
//npm.fontawesome.com/:_authToken=(トークン)
```

Font Awesome のトークンの設定ができていれば、[npm](https://www.npmjs.com/package/zographia) 経由でこのパッケージをインストールできます。

```
npm i zographia
```