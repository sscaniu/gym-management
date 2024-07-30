import React, { ChangeEvent } from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.checked);
  };

  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 rounded border-2 border-white focus:ring-0 focus:ring-offset-0 rounded-sm bg-transparent checked:text-warning indeterminate:text-warning outline-0"
      />
      {label && <span className="font-jost font-medium text-sm">{label}</span>}
    </label>
  );
};

export default Checkbox;
