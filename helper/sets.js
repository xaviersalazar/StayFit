import math from "./math";
import WorkoutSet from "../classes/WorkoutSet";

// Local variables and helper functions
const FIRST_EXERCISE_SETS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SECOND_EXERCISE_SETS = [1, 2, 3, 4, 5, 6, 7, 8];

const determineRepsForMainExercise = (set) => {
  switch (set) {
    case 1:
    case 7:
    case 8:
      return "5";

    case 2:
      return "3";

    case 3:
      return "1+";

    case 4:
    case 5:
    case 6:
      return "3";

    case 9:
      return "5+";
  }
};

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

const determineRepsForExercise = (set) => {
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
      determineRepsForExercise(set)
    );
  });
};

const createSquatDayTwoSets = (trainingMax) => {
  return FIRST_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightMainExercise(trainingMax, set),
      determineRepsForMainExercise(set)
    );
  });
};

const createSumoDeadliftDayTwoSets = (trainingMax) => {
  return SECOND_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeight(trainingMax, "sumoDeadlift", set),
      determineRepsForExercise(set)
    );
  });
};

const createOverheadPressDayThreeSets = (trainingMax) => {
  return FIRST_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightMainExercise(trainingMax, set),
      determineRepsForMainExercise(set)
    );
  });
};

const createInclineBenchPressDayThreeSets = (trainingMax) => {
  return SECOND_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeight(trainingMax, "inclineBenchPress", set),
      determineRepsForExercise(set)
    );
  });
};

const createDeadliftDayFourSets = (trainingMax) => {
  return FIRST_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightMainExercise(trainingMax, set),
      determineRepsForMainExercise(set)
    );
  });
};

const createFrontSquatDayFourSets = (trainingMax) => {
  return SECOND_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeight(trainingMax, "frontSquat", set),
      determineRepsForExercise(set)
    );
  });
};

const createBenchPressDayFiveSets = (trainingMax) => {
  return FIRST_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeightMainExercise(trainingMax, set),
      determineRepsForMainExercise(set)
    );
  });
};

const createCloseGripBenchPressDayFiveSets = (trainingMax) => {
  return SECOND_EXERCISE_SETS.map((set) => {
    return new WorkoutSet(
      `set${set}`,
      `SET ${set}`,
      math.calculateSetWeight(trainingMax, "closeGripBenchPress", set),
      determineRepsForExercise(set)
    );
  });
};

const sets = {
  createBenchPressDayOneSets,
  createOverheadPressDayOneSets,
  createSquatDayTwoSets,
  createSumoDeadliftDayTwoSets,
  createOverheadPressDayThreeSets,
  createInclineBenchPressDayThreeSets,
  createDeadliftDayFourSets,
  createFrontSquatDayFourSets,
  createBenchPressDayFiveSets,
  createCloseGripBenchPressDayFiveSets,
};

export default sets;
