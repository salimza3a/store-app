import { Button, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Controller } from "react-hook-form";

type CustomTextFieldProps = {
  label: string;
  name: string;
  control: any;
  type: string;
  placeholder: string;
};
export const CustomTextField = ({
  name,
  control,
  label,
  type,
  placeholder,
}: CustomTextFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((user) => !user);
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            margin="normal"
            fullWidth
            label={label}
            helperText={error ? error.message : null}
            onChange={onChange}
            value={value}
            error={!!error}
            placeholder={placeholder}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* look at there soon */}
                  {type === "password" ? (
                    <Button type="button" onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <Visibility color="action" />
                      ) : (
                        <VisibilityOff color="action" />
                      )}
                    </Button>
                  ) : (
                    ""
                  )}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};
