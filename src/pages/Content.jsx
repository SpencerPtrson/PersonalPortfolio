import axios from "axios";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";


export default function PageContent() {
  const dispatch = useDispatch();

return (
    <div className="bg" >
      <Container fluid style={{padding: 0}}>
        <Outlet />
      </Container>
    </div>
  );
}
  