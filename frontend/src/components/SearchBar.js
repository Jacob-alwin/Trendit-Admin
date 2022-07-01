        import axios from 'axios';
        import React,{useState,useEffect}  from 'react'
        
        export default function SearchBar(props) {
          const [searchVal, setSearchVal] = useState('');
         const [agentName, setagentName] = useState(props.agentName)
         const [searchVal1, setSearchVal1] = useState(''); 
          const handleInput = (e) => {
            setSearchVal(e.target.value);
          }
          
          useEffect(() => {
          
            console.log(agentName);
        
          }, [agentName])
          
          const putData = async() => {
            const id = props.Ads
            try{
            let response123 = await axios({
              url:'http://localhost:5000/api/agent/assign',
              data:{
                searchVal1,
                id
              },
              method:'POST'
              
            })
            var data12 = response123.data
            console.log(data12)
            }catch(err){
              console.log(err.response.data)
            }
          }
        
          const handleClearBtn = () => {
            setSearchVal('');
          }
          
          const filteredProducts = props.nameId.filter((product) => {
            return product.name.includes(searchVal);
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
                   
                    //product.id includes the id of the agent......
        
                    return <li key={product.id} className='list-item'  onClick={async() =>{ 
                      
                      (props.setagentName(product.name)) 
                      const id = props.Ads
                      try{
                        
                      let response123 = await axios({
                        url:`http://localhost:5000/api/agent/assign/${props.iD}/${product.id}/${product.name}`,
                       
                        method:'POST'
                        
                      })
                      var data12 = response123.data
                      console.log(data12)
                      }catch(err){
                        console.log(err.response.data)
                      }
                      
                    }} value={product.name} >{product.name}</li>
                  })}
                </ul>
              </div>
            </div>
          );
        }        
