export const GETTING_STRONG_ROUTINE = {
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
};
