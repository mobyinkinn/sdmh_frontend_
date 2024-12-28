import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiPencil,
  HiTrash,
} from "react-icons/hi2";
import Image from "next/image";
import {  useBlockBanners, useDeleteBanner, useUnblockBanners } from "./useBanner";
import { HiEyeOff } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
// import useDeleteBooking from "./useDeleteBooking";

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

function BannerRow({ academic: { _id, page, banner, status } }) {
const { mutate: blockbanner, isLoading: isBlocking } = useBlockBanners();
const { mutate: unblockbanner, isLoading: isUnblocking } = useUnblockBanners();
const { mutate: deletebanner, isLoading: isDeleting } = useDeleteBanner();
const handleToggleStatus = () => {
  if (status) {
    blockbanner(_id); // Call block API if active
  } else {
    unblockbanner(_id); // Call unblock API if inactive
  }
};
const handleDelete = () => {
  deletebanner(page);
};
  return (
    <Table.Row>
      <Stacked>
        <span>{page}</span>
      </Stacked>

      <Stacked>
        <Image src={banner} alt={page} width={50} height={50} />
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>
      <Stacked>
        <span>{_id}</span>
      </Stacked>
      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
          ></Menus.Button>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BannerRow;
