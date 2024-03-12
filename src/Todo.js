import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
      backgroundColor: "#f0f0f0", // Background color for header cells
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "16px", // Font size for header cells
      fontWeight: "bold",
      backgroundColor: "#166291", // Background color fo
      textAlign: "center",
      color: "white",
      whiteSpace: "nowrap",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "16px",
      fontWeight: "normal",
    },
  },
};

function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      wrap: true,
      maxWidth: "100px",
      center: true,
    },

    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Completed",
      selector: (row) => (row.completed ? "Completed" : "Not Completed"),
      sortable: true,
    },
  ];

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Could not fetch todos: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []); // The empty array means this effect runs once after the initial render

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 ">
        <div>
          <h1 className="text-xl md:text-7xl font-bold flex items-center">
            L
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="animate-spin"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
            </svg>{" "}
            ading . . .
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="px-5 p-5">
          <h2 class="font-bold text-3xl">
            To <span class="bg-[#f84525] text-white px-2 rounded-md">Dos</span>
          </h2>
        </div>
        <div></div>
        <div className="px-5 p-5">
          <div className="relative hidden sm:block flex-shrink flex-grow-0">
            <input
              type="text"
              className="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
           





          </div>
        </div>
      </div>

      <div>
        <DataTable
          columns={columns}
          data={filteredTodos}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationTotalRows={todos ? todos.length : 0}
          paginationComponentOptions={{
            rowsPerPageText: "Rows per page:",
            rangeSeparatorText: "of",
            noRowsPerPage: false,
            selectAllRowsItem: true,
            selectAllRowsItemText: "All",
          }}
          // selectableRows // Enable row selection

          customStyles={customStyles} // Handle selected rows change
        />
      </div>
    </div>
  );
}

export default Todos;
