import React from "react";
import { Button } from "devextreme-react/button";
import "./home.scss";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Button as ButtonGrid,
  Selection,
  Scrolling,
  Export,
} from "devextreme-react/data-grid";
import Form, {
  ButtonItem,
  Item,
  Label,
  SimpleItem,
} from "devextreme-react/form";
import notify from "devextreme/ui/notify";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const LineItem = ["F1", "F2", "F3", "F4", "F5"];
  const lineEditOption = {
    items: LineItem,
    searchEnabled: true,
    value: "F1",
    width: "50%",
  };
  const formdata = {
    CompanyCode: "7901",
    Company: "VSIP 1",
    Line: "F1",
    Active: true,
    FromDate: "2022/09/01",
    ToDate: "2022/09/05",
  };
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

  const DateOptions = { width: "50%" };
  const buttonOptions = {
    text: "Filter",
    type: "success",
    useSubmitBehavior: true,
  };
  const checkBoxOptions = {
    text: "Actived",
    value: false,
  };
  const navigate = useNavigate();
  //chuyển data thông qua navigate Router
  function onClick(e: any) {
    //console.log(e.row.data);

    navigate("/homedetail", { state: { data: e.row.data } }); //e.row.data: cục data
  }

  function handleSubmit(e: any) {
    console.log(formdata); //get data của form filter

    notify(
      {
        message: "You have submitted the form",
        position: {
          my: "center top",
          at: "center top",
        },
      },
      "success",
      3000
    );
    e.preventDefault();
  }
  return (
    <React.Fragment>
      <h2 className={"content-block"}>List Planing</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className="caption" style={{ fontSize: 25 }}>
            Filter
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <Form colCount={3} id="form" formData={formdata}>
                <Item
                  dataField="Company"
                  disabled={true}
                  editorOptions={{ width: "50%" }}
                />
                <Item
                  dataField="Line"
                  editorOptions={lineEditOption}
                  editorType="dxSelectBox"
                />
                <SimpleItem
                  dataField="Active"
                  editorType="dxCheckBox"
                  editorOptions={checkBoxOptions}
                >
                  <Label visible={false} />
                </SimpleItem>
                <Item
                  dataField="FromDate"
                  editorType="dxDateBox"
                  editorOptions={DateOptions}
                />
                <Item
                  dataField="ToDate"
                  editorType="dxDateBox"
                  editorOptions={DateOptions}
                />
                <ButtonItem
                  horizontalAlignment="left"
                  buttonOptions={buttonOptions}
                />
              </Form>
            </form>
          </div>
        </div>
      </div>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Button
            width={120}
            text="Thêm mới"
            type="success"
            stylingMode="outlined"
          />
          <Button
            width={120}
            text="Xuất Excel"
            type="success"
            stylingMode="outlined"
          />
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
            <Selection mode="sigle" />
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
              <ButtonGrid hint="detail" icon="edit" onClick={onClick} />
              <ButtonGrid name="delete" />
            </Column>
            <Export enabled={true} allowExportSelectedData={false} />
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}
