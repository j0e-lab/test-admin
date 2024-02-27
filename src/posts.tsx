import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, TextInput, Create, useRecordContext } from "react-admin";

// コンポーネントのリストを作る場合、keyプロパティをつけている必要がある（つけてないとtypescriptに怒られる）
const postFilters = [
  <TextInput key="search" source="q" label="Search" alwaysOn />, // 入力したワードとマッチするレコードを検索する
  <ReferenceInput key="user" source="userId" label="User" reference="users" />, // プルダウンからフィルターして表示したいレコードを選べる
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = () => {
  const record = useRecordContext(); // 指定された列のレコード情報を取得
  // recordがない状態でレンダリングされる場合があるので常にrecordの有無をチェックする処理が必要
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      {/* InputPropsで入力値に関する設定ができる。下記の場合入力不可にできる */}
      <TextInput source="id" InputProps={{ disabled: true }} />
      <ReferenceInput source="userId" reference="users" link="show" />
      <TextInput source="title" />
      {/* multiline > テキストが複数行になって折り返されると入力の高さを自動調整してくれる */}
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
