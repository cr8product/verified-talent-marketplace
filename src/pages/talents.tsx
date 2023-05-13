import { useRouter } from 'next/router';
import SearchTalentButton from '../components/Form/SearchTalentButton';
import Loading from '../components/Loading';
import UserItem from '../components/UserItem';
import useUsers from '../hooks/useUsers';
import { QRCodeSVG } from "qrcode.react";


function Talents() {
  
  //Create a map to store the auth requests and their session IDs
  const requestMap = new Map();

  
  const PAGE_SIZE = 36;
  const router = useRouter();
  const query = router.query;
  const searchQuery = query.search as string;
  const deployedContractAddress = 0xecf178144ccec09417412d66e2ecc8a2841ee228;
  const { users, hasMoreData, loading, loadMore } = useUsers(
    searchQuery?.toLocaleLowerCase(),
    PAGE_SIZE,
  );
  const qrProofRequestJson = {
    "@context": [{
        "@version": 1.1,
        "@protected": true,
        "id": "@id",
        "type": "@type",
        "Lisbon1Age": {
            "@id": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/5788c821-469b-48d1-9bf8-bab5bbea8abd.json-ld#Lisbon1Age",
            "@context" : {
                "@version": 1.1,
                "@protected": true,
                "id": "@id",
                "type": "@type",
                "poly-vocab": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/5788c821-469b-48d1-9bf8-bab5bbea8abd.vocab.schema.json",
                "serialization": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/serialization.md#",
                "What is your age?": {
                    "@id": "poly-vocab:What is your age?",
                    "@type": "serialization:IndexDataSlotA"
                }
            }
        }
    }]
  };

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <p className='text-5xl font-medium tracking-wider mb-8'>
        Start to <span className='text-indigo-600'>Verify Yourself </span>
      </p>

      <div className='flex justify-center items-centers'>
        <QRCodeSVG level="Q" value={JSON.stringify(qrProofRequestJson)} />
      </div>

    </div>
  );
}

export default Talents;
