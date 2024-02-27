import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";

export const App = () => (
  // dataProviderとはreact-admin（以下admin）がapiと通信する際のアダプターとして機能するもの
  // Adminコンポーネントは最低1つのResourceコンポーネントを含んでいる必要がある
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList} // usersレコードを取得するようadminに通知
    />
  </Admin>
);
