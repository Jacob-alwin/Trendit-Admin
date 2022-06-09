import "../css/App.css";
import React,{useState} from 'react';

import Headings from '../components/Headings'

import AccountingTransaction from '../components/AccountingTransaction';

function Accounting() {
  const [head, setHead] = useState('Accounting')
  return (
  

                <div class="main-content py-3">
                     <Headings heading={head}/>
                    <AccountingTransaction/>
                </div>    
    
  )
}

export default Accounting