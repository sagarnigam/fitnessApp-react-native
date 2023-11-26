import {EXERCISES} from './exercise-data';

export const MB_JC_ROUTINE = {
  key: '4',
  name: 'Muscle Building - Jay Cutler',
  durationWeeks: 8,
  exercise: {
    'Day 1 - Chest & Calves': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.benchPress,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.chestDips,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.SMCalfRaises,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 2 - Arms': [
      {
        name: `${EXERCISES.cablePushDown} - Bar`,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: `${EXERCISES.cablePushDown} - Bar`,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.tricepDips,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.ezCrusher,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.benchPress,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: `${EXERCISES.cablePushDown} - Rope`,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bbCurl,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.ezPreacherCurl,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbCurl,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: `${EXERCISES.dbCurl} - Hammer`,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 3 - Legs': [
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbStepUps,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lunges,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 4 - Back': [
      {
        name: EXERCISES.reverseLatPullDown,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.reverseLatPullDown,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.tBarRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableRow,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bbDeadlift,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.backExtension,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 5 - Shoulders': [
      {
        name: EXERCISES.seatedDBLateralRaises,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.seatedDBLateralRaises,
        type: 'normal',
        description: '6 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.standShoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bbFrontRaises,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableLateralRaises,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.rearDeltFly,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbShrug,
        type: 'normal',
        description: '6 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 6 - Legs': [
      {
        name: EXERCISES.rdl,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.rdl,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.hipThrust,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.splitSquats,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 7 - Rest': [],
  },
  estTime: '',
};
