/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BoardCreateFormInputValues = {
    message?: string;
    name?: string;
    image?: string;
    personID?: string;
};
export declare type BoardCreateFormValidationValues = {
    message?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    personID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardCreateFormOverridesProps = {
    BoardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    personID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BoardCreateFormProps = React.PropsWithChildren<{
    overrides?: BoardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BoardCreateFormInputValues) => BoardCreateFormInputValues;
    onSuccess?: (fields: BoardCreateFormInputValues) => void;
    onError?: (fields: BoardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BoardCreateFormInputValues) => BoardCreateFormInputValues;
    onValidate?: BoardCreateFormValidationValues;
} & React.CSSProperties>;
export default function BoardCreateForm(props: BoardCreateFormProps): React.ReactElement;
