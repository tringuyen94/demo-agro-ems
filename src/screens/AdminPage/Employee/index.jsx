
import MUIDataTable from "mui-datatables";
const columns = [
   {
      name: "fullName",
      label: "Họ và tên",
      options: {
         filter: true,
         sort: true,
      }
   },
   {
      name: "dateOfBirth",
      label: "Ngày sinh",
      options: {
         filter: true,
         sort: false,
      }
   },
   {
      name: "city",
      label: "Nơi sinh",
      options: {
         filter: true,
         sort: false,
      }
   },
   {
      name: "address",
      label: "Địa chỉ",
      options: {
         filter: true,
         sort: false,
      }
   },
   {
      name: "department",
      label: "Phòng ban",
      options: {
         filter: true,
         sort: false,
      }
   },
   {
      name: "department",
      label: "Chức vụ",
      options: {
         filter: true,
         sort: false,
      }
   },
];

const data = [
   {}
];

const options = {
   filterType: 'checkbox',
};


const Employee = () => {
   document.title='Quản lý nhân viên'
   return (
      <MUIDataTable
         title="Danh sách nhân viên"
         data={data}
         columns={columns}
         options={options}
      />
   )
}



export default Employee