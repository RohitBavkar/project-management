import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onSaveClick }) {
  const title = useRef();
  const dueDate = useRef();
  const description = useRef();
  const modal = useRef();

  function handleSaveclick() {
    const enteredTitle = title.current.value;
    const enteredDueDate = dueDate.current.value;
    const enteredDescription = description.current.value;

    //validations
    if (
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onSaveClick({
      title: enteredTitle,
      dueDate: enteredDueDate,
      description: enteredDescription,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <p className="text-stone-700 mb-4">
          Fields marked with <span className="text-red-600">*</span> are
          mandatory and can not be blank.
        </p>
      </Modal>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden ">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    Add New Project
                  </h2>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Form --> */}
              <Input type="text" ref={title} label="Title"></Input>
              <Input type="date" ref={dueDate} label="Due Date"></Input>
              <Input ref={description} label="Description" textarea></Input>
              {/* <!-- End Form --> */}

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                <div>Remove this div</div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                      href="#"
                    >
                      Cancel
                    </a>

                    <a
                      onClick={handleSaveclick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Save
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProject;
