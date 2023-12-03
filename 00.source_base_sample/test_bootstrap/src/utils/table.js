import $ from "jquery";

export const JCTColumns = {
  columnRows: [
    [
      { name: "Seq", key: "seq", rowSpan: "2", colSpan: "" },
      { name: `Cont No`, key: "contNo", rowSpan: "2", colSpan: "" },
      { name: `JOB Type`, key: "jobType", rowSpan: "2", colSpan: "" },
      {
        name: `Job Cycle Time Chart`,
        key: "jobCycleTimeChart",
        rowSpan: "2",
        colSpan: "",
        width: "60%",
      },
      { name: `ITV`, key: "itv", rowSpan: "", colSpan: "2" },
      { name: `QC`, key: "qc", rowSpan: "", colSpan: "1" },
      { name: `YC`, key: "yc", rowSpan: "", colSpan: "1" },
      { name: `Total`, key: "total", rowSpan: "", colSpan: "1" },
    ],
    [
      {
        name: `Working Time`,
        key: "workingTime",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
      {
        name: `Waiting Time`,
        key: "waitingTime",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
      {
        name: `Working Time`,
        key: "workingTime",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
      {
        name: `Working Time`,
        key: "workingTime",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
      {
        name: `Working Time`,
        key: "workingTime",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
    ],
  ],
};

export const JCDTColumns = {
  columnRows: [
    [
      { name: "Seq", key: "seq", rowSpan: "2", colSpan: "" },
      { name: `Event Time`, key: "eventTime", rowSpan: "2", colSpan: "" },
      { name: `Label`, key: "label", rowSpan: "2", colSpan: "" },
      { name: `ITV Status`, key: "itvStatus", rowSpan: "", colSpan: "2" },
      { name: `QC Status`, key: "qcStatus", rowSpan: "2", colSpan: "" },
      { name: `YC Status`, key: "ycStatus", rowSpan: "2", colSpan: "" },
    ],
    [
      {
        name: `Working`,
        key: "working",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
      {
        name: `Waiting`,
        key: "waiting",
        rowSpan: "",
        colSpan: "",
        subColumn: true,
      },
    ],
  ],
};

export const PCT = (p, t) => {
  return (p / t) * 100;
};

export const getColor = (color) => {
  switch (color) {
    case "1":
      return "#2a9d8f"; // move
    case "2":
      return "#f4a261 "; // waiting
    case "3":
      return "#264653"; // working
    case "4":
      return "#e9c46a"; // working
    default:
      return "#2a9d8f";
  }
};

export const renderEventCallback = (
  wrapper,
  tableApi,
  settings,
  onItemClick,
  setTableApi
) => {
  console.log("renderCallback", wrapper, tableApi, settings);
  setTableApi(tableApi);
  $(wrapper).delegate(".cell-hook", "click", function () {
    let parent = $(this).parent("td");
    console.log("Cell Data : ", tableApi.cell(parent).data());
    console.log("Row Data : ", tableApi.row(parent).data());
    onItemClick(tableApi.row(parent).data());
  });
};
