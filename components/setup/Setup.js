import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveInitialData } from "../../redux/actions/setupActions";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { Text, Layout, Input, Button } from "@ui-kitten/components";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { Subtitle } from "../common/Subtitle";
import { BACKGROUND_COLOR_HEX } from "../../constants";
import api from "../../helper/api";
import OneRepMax from "../../classes/OneRepMax";
import styled from "styled-components";

const ExerciseContainer = styled(Layout)`
  margin-top: 24px;
  background: transparent;
`;

const Exercise = styled(View)`
  margin: 8px 0;
`;

const ExerciseText = styled(Text)`
  margin-bottom: 8px;
`;

const ExerciseInput = styled(Input)`
  border-radius: 25px;
  background: #f2f4f7;
  border-color: ${(props) => (props.focused ? "#fb3c51" : "transparent")};
`;

const DoneButtonContainer = styled(Layout)`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get("window").width}px;
  background: ${BACKGROUND_COLOR_HEX};
  height: 75px;
`;

const DoneButton = styled(Button)`
  position: relative;
  bottom: 12px;
  width: 80%;
  border-radius: 50px;
  margin: 0 auto;
`;

export const Setup = () => {
  const dispatch = useDispatch();
  const [benchPress, setBenchPress] = useState("");
  const [squat, setSquat] = useState("");
  const [deadlift, setDeadlift] = useState("");
  const [overheadPress, setOverheadPress] = useState("");
  const [isFocused, setIsFocused] = useState("");

  useEffect(() => {
    // DEV purposes only
    api.clearStorage();
  }, []);

  const appendLbsToInput = (exercise) => {
    if (exercise === "benchPress" && benchPress !== "") {
      setBenchPress(benchPress + " lbs");
    }

    if (exercise === "squat" && squat !== "") {
      setSquat(squat + " lbs");
    }

    if (exercise === "deadlift" && deadlift !== "") {
      setDeadlift(deadlift + " lbs");
    }

    if (exercise === "overheadPress" && overheadPress !== "") {
      setOverheadPress(overheadPress + " lbs");
    }

    setIsFocused("");
  };

  const removeLbsFromInput = (exercise) => {
    if (exercise === "benchPress") {
      setBenchPress(benchPress.split(" ")[0]);
      setIsFocused("benchPress");
    }

    if (exercise === "squat") {
      setSquat(squat.split(" ")[0]);
      setIsFocused("squat");
    }

    if (exercise === "deadlift") {
      setDeadlift(deadlift.split(" ")[0]);
      setIsFocused("deadlift");
    }

    if (exercise === "overheadPress") {
      setOverheadPress(overheadPress.split(" ")[0]);
      setIsFocused("overheadPress");
    }
  };

  const saveData = () => {
    const oneRepMaxes = [
      new OneRepMax(
        "benchPress",
        "Bench Press",
        Number(benchPress.split(" ")[0])
      ),
      new OneRepMax("squat", "Squat", Number(squat.split(" ")[0])),
      new OneRepMax("deadlift", "Deadlift", Number(deadlift.split(" ")[0])),
      new OneRepMax(
        "overheadPress",
        "Overhead Press",
        Number(overheadPress.split(" ")[0])
      ),
    ];

    dispatch(saveInitialData(oneRepMaxes));
  };

  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container style={{ height: Dimensions.get("window").height }}>
            <Title category="h1">Setup</Title>
            <Subtitle category="c1" appearance="hint">
              Let's get some initial stats
            </Subtitle>
            <Text category="h2">
              Enter your 1 rep max for each of the exercises listed below
            </Text>
            <ExerciseContainer>
              <Exercise>
                <ExerciseText category="h4">Bench Press</ExerciseText>
                <ExerciseInput
                  placeholder="Ex: 225"
                  size="large"
                  keyboardType="number-pad"
                  value={benchPress}
                  onChangeText={(nextValue) => setBenchPress(nextValue)}
                  onBlur={() => appendLbsToInput("benchPress")}
                  onFocus={() => removeLbsFromInput("benchPress")}
                  focused={isFocused === "benchPress" ? true : false}
                />
              </Exercise>
              <Exercise>
                <ExerciseText category="h4">Squat</ExerciseText>
                <ExerciseInput
                  placeholder="Ex: 315"
                  size="large"
                  keyboardType="number-pad"
                  value={squat}
                  onChangeText={(nextValue) => setSquat(nextValue)}
                  onBlur={() => appendLbsToInput("squat")}
                  onFocus={() => removeLbsFromInput("squat")}
                  focused={isFocused === "squat" ? true : false}
                />
              </Exercise>
              <Exercise>
                <ExerciseText category="h4">Deadlift</ExerciseText>
                <ExerciseInput
                  placeholder="Ex: 405"
                  size="large"
                  keyboardType="number-pad"
                  value={deadlift}
                  onChangeText={(nextValue) => setDeadlift(nextValue)}
                  onBlur={() => appendLbsToInput("deadlift")}
                  onFocus={() => removeLbsFromInput("deadlift")}
                  focused={isFocused === "deadlift" ? true : false}
                />
              </Exercise>
              <Exercise>
                <ExerciseText category="h4">Overhead Press</ExerciseText>
                <ExerciseInput
                  placeholder="Ex: 135"
                  size="large"
                  keyboardType="number-pad"
                  value={overheadPress}
                  onChangeText={(nextValue) => setOverheadPress(nextValue)}
                  onBlur={() => appendLbsToInput("overheadPress")}
                  onFocus={() => removeLbsFromInput("overheadPress")}
                  focused={isFocused === "overheadPress" ? true : false}
                />
              </Exercise>
            </ExerciseContainer>
            <DoneButtonContainer>
              <DoneButton size="giant" onPress={saveData}>
                Done
              </DoneButton>
            </DoneButtonContainer>
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
