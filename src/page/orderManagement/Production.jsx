import React from "react";
import { Table } from "antd";
import { useGetAllOrdersQuery } from "../redux/api/ordersApi";
import { columns } from "./constant";

export const Production = () => {
  const { data: orders, isLoading } = useGetAllOrdersQuery({
    page: 1,
    status: "In-Production",
  });
  return (
    <Table
      dataSource={orders?.data?.data}
      columns={columns}
      pagination={{
        pageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20"],
      }}
      bordered
      style={{ marginTop: "20px" }}
    />
  );
};
