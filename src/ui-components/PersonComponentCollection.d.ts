/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PersonComponentProps } from "./PersonComponent";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonComponentCollectionOverridesProps = {
    PersonComponentCollection?: PrimitiveOverrideProps<CollectionProps>;
    PersonComponent?: PersonComponentProps;
} & EscapeHatchProps;
export declare type PersonComponentCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PersonComponentProps;
} & {
    overrides?: PersonComponentCollectionOverridesProps | undefined | null;
}>;
export default function PersonComponentCollection(props: PersonComponentCollectionProps): React.ReactElement;
