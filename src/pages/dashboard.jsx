import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcommingBill from "../components/Fragments/CardUpcommingBill";
import CardRecentransactions from "../components/Fragments/CardRecentransactions";
import CardStatistics from "../components/Fragments/CardStatistics";
import CardExpensesBreakdown from "../components/Fragments/CardExpensesBreakdown";
import { bills, expensesStatistics, transactions } from "../data";

function dashboard() {
  console.log(transactions);
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
        <div className="sm:col-span-4">
          <CardBalance />
        </div>
        <div className="sm:col-span-4">
          <CardGoal />
        </div>
        <div className="sm:col-span-4">
          <CardUpcommingBill data={bills} />
        </div>
      </div>
      <div className="sm:col-span-4 sm:row-span-2">
        <CardRecentransactions data={transactions} />
      </div>
      <div className="sm:col-span-8">
        <CardStatistics />
      </div>
      <div className="sm:col-span-8">
        <CardExpensesBreakdown data={expensesStatistics} />
      </div>
    </MainLayout>
  );
}

export default dashboard;
