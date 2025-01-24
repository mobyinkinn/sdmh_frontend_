import OpeningRow from "./OpeningRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import { useOpeningContext } from "./OpeningContext";
import { useOpening } from "../../careers/parts/useOpening";
import Spinner from "@/app/components/ui/Spinner";

const openingData = [
  {
    id: 0,
    title: "Radiologist",
    description:
      "Application invited for the post of Consultant (Full time/Part time) in the Department of Radiology. Qualification:- MD Radiology/DMRD",
    seats: "5",
    date: "2nd Nov, 2023",
    cordinateProgramers: "Dr Nikhil Ajmera",
    cordinateNumber: "9414241822",
    created: "7/21/2023",
    status: "active",
  },
  {
    id: 1,
    title: "Radiologist",
    description:
      "Application invited for the post of Consultant (Full time/Part time) in the Department of Radiology. Qualification:- MD Radiology/DMRD",
    seats: "5",
    date: "2nd Nov, 2023",
    cordinateProgramers: "Dr Nikhil Ajmera",
    cordinateNumber: "9414241822",
    created: "7/21/2023",
    status: "active",
  },
  {
    id: 2,
    title: "Radiologist",
    description:
      "Application invited for the post of Consultant (Full time/Part time) in the Department of Radiology. Qualification:- MD Radiology/DMRD",
    seats: "5",
    date: "2nd Nov, 2023",
    cordinateProgramers: "Dr Nikhil Ajmera",
    cordinateNumber: "9414241822",
    created: "7/21/2023",
    status: "active",
  },
];

function OpeningTable() {
  const { data, isLoading, error } = useOpening();
  const { filter } = useOpeningContext();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Opening: {error.message}</div>;
  let filteredOpening = data;
  if (filter !== "All") {
    filteredOpening = data.filter((el) => {
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
  if (!filteredOpening.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 2fr 1fr 1fr 1.5fr 1fr 1fr 1fr ">
        <Table.Header>
          <div>position</div>
          <div>JD</div>
          <div>Seats</div>
          <div>Last date</div>
          <div>Programers</div>
          <div>Ph.Number</div>
          <div>Status</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={filteredOpening}
          render={(doctor) => (
            <OpeningRow key={doctor.id} department={doctor} />
          )}
        />

        <Table.Footer></Table.Footer>
      </Table>
    </Menus>
  );
}

export default OpeningTable;
