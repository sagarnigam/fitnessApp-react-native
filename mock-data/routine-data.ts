import {RoutineInfo} from '../models/routines';

export const ROUTINES: any[] = [
  {
    id: '1',
    name: 'Getting Strong',
    durationWeeks: 4,
    exercise: {
      'Day 1': [
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
      'Day 2': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 3': [],
      'Day 4': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 5': [],
      'Day 6': [],
      'Day 7': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 8': [],
      'Day 9': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 10': [],
      'Day 11': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 12': [],
      'Day 13': [],
      'Day 14': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 15': [],
      'Day 16': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 17': [],
      'Day 18': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 19': [],
      'Day 20': [],
      'Day 21': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 22': [],
      'Day 23': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 24': [],
      'Day 25': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 26': [],
      'Day 27': [],
      'Day 28': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 29': [],
      'Day 30': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 31': [],
      'Day 32': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 33': [],
      'Day 34': [],
      'Day 35': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 36': [],
      'Day 37': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 38': [],
      'Day 39': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 40': [],
      'Day 41': [],
      'Day 42': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 43': [],
      'Day 44': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 45': [],
      'Day 46': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 47': [],
      'Day 48': [],
      'Day 49': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 50': [],
      'Day 51': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 52': [],
      'Day 53': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 54': [],
      'Day 55': [],
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
