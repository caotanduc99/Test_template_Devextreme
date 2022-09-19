import React, { useEffect, useRef, useState } from "react";
import { Button } from "devextreme-react/button";
import "./home.scss";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Button as ButtonGrid,
  Selection,
  Scrolling,
} from "devextreme-react/data-grid";
import Form, {
  SimpleItem,
  GroupItem,
  TabbedItem,
  TabPanelOptions,
  Tab,
} from "devextreme-react/form";
import { useNavigate } from "react-router-dom";
import { Row } from "devextreme-react/responsive-box";

const datasource = [
  {
    ID: 1,
    PlanningName: "Kế hoạch 1",
    TimePlanning: "01/01/2022 - 01/02/2022",
    Company: "VSIP 1",
    Factory: "1",
    CreateDate: "1964/03/16",
    CreateUser: "Admin",
    LastUpdateDate: "2022/01/02",
    LastUpdateUser: "Admin",
    Status: "Active",
  },
  {
    ID: 2,
    PlanningName: "Kế hoạch 1",
    TimePlanning: "01/01/2022 - 01/02/2022",
    Company: "VSIP 1",
    Factory: "1",
    CreateDate: "1964/03/16",
    CreateUser: "Admin",
    LastUpdateDate: "2022/01/02",
    LastUpdateUser: "Admin",
    Status: "Active",
  },
  {
    ID: 3,
    PlanningName: "Kế hoạch 1",
    TimePlanning: "01/01/2022 - 01/02/2022",
    Company: "VSIP 1",
    Factory: "1",
    CreateDate: "1964/03/16",
    CreateUser: "Admin",
    LastUpdateDate: "2022/01/02",
    LastUpdateUser: "Admin",
    Status: "Active",
  },
  {
    ID: 4,
    PlanningName: "Kế hoạch 1",
    TimePlanning: "01/01/2022 - 01/02/2022",
    Company: "VSIP 1",
    Factory: "1",
    CreateDate: "1964/03/16",
    CreateUser: "Admin",
    LastUpdateDate: "2022/01/02",
    LastUpdateUser: "Admin",
    Status: "Active",
  },
];

export default function Home() {
  const navigate = useNavigate();
  //chuyển data thông qua navigate
  function onClick(e: any) {
    navigate("/homedetail", { state: { data: e.row.data } });
  }
  return (
    <React.Fragment>
      <h2 className={"content-block"}>List Planing</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Button
            width={120}
            text="Thêm mới"
            type="success"
            stylingMode="outlined"
          />

          <Row>
            <Column>
              <h1>hi</h1>
            </Column>
          </Row>
          <DataGrid
            columnAutoWidth={true}
            id="gridContainer"
            dataSource={datasource}
            keyExpr="ID"
            allowColumnReordering={false}
            showBorders={true}
            hoverStateEnabled={true}
            height={440}
          >
            <Scrolling columnRenderingMode="virtual" />
            <Paging enabled={true} />
            <Editing mode="row" allowDeleting={true} />
            <Selection mode="multiple" />

            <Column dataField="ID" caption={"STT"} allowSorting={false} />
            <Column dataField="PlanningName" allowSorting={false} />
            <Column dataField="TimePlanning" />
            <Column dataField="Company" />
            <Column dataField="Factory" />
            <Column dataField="CreateDate" dataType="date" />
            <Column dataField="CreateUser" allowSorting={false} />
            <Column dataField="LastUpdateDate" dataType="date" />
            <Column dataField="LastUpdateUser" allowSorting={false} />
            <Column dataField="Status" width={130} />
            <Column type="buttons">
              <ButtonGrid hint="edit" icon="edit" onClick={onClick} />
              <ButtonGrid name="delete" />
            </Column>
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}
