import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../Hook/useAuth";
import { Send } from "lucide-react";

const AddClass = () => {
  const { user } = useAuth();
  const { register } = useForm();

  return (
    <div className="w-full p-8 ">
      <SectionTitle title="Add Class" />
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 p-8 rounded-lg"
      >
        <div className="flex gap-5">
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
              placeholder="Recipe name"
              {...register("name")}
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="flex  gap-5">
          {/* CLASS NAME */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="class name"
              {...register("className")}
              className="input input-bordered"
            />
          </div>

          {/* CLASS IMAGE */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold">Upload Image</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input text-white  file-input-bordered w-full max-w-xs "
            />
          </div>
        </div>

        <div className="flex gap-5">
          {/*PRICE */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold ">Price*</span>
            </label>
            <input
              type="number"
              required
              placeholder="price"
              {...register("price")}
              className="input input-bordered"
            />
          </div>

          {/*SEATS*/}
          <div className="form-control flex-1">
            <label className="label">
              <span className="text-base font-semibold ">Seats*</span>
            </label>
            <input
              type="number"
              required
              placeholder="available seats"
              {...register("seats")}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* ADD ITEM BUTTON */}
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-primary  w-1/2 mx-auto border-none outline-none "
          >
            Add Item
            <Send className="ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
