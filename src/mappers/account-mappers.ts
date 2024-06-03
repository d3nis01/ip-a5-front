import { IAccount, IAccountEmailVariants } from '../types/IServiceTypesObjects';

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

export const mapAccountEmailVariantsResponseToAccountEmailVariants = (data: Partial<IAccountEmailVariants>): IAccountEmailVariants => {
  const accountEmailVariants: IAccountEmailVariants = {
    uidNumber: typeof data?.uidNumber === 'number' ? data.uidNumber : 0,
    firstName: typeof data?.firstName === 'string' ? data.firstName : '',
    lastName: typeof data?.lastName === 'string' ? data.lastName : '',
    mailVariant1: typeof data?.mailVariant1 === 'string' ? data.mailVariant1 : '',
    mailVariant2: typeof data?.mailVariant2 === 'string' ? data.mailVariant2 : '',
    mailVariant3: typeof data?.mailVariant3 === 'string' ? data.mailVariant3 : '',
  };
  return accountEmailVariants;
};
