import CareerRow from "./CareerRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import { useCareerContext } from "./CareerContext";
import { useCareers } from "./useCareers";
import Spinner from "@/app/components/ui/Spinner";

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
  const { data, isLoading, error } = useCareers();
   const { filter } = useCareerContext();
   if (isLoading) return <Spinner />;
   if (error) return <div>Error loading Careers: {error.message}</div>;
   let filteredCareer = data;
   if (filter !== "All") {
     filteredCareer = data.filter((el) => {
       if (filter.toLowerCase() === "active") {
         return el.status === true; // Show active testimonials
       } else if (filter.toLowerCase() === "inactive") {
         return el.status === false; // Show inactive testimonials
       }
       return false;
     });
   }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!careerData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 5.2rem">
        <Table.Header>
          <div>Position</div>
          <div>Email</div>
          <div>Name</div>
          <div>Phone</div>
          <div>City</div>
          <div>Resume</div>
          <div>Status</div>
          <div>Date</div>
          <div>Actions</div>
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
