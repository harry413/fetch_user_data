import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = () => (
  <>
    <div className="spinner-border text-black flex flex-col items-center justify-center py-18 mt-60" role="status">
    <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper "
            />
      <span className="text-gray-900">Fetching Data......</span>
    </div>
  </>
);

export default Loader;
