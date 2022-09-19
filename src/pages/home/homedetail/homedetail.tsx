import React, { useEffect } from 'react';
import '../home.scss';
import DataGrid, {
  Column, Editing, Paging, Lookup,
} from 'devextreme-react/data-grid';
import { useLocation, useParams } from 'react-router-dom';

const datasource=[{
ID:1,
LineName: 'F1',
FromDate: '01/01/2022',
ToDate: ' 01/02/2022',
DeliveryDate: ' 05/02/2022',
FEPO: '2KLLTHE5CO3',
StylePlaning: 'LWWC5TT',
COMB: 'LWWC5TT',
Quantity:'500',
SMV:'21.9',
BUY: 'WI22',
ProducCode: 'LLPT-0004',
CreateDate: '1964/03/16',
CreateUser: 'Admin',
LastUpdateDate: '2022/01/02',
LastUpdateUser:'Admin',
Status:'Active'
},{
    ID:2,
    LineName: 'F1',
    FromDate: '01/01/2022',
    ToDate: ' 01/02/2022',
    DeliveryDate: ' 05/02/2022',
    FEPO: '2KLLTHE5CO3',
    StylePlaning: 'LWWC5TT',
    COMB: 'LWWC5TT',
    Quantity:'500',
    SMV:'21.9',
    BUY: 'WI22',
    ProducCode: 'LLPT-0004',
    CreateDate: '1964/03/16',
    CreateUser: 'Admin',
    LastUpdateDate: '2022/01/02',
    LastUpdateUser:'Admin',
    Status:'Active'
    },{
        ID:3,
        LineName: 'F1',
        FromDate: '01/01/2022',
        ToDate: ' 01/02/2022',
        DeliveryDate: ' 05/02/2022',
        FEPO: '2KLLTHE5CO3',
        StylePlaning: 'LWWC5TT',
        COMB: 'LWWC5TT',
        Quantity:'500',
        SMV:'21.9',
        BUY: 'WI22',
        ProducCode: 'LLPT-0004',
        CreateDate: '1964/03/16',
        CreateUser: 'Admin',
        LastUpdateDate: '2022/01/02',
        LastUpdateUser:'Admin',
        Status:'Active'
        },{
            ID:4,
            LineName: 'F1',
            FromDate: '01/01/2022',
            ToDate: ' 01/02/2022',
            DeliveryDate: ' 05/02/2022',
            FEPO: '2KLLTHE5CO3',
            StylePlaning: 'LWWC5TT',
            COMB: 'LWWC5TT',
            Quantity:'500',
            SMV:'21.9',
            BUY: 'WI22',
            ProducCode: 'LLPT-0004',
            CreateDate: '1964/03/16',
            CreateUser: 'Admin',
            LastUpdateDate: '2022/01/02',
            LastUpdateUser:'Admin',
            Status:'Active'
            },{
                ID:5,
                LineName: 'F1',
                FromDate: '01/01/2022',
                ToDate: ' 01/02/2022',
                DeliveryDate: ' 05/02/2022',
                FEPO: '2KLLTHE5CO3',
                StylePlaning: 'LWWC5TT',
                COMB: 'LWWC5TT',
                Quantity:'500',
                SMV:'21.9',
                BUY: 'WI22',
                ProducCode: 'LLPT-0004',
                CreateDate: '1964/03/16',
                CreateUser: 'Admin',
                LastUpdateDate: '2022/01/02',
                LastUpdateUser:'Admin',
                Status:'Active'
                },{
                    ID:6,
                    LineName: 'F1',
                    FromDate: '01/01/2022',
                    ToDate: ' 01/02/2022',
                    DeliveryDate: ' 05/02/2022',
                    FEPO: '2KLLTHE5CO3',
                    StylePlaning: 'LWWC5TT',
                    COMB: 'LWWC5TT',
                    Quantity:'500',
                    SMV:'21.9',
                    BUY: 'WI22',
                    ProducCode: 'LLPT-0004',
                    CreateDate: '1964/03/16',
                    CreateUser: 'Admin',
                    LastUpdateDate: '2022/01/02',
                    LastUpdateUser:'Admin',
                    Status:'Active'
                    },{
                        ID:7,
                        LineName: 'F1',
                        FromDate: '01/01/2022',
                        ToDate: ' 01/02/2022',
                        DeliveryDate: ' 05/02/2022',
                        FEPO: '2KLLTHE5CO3',
                        StylePlaning: 'LWWC5TT',
                        COMB: 'LWWC5TT',
                        Quantity:'500',
                        SMV:'21.9',
                        BUY: 'WI22',
                        ProducCode: 'LLPT-0004',
                        CreateDate: '1964/03/16',
                        CreateUser: 'Admin',
                        LastUpdateDate: '2022/01/02',
                        LastUpdateUser:'Admin',
                        Status:'Active'
                        },{
                            ID:8,
                            LineName: 'F1',
                            FromDate: '01/01/2022',
                            ToDate: ' 01/02/2022',
                            DeliveryDate: ' 05/02/2022',
                            FEPO: '2KLLTHE5CO3',
                            StylePlaning: 'LWWC5TT',
                            COMB: 'LWWC5TT',
                            Quantity:'500',
                            SMV:'21.9',
                            BUY: 'WI22',
                            ProducCode: 'LLPT-0004',
                            CreateDate: '1964/03/16',
                            CreateUser: 'Admin',
                            LastUpdateDate: '2022/01/02',
                            LastUpdateUser:'Admin',
                            Status:'Active'
                            },{
                                ID:9,
                                LineName: 'F1',
                                FromDate: '01/01/2022',
                                ToDate: ' 01/02/2022',
                                DeliveryDate: ' 05/02/2022',
                                FEPO: '2KLLTHE5CO3',
                                StylePlaning: 'LWWC5TT',
                                COMB: 'LWWC5TT',
                                Quantity:'500',
                                SMV:'21.9',
                                BUY: 'WI22',
                                ProducCode: 'LLPT-0004',
                                CreateDate: '1964/03/16',
                                CreateUser: 'Admin',
                                LastUpdateDate: '2022/01/02',
                                LastUpdateUser:'Admin',
                                Status:'Active'
                                },{
                                    ID:10,
                                    LineName: 'F1',
                                    FromDate: '01/01/2022',
                                    ToDate: ' 01/02/2022',
                                    DeliveryDate: ' 05/02/2022',
                                    FEPO: '2KLLTHE5CO3',
                                    StylePlaning: 'LWWC5TT',
                                    COMB: 'LWWC5TT',
                                    Quantity:'500',
                                    SMV:'21.9',
                                    BUY: 'WI22',
                                    ProducCode: 'LLPT-0004',
                                    CreateDate: '1964/03/16',
                                    CreateUser: 'Admin',
                                    LastUpdateDate: '2022/01/02',
                                    LastUpdateUser:'Admin',
                                    Status:'Active'
                                    },{
                                        ID:11,
                                        LineName: 'F1',
                                        FromDate: '01/01/2022',
                                        ToDate: ' 01/02/2022',
                                        DeliveryDate: ' 05/02/2022',
                                        FEPO: '2KLLTHE5CO3',
                                        StylePlaning: 'LWWC5TT',
                                        COMB: 'LWWC5TT',
                                        Quantity:'500',
                                        SMV:'21.9',
                                        BUY: 'WI22',
                                        ProducCode: 'LLPT-0004',
                                        CreateDate: '1964/03/16',
                                        CreateUser: 'Admin',
                                        LastUpdateDate: '2022/01/02',
                                        LastUpdateUser:'Admin',
                                        Status:'Active'
                                        },{
                                            ID:12,
                                            LineName: 'F1',
                                            FromDate: '01/01/2022',
                                            ToDate: ' 01/02/2022',
                                            DeliveryDate: ' 05/02/2022',
                                            FEPO: '2KLLTHE5CO3',
                                            StylePlaning: 'LWWC5TT',
                                            COMB: 'LWWC5TT',
                                            Quantity:'500',
                                            SMV:'21.9',
                                            BUY: 'WI22',
                                            ProducCode: 'LLPT-0004',
                                            CreateDate: '1964/03/16',
                                            CreateUser: 'Admin',
                                            LastUpdateDate: '2022/01/02',
                                            LastUpdateUser:'Admin',
                                            Status:'Active'
                                            },{
                                                ID:13,
                                                LineName: 'F1',
                                                FromDate: '01/01/2022',
                                                ToDate: ' 01/02/2022',
                                                DeliveryDate: ' 05/02/2022',
                                                FEPO: '2KLLTHE5CO3',
                                                StylePlaning: 'LWWC5TT',
                                                COMB: 'LWWC5TT',
                                                Quantity:'500',
                                                SMV:'21.9',
                                                BUY: 'WI22',
                                                ProducCode: 'LLPT-0004',
                                                CreateDate: '1964/03/16',
                                                CreateUser: 'Admin',
                                                LastUpdateDate: '2022/01/02',
                                                LastUpdateUser:'Admin',
                                                Status:'Active'
                                                },{
                                                    ID:14,
                                                    LineName: 'F1',
                                                    FromDate: '01/01/2022',
                                                    ToDate: ' 01/02/2022',
                                                    DeliveryDate: ' 05/02/2022',
                                                    FEPO: '2KLLTHE5CO3',
                                                    StylePlaning: 'LWWC5TT',
                                                    COMB: 'LWWC5TT',
                                                    Quantity:'500',
                                                    SMV:'21.9',
                                                    BUY: 'WI22',
                                                    ProducCode: 'LLPT-0004',
                                                    CreateDate: '1964/03/16',
                                                    CreateUser: 'Admin',
                                                    LastUpdateDate: '2022/01/02',
                                                    LastUpdateUser:'Admin',
                                                    Status:'Active'
                                                    },{
                                                        ID:15,
                                                        LineName: 'F1',
                                                        FromDate: '01/01/2022',
                                                        ToDate: ' 01/02/2022',
                                                        DeliveryDate: ' 05/02/2022',
                                                        FEPO: '2KLLTHE5CO3',
                                                        StylePlaning: 'LWWC5TT',
                                                        COMB: 'LWWC5TT',
                                                        Quantity:'500',
                                                        SMV:'21.9',
                                                        BUY: 'WI22',
                                                        ProducCode: 'LLPT-0004',
                                                        CreateDate: '1964/03/16',
                                                        CreateUser: 'Admin',
                                                        LastUpdateDate: '2022/01/02',
                                                        LastUpdateUser:'Admin',
                                                        Status:'Active'
                                                        },{
                                                            ID:16,
                                                            LineName: 'F1',
                                                            FromDate: '01/01/2022',
                                                            ToDate: ' 01/02/2022',
                                                            DeliveryDate: ' 05/02/2022',
                                                            FEPO: '2KLLTHE5CO3',
                                                            StylePlaning: 'LWWC5TT',
                                                            COMB: 'LWWC5TT',
                                                            Quantity:'500',
                                                            SMV:'21.9',
                                                            BUY: 'WI22',
                                                            ProducCode: 'LLPT-0004',
                                                            CreateDate: '1964/03/16',
                                                            CreateUser: 'Admin',
                                                            LastUpdateDate: '2022/01/02',
                                                            LastUpdateUser:'Admin',
                                                            Status:'Active'
                                                            }
]

export default function HomeDetail() {
    const {state} = useLocation();// chứa thông tin bắt được từ navigate
    useEffect(() => {
        console.log(state);//check xem thông tin
    }, [])
    
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Planing Detail</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
        <DataGrid
          id="gridContainer"
          dataSource={datasource}
          keyExpr="ID"
          allowColumnReordering={true}
          showBorders={true}>

          <Paging enabled={true} />
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true} />
          <Column dataField="ID" caption={"STT"}/>
          <Column dataField="LineName"/>
          <Column dataField="FromDate" dataType="date" />
          <Column dataField="ToDate" dataType="date"/>
          <Column dataField="DeliveryDate" dataType="date" />
          <Column dataField="StylePlaning" caption={"Style"}  />
          <Column dataField="COMB"  />
          <Column dataField="Quantity"  />
          <Column dataField="SMV"  />
          <Column dataField="BUY"  />
          <Column dataField="ProductCode"  />
          <Column dataField="CreateUser" />
          <Column dataField="LastUpdateDate"  />
          <Column dataField="LastUpdateUser" />
          <Column dataField="Status" width={130} />
        </DataGrid>
        </div>
      </div>
    </React.Fragment>
)}
