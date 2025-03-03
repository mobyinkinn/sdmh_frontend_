import EventRow from "./BlogRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import { useBlogContext } from "./BlogContext";
import BlogRow from "./BlogRow";
import { useBlogs } from "../useBlogs";
import { useState } from "react";
import { Pagination, Stack } from "@mui/material";

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

function BlogTable() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5; // Number of blogs per page

  const { data, isLoading, error } = useBlogs();
  const { filter } = useBlogContext();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading blogs: {error.message}</div>;
  if (!data.length) return <Empty resourceName="Blogs" />;

  let filteredBlog = data;
  if (filter !== "All") {
    filteredBlog = data.filter((el) =>
      filter.toLowerCase() === "active"
        ? el.status === true
        : el.status === false
    );
  }

  // Pagination logic: Slice the data to show only the current page's items
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlog.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredBlog.length / itemsPerPage);

  return (
    <Menus>
      <Table columns="1fr 1fr 1.2fr 1fr 0.8fr 0.8fr 1fr">
        <Table.Header>
          <div>Title</div>
          <div>Short description</div>
          <div>Description</div>
          <div>Image</div>
          <div>Date</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={paginatedBlogs}
          render={(blog) => <BlogRow key={blog._id} department={blog} />}
        />

        <Table.Footer>
          <Stack direction="row" justifyContent="center" marginTop={4}>
            <Pagination
              count={totalPages || 1} // Always show at least 1 page
              page={page}
              onChange={(event, value) => setPage(value)}
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

export default BlogTable;
