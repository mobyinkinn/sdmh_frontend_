import EventRow from "./EventRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useEventContext } from "./EventContext";
import { useEvents } from "../useEvents";

const eventData = [
  {
    id: 0,
    title: "Felicitation of Stalwarts",
    sDesc: "Honoring the legends of Department of CTVS",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "active",
  },
  {
    id: 1,
    title: "Felicitation of Stalwarts",
    sDesc:
      "Honoring the legends of Department of CTVS of the department of CTVS on 2 June 2018.",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "inactive",
  },
  {
    id: 2,
    title: "Felicitation of Stalwarts",
    sDesc: "Honoring the legends of Department of CTVS",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "active",
  },
];

function EventTable() {
  const { filter } = useEventContext();
  const { data, isLoading } = useEvents();
  if (isLoading) return <Spinner />;
  console.log("events", data);
  let filteredEvent = data;

  if (filter !== "All") {
    filteredEvent = data.filter((el) => {
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
  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 3fr 4fr 2fr 2fr 2fr">
        <Table.Header>
          <div>Title</div>
          <div>Small description</div>
          <div>Description</div>
          <div>Date</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredEvent}
          render={(event) => <EventRow key={event.id} event={event} />}
        />

        <Table.Footer>
          {/* <Pagination count={eventData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default EventTable;
