import PlanRow from "./PlanRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import { usePlanContext } from "./PlanContext";
import { useCheckups } from "../useCheckups";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

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

function PlanTable() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const { data, isLoading, error } = useCheckups();
  const { filter } = usePlanContext();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Checkups: {error.message}</div>;
  let filteredPlan = data;
  if (filter !== "All") {
    filteredPlan = data.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedPlans = filteredPlan.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredPlan.length / itemsPerPage);

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 2fr 1fr 1fr 1fr 1fr 1.5fr">
        <Table.Header>
          <div>Title</div>
          <div>Short Description</div>
          <div>Description</div>
          <div>Price</div>
          <div>Image</div>
          <div>Status</div>
          <div>Created</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={paginatedPlans}
          render={(plan) => <PlanRow key={plan.id} academic={plan} />}
        />
        <Table.Footer>
          <Stack direction="row" justifyContent="center" marginTop={4}>
            <Pagination
              count={totalPages || 1}
              page={page}
              onChange={(event, value) => setPage(value)} // Update page on click
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
              size="large"
            />
          </Stack>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PlanTable;
