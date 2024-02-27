# test-admin

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend. By default, we set it to targets [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## リポジトリルール

- [チュートリアル](https://marmelab.com/react-admin/Tutorial.html)の各章のタイトル（英語）をコミットメッセージとしている

- 英語のコミットメッセージ出ない場合は個人的なコミットである

## MEMO

- UIでソートやページネーションによる移動をすると都度リクエストが飛ぶようになっている。

### Writing A Custom List Component

- 画面サイズに応じて使用するコンポーネントをreact-admin（以下admin）切り替えることができる

### Selecting Columns

APIから取得したデータを当て込むコンポーネントをadminでは
`field`と呼んでいる。
あらゆるデータ型に対応したfieldが用意されている。
[field一覧](https://marmelab.com/react-admin/Fields.html)

### Writing A Custom Field

adminでは自前のfieldを用意することが可能。機能が物足りなかったら自前で作って足す感じ。

### Customizing Styles

- adminはGoogleの[Material Designガイドライン](https://m3.material.io/)に基づいてモデル化された[Material UI](https://mui.com/material-ui/getting-started/)に依存している
- 使用可能な[コンポーネント一覧](https://mui.com/material-ui/all-components/)
- sxプロップでコンポーネントのstyleを指定する

### Handling Relationships

- 外部キーでつながっているカラムのデータを表示する方法について説明あり

### Adding A Detail View

- `Resource`コンポーネントにある`show`propsを使用するとレコードの詳細表示をすることができる
- 列に一覧表示しているデータを外部キーで連携している別テーブルへのリンクにすることができる
