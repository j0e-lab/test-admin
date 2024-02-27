import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList } from "./posts";
import { UserList } from "./users";

export const App = () => (
  // dataProviderとはreact-admin（以下admin）がapiと通信する際のアダプターとして機能するもの
  // Adminコンポーネントは最低1つのResourceコンポーネントを含んでいる必要がある
  // list propsはname propsで指定したテーブルのレコードを取得するようadminに通知している
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
+   <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
  </Admin>
);
