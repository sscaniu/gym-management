"use client";
import React from "react";
import moment from "moment";
import Image from "next/image";
import DataTable, { Col } from "@/app/components/shared/DataTable";
import Button from "@/app/components/shared/Button";

interface Transaction {
  id: number;
  name: string;
  location: string;
  payment_method: string;
  payment_date: string;
  payment_amount: number;
}

const Transactions = () => {
  const cols = [
    { id: "name", label: "Name", sortable: true },
    { id: "location", label: "Location", searchable: true },
    { id: "payment_method", label: "Payment Method", searchable: true },
    { id: "payment_date", label: "Payment Date", sortable: true },
    { id: "payment_amount", label: "Payment Amount", sortable: true },
    { id: "action", label: "" },
  ];

  const rows: Transaction[] = [
    {
      id: 1,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 2,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 3,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 4,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 5,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 6,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 7,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 8,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 9,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 10,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
    {
      id: 11,
      name: "Emilia Jackson ",
      location: "Queen’s Gym",
      payment_method: "Debit Card",
      payment_date: "10/03/2023 11:43 AM",
      payment_amount: 89.32,
    },
  ];

  const renderRow = (row: Transaction) => {
    return (
      <>
        <Col>{row.name}</Col>
        <Col>{row.location}</Col>
        <Col>{row.payment_method}</Col>
        <Col>
          <div className="grid">
            <span className="leading-none">
              {moment(row.payment_date).format("MM/DD/YYYY")}
            </span>
            <span className="text-xs leading-none">
              {moment(row.payment_date).format("hh:mm A")}
            </span>
          </div>
        </Col>
        <Col>${row.payment_amount}</Col>
        <Col className="text-right">
          <Button
            size="sm"
            variant="outlined"
            color="white"
            href={`/dashboard/clients/${row.id}`}
          >
            Profile
          </Button>
        </Col>
      </>
    );
  };

  return <DataTable cols={cols} rows={rows} renderRow={renderRow} pagination />;
};

export default Transactions;
