export interface IResponseItem {
    title: string;
    value: string;
  }
  
  export const createResponseItems = (uuid: string, statusCode: string): IResponseItem[] => [
    {
      title: 'UUID',
      value: uuid || 'None provided',
    },
    {
      title: 'Status code',
      value: statusCode || 'Unknown Status',
    },
  ];
  