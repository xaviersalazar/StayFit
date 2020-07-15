// Local helper functions
const calculateSetTrainingMaxPercentageDayOneBenchPress = (set) => {
  switch (set) {
    case 1:
      return 0.65;

    case 2:
      return 0.75;

    case 3:
    case 4:
    case 5:
      return 0.85;

    case 6:
      return 0.8;

    case 7:
      return 0.75;

    case 8:
      return 0.7;

    case 9:
      return 0.65;
  }
};

const calculateSetTrainingMaxPercentageDayOneOverheadPress = (set) => {
  switch (set) {
    case 1:
      return 0.5;

    case 2:
      return 0.6;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0.7;
  }
};

const calculateSetTrainingMaxPercentageMainExercise = (set) => {
  switch (set) {
    case 1:
      return 0.75;

    case 2:
      return 0.85;

    case 3:
      return 0.95;

    case 4:
      return 0.9;

    case 5:
      return 0.85;

    case 6:
      return 0.8;

    case 7:
      return 0.75;

    case 8:
      return 0.7;

    case 9:
      return 0.65;
  }
};

const calculateSetTrainingMaxPercentageDayTwoSumoDeadlift = (set) => {
  switch (set) {
    case 1:
      return 0.5;

    case 2:
      return 0.6;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0.7;
  }
};

const calculateSetTrainingMaxPercentageDayThreeInclineBenchPress = (set) => {
  switch (set) {
    case 1:
      return 0.4;

    case 2:
      return 0.5;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0.6;
  }
};

const calculateSetTrainingMaxPercentageDayFourFrontSquat = (set) => {
  switch (set) {
    case 1:
      return 0.35;

    case 2:
      return 0.45;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0.55;
  }
};

const calculateSetTrainingMaxPercentageDayFiveCloseGripBenchPress = (set) => {
  switch (set) {
    case 1:
      return 0.4;

    case 2:
      return 0.5;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0.6;
  }
};

// Exported helper functions
const calculateTrainingMax = (oneRepMax) => {
  return Math.ceil((oneRepMax * 0.9) / 5) * 5;
};

const calculateIncreaseTrainingMax = (currTrainingMax, repsCompleted) => {
  switch (repsCompleted) {
    case repsCompleted >= 0 && repsCompleted <= 1:
      return currTrainingMax;

    case repsCompleted >= 2 && repsCompleted <= 3:
      return currTrainingMax + 5;

    case repsCompleted >= 4 && repsCompleted <= 5:
      return currTrainingMax + 10;

    case repsCompleted > 5:
      return currTrainingMax + 15;
  }
};

const calculateSetWeightMainExercise = (trainingMax, set) => {
  return Math.round(
    ((trainingMax * calculateSetTrainingMaxPercentageMainExercise(set)) / 5) * 5
  );
};

const calculateSetWeight = (trainingMax, exercise, set) => {
  switch (exercise) {
    case "benchPress":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayOneBenchPress(set)) /
            5
        ) * 5
      );

    case "overheadPress":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayOneOverheadPress(set)) /
            5
        ) * 5
      );

    case "sumoDeadlift":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayTwoSumoDeadlift(set)) /
            5
        ) * 5
      );

    case "inclineBenchPress":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayThreeInclineBenchPress(set)) /
            5
        ) * 5
      );

    case "frontSquat":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayFourFrontSquat(set)) /
            5
        ) * 5
      );

    case "closeGripBenchPress":
      return (
        Math.round(
          (trainingMax *
            calculateSetTrainingMaxPercentageDayFiveCloseGripBenchPress(set)) /
            5
        ) * 5
      );
  }
};

const math = {
  calculateTrainingMax,
  calculateIncreaseTrainingMax,
  calculateSetWeightMainExercise,
  calculateSetWeight,
};

export default math;
