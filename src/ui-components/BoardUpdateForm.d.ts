/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Board } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BoardUpdateFormInputValues = {
    message?: string;
    name?: string;
    image?: string;
    personID?: string;
};
export declare type BoardUpdateFormValidationValues = {
    message?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    personID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardUpdateFormOverridesProps = {
    BoardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    personID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BoardUpdateFormProps = React.PropsWithChildren<{
    overrides?: BoardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    board?: Board;
    onSubmit?: (fields: BoardUpdateFormInputValues) => BoardUpdateFormInputValues;
    onSuccess?: (fields: BoardUpdateFormInputValues) => void;
    onError?: (fields: BoardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BoardUpdateFormInputValues) => BoardUpdateFormInputValues;
    onValidate?: BoardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BoardUpdateForm(props: BoardUpdateFormProps): React.ReactElement;
