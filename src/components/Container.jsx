import Dashboard from "./Dashboard";

function Container() {
  let content = <Dashboard />;
  return (
    <>
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{content}</div>
      </div>
    </>
  );
}

export default Container;
