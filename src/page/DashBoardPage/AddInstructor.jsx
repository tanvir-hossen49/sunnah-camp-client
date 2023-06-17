import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { Send } from "lucide-react";
import ShowToast from "../../utility/ShowToast";
import { TagsInput } from "react-tag-input-component";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useTitle from "../../Hook/useTitle";

const AddInstructor = () => {
  useTitle("Update Instructor");
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [selected, setSelected] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async data => {
    try {
      // if instructor profile already updated
      if (instructor) {
        data.category = data?.category || instructor?.category;
        const response = await axiosSecure.patch(
          `/update-instructor/${user?.email}`,
          { category: data.category, classes: selected }
        );

        if (response.data.modifiedCount > 0) {
          ShowToast("success", "updated successful");
        }
      } else {
        data.image = user?.photoURL;
        data.classes = selected;

        const response = await axiosSecure.post("/add-instructor", data);
        if (response.data.insertedId) {
          ShowToast("success", "inserted successful");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosSecure
      .get(`/is-new-instructor/${user?.email}`)
      .then(res => {
        setInstructor(res.data);
        setSelected(res.data.classes);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user, axiosSecure]);

  return (
    <div className="w-full p-8 ">
      <SectionTitle title="Update your info" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 p-8 rounded-lg"
      >
        <div className="md:flex  gap-5 space-y-5 md:space-y-0">
          {/*INSTRUCTOR NAME */}
          <div className="form-control flex-1">
            <label className="label">
              <span className=" font-semibold ">Instructor name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              required
              readOnly
              placeholder="instructor name"
              {...register("instructorName")}
              className="input input-bordered "
            />
          </div>

          {/*INSTRUCTOR EMAIL */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold ">Instructor Email</span>
            </label>
            <input
              type="email"
              required
              value={user?.email}
              readOnly
              placeholder="email name"
              {...register("email")}
              className="input input-bordered "
            />
          </div>
        </div>

        <div className="md:flex  gap-5 space-y-5 md:space-y-0">
          {/* CATEGORY */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold ">Category</span>
            </label>
            <input
              type="text"
              required
              placeholder="category"
              defaultValue={instructor?.category || ""}
              {...register("category")}
              className="input input-bordered"
            />
          </div>
        </div>
        {/* CLASS NAME */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="text-base font-semibold">Classes</span>
          </label>

          <TagsInput
            value={selected}
            onChange={setSelected}
            name="fruits"
            placeHolder="your classes"
            classNames="input"
          />
        </div>

        {/* ADD ITEM BUTTON */}
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-primary  md:w-1/2 w-full mx-auto border-none outline-none "
          >
            {instructor ? "Update Item" : "Add item"}
            <Send className="ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstructor;
