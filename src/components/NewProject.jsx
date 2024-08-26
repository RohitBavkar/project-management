import Input from "./Input";
function NewProject() {
  return (
    <section className="">
      <menu>
        <li>
          <button>Save</button>
        </li>
        <li>
          <button>Cancel</button>
        </li>
      </menu>
      <div>
        <Input label="Title"></Input>
        <Input label="Description" textarea></Input>
        <Input label="Due Date"></Input>
      </div>
    </section>
  );
}
export default NewProject;
