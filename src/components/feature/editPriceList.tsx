import React, { useState } from "react";
import { TPriceType } from "../../types/price";
import { useGetData, addData, deleteData, editData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import Localize from "../ui/localize";
import { useTranslation } from "react-i18next";

type TEditableService = TPriceType & {
  isEditing?: boolean;
  enServiceEdit?: string;
  huServiceEdit?: string;
  priceEdit?: string;
  onPromotionEdit?: boolean;
  promotionPriceEdit?: string;
};

const EditPriceList: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useGetData<TPriceType>("prices");
  const [priceList, setPriceList] = useState<TEditableService[]>(data || []);
  const [newRow, setNewRow] = useState(false);
  const [newService, setNewService] = useState({
    enService: "",
    huService: "",
    price: "",
    onPromotion: false,
    promotionPrice: "",
  });

  const isCurrentLanguageEn = i18n.language === "en";

  React.useEffect(() => {
    const updatedPriceList = data.map((item: TPriceType) => ({
      ...item,
      isEditing: false,
      enServiceEdit: item.enService,
      huServiceEdit: item.huService,
      priceEdit: item.price,
      onPromotionEdit: item.onPromotion,
      promotionPriceEdit: item.promotionPrice,
    }));
    setPriceList(updatedPriceList);
  }, [data]);

  const handleAddNewRow = () => {
    setNewRow(true);
    handleCancelAllEdits();
  };

  const hideNewRow = () => {
    setNewRow(false);
    setNewService({
      enService: "",
      huService: "",
      price: "",
      onPromotion: false,
      promotionPrice: "",
    });
  };

  const handleCancelAllEdits = () => {
    setPriceList((prevList: TEditableService[]) =>
      prevList.map((item: TEditableService) => ({
        ...item,
        isEditing: false,
        enServiceEdit: item.enService,
        huServiceEdit: item.huService,
        priceEdit: item.price,
        onPromotionEdit: item.onPromotion,
        promotionPriceEdit: item.promotionPrice,
      }))
    );
  };

  const handleSaveNewRow = () => {
    if (newService.enService && newService.huService && newService.price) {
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
        enService: editedItem.enServiceEdit || "",
        huService: editedItem.huServiceEdit || "",
        price: editedItem.priceEdit || "",
        onPromotion: editedItem.onPromotionEdit || false,
        promotionPrice: editedItem.promotionPriceEdit || "",
      };
      try {
        await editData(id, "prices", updatedData);
        setPriceList((prevList: TEditableService[]) =>
          prevList.map((item: any) =>
            item.id === id
              ? {
                  ...item,
                  isEditing: false,
                  enService: editedItem.enServiceEdit,
                  huService: editedItem.huServiceEdit,
                  price: editedItem.priceEdit,
                  onPromotion: editedItem.onPromotionEdit,
                  promotionPrice: editedItem.promotionPriceEdit,
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
                <Localize
                  text="service text in english"
                  isFirstLetterCapital={true}
                />
              </th>
              <th>
                <Localize
                  text="service text in hungarian"
                  isFirstLetterCapital={true}
                />
              </th>
              <th>
                <Localize text="price" isFirstLetterCapital={true} />
              </th>
              <th>
                <Localize text="on promotion" isFirstLetterCapital={true} />
              </th>
              <th>
                <Localize text="promotion price" isFirstLetterCapital={true} />
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
                        className="form-control text-start"
                        value={service.enServiceEdit}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? { ...item, enServiceEdit: value }
                                : item
                            )
                          );
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-start"
                        value={service.huServiceEdit}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? { ...item, huServiceEdit: value }
                                : item
                            )
                          );
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-start"
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
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={service.onPromotionEdit}
                        onChange={(e) =>
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? {
                                    ...item,
                                    onPromotionEdit: e.target.checked,
                                  }
                                : item
                            )
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-start"
                        value={service.promotionPriceEdit}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPriceList((prevList) =>
                            prevList.map((item) =>
                              item.id === service.id
                                ? { ...item, promotionPriceEdit: value }
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
                          style={{
                            color: "#27C46B",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                          }}
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
                          style={{
                            color: "#E34724",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                          }}
                        ></i>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="text-start">{service.enService}</td>
                    <td className="text-start">{service.huService}</td>
                    <td className="text-start">{service.price}</td>
                    <td>
                      {service.onPromotion ? (
                        <i
                          className="fa fa-check"
                          style={{ color: "#27C46B" }}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-times"
                          style={{ color: "#E34724" }}
                        ></i>
                      )}
                    </td>
                    <td className="text-start">{service.promotionPrice}</td>
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
                          style={{
                            color: "#FFC107",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                          }}
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
                          style={{
                            color: "#E34724",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                          }}
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
                    className="form-control text-start"
                    value={newService.enService}
                    placeholder={isCurrentLanguageEn ? "English" : "Angolul"}
                    onChange={(e) =>
                      setNewService({
                        ...newService,
                        enService: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control text-start"
                    value={newService.huService}
                    placeholder={isCurrentLanguageEn ? "Hungarian" : "Magyarul"}
                    onChange={(e) =>
                      setNewService({
                        ...newService,
                        huService: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control text-start"
                    value={newService.price}
                    placeholder={isCurrentLanguageEn ? "Price" : "Ár"}
                    onChange={(e) =>
                      setNewService({
                        ...newService,
                        price: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={newService.onPromotion}
                    onChange={(e) => {
                      setNewService({
                        ...newService,
                        onPromotion: e.target.checked,
                      });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control text-start"
                    value={newService.promotionPrice}
                    placeholder={
                      isCurrentLanguageEn ? "Promotion price" : "Akciós ár"
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
                    <i
                      className="fa fa-check"
                      style={{
                        color: "#27C46B",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                      }}
                    ></i>
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
                      style={{
                        color: "#E34724",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                      }}
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
