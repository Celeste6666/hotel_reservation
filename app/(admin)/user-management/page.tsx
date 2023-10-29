import Stat from "./components/Stat";
import UserTable from "./components/UserTable";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-5 rounded-lg border p-5 min-h-[600px] relative user-table">
      <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Stat mainNumber={8} desc="hotel" />
        <Stat mainNumber={8} desc="user" />
        <Stat mainNumber={8} desc="active" />
        <Stat mainNumber={8} desc="total" />
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  );
};

export default page;
