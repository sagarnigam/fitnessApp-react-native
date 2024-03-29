import {EXERCISES} from './exercise-data';
import {GETTING_STRONG_ROUTINE} from './getting-strong';
import {SELF_GLUTE_ROUTINE} from './glute-focused-2023';
import {MB_JC_ROUTINE} from './routine-mb-jc';

export const ROUTINES: any[] = [
  GETTING_STRONG_ROUTINE,
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
          name: 'BB Deadlift',
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
      'Day 15': [],
    },
    estTime: '',
  },
  {
    key: '3',
    name: 'Shredded',
    durationWeeks: 6,
    exercise: {
      'Day 1': [
        {
          name: EXERCISES.pushup,
          type: 'normal',
          description: '1 set, 100 reps',
        },
        {
          name: EXERCISES.inclineBench,
          type: 'normal',
          description: '3 sets, 8-10 Reps, 1 min rest',
        },
        {
          name: EXERCISES.benchPress,
          type: 'normal',
          description: '3 sets, 8-10 Reps, 1 min rest',
        },
        {
          name: EXERCISES.lowerCable,
          type: 'normal',
          description: '4 sets, 15 Reps, 1 min rest',
        },
        {
          name: EXERCISES.cablePress,
          type: 'normal',
          description: '4 sets, 15 Reps, 1 min rest',
        },
        {
          name: EXERCISES.upperCable,
          type: 'normal',
          description: '4 sets, 15 Reps, 1 min rest',
        },
        {
          name: EXERCISES.pushup,
          type: 'normal',
          description: '1 set, till failure',
        },
      ],
      'Day 2': [
        {
          type: 'superset',
          exercise: [
            {
              name: EXERCISES.bbCurl,
              type: 'normal',
              description: '2 sets, 15 Reps, No rest',
            },
            {
              name: EXERCISES.ezCrusher,
              type: 'normal',
              description: '2 sets, 15 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: EXERCISES.bbCurl,
              type: 'normal',
              description: '4 sets, 12 Reps, No rest',
            },
            {
              name: EXERCISES.ezCrusher,
              type: 'normal',
              description: '4 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: EXERCISES.dbCurl,
              type: 'normal',
              description: '4 sets, 12 Reps, No rest',
            },
            {
              name: EXERCISES.cablePushDown,
              type: 'normal',
              description: '4 sets, 12 Reps, 1 min rest',
            },
          ],
        },
        {
          type: 'superset',
          exercise: [
            {
              name: EXERCISES.cableHammer,
              type: 'normal',
              description: '4 sets, 12 Reps, No rest',
            },
            {
              name: EXERCISES.cablePushDown,
              type: 'normal',
              description: '4 sets, 12 Reps, 1 min rest',
            },
          ],
        },
      ],
    },
    estTime: '',
  },
  MB_JC_ROUTINE,
  SELF_GLUTE_ROUTINE,
];
