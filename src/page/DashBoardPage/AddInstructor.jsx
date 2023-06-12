import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../Hook/useAuth";
import { Send } from "lucide-react";
import axios from "axios";
import ShowToast from "../../utility/ShowToast";
import { TagsInput } from "react-tag-input-component";
import { useEffect, useState } from "react";

const IMAGE_HOSTING_TOKEN = import.meta.env.VITE_Image_Upload_Token;

const AddInstructor = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [selected, setSelected] = useState([]);
  const [instructor, setInstructor] = useState([]);

  const onSubmit = async data => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_TOKEN}`;

    try {
      // if instructor profile already updated
      if (instructor) {
        data.category = data.category || instructor.category;
        const response = await axios.patch(
          `http://localhost:3001/update-instructor/${user.email}`,
          { category: data.category, classes: selected }
        );
        console.log(response.data);
      } else {
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
          data.classes = selected;

          const response = await axios.post(
            "http://localhost:3001/add-instructor",
            data
          );
          if (response.data.insertedId) {
            ShowToast("success", "inserted successful");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/is-new-instructor/${user?.email}`)
      .then(res => {
        setInstructor(res.data);
        setSelected(res.data.classes);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user?.email]);

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

          {/* CLASS IMAGE */}
          {instructor ? (
            ""
          ) : (
            <div className="form-control flex-1">
              <label className="label">
                <span className="text-base font-semibold">Upload Image</span>
              </label>
              <input
                type="file"
                {...register("image")}
                accept="image/*"
                className="file-input text-white  file-input-bordered w-full  "
                required
              />
            </div>
          )}
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
