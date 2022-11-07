import { useAccount } from '@web3modal/react';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { getUserByAddress } from '../services/queries';
import { Account, User } from '../types';

const TalentLayerContext = createContext<{
  user?: User;
  account?: Account;
}>({
  user: undefined,
  account: undefined,
});

const TalentLayerProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const { account } = useAccount();

  useEffect(() => {
    const fetchData = async () => {
      if (account.address === '' || account?.isConnected !== true) {
        return;
      }

      try {
        const response = await getUserByAddress(account.address);
        if (response?.data?.data?.users[0] !== null) {
          setUser(response.data.data.users[0]);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [account.address, account.isConnected]);

  const value = useMemo(() => {
    return {
      user,
      account,
    };
  }, [account.address, user?.id]);

  return <TalentLayerContext.Provider value={value}>{children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;
