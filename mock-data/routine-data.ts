import {RoutineInfo} from '../models/routines';

export const ROUTINES: RoutineInfo[] = [
  {
    id: '1',
    name: 'Routine 1',
    durationWeeks: 4,
    exercise: {
      'Day 1': [
        {
          name: 'Chest Press',
          sets: {
            'Set 1': [10, 15],
            'Set 2': [10, 15],
            'Set 3': [15, 8],
            'Set 4': [17.5, 6],
          },
          type: 'normal',
        },
        {
          name: 'DB Incline chest Press',
          sets: {
            'Set 1': [10, 15],
            'Set 2': [10, 15],
            'Set 3': [12, 8],
            'Set 4': [15, 6],
          },
          type: 'normal',
        },
        {
          name: 'Cable Chest Fly',
          sets: {
            'Set 1': [10, 15],
            'Set 2': [10, 12],
            'Set 3': [10, 10],
          },
          type: 'normal',
        },
        {
          name: 'Triceps Pushdown',
          sets: {
            'Set 1': [7.5, 12],
            'Set 2': [7.5, 12],
            'Set 3': [7.5, 12],
          },
          type: 'normal',
        },
        {
          name: 'Skull Crusher',
          sets: {
            'Set 1': [5, 12],
            'Set 2': [7.5, 10],
            'Set 3': [10, 8],
          },
          type: 'normal',
        },
        {
          name: 'Pull ups',
          sets: {
            'Set 1': [0, 5],
            'Set 2': [0, 7],
            'Set 3': [0, 10],
          },
          type: 'normal',
        },
      ],
      'Day 2': [
        {
          name: 'Barbell Hip thrust',
          type: 'normal',
          sets: {
            'Set 1': [10, 20],
            'Set 2': [10, 20],
          },
        },
        {
          name: 'Barbell Back Squat (WUS)',
          type: 'normal',
          sets: {
            'Set 1': [10, 6],
            'Set 2': [10, 6],
            'Set 3': [10, 6],
          },
        },
        {
          name: 'Barbell Back Squat',
          type: 'normal',
          sets: {
            'Set 1': [20, 6],
            'Set 2': [20, 6],
            'Set 3': [20, 6],
            'Set 4': [20, 6],
          },
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Stiff Leg Deadlift',
              type: 'normal',
              sets: {
                'Set 1': [10, 15],
                'Set 2': [10, 15],
                'Set 3': [10, 15],
              },
            },
            {
              name: 'DB Bulgarian Split Squats (Both Sides)',
              type: 'normal',
              sets: {
                'Set 1': [10, 10],
                'Set 2': [10, 10],
                'Set 3': [10, 10],
              },
            },
          ],
        },
        {
          type: 'gaintset',
          exercise: [
            {
              name: 'Lying leg Curls',
              type: 'normal',
              sets: {
                'Set 1': [10, 15],
                'Set 2': [10, 15],
                'Set 3': [10, 15],
                'Set 4': [10, 15],
              },
            },
            {
              name: 'Leg Press',
              type: 'normal',
              sets: {
                'Set 1': [10, 10],
                'Set 2': [10, 10],
                'Set 3': [10, 10],
                'Set 4': [10, 10],
              },
            },
            {
              name: 'Superman',
              type: 'normal',
              sets: {
                'Set 1': [0, 10],
                'Set 2': [0, 10],
                'Set 3': [0, 10],
                'Set 4': [0, 10],
              },
            },
            {
              name: 'Kettlebell swings',
              type: 'normal',
              sets: {
                'Set 1': [10, 5],
                'Set 2': [10, 5],
                'Set 3': [10, 5],
                'Set 4': [10, 5],
              },
            },
          ],
        },
      ],
      'Day 3': [],
      'Day 4': [],
      'Day 5': [],
      'Day 6': [],
      'Day 7': [],
      'Day 8': [],
      'Day 9': [],
      'Day 10': [],
      'Day 11': [],
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
  {
    id: '4',
    name: 'Routine 4',
    durationWeeks: 4,
    exercise: [],
    estTime: '',
  },
  {
    id: '5',
    name: 'Routine 5',
    durationWeeks: 12,
    exercise: [],
    estTime: '',
  },
  {
    id: '6',
    name: 'Routine 6',
    durationWeeks: 6,
    exercise: [],
    estTime: '',
  },
  {
    id: '7',
    name: 'Routine 7',
    durationWeeks: 4,
    exercise: [],
    estTime: '',
  },
  {
    id: '8',
    name: 'Routine 8',
    durationWeeks: 12,
    exercise: [],
    estTime: '',
  },
  {
    id: '9',
    name: 'Routine 9',
    durationWeeks: 6,
    exercise: [],
    estTime: '',
  },
];
