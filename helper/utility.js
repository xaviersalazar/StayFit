import math from "./math";
import WorkoutSet from "../classes/WorkoutSet";

// Local variables and helper functions
const FIRST_EXERCISE_SETS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SECOND_EXERCISE_SETS = [1, 2, 3, 4, 5, 6, 7, 8];

const determineRepsForDayOneBenchPress = (set) => {
  switch (set) {
    case 1:
      return "8";

    case 2:
    case 7:
      return "6";

    case 3:
    case 4:
    case 5:
      return "4";

    case 6:
      return "5";

    case 8:
      return "7";

    case 9:
      return "8+";
  }
};

const determineRepsForDayOneOverheadPress = (set) => {
  switch (set) {
    case 1:
    case 2:
    case 4:
      return "5";

    case 3:
      return "3";

    case 5:
      return "7";

    case 6:
      return "4";

    case 7:
      return "6";

    case 8:
      return "8";
  }
};

// Exported helper functions
const createBenchPressDayOneSets = (trainingMax) => {
  return FIRST_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightDayOne(trainingMax, "overheadPress", set),
      determineRepsForDayOneBenchPress(set)
    );
  });
};

const createOverheadPressDayOneSets = (trainingMax) => {
  return SECOND_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightDayOne(trainingMax, "benchPress", set),
      determineRepsForDayOneOverheadPress(set)
    );
  });
};

const utility = {
  createBenchPressDayOneSets,
  createOverheadPressDayOneSets,
};

export default utility;
