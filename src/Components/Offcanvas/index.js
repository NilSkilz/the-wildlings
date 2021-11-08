import { Offcanvas, OffcanvasHeader, OffcanvasBody, Button } from "reactstrap";
import NavigationButton from "../Header/Components/NavigationButton";

export default function SideMenu({ sideMenuOpen, setSideMenuOpen }) {
  return (
    <Offcanvas
      toggle={() => setSideMenuOpen(!sideMenuOpen)}
      isOpen={sideMenuOpen}
    >
      <OffcanvasHeader
        toggle={() => setSideMenuOpen(!sideMenuOpen)}
      ></OffcanvasHeader>
      <OffcanvasBody>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavigationButton name="HOME" link="/" />
          <NavigationButton name="ACTIVITIES" link="/activities" />
          <NavigationButton name="ABOUT" link="/blog" />
          <NavigationButton name="CONTACT" link="/contact" />
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
}
