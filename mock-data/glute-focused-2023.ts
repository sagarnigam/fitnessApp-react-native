import {EXERCISES} from './exercise-data';

export const SELF_GLUTE_ROUTINE = {
  key: '5',
  name: 'Glute Focused',
  durationWeeks: 4,
  exercise: {
    'Daily - Glutes Primer': [
      {
        name: EXERCISES.gluteBridges,
        type: 'normal',
        description: '3 sets, 15 sec hold',
      },
      {
        name: EXERCISES.donkeyKickBacks,
        type: 'normal',
        description: '3 sets, 15 reps',
      },
      {
        name: EXERCISES.bandedClams,
        type: 'normal',
        description: '3 sets, 15 reps',
      },
      {
        name: EXERCISES.bandedKickBacks,
        type: 'normal',
        description: '3 sets, 15 reps',
      },
    ],
    'Day 1 - Legs': [
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '4 sets, 8-10 Reps, 1.5 min rest',
      },
      {
        name: EXERCISES.romanianDeadLifts,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.sumoSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 2 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.latpullDown,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 3 - Legs': [
      {
        name: EXERCISES.sumoDeadlift,
        type: 'normal',
        description: '4 sets, 6-8 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbStepUps,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bulgarianSplitSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.reverseLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 4 - Rest': [],
    'Day 5 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 6 - Legs': [
      {
        name: EXERCISES.hipThrust,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.singleLegRomanians,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.curtsyLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.goodMornings,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 7 - Rest': [],
    'Day 8 - Legs': [
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '4 sets, 8-10 Reps, 1.5 min rest',
      },
      {
        name: EXERCISES.romanianDeadLifts,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.sumoSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 9 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.latpullDown,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 10 - Legs': [
      {
        name: EXERCISES.sumoDeadlift,
        type: 'normal',
        description: '4 sets, 6-8 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbStepUps,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bulgarianSplitSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.reverseLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 11 - Rest': [],
    'Day 12 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 13 - Legs': [
      {
        name: EXERCISES.hipThrust,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.singleLegRomanians,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.curtsyLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.goodMornings,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 14 - Rest': [],
    'Day 15 - Legs': [
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '4 sets, 8-10 Reps, 1.5 min rest',
      },
      {
        name: EXERCISES.romanianDeadLifts,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.sumoSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 16 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.latpullDown,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 17 - Legs': [
      {
        name: EXERCISES.sumoDeadlift,
        type: 'normal',
        description: '4 sets, 6-8 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbStepUps,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bulgarianSplitSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.reverseLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 18 - Rest': [],
    'Day 19 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 20 - Legs': [
      {
        name: EXERCISES.hipThrust,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.singleLegRomanians,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.curtsyLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.goodMornings,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 21 - Rest': [],
    'Day 22 - Legs': [
      {
        name: EXERCISES.squats,
        type: 'normal',
        description: '4 sets, 8-10 Reps, 1.5 min rest',
      },
      {
        name: EXERCISES.romanianDeadLifts,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.sumoSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 23 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.latpullDown,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 24 - Legs': [
      {
        name: EXERCISES.sumoDeadlift,
        type: 'normal',
        description: '4 sets, 6-8 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbStepUps,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.bulgarianSplitSquats,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.reverseLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.calfRaises,
        type: 'normal',
        description: '4 sets, 15-20 Reps, 1 min rest',
      },
    ],
    'Day 25 - Rest': [],
    'Day 26 - Upper Body': [
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '2 sets, 10-15 Reps, 1 min rest',
      },
      {
        name: EXERCISES.inclineBench,
        type: 'normal',
        description: '3 sets, 8-10 Reps, 1 min rest',
      },
      {
        name: EXERCISES.cableFly,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.shoulderPress,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.lateralRaises,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbRow,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        type: 'superset',
        exercise: [
          {
            name: EXERCISES.cablePushDown,
            type: 'normal',
            description: '3 sets, 12 Reps, No rest',
          },
          {
            name: EXERCISES.cableHammer,
            type: 'normal',
            description: '3 sets, 12 Reps, 2 min rest',
          },
        ],
      },
    ],
    'Day 27 - Legs': [
      {
        name: EXERCISES.hipThrust,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.singleLegRomanians,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.curtsyLunges,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.goodMornings,
        type: 'normal',
        description: '4 sets, 10-12 Reps, 1 min rest',
      },
      {
        name: EXERCISES.dbHipAbduction,
        type: 'normal',
        description: '3 sets, 10-12 Reps, 1 min rest',
      },
    ],
    'Day 28 - Rest': [],
  },
  estTime: '',
};
