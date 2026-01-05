import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcommingBill from "../components/Fragments/CardUpcommingBill";
import CardRecentransactions from "../components/Fragments/CardRecentransactions";
import CardStatistics from "../components/Fragments/CardStatistics";
import CardExpensesBreakdown from "../components/Fragments/CardExpensesBreakdown";
import {
  bills,
  expensesBreakdowns,
  balances,
  goals,
  transactions,
  expensesStatistics,
} from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";

function dashboard() {
  const [goals, setGoals] = useState({});
  const {logout} = useContext(AuthContext);
  

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  console.log(goals);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>
        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>
        <div className="sm:col-span-4">
          <CardUpcommingBill data={bills} />
        </div>

        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentransactions data={transactions} />
        </div>
        <div className="sm:col-span-8">
          <CardStatistics data={expensesStatistics} />
        </div>
        <div className="sm:col-span-8">
          <CardExpensesBreakdown data={expensesBreakdowns} />
        </div>
      </div>
    </MainLayout>
  );
}

export default dashboard;
