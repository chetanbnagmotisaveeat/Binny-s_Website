import React from 'react';

const CustomInputTag = ({ form, id, placeholder, formControl ,pattern}) => {
    const { register, formState: { errors } } = form;

    return (
        <div>
            <input
                id={id}
                name={id}
                placeholder={placeholder}
                className={`w-100 mt-4 ${errors[id] && errors[id].message ? 'mb-2' : 'mb-4'}`}
                style={formControl}
                {...register(id, {
                    required: {
                        value:true,
                        message:`${id} is required`
                    },
                    pattern:  {
                        value: pattern? regex :false,
                        message: `Please enter a valid ${id}`
                      }
                })}
            />
            {errors[id] && <span style={{ color: 'red', paddingLeft: "5px", margin: '0px' }}>{errors[id].message}</span>}
        </div>
    );
};

export default CustomInputTag;
