/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Person, Board } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PersonUpdateForm(props) {
  const {
    id: idProp,
    person: personModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    age: "",
    tel: "",
    Boards: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [age, setAge] = React.useState(initialValues.age);
  const [tel, setTel] = React.useState(initialValues.tel);
  const [Boards, setBoards] = React.useState(initialValues.Boards);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personRecord
      ? { ...initialValues, ...personRecord, Boards: linkedBoards }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setAge(cleanValues.age);
    setTel(cleanValues.tel);
    setBoards(cleanValues.Boards ?? []);
    setCurrentBoardsValue(undefined);
    setCurrentBoardsDisplayValue("");
    setErrors({});
  };
  const [personRecord, setPersonRecord] = React.useState(personModelProp);
  const [linkedBoards, setLinkedBoards] = React.useState([]);
  const canUnlinkBoards = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Person, idProp)
        : personModelProp;
      setPersonRecord(record);
      const linkedBoards = record ? await record.Boards.toArray() : [];
      setLinkedBoards(linkedBoards);
    };
    queryData();
  }, [idProp, personModelProp]);
  React.useEffect(resetStateValues, [personRecord, linkedBoards]);
  const [currentBoardsDisplayValue, setCurrentBoardsDisplayValue] =
    React.useState("");
  const [currentBoardsValue, setCurrentBoardsValue] = React.useState(undefined);
  const BoardsRef = React.createRef();
  const getIDValue = {
    Boards: (r) => JSON.stringify({ id: r?.id }),
  };
  const BoardsIdSet = new Set(
    Array.isArray(Boards)
      ? Boards.map((r) => getIDValue.Boards?.(r))
      : getIDValue.Boards?.(Boards)
  );
  const boardRecords = useDataStoreBinding({
    type: "collection",
    model: Board,
  }).items;
  const getDisplayValue = {
    Boards: (r) => `${r?.message ? r?.message + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    email: [{ type: "Email" }],
    age: [],
    tel: [{ type: "Phone" }],
    Boards: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          age,
          tel,
          Boards,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const promises = [];
          const boardsToLink = [];
          const boardsToUnLink = [];
          const boardsSet = new Set();
          const linkedBoardsSet = new Set();
          Boards.forEach((r) => boardsSet.add(getIDValue.Boards?.(r)));
          linkedBoards.forEach((r) =>
            linkedBoardsSet.add(getIDValue.Boards?.(r))
          );
          linkedBoards.forEach((r) => {
            if (!boardsSet.has(getIDValue.Boards?.(r))) {
              boardsToUnLink.push(r);
            }
          });
          Boards.forEach((r) => {
            if (!linkedBoardsSet.has(getIDValue.Boards?.(r))) {
              boardsToLink.push(r);
            }
          });
          boardsToUnLink.forEach((original) => {
            if (!canUnlinkBoards) {
              throw Error(
                `Board ${original.id} cannot be unlinked from Person because personID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Board.copyOf(original, (updated) => {
                  updated.personID = null;
                })
              )
            );
          });
          boardsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Board.copyOf(original, (updated) => {
                  updated.personID = personRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            email: modelFields.email,
            age: modelFields.age,
            tel: modelFields.tel,
          };
          promises.push(
            DataStore.save(
              Person.copyOf(personRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              age,
              tel,
              Boards,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              age,
              tel,
              Boards,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              email,
              age: value,
              tel,
              Boards,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Tel"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={tel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              age,
              tel: value,
              Boards,
            };
            const result = onChange(modelFields);
            value = result?.tel ?? value;
          }
          if (errors.tel?.hasError) {
            runValidationTasks("tel", value);
          }
          setTel(value);
        }}
        onBlur={() => runValidationTasks("tel", tel)}
        errorMessage={errors.tel?.errorMessage}
        hasError={errors.tel?.hasError}
        {...getOverrideProps(overrides, "tel")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              age,
              tel,
              Boards: values,
            };
            const result = onChange(modelFields);
            values = result?.Boards ?? values;
          }
          setBoards(values);
          setCurrentBoardsValue(undefined);
          setCurrentBoardsDisplayValue("");
        }}
        currentFieldValue={currentBoardsValue}
        label={"Boards"}
        items={Boards}
        hasError={errors?.Boards?.hasError}
        errorMessage={errors?.Boards?.errorMessage}
        getBadgeText={getDisplayValue.Boards}
        setFieldValue={(model) => {
          setCurrentBoardsDisplayValue(
            model ? getDisplayValue.Boards(model) : ""
          );
          setCurrentBoardsValue(model);
        }}
        inputFieldRef={BoardsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Boards"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Board"
          value={currentBoardsDisplayValue}
          options={boardRecords
            .filter((r) => !BoardsIdSet.has(getIDValue.Boards?.(r)))
            .map((r) => ({
              id: getIDValue.Boards?.(r),
              label: getDisplayValue.Boards?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBoardsValue(
              boardRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBoardsDisplayValue(label);
            runValidationTasks("Boards", label);
          }}
          onClear={() => {
            setCurrentBoardsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Boards?.hasError) {
              runValidationTasks("Boards", value);
            }
            setCurrentBoardsDisplayValue(value);
            setCurrentBoardsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Boards", currentBoardsDisplayValue)}
          errorMessage={errors.Boards?.errorMessage}
          hasError={errors.Boards?.hasError}
          ref={BoardsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Boards")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || personModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || personModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
