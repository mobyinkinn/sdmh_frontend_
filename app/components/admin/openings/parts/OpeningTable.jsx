import OpeningRow from "./OpeningRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import { useOpeningContext } from "./OpeningContext";

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
  const { filter } = useOpeningContext();
  let filteredOpening = openingData;
  if (filter !== "All") {
    filteredOpening = openingData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!openingData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1.5fr 3fr 1fr 1fr 2fr 2fr 2fr 1fr 0.5rem">
        <Table.Header>
          <div>Job title</div>
          <div>Description</div>
          <div>No of Seats</div>
          <div>Last date</div>
          <div>Cordinate Programers</div>
          <div>Cordinate Number</div>
          <div>Created</div>
          <div>Status</div>
          <div></div>
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
