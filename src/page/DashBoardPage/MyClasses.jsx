import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Edit2, X } from "lucide-react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/classes?email=${user?.email}`).then(response => {
      setClasses(response.data);
    });
  }, [user?.email, axiosSecure]);

  return (
    <div className="w-full p-8">
      <SectionTitle title="my classes" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full">
          {/* head */}
          <thead className="uppercase  ">
            <tr>
              <th></th>
              <th>Img</th>
              <th>class name</th>
              <th>price</th>
              <th>total seats</th>
              <th>total enrolled</th>
              <th>status</th>
              <th>feedback</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {classes.map((myClass, index) => (
              <tr key={myClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={myClass.image} />
                    </div>
                  </div>
                </td>
                <td>{myClass.className}</td>
                <td>${myClass.price}</td>
                <td>{myClass.seats}</td>
                <td>0</td>
                <td>
                  <span
                    className={` ${
                      myClass.status === "pending" &&
                      "bg-yellow-300  text-gray-800"
                    }  ${
                      myClass.status === "approve" &&
                      "bg-green-300  text-gray-800"
                    }  ${
                      myClass.status === "denied" && "bg-red-600 text-white"
                    } p-2 rounded-lg`}
                  >
                    {myClass.status}
                  </span>
                </td>
                <td>
                  {myClass?.feedback ? (
                    <button className="btn btn-sm">show </button>
                  ) : (
                    "no feedback"
                  )}
                </td>
                <td>
                  <label htmlFor="my_modal_7" className="btn btn-circle">
                    <Edit2 />
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <form>
                        <div className="md:flex  gap-5 space-y-5 md:space-y-0">
                          {/* CLASS NAME */}
                          <div className="form-control">
                            <label className="label">
                              <span className="text-base font-semibold">
                                Class Name
                              </span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="class name"
                              className="input input-bordered"
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="text-base font-semibold">
                                Class Name
                              </span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="class name"
                              className="input input-bordered"
                            />
                          </div>
                        </div>

                        <div className="md:flex gap-5 space-y-5 md:space-y-0">
                          {/* PRICE */}
                          <div className="form-control ">
                            <label className="label">
                              <span className="text-base font-semibold ">
                                Price*
                              </span>
                            </label>
                            <input
                              type="number"
                              required
                              placeholder="price"
                              className="input input-bordered"
                            />
                          </div>

                          {/* SEATS */}
                          <div className="">
                            <label className="label">
                              <span className="text-base font-semibold ">
                                Seats*
                              </span>
                            </label>
                            <input
                              type="number"
                              required
                              placeholder="available seats"
                              className="input input-bordered"
                            />
                          </div>
                        </div>

                        {/* ADD ITEM BUTTON */}
                        <div className="form-control">
                          <button
                            type="submit"
                            className="btn btn-primary mt-5 md:w-1/2 w-full mx-auto border-none outline-none "
                          >
                            Add Item
                            {/* <Send className="ml-3" /> */}
                          </button>
                        </div>
                      </form>

                      <label
                        className="absolute top-2 z-20 right-2 modal-backdrop btn btn-circle w-12 p-0 rounded-full border-none outline-none  text-white ml-auto "
                        htmlFor="my_modal_7"
                      >
                        <X />
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
