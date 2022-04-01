// import { TextField, TextFieldProps } from "@material-ui/core";
// import * as React from "react";
// import { Control, Controller } from "react-hook-form";

// export type HTextFieldProps = TextFieldProps & {
//   control: Control<any>;
//   name: string;
//   defaultValue?: string;
// };

// /**
//  * Describe your component here
//  */
// export const TextField: React.FC<TextFieldProps> = function HookformTextField(
//   props
// ) {
//   const { name, control, defaultValue = "", ...restProps } = props;

//   const validate = (value: string) => {
//     const matches = value.match(
//       /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
//     );
//     return matches?.length > 0 || "Not a Number";
//   };

//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={{ validate }}
//       render={({ field: { onChange, value }, fieldState: { error } }) => (
//         <TextField
//           {...restProps}
//           onChange={onChange}
//           value={value}
//           fullWidth
//           label="Times"
//           error={!!error}
//           helperText={error?.message}
//         />
//       )}
//       defaultValue={defaultValue}
//     />
//   );
// };
// x   