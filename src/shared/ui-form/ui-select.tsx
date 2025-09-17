import type { HTMLAttributes } from "react";
import type { Option } from "./types";

type PropsOptions = {
  options: Option[];
  label?: string;
} & HTMLAttributes<HTMLSelectElement>

export const UiSelect = (props: PropsOptions) => {
  const { options, label, ...selectOptions } = props;
  return (
    <>
      <label htmlFor={selectOptions.id}>{label}</label>
      <select {...selectOptions}>
        {
          options.map((item) => {
            return (
              <option key={item.id} value={item.value}>{item.label}</option>
            )
          })
        }
      </select>
    </>
  )
}
