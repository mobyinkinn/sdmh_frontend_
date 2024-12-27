import styled from "styled-components";
import Header from "../../ui/Header";
import NavbarAdminVerticle from "./NavbarAdminVerticle";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 19rem 1fr;
  grid-template-rows: auto 1fr;
  height: 90vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 1.4rem 3.2rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function AppLayout({ children }) {
  return (
    <StyledAppLayout>
      <Header />
      <NavbarAdminVerticle />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
