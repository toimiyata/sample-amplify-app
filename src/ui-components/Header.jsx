/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <Flex
      gap="14px"
      direction="column"
      width="296px"
      height="77px"
      justifyContent="space-between"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,141,141,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="18.15340805053711px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="184px"
        height="17px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="sample application"
        {...getOverrideProps(overrides, "Title")}
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
        width="274px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="this is samle component"
        {...getOverrideProps(overrides, "this is samle component")}
      ></Text>
    </Flex>
  );
}
