import { Task } from './task';
import moment from 'moment/src/moment';

const localMoment = moment;
localMoment.locale('en');

export const TASKS: Task[] = [
    {
        taskId: 1,
        summary: 'Implement Channel Service',
        description: 'Implement Channel Service for the feature which will invoke the factories.',
        startDate: localMoment('2018-07-02').toDate(),
        endDate: localMoment('2018-07-06').toDate(),
        priority: 3,
        status: 0
    },
    {
        taskId: 2,
        summary: 'Implement Front End Service',
        description: 'Implement Front End Service for the feature which will invoke the Channel Service',
        startDate: localMoment('2018-07-09').toDate(),
        endDate: localMoment('2018-07-13').toDate(),
        priority: 3,
        status: 0
    },
    {
        taskId: 3,
        summary: 'Implement Front End',
        description: 'Implement Front End for the feature which will invoke the Front End Service',
        startDate: localMoment('2018-07-16').toDate(),
        endDate: localMoment('2018-07-20').toDate(),
        priority: 3,
        status: 0
    },
    {
        taskId: 4,
        parentId: 1,
        summary: 'Create Channel Service Repository'
    },
    {
        taskId: 5,
        parentId: 1,
        summary: 'Create ASP.Net Core WebApi for Channel Service'
    },
    {
        taskId: 6,
        parentId: 1,
        summary: 'Create CI/CD pipeline for Channel Service'
    },
    {
        taskId: 7,
        parentId: 2,
        summary: 'Create Front End Service Repository'
    },
    {
        taskId: 8,
        parentId: 2,
        summary: 'Create Node.js service for Front End Service'
    },
    {
        taskId: 9,
        parentId: 2,
        summary: 'Create CI/CD pipeline for Front End Service'
    },
    {
        taskId: 10,
        parentId: 3,
        summary: 'Create Front End Repository'
    },
    {
        taskId: 11,
        parentId: 3,
        summary: 'Create React/Redux Implementation of the Front End'
    },
    {
        taskId: 12,
        parentId: 3,
        summary: 'Create CI/CD pipeline for Front End'
    }
  ];
