import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { Send } from "lucide-react";
import ShowToast from "../../utility/ShowToast";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const IMAGE_HOSTING_TOKEN = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = async data => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_TOKEN}`;

    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imageBBresponse = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imageBB = await imageBBresponse.json();

      if (imageBB.success) {
        const imageURL = imageBB.data.display_url;
        data.image = imageURL;
        data.price = parseFloat(data.price);
        data.seats = parseFloat(data.seats);
        data.status = "pending";

        const response = await axiosSecure.post("/classes", data);
        if (response.data.insertedId) {
          reset();
          ShowToast("success", "inserted successful");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full p-8 ">
      <SectionTitle title="Add Class" />
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

        <div className="md:flex gap-5 space-y-5 md:space-y-0">
          {/* PRICE */}
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

          {/* SEATS */}
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
            className="btn btn-primary  md:w-1/2 w-full mx-auto border-none outline-none "
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
