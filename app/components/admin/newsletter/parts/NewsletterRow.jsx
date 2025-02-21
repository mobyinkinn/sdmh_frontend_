import styled from "styled-components";
import Table from "../../../ui/Table";
import moment from "moment";

const Stacked = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 0.9rem;
  }
`;

function NewsletterRow({ newsletter: { _id, email, createdAt } }) {
  const date = moment(createdAt).format("YYYY-MM-DD");

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>{date}</span>
      </Stacked>
    </Table.Row>
  );
}

export default NewsletterRow;
