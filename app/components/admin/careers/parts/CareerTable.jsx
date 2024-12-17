import CareerRow from "./CareerRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import { useCareerContext } from "./CareerContext";

const careerData = [
  {
    id: 0,
    title: "Radiologist",
    email: "yogesh@gmail.com",
    name: "Yogesh",
    phone: "1234567890",
    city: "Jaipur",
    attachment:
      "https://res.cloudinary.com/dfia0vhez/image/upload/fl_attachment/v1732256680/jwbzlpmammzxma8hisba.pdf",
    created: "7/21/2023",
  },
  {
    id: 1,
    title: "Radiologist",
    email: "yogesh@gmail.com",
    name: "Yogesh",
    phone: "1234567890",
    city: "Jaipur",
    attachment:
      "https://res.cloudinary.com/dfia0vhez/image/upload/fl_attachment/v1732256680/jwbzlpmammzxma8hisba.pdf",
    created: "7/21/2023",
  },
  {
    id: 2,
    title: "Radiologist",
    email: "yogesh@gmail.com",
    name: "Yogesh",
    phone: "1234567890",
    city: "Jaipur",
    attachment:
      "https://res.cloudinary.com/dfia0vhez/image/upload/fl_attachment/v1732256680/jwbzlpmammzxma8hisba.pdf",
    created: "7/21/2023",
  },
];

function CareerTable() {
  const { filter } = useCareerContext();
  let filteredCareer = careerData;
  if (filter !== "All") {
    filteredCareer = careerData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!careerData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1.5fr 3.5fr 1fr 1fr 1fr 1fr 1fr 1fr  0.1rem">
        <Table.Header>
          <div>Job title</div>
          <div>Email</div>
          <div>Name</div>
          <div>Phone No</div>
          <div>City</div>
          <div>Attachment</div>
          <div>Created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCareer}
          render={(doctor) => <CareerRow key={doctor.id} department={doctor} />}
        />

        <Table.Footer></Table.Footer>
      </Table>
    </Menus>
  );
}

export default CareerTable;
