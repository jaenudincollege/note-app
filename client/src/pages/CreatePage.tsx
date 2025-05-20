import Input from "../components/Input";
import Button from "../components/Button";

const CreatePage = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-20">
        <h1 className="text-center text-4xl font-bold mb-40">
          Create new note
        </h1>
        <form className="space-y-4">
          <Input type="text" label="Title" />
          <Input type="textarea" label="Content" />
          <Button type="submit">Create Note</Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
