import React from "react";

import { render, cleanup } from "@testing-library/react";

import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Confirm />);
  });
  
  it("renders without crashing", () => {
    render(<Empty />);
  });
  it("renders without crashing", () => {
    render(<Error />);
  });
  it("renders without crashing", () => {
    render(<Form interviewers={[]}/>);
  });
  it("renders without crashing", () => {
    render(<Header />);
  });
  it("renders without crashing", () => {
    render(<Show interviewer={{name: "Sylvie"}} />);
  });
  it("renders without crashing", () => {
    render(<Status />);
  });

});