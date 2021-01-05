import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  title = 'components';
  firstAnswer = {
    answerStatus: 'Submitted',
    answerType: 'EVPResponse',
    created: '2020-12-17T19:06:31.097Z',
    createdBy: 'MFERNANDEZS',
    id: 'f9b5f49e-2ac0-1ea7-3e87-143093cb1b77',
    modified: '2020-12-17T19:06:36.223Z',
    modifiedBy: 'MFERNANDEZS',
    text: '<p>new answer</p>',
  };
  firstComment = {
    answers: [this.firstAnswer],
    commentStatus: 'SaveAsDraft',
    commentType: 'MeetingComment',
    created: 'Thu Dec 17 2020 18:55:05 ',
    createdBy: 'MFERNANDEZ',
    id: 9,
    modified: '2020-12-17T23:55:01.482Z',
    modifiedBy: 'MFERNANDEZ',
    onBehalfOf: '',
    text: '<p>new Comment</p>',
    timeoutToSave: '',
    title: 'New Comment',
  };
  
  secondComment = {
    answers: [],
    commentStatus: 'SaveAsDraft',
    commentType: 'MeetingComment',
    created: 'Thu Dec 17 2020 19:53:06 ',
    createdBy: 'MFERNANDEZ',
    id: 21,
    modified: '2020-12-18T00:53:03.616Z',
    modifiedBy: 'MFERNANDEZ',
    onBehalfOf: '',
    text: '<p>Comment Added</p>',
    timeoutToSave: '',
    title: 'comment added',
  };
  commentSetup = {
    addAnswersPermission: true,
    addCommentPermission: true,
    commentType: undefined,
    comments: [
      this.firstComment,
      this.secondComment
    ],
    deleteAnswersPermission: true,
    deleteCommentPermission: true,
    downloadCommentPermission: true,
    formatDate: 'MM-DD-YYYY',
    userName: 'MFERNANDEZ',
    remainingDays: 4
  };
  data = {
    documentCollection: [
      {
        created: new Date(),
        createdBy: 'Demo user',
        ezshareId: '0123-4567-89',
        id: 45,
        name: 'example.pdf',
        type: 'MainDocument',
        version: '0.1',
      },
    ],
    historyDocumentCollection: [],
  };
  settings = {
    dateFormat: 'dd MMM yyyy',
    disclosureResponse: '',
    documentHistoryTypesCollection: ['MainDocument'],
    documentRestriction: {
      allowedExtensions: ['.pdf'],
      maxFileSize: 4194304,
    },
    expanded: true,
    limit: 1,
    readonly: false,
  };

  timeline = {
    id: '1',
    operationNumber: 'AR-L1151',
    processId: '6224cb2d-45c1-4cb1-a101-1',
    templateCode: 'COMPLETE_PROCESS',
    phases: [
      {
        id: '23',
        name: 'Project Profile',
        status: 'InProgress',
        code: 'PP',
        steps: [
          {
            id: '1',
            code: 'PP.UPLOAD.PACKAGE',
            created: '2020-12-16T12:16:22.590Z',
            createdBy: 'LAZAROP',
            endDate: '2020-12-16T13:19:52.927Z',
            modified: '2020-12-16T13:19:52.927Z',
            modifiedBy: 'MFERNANDEZS',
            name: 'Upload Package and Submit to Division Chief',
            order: '10',
            parentId: 'null',
            startDate: '2020-12-16T12:16:22.580Z',
            status: 'Completed',
            type: 'Manual',
          },
          {
            id: '2',
            code: 'PP.SUBMIT.VPCMANAGER',
            created: '2020-12-16T12:16:22.590Z',
            createdBy: 'LAZAROP',
            endDate: '2020-12-16T13:21:53.787Z',
            modified: '2020-12-16T13:21:53.787Z',
            modifiedBy: 'MFERNANDEZS',
            name: 'Submit to VPC Manager',
            order: '20',
            parentId: 'null',
            startDate: '2020-12-16T13:19:52.927Z',
            status: 'Completed',
            type: 'Manual',
          },
          {
            id: '3',
            code: 'PP.ERM.CIRCULATION.PERIOD',
            created: '2020-12-16T12:16:22.590Z',
            createdBy: 'LAZAROP',
            endDate: '',
            modified: '2020-12-16T13:22:06.600Z',
            modifiedBy: 'MFERNANDEZS',
            name: 'Circulation period',
            order: '40',
            parentId: 'null',
            startDate: '2020-12-16T13:22:06.600Z',
            status: 'InProgress',
            type: 'Automatic',
          },
          {
            id: '4',
            code: 'PP.APPROVE.MINUTES',
            created: '2020-12-16T12:16:22.590Z',
            createdBy: 'LAZAROP',
            endDate: '',
            modified: '2020-12-16T12:16:22.590Z',
            modifiedBy: 'LAZAROP',
            name: 'Approve Minutes',
            order: '100',
            parentId: '',
            startDate: '',
            status: 'NotStarted',
            type: 'Manual',
          },
        ],
      },
      {
        id: 24,
        name: 'Proposal for Operation Development',
        status: 'NotStarted',
        code: 'POD',
        steps: [
          {
            id: 5,
            code: 'POD.UPLOAD.PACKAGE',
            created: '2020-12-16T12:16:22.590Z',
            createdBy: 'LAZAROP',
            endDate: '',
            modified: '2020-12-16T12:16:22.590Z',
            modifiedBy: 'LAZAROP',
            name: 'Upload Package and Submit to Division Chief',
            order: '10',
            parentId: '',
            startDate: '',
            status: 'NotStarted',
            type: 'Manual',
          },
        ],
      },
    ],
  };
}
