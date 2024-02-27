import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";

export const App = () => (
  // dataProviderとはreact-admin（以下admin）がapiと通信する際のアダプターとして機能するもの
  // Adminコンポーネントは最低1つのResourceコンポーネントを含んでいる必要がある
  // list propsはname propsで指定したテーブルのレコードを取得するようadminに通知している
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);
