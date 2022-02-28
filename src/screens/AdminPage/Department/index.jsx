
import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
const columns = [
   {
      name: "name",
      label: "Name",
      options: {
         filter: true,
         sort: true,
      }
   },
   {
      name: "company",
      label: "Bộ phận",
      options: {
         filter: true,
         sort: false,
      }
   },
];

const data = [
   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
   filterType: 'checkbox',
};
const Department = () => {
   return (
      <Fragment>
         <MUIDataTable
            title="Danh sách phòng ban"
            data={data}
            columns={columns}
            options={options}
         />
      </Fragment>
   )
}
export default Department