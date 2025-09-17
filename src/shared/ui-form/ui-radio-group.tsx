import type { InputHTMLAttributes } from "react";
import type { Option } from "./types"

type PropsOprions = {
  options: Option[]
} & InputHTMLAttributes<HTMLInputElement>;

export function UiRadioGroup(props: PropsOprions) {
  const { options, ...inputProps } = props;
  return (
    <ul>
      {
        options.map((item) => {
          return (
            <li key={item.id}>
              <label htmlFor={item.label}>
                <input {...inputProps} id={item.label} type="radio" value={item.value} />
                {item.label}
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}
