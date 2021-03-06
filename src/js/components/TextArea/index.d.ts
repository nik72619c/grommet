import * as React from "react";

export interface TextAreaProps {
  fill?: boolean;
  focusIndicator?: boolean;
  id?: string;
  name?: string;
  onChange?: ((event: React.ChangeEvent) => void);
  placeholder?: string;
  plain?: boolean;
  resize?: "vertical" | "horizontal" | boolean;
  size?: "small" | "medium" | "large" | "xlarge" | string;
  value?: string;
}

declare const TextArea: React.ComponentClass<TextAreaProps & JSX.IntrinsicElements['textarea']>;

export { TextArea };
