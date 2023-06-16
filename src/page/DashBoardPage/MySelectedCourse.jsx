import SectionTitle from "../../components/SectionTitle";
import Swal from "sweetalert2";
import ShowToast from "../../utility/ShowToast";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../Hook/useTitle";
import { Link } from "react-router-dom";

const GetSelectedCourse = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectedCourse = [] } = useQuery({
    queryKey: ["selectedCourse", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-course/${user?.email}`);
      return res.data;
    },
  });

  return [selectedCourse, refetch];
};

const MySelectedCourse = () => {
  useTitle("Selected Classes");
  const [selectedCourse, refetch] = GetSelectedCourse();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/my-course/${id}`);
        if (data.deletedCount > 0) {
          ShowToast("success", "deleted course");
          refetch();
        }
      }
    });
  };

  return (
    <div className="w-full p-8">
      <SectionTitle title="My Selected Course" />

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
              <th>payment</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedCourse?.map((myCourse, index) => {
              const { _id, image, price, seat, courseName, courseId } =
                myCourse;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                      </div>
                    </div>
                  </td>
                  <td>{courseName}</td>
                  <td>${price}</td>
                  <td>{seat}</td>
                  <td>
                    <Link to={`/dashboard/payment/${courseId}`}>
                      <button className="btn btn-primary">Pay</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-warning"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedCourse;
