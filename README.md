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

- 画面サイズに応じて使用するコンポーネントをreact-admin切り替えることができる

### Selecting Columns

APIから取得したデータを当て込むコンポーネントをreact-adminでは
`field`と呼んでいる。
あらゆるデータ型に対応したfieldが用意されている。
[field一覧](https://marmelab.com/react-admin/Fields.html)



