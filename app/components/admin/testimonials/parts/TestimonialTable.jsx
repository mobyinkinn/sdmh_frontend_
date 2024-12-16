import TestimonialRow from "./TestimonialRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useTestimonialContext } from "./TestimonialContext";

const testimonialData = [
  {
    id: 0,
    name: "Mr. Narendra Modi",
    designation: "PM of India",
    description:
      "Worst service center My father visited hospital on 05.012 .2024 to take medicine traveling 600 km but medicine reacted on his body for which a whatsapp message was conveyed to Dr.BK malpani on no. 9829054938 on which they asked to stop the treatment and correlate to himself but in no vein. On 9.12.24 whatsapp call was made whether patient has to visit around 600 km to consult doctor or to discuss on message or whatsapp but no reply was received till 7.50pm dt 9.12.24. The patient was depressed and annoying to visit such a long journey that no hearing from doctor which consider that money is only issue by the doctor. Deeply depressed 😔",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "Mr. Rahul Gandhi",
    designation: "Next PM of India",
    description:
      "Hii good evening sir/mam. I was a very bad experience in you hospital my patient mr virendra uhid 20548677 admit in under dr B.k malpani IM and veer bad experience in gastroenterology floor 4th floor and staff is very disappointed to me 8pm time CBC send in 10pm and staff say that not my folt I have other patient and Dr atual say don't need me to explain i. Request to sir coming morning samples send in 6 am but dr say no sister know this time and staff Ms Rita and Ms Sarita is was very rudley beaver and this be half i was the shift my patient other hospital and full information collected to me please call my number 8094924892",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "Mr. Vladimir Putin",
    designation: "President of Russia",
    description:
      "Dear all, Pl be more humble and polite with attendent of patients and patients queries as my daughter is hospitalized from yesterday and I m feeling that nursing and security staff need to be more polite.",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
];

function TestimonialTable() {
  const { filter } = useTestimonialContext();
  let filteredTestimonial = testimonialData;
  if (filter !== "All") {
    filteredTestimonial = testimonialData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!testimonialData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 1fr 4fr 1fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Designation</div>
          <div>Description</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredTestimonial}
          render={(notice) => (
            <TestimonialRow key={notice.id} academic={notice} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={testimonialData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TestimonialTable;
