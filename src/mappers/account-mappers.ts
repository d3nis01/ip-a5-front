import { IAccount } from '../types/IServiceTypesObjects';

export const mapAccountResponseToAccount = (data: Partial<IAccount>): IAccount => {
  const account: IAccount = {
    id: typeof data?.id === 'string' ? data.id : '',
    password: typeof data?.password === 'string' ? data.password : '',
    username: typeof data?.username === 'string' ? data.username : '',
    email: typeof data?.email === 'string' ? data.email : '',
    matricol: typeof data?.matricol === 'string' ? data.matricol : '',
    createdOnUtc: typeof data?.createdOnUtc === 'string' ? data.createdOnUtc : '',
    lastUpdatedOnUtc: typeof data?.lastUpdatedOnUtc === 'string' ? data.lastUpdatedOnUtc : '',
  };
  return account;
};
