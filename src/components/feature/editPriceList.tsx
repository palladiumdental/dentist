import React, { useEffect, useState } from "react";
import { TPriceType } from "../../types/price";
import { useGetData, addData, deleteData, editData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import Localize from "../ui/localize";
import { useTranslation } from "react-i18next";
import { formatNumberWithSeparators } from "../../helpers/numbersFns";
import Error from "../../components/feature/error";
import Select from "../ui/select";
import { SERVICE_CATEGORY } from "../../constants/lists";

type TEditableService = TPriceType & {
  isEditing?: boolean;
  orderEdit?: string;
  enServiceEdit?: string;
  huServiceEdit?: string;
  priceEdit?: string;
  priceToEdit?: string;
  onPromotionEdit?: boolean;
  promotionPriceEdit?: string;
  promotionPriceToEdit?: string;
  serviceCategoryEdit?: string;
};

const EditPriceList: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useGetData<TPriceType>("prices");
  const [priceList, setPriceList] = useState<TEditableService[]>(data || []);
  const [newRow, setNewRow] = useState(false);
  const [newService, setNewService] = useState({
    order: "",
    enService: "",
    huService: "",
    price: "",
    priceTo: "",
    onPromotion: false,
    promotionPrice: "",
    promotionPriceTo: "",
    serviceCategory: "",
  });

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const isCurrentLanguageEn = i18n.language === "en";

  React.useEffect(() => {
    const updatedPriceList = data
      .map((item: TPriceType) => ({
        ...item,
        isEditing: false,
        orderEdit: item.order,
        enServiceEdit: item.enService,
        huServiceEdit: item.huService,
        priceEdit: item.price,
        priceToEdit: item.priceTo,
        onPromotionEdit: item.onPromotion,
        promotionPriceEdit: item.promotionPrice,
        promotionPriceToEdit: item.promotionPriceTo,
        serviceCategoryEdit: item.serviceCategory,
      }))
      .sort((a, b) => {
        if (a.serviceCategory === b.serviceCategory) {
          return Number(a.order) - Number(b.order);
        }
        return a.serviceCategory.localeCompare(b.serviceCategory);
      });
    setPriceList(updatedPriceList);
  }, [data]);

  const handleAddNewRow = () => {
    setNewRow(true);
    handleCancelAllEdits();
  };

  const hideNewRow = () => {
    setNewRow(false);
    setNewService({
      order: "",
      enService: "",
      huService: "",
      price: "",
      priceTo: "",
      onPromotion: false,
      promotionPrice: "",
      promotionPriceTo: "",
      serviceCategory: "",
    });
  };

  const handleCancelAllEdits = () => {
    setPriceList((prevList: TEditableService[]) =>
      prevList.map((item: TEditableService) => ({
        ...item,
        isEditing: false,
        orderEdit: item.order,
        enServiceEdit: item.enService,
        huServiceEdit: item.huService,
        priceEdit: item.price,
        priceToEdit: item.priceTo,
        onPromotionEdit: item.onPromotion,
        promotionPriceEdit: item.promotionPrice,
        promotionPriceToEdit: item.promotionPriceTo,
        serviceCategoryEdit: item.serviceCategory,
      }))
    );
  };

  const saveNewRowValidation = () => {
    if (!newService.enService) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Text In English is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás szövege angolul ki van töltve!"
      );
      return false;
    }
    if (!newService.huService) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Text In Hungarian is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás szövege magyarul ki van töltve!"
      );
      return false;
    }
    if (!newService.serviceCategory) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Category is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás kategória mező ki van töltve!"
      );
      return false;
    }
    if (!newService.price) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Price is filled in!"
          : "Kérjük, győződjön meg róla, hogy az Ár mező ki van töltve!"
      );
      return false;
    }
    if (newService.onPromotion && !newService.promotionPrice) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Promotion Price is filled in!"
          : "Kérjük, győződjön meg róla, hogy az Akciós Ár mező ki van töltve!"
      );
      return false;
    }
    return true;
  };

  const handleSaveNewRow = () => {
    if (saveNewRowValidation()) {
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

  const saveEditRowValidation = (editedItem: TEditableService) => {
    if (!editedItem.enServiceEdit) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Text In English is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás szövege angolul ki van töltve!"
      );
      return false;
    }
    if (!editedItem.huServiceEdit) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Text In Hungarian is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás szövege magyarul ki van töltve!"
      );
      return false;
    }
    if (!editedItem.serviceCategoryEdit) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Service Category is filled in!"
          : "Kérjük, győződjön meg róla, hogy a Szolgáltatás kategória mező ki van töltve!"
      );
      return false;
    }
    if (!editedItem.priceEdit) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Price is filled in!"
          : "Kérjük, győződjön meg róla, hogy az Ár mező ki van töltve!"
      );
      return false;
    }
    if (editedItem.onPromotionEdit && !editedItem.promotionPriceEdit) {
      alert(
        isCurrentLanguageEn
          ? "Please make sure Promotion Price is filled in!"
          : "Kérjük, győződjön meg róla, hogy az Akciós Ár mező ki van töltve!"
      );
      return false;
    }
    return true;
  };

  const handleSaveEditRow = async (id: string) => {
    const editedItem = priceList.find((item) => item.id === id);
    if (editedItem) {
      const updatedData = {
        order: editedItem.orderEdit || "",
        enService: editedItem.enServiceEdit || "",
        huService: editedItem.huServiceEdit || "",
        price: editedItem.priceEdit || "",
        priceTo: editedItem.priceToEdit || "",
        onPromotion: editedItem.onPromotionEdit || false,
        promotionPrice: editedItem.promotionPriceEdit || "",
        promotionPriceTo: editedItem.promotionPriceToEdit || "",
        serviceCategory: editedItem.serviceCategoryEdit || "",
      };
      try {
        if (saveEditRowValidation(editedItem)) {
          await editData(id, "prices", updatedData);
          setPriceList((prevList: TEditableService[]) =>
            prevList.map((item: any) =>
              item.id === id
                ? {
                    ...item,
                    isEditing: false,
                    order: editedItem.orderEdit,
                    enService: editedItem.enServiceEdit,
                    huService: editedItem.huServiceEdit,
                    price: editedItem.priceEdit,
                    priceTo: editedItem.priceToEdit,
                    onPromotion: editedItem.onPromotionEdit,
                    promotionPrice: editedItem.promotionPriceEdit,
                    promotionPriceTo: editedItem.promotionPriceToEdit,
                    serviceCategory: editedItem.serviceCategoryEdit,
                  }
                : item
            )
          );
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  if (error) return <Error />;

  return (
    <div style={{ position: "relative" }}>
      {loading && <Spinner show={loading} />}
      {!loading && (
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
                    <Localize text="order" isFirstLetterCapital={true} />
                  </th>
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
                    <Localize
                      text="service category"
                      isFirstLetterCapital={true}
                    />
                  </th>
                  <th>
                    <Localize text="price" isFirstLetterCapital={true} />
                    (HUF)
                  </th>
                  <th>
                    <Localize text="on promotion" isFirstLetterCapital={true} />
                  </th>
                  <th>
                    <Localize
                      text="promotion price"
                      isFirstLetterCapital={true}
                    />{" "}
                    (HUF)
                  </th>
                  <th>
                    <Localize text="actions" isFirstLetterCapital={true} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((service: TEditableService) => (
                  <tr key={service.id}>
                    {/* Edit section */}
                    {service.isEditing ? (
                      <>
                        <td>
                          <input
                            type="number"
                            className="form-control text-start"
                            value={service.orderEdit}
                            onChange={(e) => {
                              const value = e.target.value;
                              setPriceList((prevList) =>
                                prevList.map((item) =>
                                  item.id === service.id
                                    ? { ...item, orderEdit: value }
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
                          <Select
                            name="dentalIntervention"
                            handleChange={(e) => {
                              const value = e.target.value;
                              setPriceList((prevList) =>
                                prevList.map((item) =>
                                  item.id === service.id
                                    ? { ...item, serviceCategoryEdit: value }
                                    : item
                                )
                              );
                            }}
                            defaultOption={
                              isCurrentLanguageEn
                                ? "Service Category"
                                : "Szolgáltatás kategória"
                            }
                            options={SERVICE_CATEGORY}
                            value={service.serviceCategoryEdit ?? ""}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            placeholder="from"
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
                          <input
                            type="number"
                            placeholder="to"
                            className="form-control text-start"
                            value={service.priceToEdit}
                            onChange={(e) => {
                              const value = e.target.value;
                              setPriceList((prevList) =>
                                prevList.map((item) =>
                                  item.id === service.id
                                    ? { ...item, priceToEdit: value }
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
                            type="number"
                            placeholder="from"
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
                          <input
                            type="number"
                            placeholder="to"
                            className="form-control text-start"
                            value={service.promotionPriceToEdit}
                            onChange={(e) => {
                              const value = e.target.value;
                              setPriceList((prevList) =>
                                prevList.map((item) =>
                                  item.id === service.id
                                    ? { ...item, promotionPriceToEdit: value }
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
                        {/* Preview section */}
                        <td className="text-start">{service.order}</td>
                        <td className="text-start">{service.enService}</td>
                        <td className="text-start">{service.huService}</td>
                        <td className="text-start">
                          <Localize
                            text={service.serviceCategory}
                            isFirstLetterCapital={true}
                          />
                        </td>
                        <td className="text-start">
                          {service.priceTo
                            ? formatNumberWithSeparators(
                                parseInt(service.price)
                              ) +
                              " - " +
                              formatNumberWithSeparators(
                                parseInt(service.priceTo)
                              )
                            : formatNumberWithSeparators(
                                parseInt(service.price)
                              )}
                        </td>
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
                        <td className="text-start">
                          {service.promotionPriceTo
                            ? formatNumberWithSeparators(
                                parseInt(service.promotionPrice)
                              ) +
                              " - " +
                              formatNumberWithSeparators(
                                parseInt(service.promotionPriceTo)
                              )
                            : service.promotionPrice ??
                              formatNumberWithSeparators(
                                parseInt(service.promotionPrice)
                              )}
                        </td>
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
                {/* Add new record section */}
                {newRow && (
                  <tr>
                    <td>
                      <input
                        type="number"
                        className="form-control text-start"
                        value={newService.order}
                        placeholder="Order"
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            order: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-start"
                        value={newService.enService}
                        placeholder={
                          isCurrentLanguageEn ? "English" : "Angolul"
                        }
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
                        placeholder={
                          isCurrentLanguageEn ? "Hungarian" : "Magyarul"
                        }
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            huService: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <Select
                        name="dentalIntervention"
                        handleChange={(e) => {
                          setNewService({
                            ...newService,
                            serviceCategory: e.target.value,
                          });
                        }}
                        defaultOption={
                          isCurrentLanguageEn
                            ? "Service Category"
                            : "Szolgáltatás kategória"
                        }
                        options={SERVICE_CATEGORY}
                        value={newService.serviceCategory}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control text-start"
                        value={newService.price}
                        placeholder={isCurrentLanguageEn ? "from" : "from"}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            price: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        className="form-control text-start"
                        value={newService.priceTo}
                        placeholder={isCurrentLanguageEn ? "to" : "to"}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            priceTo: e.target.value,
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
                        type="number"
                        className="form-control text-start"
                        value={newService.promotionPrice}
                        placeholder={isCurrentLanguageEn ? "from" : "from"}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            promotionPrice: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        className="form-control text-start"
                        value={newService.promotionPriceTo}
                        placeholder={isCurrentLanguageEn ? "to" : "to"}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            promotionPriceTo: e.target.value,
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
      )}
    </div>
  );
};

export default EditPriceList;
