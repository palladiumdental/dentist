import React, { useState } from "react";
import { TPriceType } from "../../types/price";
import { useGetData, addData, deleteData, editData } from "../../firebase/crud";
import Spinner from "../ui/spinner";

type TEditableService = TPriceType & { isEditing?: boolean };

const EditPriceList: React.FC = () => {
  const { data, loading, error } = useGetData<TPriceType>("prices");
  const [priceList, setPriceList] = useState<TEditableService[]>(data || []);
  const [newRow, setNewRow] = useState(false);
  const [newService, setNewService] = useState({
    service: "",
    price: "",
  });

  React.useEffect(() => {
    const updatedPriceList = data.map((item) => ({
      ...item,
      isEditing: false,
      serviceEdit: item.service,
      priceEdit: item.price,
    }));
    setPriceList(updatedPriceList);
  }, [data]);

  const handleAddNewRow = () => {
    setNewRow(true);
  };

  const hideNewRow = () => {
    setNewRow(false);
    setNewService({ service: "", price: "" });
  };

  const handleSaveNewRow = () => {
    if (newService.service && newService.price) {
      addData("prices", newService);
      hideNewRow();
    }
  };

  const handleEditRow = (id: any) => {
    setPriceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleCancelEdit = (id: any) => {
    setPriceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const handleSaveEditRow = (id: any, service: any) => {
    editData(id, "prices", service);

    setPriceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  if (loading) return <Spinner show={loading} />;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8" style={{ textAlign: "left" }}>
              <h2>Edit Price List</h2>
            </div>
            <div className="col-sm-4" style={{ textAlign: "right" }}>
              <button
                className="btn btn-primary rounded-pill add-new  align-items-center"
                onClick={handleAddNewRow}
                disabled={newRow}
              >
                <i className="fa fa-plus me-2"></i> Add New
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map((service: TEditableService) => (
              <tr key={service.id}>
                {service.isEditing ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={service.service}
                        onChange={(e) => (service.service = e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={service.price}
                        onChange={(e) => (service.price = e.target.value)}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => handleSaveEditRow(service.id, service)}
                      >
                        <i
                          className="fa fa-check"
                          style={{ color: "#27C46B" }}
                        ></i>
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => handleCancelEdit(service.id)}
                      >
                        <i
                          className="fas fa-times"
                          style={{ color: "#E34724" }}
                        ></i>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{service.service}</td>
                    <td>{service.price}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning btn-sm me-2"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                      >
                        <i
                          className="fas fa-pencil-alt"
                          style={{ color: "#FFC107" }}
                          onClick={() => handleEditRow(service.id)}
                        ></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => deleteData(service.id, "prices")}
                      >
                        <i
                          className="fas fa-trash"
                          style={{ color: "#E34724" }}
                        ></i>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {newRow && (
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={newService.service}
                    placeholder="Enter new service"
                    onChange={(e) =>
                      setNewService({
                        ...newService,
                        service: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={newService.price}
                    placeholder="Enter price"
                    onChange={(e) =>
                      setNewService({
                        ...newService,
                        price: e.target.value,
                      })
                    }
                  />
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    style={{
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={handleSaveNewRow}
                  >
                    <i className="fa fa-plus" style={{ color: "#27C46B" }}></i>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    style={{
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => hideNewRow()}
                  >
                    <i
                      className="fas fa-trash"
                      style={{ color: "#E34724" }}
                    ></i>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditPriceList;
