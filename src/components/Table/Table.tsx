import React, { useEffect, useState } from "react";
import "./Table.css";

export interface TableColumn<T = any> {
  title: string;
  dataIndex: keyof T;
  render?: (data: T) => void;
}

interface TableProps {
  columns: TableColumn[];
  data: any;
  hideSearch?: boolean;
  hidePageination?: boolean;
}

const searching = (data: any[], searchText: string) => {
  const newData = data.map((data) => JSON.stringify(data));
  const filterData = newData.filter((data) => data.includes(searchText));
  const normalizeData = filterData.map((data) => JSON.parse(data));

  return normalizeData;
};

const Table: React.FC<TableProps> = (props) => {
  const [tableData, setTableData] = useState<any[][]>([]);
  const [tablePerPage, setTablePerPage] = useState<number>(5);
  const [tableCurrentPage, setTableCurrentPage] = useState<number>(1);

  const initiateTable = (data: any[]) => {
    const baseData = data;
    const result: any[][] = [];
    while (baseData.length > 0) {
      result.push(baseData.splice(0, tablePerPage));
    }

    setTableData(result);
  };

  useEffect(() => {
    if (props.data.length === 0) return;

    initiateTable([...props.data]);
  }, [props.data, tablePerPage]);

  const search = (searchText: string) => {
    const result = searching(props.data, searchText);
    initiateTable(result);
  };

  return (
    <>
      {!props.hideSearch ? (
        <div className="search">
          {/* ------------ search 1 ------------ */}
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            placeholder="Pencarian Barang"
          />
          {/* ------------ search 2 ------------ */}
          {/* <input type="text" onChange={(e) => setTableSearch(e.target.value)} /> */}
          {/* <button onClick={() => search(tableSearch)}> cari</button> */}
        </div>
      ) : null}
      <table cellSpacing="0">
        <thead>
          <tr>
            {props.columns.map((column) => {
              return <td>{column.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0
            ? tableData[tableCurrentPage - 1].map((d) => {
                return (
                  <tr>
                    {props.columns.map((column) => {
                      let renderedContent = d[column.dataIndex];
                      if (column.render) {
                        renderedContent = column.render(d);
                      }
                      return <td>{renderedContent}</td>;
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      {/* ----------------------------- PAGEINATION -------------------------------- */}
      {!props.hidePageination ? (
        <div className="pageination">
          {/* ----------- Button Prev --------- */}
          {tableCurrentPage > 1 ? (
            <button
              className="btn-prev"
              onClick={() => setTableCurrentPage(tableCurrentPage - 1)}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          ) : null}

          {/* ------------ PAGE 1 -------- */}
          {/* {tableData.length > 0
          ? Array(tableData.length)
              .fill(0)
              .map((value, index) => {
                return (
                  <button
                    onClick={() => setTableCurrentPage(index + 1)}
                    key={index}
                  >
                    {index + 1}
                  </button>
                );
              })
          : null} */}
          {/* ---------- PAGE 2 ------------*/}
          <select
            className="page"
            value={tableCurrentPage}
            onChange={(e) => setTableCurrentPage(Number(e.target.value))}
          >
            {tableData.length > 0
              ? Array(tableData.length)
                  .fill(0)
                  .map((value, index) => {
                    return <option value={index + 1}>{index + 1}</option>;
                  })
              : null}
          </select>

          {/* ----------- Button Next --------- */}
          {tableCurrentPage < tableData.length ? (
            <button
              className="btn-next"
              onClick={() => setTableCurrentPage(tableCurrentPage + 1)}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          ) : null}

          {/* ---------- Per Page ------- */}
          <select
            className="per-page"
            onChange={(e) => setTablePerPage(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">20</option>
          </select>
        </div>
      ) : null}
    </>
  );
};

export default Table;
