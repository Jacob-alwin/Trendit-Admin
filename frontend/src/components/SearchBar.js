import React,{useState,useEffect}  from 'react'

export default function SearchBar(props) {
  const [searchVal, setSearchVal] = useState('');
 const [agentName, setagentName] = useState(props.agentName)
  
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  }
  
  useEffect(() => {
  
    console.log(agentName);

  }, [agentName])
  
  const handleClearBtn = () => {
    setSearchVal('');
  }
  
  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchVal);
  });
  
  return (
    <div className='container'>
      <div className='input-wrap'>
        <i className="fas fa-search"></i>
        <label 
          for="product-search" 
          id="input-label"
        >
          Product Search
        </label>
        <input 
          onChange={handleInput}
          value={searchVal}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Assign Agent"
        />
        <i 
          onClick={handleClearBtn}
          className="fas fa-times"
        ></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((product) => {
            return <li key={product} className='list-item'  onClick={() => (props.setagentName(product)) } value={product} >{product}</li>
          })}
        </ul>
      </div>
    </div>
  );
}