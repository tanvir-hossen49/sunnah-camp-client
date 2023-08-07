import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyEnrolledClasses = () => {
  const [payment, setPayment] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axiosSecure.get("/payment");
        setPayment(response.data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchPaymentData();
  }, [axiosSecure]);

  return (
    <div className="w-full p-8">
      <SectionTitle title="Payment History" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full  text-lg">
          {/* head */}
          <thead className="uppercase  ">
            <tr>
              <th>sl</th>
              <th>img</th>
              <th>class name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((myCourse, index) => {
              const { _id, className, price, image } = myCourse;
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
                  <td>{className}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
