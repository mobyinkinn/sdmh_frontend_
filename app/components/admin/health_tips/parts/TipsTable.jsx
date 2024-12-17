import TipsRow from "./TipsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useTipsContext } from "./TipsContext";

const contactData = [
  {
    id: 0,
    title: "WHOLE BODY HEALTH CHECK-UP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit sint quaerat deserunt! Harum debitis quod reprehenderit minima aspernatur autem rerum mollitia excepturi corporis sequi quos ducimus asperiores, tempora doloremque cum soluta maiores. Sint unde dolores blanditiis labore necessitatibus odio nemo dolor optio ducimus quaerat laudantium, nulla quos quia magni ad earum accusamus voluptate dolore, neque voluptatibus omnis alias quae numquam. Adipisci, neque. Laboriosam adipisci quia nesciunt consequatur! Veniam fuga itaque eveniet! Ab eaque at inventore dicta magnam! Vitae modi repudiandae suscipit, accusantium fugit sequi nobis doloribus quidem recusandae earum non iusto dignissimos facilis libero eligendi animi. Dolor, accusamus corporis!",
    status: "active",
    created: "07/02/2018",
  },
  {
    id: 1,
    title: "WHOLE BODY HEALTH CHECK-UP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit sint quaerat deserunt! Harum debitis quod reprehenderit minima aspernatur autem rerum mollitia excepturi corporis sequi quos ducimus asperiores, tempora doloremque cum soluta maiores. Sint unde dolores blanditiis labore necessitatibus odio nemo dolor optio ducimus quaerat laudantium, nulla quos quia magni ad earum accusamus voluptate dolore, neque voluptatibus omnis alias quae numquam. Adipisci, neque. Laboriosam adipisci quia nesciunt consequatur! Veniam fuga itaque eveniet! Ab eaque at inventore dicta magnam! Vitae modi repudiandae suscipit, accusantium fugit sequi nobis doloribus quidem recusandae earum non iusto dignissimos facilis libero eligendi animi. Dolor, accusamus corporis!",
    status: "active",
    created: "07/02/2018",
  },
  {
    id: 2,
    title: "WHOLE BODY HEALTH CHECK-UP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit sint quaerat deserunt! Harum debitis quod reprehenderit minima aspernatur autem rerum mollitia excepturi corporis sequi quos ducimus asperiores, tempora doloremque cum soluta maiores. Sint unde dolores blanditiis labore necessitatibus odio nemo dolor optio ducimus quaerat laudantium, nulla quos quia magni ad earum accusamus voluptate dolore, neque voluptatibus omnis alias quae numquam. Adipisci, neque. Laboriosam adipisci quia nesciunt consequatur! Veniam fuga itaque eveniet! Ab eaque at inventore dicta magnam! Vitae modi repudiandae suscipit, accusantium fugit sequi nobis doloribus quidem recusandae earum non iusto dignissimos facilis libero eligendi animi. Dolor, accusamus corporis!",
    status: "active",
    created: "07/02/2018",
  },
];

function TipsTable() {
  const { filter } = useTipsContext();
  let filteredTips = contactData;
  if (filter !== "All") {
    filteredTips = contactData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!contactData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 3fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Title</div>
          <div>Description</div>
          <div>Status</div>
          <div>Created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredTips}
          render={(notice) => <TipsRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={contactData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TipsTable;
