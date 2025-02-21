import NewsletterRow from "./NewsletterRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import { useNewsletter } from "../useNewsletter";
import Spinner from "@/app/components/ui/Spinner";

function NewsletterTable() {
  const { data, isLoading, error } = useNewsletter();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Newsletter: {error.message}</div>;
  let filteredNewsletter = data;
  if (!filteredNewsletter.length) return <Empty resourceName="Admins" />;

  return (
    <Menus>
      <Table columns="4fr 4fr">
        <Table.Header>
          <div>Email</div>
          <div>Date</div>
        </Table.Header>

        <Table.Body
          data={filteredNewsletter}
          render={(newsletter) => (
            <NewsletterRow key={newsletter.id} newsletter={newsletter} />
          )}
        />

        <Table.Footer></Table.Footer>
      </Table>
    </Menus>
  );
}

export default NewsletterTable;
