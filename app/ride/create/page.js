import CreateRide from "./create-ride";

export default function Page() {
  async function submitRide() {
    "use server";
    console.log("creating a new ride");
  }
  return (
    <div className="p-2 flex h-dvh items-center justify-center">
      <div>
        <h1 className="font-medium text-lg">create a new ride</h1>
        <CreateRide submitRide={submitRide} />
      </div>
    </div>
  );
}
