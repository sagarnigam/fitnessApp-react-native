import {RoutineInfo} from '../models/routines';

export const ROUTINES: RoutineInfo[] = [
  {
    key: '1',
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
      'Day 3': [
        {
          name: 'Push Ups',
          type: 'normal',
          description: '2 sets, 10 - 20 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '2 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '4 sets, 5/8/8/8 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Seated Shoulder Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Row (Both Sides)',
              type: 'normal',
              description: '3 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Facepull',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Standing Curls',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Triceps',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Lateral Raises',
              type: 'normal',
              description: '4 sets, 10 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 4': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 5': [
        {
          name: 'DB Stiff Leg Deadlift',
          type: 'normal',
          description: '2 sets, 20 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift (WUP)',
          type: 'normal',
          description: '3 sets, 3-5 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift',
          type: 'normal',
          description: '3 sets, 5 Reps, 3 min rest',
        },
        {
          name: 'BB Deadlift (PR)',
          type: 'normal',
          description: '1 sets, 5-10 Reps, 2 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Press',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'BB Good Morning',
              type: 'normal',
              description: '3 sets, 10 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Leg Extensions',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'BB Hip Thrust',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'BB Bentover Row',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Plank',
              type: 'normal',
              description: '3 sets, 45 secs, 2 min rest',
            },
          ],
        },
      ],
      'Day 6': [
        {
          name: 'Close Grip Bench Press',
          type: 'normal',
          description: '2 sets, 20 Reps, 1 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press (PR)',
          type: 'normal',
          description: '1 sets, 5-10 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '3 sets, 6 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Military Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Lateral Raise',
              type: 'normal',
              description: '3 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'DB Incline Press',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Lat Pull Down',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Band Pull Apart',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Push Down',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Alternating Hammer Curls',
              type: 'normal',
              description: '4 sets, 10 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 7': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 8': [
        {
          name: 'Deadlift ',
          type: 'normal',
          description: '2 sets, 20 Reps, 2 min rest',
        },
        {
          name: 'BB Squats (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Squats (PR)',
          type: 'normal',
          description: '1 sets, 5-10 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift',
          type: 'normal',
          description: '3 sets, 7 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Kettlebell Deadlift',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'DB Split Squats',
              type: 'normal',
              description: '4 sets, 10 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Leg Curls',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Goblet Squats',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Superman',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Kettlebell windmill',
              type: 'normal',
              description: '4 sets, 8 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 9': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 10': [
        {
          name: 'Push Ups',
          type: 'normal',
          description: '2 sets, 10 - 20 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '3 sets, 5/8/8/8 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Seated Shoulder Press',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Row (Both Sides)',
              type: 'normal',
              description: '4 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Band Pull Apart',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Standing Curls',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Cable Triceps',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Cable Lateral Raises',
              type: 'normal',
              description: '4 sets, 15 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 11': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 12': [
        {
          name: 'DB Stiff Leg Deadlift',
          type: 'normal',
          description: '2 sets, 20 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift (WUP)',
          type: 'normal',
          description: '3 sets, 3-5 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift',
          type: 'normal',
          description: '4 sets, 6 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Press',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'BB Good Morning',
              type: 'normal',
              description: '4 sets, 10 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Leg Extensions',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'BB Hip Thrust',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'BB Bentover Row',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'Plank',
              type: 'normal',
              description: '3 sets, 45 secs, 2 min rest',
            },
          ],
        },
      ],
      'Day 13': [
        {
          name: 'Close Grip Bench Press',
          type: 'normal',
          description: '2 sets, 20 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '4 sets, 5/6/6/6 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Military Press',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Lateral Raise',
              type: 'normal',
              description: '4 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'DB Incline Press',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Lat Pull Down',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Band Pull Apart',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Cable Push Down',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Alternating Hammer Curls',
              type: 'normal',
              description: '4 sets, 15 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 14': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 15': [
        {
          name: 'Barbell Hip thrust',
          type: 'normal',
          description: '2 sets, 20 Reps, 1 min rest',
        },
        {
          name: 'Barbell Back Squat (WUS)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'Barbell Back Squat',
          type: 'normal',
          description: '3 sets, 5 Reps, 3 min rest',
        },
        {
          name: 'Barbell Back Squat',
          type: 'normal',
          description: '2 sets, 8 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Stiff Leg Deadlift',
              type: 'normal',
              description: '4 sets, 18-20 Reps, No rest',
            },
            {
              name: 'DB Bulgarian Split Squats (Both Sides)',
              type: 'normal',
              description: '4 sets, 12 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gaintset',
          exercise: [
            {
              name: 'Lying leg Curls',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Goblet squats',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Superman',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Kettlebell swings',
              type: 'normal',
              description: '3 sets, 10 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 16': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 17': [
        {
          name: 'Push Ups',
          type: 'normal',
          description: '2 sets, 10 - 20 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press Max',
          type: 'normal',
          description: '1 sets, 5-8 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '4 sets, 8 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Seated Shoulder Press',
              type: 'normal',
              description: '5 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Row (Both Sides)',
              type: 'normal',
              description: '5 sets, 40 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Facepull',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Standing Curls',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Triceps',
              type: 'normal',
              description: '4 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Lateral Raises',
              type: 'normal',
              description: '4 sets, 15 Reps, 2 min rest',
            },
          ],
        },
      ],
      'Day 18': [
        {
          name: 'Rest Day',
          type: 'normal',
          description: 'Rest Day with light stretching',
        },
      ],
      'Day 19': [
        {
          name: 'Cable pullthrough',
          type: 'normal',
          description: '2 sets, 20 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Deadlift',
          type: 'normal',
          description: '3 sets, 5 Reps, 3 min rest',
        },
        {
          name: 'BB Deadlift (PR)',
          type: 'normal',
          description: '1 sets, 5-10 Reps, 4 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Press',
              type: 'normal',
              description: '4 sets, 20 Reps, No rest',
            },
            {
              name: 'BB Good Morning',
              type: 'normal',
              description: '4 sets, 12 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Goblet Squaat',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'BB Stiff leg deadlift',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Cable Row',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Plank',
              type: 'normal',
              description: '3 sets, 45 secs, 2 min rest',
            },
          ],
        },
      ],
      'Day 20': [
        {
          name: 'Close Grip Bench Press',
          type: 'normal',
          description: '2 sets, 20 Reps, 1 min rest',
        },
        {
          name: 'BB Bench Press (WUP)',
          type: 'normal',
          description: '3 sets, 5 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '3 sets, 5-10 Reps, 2 min rest',
        },
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '2 sets, 8 Reps, 3 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Military Press',
              type: 'normal',
              description: '5 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Lateral Raise',
              type: 'normal',
              description: '5 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Cable Press',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Lat Pull Down',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Band Pull Apart',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Cable Push Down',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Alternating Hammer Curls',
              type: 'normal',
              description: '3 sets, 30 Reps, 2 min rest',
            },
          ],
        },
      ],
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
    key: '2',
    name: '15 Day Shred',
    durationWeeks: 2,
    exercise: {
      'Day 1': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'Incline DB Press',
              type: 'normal',
              description: '3 sets, 5 Reps, No rest',
            },
            {
              name: 'BB to Neck',
              type: 'normal',
              description: '3 sets, 15 Reps, 1.5 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Push Ups',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'DB Press',
              type: 'normal',
              description: '3 sets, 15 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Incline Cable Press',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'Incline Cable fly',
              type: 'normal',
              description: '4 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Close Grip BB Press',
          type: 'normal',
          description: '3 sets, 12 Reps, 1 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Overhead Tricep Extention',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Reverse Pushdown',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Rope Extension',
              type: 'normal',
              description: '2 sets, 15 Reps, No rest',
            },
            {
              name: 'Close Grip Push Up',
              type: 'normal',
              description: '2 sets, Max Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'gaintset',
          exercise: [
            {
              name: 'Lying leg Raises',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Ab Roller',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Situp',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
          ],
        },
      ],
      'Day 2': [
        {
          name: 'BB Front Squat',
          type: 'normal',
          description: '5 sets, 3-5 Reps, 2 min rest',
        },
        {
          name: 'Straight Leg Deadlift',
          type: 'normal',
          description: '3 sets, 10 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Press',
              type: 'normal',
              description: '4 sets, 20 Reps, No rest',
            },
            {
              name: 'DB Walking Lunges',
              type: 'normal',
              description: '4 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Leg Extension',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Leg Curls',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Box Jumps',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
          ],
        },
      ],
      'Day 3': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'Lat Pull Down',
              type: 'normal',
              description: '5 sets, 8 Reps, No rest',
            },
            {
              name: 'Behind Neck Pull Down',
              type: 'normal',
              description: '5 sets, 8 Reps, 2 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'V Bar Row',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'DB Hammer Curl',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Cable One Arm Row',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Rope Curls',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'BB Bent Over Row',
              type: 'normal',
              description: '3 sets, 11 Reps, No rest',
            },
            {
              name: 'BB Curl',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'DB Back Flies',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'Concentration Curl',
              type: 'normal',
              description: '3 sets, 15 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Hanging Leg Raises',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Plank',
              type: 'normal',
              description: '3 sets, 1 min, 1 min rest',
            },
          ],
        },
      ],
      'Day 4': [
        {
          name: 'DB Rowing',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'DB Standing Shoulder Press',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Chin Ups / Lat Pull Down',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Bench Press',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Walking Lunges',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Sit Ups',
          type: 'normal',
          description: '1 sets, 50 Reps, 0 min rest',
        },
      ],
      'Day 5': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg extensions',
              type: 'normal',
              description: '1 sets, 50 Reps, No rest',
            },
            {
              name: 'Bodyweight Walking Lunges',
              type: 'normal',
              description: '1 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          name: 'Leg Extensions',
          type: 'normal',
          description: '3 sets, 10 Reps, 1 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Curls',
              type: 'normal',
              description: '3 sets, 50 Reps, No rest',
            },
            {
              name: 'DB StraightLeg Deadlift',
              type: 'normal',
              description: '3 sets, 20 Reps, 2 min rest',
            },
          ],
        },
        {
          name: 'Leg Curls',
          type: 'normal',
          description: '3 sets, 10 Reps, 1 min rest',
        },
        {
          name: 'DB Shoulder Press',
          type: 'normal',
          description: '3 sets, 8 Reps, 1 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'DB Arnold Press',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'BB Behind Press',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'DB Side Raises',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Cable SIde Raises',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
      ],
      'Day 6': [
        {
          name: 'BB Bench Press',
          type: 'normal',
          description: '5 sets, 5-10 Reps, 1.5 min rest',
        },
        {
          name: 'Cable Rowing',
          type: 'normal',
          description: '5 sets, 6 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Bench Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Cable Rowing',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Incline DB Press',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Lat Pull Down',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'DB Bent Over ROw',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Cable Flies',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Chin Ups',
              type: 'normal',
              description: '1 sets, 25 Reps, No rest',
            },
            {
              name: 'Push Ups',
              type: 'normal',
              description: '1 sets, 25 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'Leg Pull In',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Lyiing Leg Raises',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Mountain Climbers',
              type: 'normal',
              description: '3 sets, 20 Reps, 1 min rest',
            },
          ],
        },
      ],
      'Day 7': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'Standing EZ Curl',
              type: 'normal',
              description: '3 sets, 6 Reps, No rest',
            },
            {
              name: 'Skull Crusher',
              type: 'normal',
              description: '3 sets, 6 Reps, 1.5 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'DB Curl',
              type: 'normal',
              description: '3 sets, 8 Reps, No rest',
            },
            {
              name: 'French Press',
              type: 'normal',
              description: '3 sets, 8 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Rope Curl',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Over Head Extension',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'gaintset',
          exercise: [
            {
              name: 'Hammer Curl',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Zottoman Curl',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Close Grip Press',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
      ],
      'Day 8': [
        {
          name: 'Leg Extensions',
          type: 'normal',
          description: '5 sets, 20 Reps, 0.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Extensions',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Walking Lunges',
              type: 'normal',
              description: '3 sets, 30 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Box Jumps',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Squats',
              type: 'normal',
              description: '3 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Lunges',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'Hack Squats',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'BB Deadlift',
              type: 'normal',
              description: '3 sets, 8 Reps, No rest',
            },
            {
              name: 'Leg Curls',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
      ],
      'Day 9': [
        {
          name: 'DB Rowing',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Walking Lunges',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Push Ups',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Kettlebell Swings',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Sit Ups',
          type: 'normal',
          description: '1 sets, 30 Reps, 0 min rest',
        },
        {
          name: 'Chin Ups / Lat Pull Down',
          type: 'normal',
          description: '1 sets, 50 Reps, 0 min rest',
        },
      ],
      'Day 10': [
        {
          name: 'BB Shoulder Press (Drop Set)',
          type: 'normal',
          description: '4 sets, 10 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Arnold DB Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'One Arm DB Press',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'gainset',
          exercise: [
            {
              name: 'BB Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Front DB Raises',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Side DB Raises',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Shrugs',
          type: 'normal',
          description: '3 sets, 20 Reps, 1 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Rear Delt Cable Flies',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Rear Delt DB Flies',
              type: 'normal',
              description: '3 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Leg Raises',
          type: 'normal',
          description: '10 sets, 10 Reps, 1 min rest',
        },
      ],
      'Day 11': [
        {
          name: 'Leg Press',
          type: 'normal',
          description: '5 sets, 20 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg Press',
              type: 'normal',
              description: '5 sets, 20 Reps, No rest',
            },
            {
              name: 'DB Walking Lunges',
              type: 'normal',
              description: '5 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Leg extension',
              type: 'normal',
              description: '3 sets, 20 Reps, No rest',
            },
            {
              name: 'Sissy Squats',
              type: 'normal',
              description: '3 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Lying Leg Raises',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'DB Situps',
              type: 'normal',
              description: '3 sets, 15 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Hanging Leg Raises',
          type: 'normal',
          description: '4 sets, 10 Reps, 1.5 min rest',
        },
      ],
      'Day 12': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'One Arm Cable Row',
              type: 'normal',
              description: '3 sets, 12 Reps, No rest',
            },
            {
              name: 'DB Pullover',
              type: 'normal',
              description: '3 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Rack Pulls',
          type: 'normal',
          description: '3 sets, 6 Reps, 1.5 min rest',
        },
        {
          name: 'Lat Pull Down',
          type: 'normal',
          description: '3 sets, 10 Reps, 1.5 min rest',
        },
        {
          name: 'BB Curl',
          type: 'normal',
          description: '3 sets, 4-4-4 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Alternating DB Curl',
              type: 'normal',
              description: '3 sets, 8/8 Reps, No rest',
            },
            {
              name: 'One Arm Cable Curl',
              type: 'normal',
              description: '3 sets, 10/10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Hammer DB Curl',
              type: 'normal',
              description: '2 sets, 12 Reps, No rest',
            },
            {
              name: 'FOrearm BB Curl',
              type: 'normal',
              description: '2 sets, 2 Reps, 1 min rest',
            },
          ],
        },
      ],
      'Day 13': [
        {
          name: 'Bench Press (Drop Set)',
          type: 'normal',
          description: '5 sets, 15 Reps, 1.5 min rest',
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Incline BB Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Incline Cable Flies',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Close Grip DB Press',
              type: 'normal',
              description: '3 sets, 10 Reps, No rest',
            },
            {
              name: 'Rope Extension',
              type: 'normal',
              description: '3 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Cable Lateral FLies',
              type: 'normal',
              description: '3 sets, 15 Reps, No rest',
            },
            {
              name: 'CLose Grip Push ups',
              type: 'normal',
              description: '3 sets, 15 Reps, 1 min rest',
            },
          ],
        },
        {
          name: 'Reverse Arm Extensions',
          type: 'normal',
          description: '3 sets, 12 Reps, 1 min rest',
        },
      ],
      'Day 14': [
        {
          name: 'Sit Ups',
          type: 'normal',
          description: '1 sets, 50 Reps, 0 min rest',
        },
        {
          name: 'Push Ups',
          type: 'normal',
          description: '1 sets, 50 Reps, 0 min rest',
        },
        {
          name: 'Plank',
          type: 'normal',
          description: '1 sets, 45 secs, 0 min rest',
        },
        {
          name: 'Jumping Lunges',
          type: 'normal',
          description: '1 sets, 50 Reps, 0 min rest',
        },
        {
          name: 'Mountain Climbers',
          type: 'normal',
          description: '1 sets, 50 secs, 0 min rest',
        },
      ],
      'Day 15': [
        {
          type: 'superset',
          exercise: [
            {
              name: 'Front DB Raises',
              type: 'normal',
              description: '4 sets, 20 Reps, No rest',
            },
            {
              name: 'DB Lateral Raise',
              type: 'normal',
              description: '4 sets, 20 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'BB Press',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'BB Behind Neck',
              type: 'normal',
              description: '4 sets, 10 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Side External Rotation',
              type: 'normal',
              description: '4 sets, 12 Reps, No rest',
            },
            {
              name: 'Cable Side Raises',
              type: 'normal',
              description: '4 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: 'Rear Dealt Flies',
              type: 'normal',
              description: '4 sets, 15 Reps, No rest',
            },
            {
              name: 'DB Shrugs',
              type: 'normal',
              description: '4 sets, 20 Reps, 1 min rest',
            },
          ],
        },
      ],
    },
    estTime: '',
  },
  {
    key: '3',
    name: 'Stretching Routine',
    durationWeeks: 1,
    exercise: [],
    estTime: '',
  },
];
