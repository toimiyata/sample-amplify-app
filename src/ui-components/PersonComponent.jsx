/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PersonComponent(props) {
  const { person, overrides, ...rest } = props;
  return (
    <View
      width="291px"
      height="89px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PersonComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="204px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9px"
        left="257px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.age}
        {...getOverrideProps(overrides, "age")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="12.102272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="258px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="38px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.email}
        {...getOverrideProps(overrides, "email")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="255px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="65px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.tel}
        {...getOverrideProps(overrides, "tel")}
      ></Text>
    </View>
  );
}
