import React from "react";
import "../styles/Book_Appointment/Book_Appointment.css";

const CustomInputTag = ({
  form,
  id,
  placeholder,
  formControl,
  pattern,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      {type === "input" && (
        <>
          <input
            id={id}
            name={id}
            placeholder={placeholder}
            autoComplete="off"
            className={`w-100 mt-4 ${
              errors[id] && errors[id].message ? "mb-2" : "mb-4"
            }`}
            style={formControl}
            {...register(id, {
              required: {
                value: true,
                message: `${placeholder} is required`,
              },
              pattern: {
                value: pattern ? pattern : false,
                message: `Please enter a valid ${placeholder}`,
              },
            })}
          />
          {errors[id] && (
            <span style={{ color: "red", paddingLeft: "5px", margin: "0px" }}>
              {errors[id].message}
            </span>
          )}
        </>
      )}
      {
        type ==='textArea' && (
            <>
            <textarea
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-100 mt-4 form-control-text-area ${errors[id] && errors[id].message ? "mb-2" : "mb-4"}`}
                  rows={7}
                  {...register(id, { required: {
                    value:true,
                    message:`${placeholder} is required`,
                  } })}
                />
                {errors[id] && (
              <span style={{ color: "red", paddingLeft: "5px", margin: "0px" }}>
              {errors[id].message}
              </span>
          )}
            
            
            </>
        )
      }
    </>
  );
};

export default CustomInputTag;
