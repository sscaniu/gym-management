import React, { FC } from "react";
import TagsInput, { TagProps } from "react-tagsinput";

import "react-tagsinput/react-tagsinput.css";
import "./override.css";

interface TagsFieldProps {
  label?: string;
  value: string[];
  onChange: (tags: string[]) => void;
  fullWidth?: boolean;
  placeholder?: string;
}

const RenderTag = (props: TagProps) => {
  let { tag, key, getTagDisplayValue } = props;
  return (
    <span
      key={key}
      className="inline-flex rounded-sm p-2 bg-info font-jost font-bold text-black text-xs leading-4 mr-5 mb-3.5"
    >
      {getTagDisplayValue(tag)}
    </span>
  );
};

const TagsField: FC<TagsFieldProps> = ({
  label,
  value,
  onChange,
  fullWidth = false,
  placeholder = "Add a tag",
}) => {
  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2`}>
      {label && (
        <label className="font-jost font-semibold text-xs uppercase text-white">
          {label}
        </label>
      )}
      <TagsInput
        value={value}
        onChange={onChange}
        renderTag={RenderTag}
        inputProps={{ placeholder: placeholder }}
      />
    </div>
  );
};

export default TagsField;
