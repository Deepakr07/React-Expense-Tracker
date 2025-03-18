import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Pagination from '@mui/material/Pagination'
import TransactionList from "../../Components/TransactionList"
import SnackBar from "@/Components/SnackBar"
import { getExpenses, updateExpense } from "@/Actions/expenseActions"

export default function HistoryPage() {
  const [snackBarOpen, setSnackBarOpen] = useState({ open: false, type: "Delete" })
  const [page, setPage] = useState(1)
  const limit = 7


  const { data, isLoading } = useQuery({
    queryKey: ['Transaction History', page, limit],
    queryFn: async () => {
      const response = await getExpenses(page, limit, null)
      if (response.data.length === 0 && page > 1) {
        setPage((prev) => prev - 1)
      }
      
      return response
    },
  })

  const paginationData = data?.pageination || {}
  const paginationPageDetails = data?.pageDetails || {}
  const totalPages = paginationData.totalPages || 1
  const totalItems = paginationData.totalItems
  const lowerLimit = paginationPageDetails.lowerLimit
  const upperLimit = paginationPageDetails.upperLimit
  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  function handleSnackBarClose() {
    setSnackBarOpen(false)
  }

  const snackBarContent = snackBarOpen.type === "Delete" 
    ? "Transaction Deleted Successfully ✓" 
    : "Transaction Updated Successfully ✓"

  const snackBarColor = snackBarOpen.type === "Delete" 
    ? "#EF4848" 
    : "#9333EA"

  return (
    <div className="container">
      <TransactionList
        incomeExpenseTransaction={false}
        buttonOnClick={updateExpense}
        transactions={data?.data}
        setSnackBarOpen={setSnackBarOpen}
        isLoading={isLoading}
        title="Transaction History"
      />
      
      {(totalPages >= 1 ) && (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          margin: '15px 0', 
          padding: '10px' 
        }}>
          <Pagination 
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="medium"
          />
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280', 
            marginTop: '8px' 
          }}>
            Page {page} of {totalPages} ({lowerLimit} - {upperLimit} of {totalItems})
          </div>
        </div>
      )}
      
      <SnackBar
        display={snackBarOpen.open}
        snackBarColor={snackBarColor}
        snackBarContent={snackBarContent}
        handleClose={handleSnackBarClose}
      />
    </div>
  );
}
