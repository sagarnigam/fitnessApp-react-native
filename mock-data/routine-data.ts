import {RoutineInfo} from '../models/routines';

export const ROUTINES: any[] = [
  {
    id: '1',
    name: 'Getting Strong',
    durationWeeks: 4,
    exercise: {
      'Day 1': [
        {
          name: 'Chest Press',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
        {
          name: 'DB Incline chest Press',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
        {
          name: 'Cable Chest Fly',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
        {
          name: 'Triceps Pushdown',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
        {
          name: 'Skull Crusher',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
        {
          name: 'Pull ups',
          description: '2 sets, 20 Reps, 1 min rest',
          type: 'normal',
        },
      ],
      'Day 2': [
        {
          name: 'Barbell Hip thrust',
          type: 'normal',
          description: '2 sets, 20 Reps, 1 min rest',
        },
        {
          name: 'Barbell Back Squat (WUS)',
          type: 'normal',
          description: '3 sets, 6 Reps, 2 min rest',
        },
        {
          name: 'Barbell Back Squat',
          type: 'normal',
          description: '4 sets, 6 Reps, 5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Stiff Leg Deadlift',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'DB Bulgarian Split Squats (Both Sides)',
              type: 'normal',
              description: '3 sets, 10 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gaintset',
          exercise: [
            {
              name: 'Lying leg Curls',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Leg Press',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Superman',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Kettlebell swings',
              type: 'normal',
              description: '4 sets, 10 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 3': [],
      'Day 4': [],
      'Day 5': [],
      'Day 6': [],
    },
    estTime: '',
  },
  {
    id: '2',
    name: 'Routine 2',
    durationWeeks: 12,
    exercise: {},
    estTime: '',
  },
  {
    id: '3',
    name: 'Routine 3',
    durationWeeks: 6,
    exercise: [],
    estTime: '',
  },
];
