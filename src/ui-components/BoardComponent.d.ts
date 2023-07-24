/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Board } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardComponentOverridesProps = {
    BoardComponent?: PrimitiveOverrideProps<ViewProps>;
    "nodejs 1"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector342?: PrimitiveOverrideProps<IconProps>;
    Vector343?: PrimitiveOverrideProps<IconProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    message?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BoardComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    board?: Board;
} & {
    overrides?: BoardComponentOverridesProps | undefined | null;
}>;
export default function BoardComponent(props: BoardComponentProps): React.ReactElement;
