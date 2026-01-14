import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcommingBill from "../components/Fragments/CardUpcommingBill";
import CardRecentransactions from "../components/Fragments/CardRecentransactions";
import CardStatistics from "../components/Fragments/CardStatistics";
import CardExpensesBreakdown from "../components/Fragments/CardExpensesBreakdown";

import { goalService, expensesService } from "../services/dataService";

import {
  bills,
  expensesBreakdowns,
  balances,
  goals,
  transactions,
  expensesStatistics,
} from "../data";

import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function dashboard() {
  const [goals, setGoals] = useState({});
  const [expenses, setExpenses] = useState([]);

  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "eror",
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      console.log("ISI EXPENSES DARI API:", data);
      setExpenses(data);
    } catch (err) {
      console.log("ERROR EXPENSES:", err);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchExpenses();
  }, []);

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

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default dashboard;
