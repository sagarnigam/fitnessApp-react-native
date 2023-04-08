import axios from 'axios';
import {ROUTINES} from '../mock-data/routine-data';
import {RoutineInfo} from '../models/routines';

export const getRoutineData = (): RoutineInfo[] => {
  return ROUTINES;
};
