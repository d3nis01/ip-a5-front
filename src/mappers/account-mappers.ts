import { IAccount } from '../types/IServiceTypesObjects';

export const mapSambaResponseToSamba = (data: Partial<IAccount>): IAccount => {
  const account: IAccount = {
    id: typeof data?.id === 'string' ? data.id : '',
    username: typeof data?.username === 'string' ? data.username : '',
    email: typeof data?.email === 'string' ? data.email : '',
    matricol: typeof data?.matricol === 'string' ? data.matricol : '',
  };
  return account;
};
