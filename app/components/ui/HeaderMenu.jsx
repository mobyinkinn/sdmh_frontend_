import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
const Styledli = styled.li`
  list-style-type: none;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Styledli>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </Styledli>
      <Styledli>
        <ButtonIcon>
          <HiOutlineLogout />
        </ButtonIcon>
      </Styledli>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
