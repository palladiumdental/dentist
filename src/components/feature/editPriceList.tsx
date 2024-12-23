import React, { useState } from "react";
import { TPriceType } from "../../types/price";
import { useGetData, addData, deleteData, editData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import Localize from "../ui/localize";
import { useTranslation } from "react-i18next";

type TEditableService = TPriceType & {
  isEditing?: boolean;
  serviceEdit?: string;
  priceEdit?: string;
};

const EditPriceList: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useGetData<TPriceType>("prices");
  const [priceList, setPriceList] = useState<TEditableService[]>(data || []);
  const [newRow, setNewRow] = useState(false);
  const [newService, setNewService] = useState({
    service: "",
    price: "",
  });

  const isCurrentLanguageEn = i18n.language === "en";

  React.useEffect(() => {
    const updatedPriceList = data.map((item: TPriceType) => ({
      ...item,
      isEditing: false,
      serviceEdit: item.service,
      priceEdit: item.price,
    }));
    setPriceList(updatedPriceList);
  }, [data]);

  const handleAddNewRow = () => {
    setNewRow(true);
    handleCancelAllEdits();
  };

  const hideNewRow = () => {
    setNewRow(false);
    setNewService({ service: "", price: "" });
  };

  const handleCancelAllEdits = () => {
    setPriceList((prevList: TEditableService[]) =>
      prevList.map((item: TEditableService) => ({
        ...item,
        isEditing: false,
        serviceEdit: item.service,
        priceEdit: item.price,
      }))
    );
  };

  const handleSaveNewRow = () => {
    if (newService.service && newService.price) {
      addData("prices", newService);
      hideNewRow();
    }
  };

  const handleDeleteRow = (id: string) => {
    hideNewRow();
    handleCancelAllEdits();
    deleteData(id, "prices");
  };

  const handleEditRow = (id: string) => {
    hideNewRow();
    handleCancelAllEdits();
    setPriceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleCancelEdit = (id: string) => {
    setPriceList((prevList: TEditableService[]) =>
      prevList.map((item: TEditableService) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const handleSaveEditRow = async (id: string) => {
    const editedItem = priceList.find((item) => item.id === id);
    if (editedItem) {
      const updatedData = {
        service: editedItem.serviceEdit || "",
        price: editedItem.priceEdit || "",
      };
      try {
        await editData(id, "prices", updatedData);
        setPriceList((prevList: TEditableService[]) =>
          prevList.map((item: any) =>
            item.id === id
              ? {
                  ...item,
                  isEditing: false,
                  service: editedItem.serviceEdit,
                  price: editedItem.priceEdit,
                }
              : item
          )
        );
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  if (loading) return <Spinner show={loading} />;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8" style={{ textAlign: "left" }}>
              <h2>
                <Localize text="a32" isFirstLetterCapital={true} />
              </h2>
            </div>
            <div className="col-sm-4" style={{ textAlign: "right" }}>
              <button
                className="btn btn-primary rounded-pill add-new  align-items-center"
                onClick={handleAddNewRow}
                disabled={newRow}
              >
                <i className="fa fa-plus me-2"></i>{" "}
                <Localize text="add new" isFirstLetterCapital={true} />
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <Localize text="service" isFirstLetterCapital={true} />
              </th>
              <th>
                <Localize text="price" isFirstLetterCapital={true} />
              </th>
              <th>
                <Localize text="actions" isFirstLetterCapital={true} />
              </th>
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
                        value={service.serviceEdit}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? { ...item, serviceEdit: value }
                                : item
                            )
                          );
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={service.priceEdit}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? { ...item, priceEdit: value }
                                : item
                            )
                          );
                        }}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-success btn-sm"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => handleSaveEditRow(service.id)}
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
                        onClick={() => handleEditRow(service.id)}
                      >
                        <i
                          className="fas fa-pencil-alt"
                          style={{ color: "#FFC107" }}
                        ></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        style={{
                          background: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => handleDeleteRow(service.id)}
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
                    placeholder={
                      isCurrentLanguageEn
                        ? "Enter new service"
                        : "Új szolgáltatás megadása"
                    }
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
                    placeholder={
                      isCurrentLanguageEn ? "Enter price" : "Ár megadása"
                    }
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
                    className="btn btn-success btn-sm"
                    style={{
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={handleSaveNewRow}
                  >
                    <i className="fa fa-check" style={{ color: "#27C46B" }}></i>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    style={{
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={hideNewRow}
                  >
                    <i
                      className="fas fa-times"
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
